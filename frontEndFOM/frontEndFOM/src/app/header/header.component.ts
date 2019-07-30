import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import { LocalServiceService } from '../local-service.service';
import { ContractService } from '../contract.service';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { getBodyNode } from '@angular/animations/browser/src/render/shared';
var $ = require('jquery');

const web3 = new Web3(Web3.givenProvider);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  register:any = {'username':'','ref':'0x8BD9aec4bbB22C7C6DCF32154c9290A8Ef95bd51'};
  account:any;
  username:string;
  isLogin:boolean=false;
  isShowing:boolean=false;
  user:any = {};
  burnEvent:any;
  DAAContract:any;
  routeSub:any;

  showNav:any;


  dividendTab:any = {};
  burnTab:any = {};
  burnPage:any = 1;
  isBuying:boolean=false;
  constructor(private localService:LocalServiceService,
              private contractService:ContractService,
              private httpService:HttpService,
              private route: ActivatedRoute,
              private _route: Router,
              private toastr: ToastrService) {
        this.DAAContract = this.contractService.fomAddress;
        this.contractService.network.subscribe((network)=>{

          web3.eth.getAccounts().then(
            (data)=>{
              // Login
              if (data.length!=0&&network==1){
                this.account = data[0];
                this.localService.changeAccount(data[0]);
                  this.contractService.citizenContract.methods.isCitizen(data[0]).call().then((result)=>{
                    if (result){
                      this.isLogin=true;
                      this.localService.changeLoginStatus(this.isLogin);
                      this.contractService.citizenContract.methods.citizen(this.account).call().then((d)=>{
                        this.username = web3.utils.hexToUtf8(d.username._hex);
                      });

                      this.contractService.fomContract.methods.citizen(this.account).call().then((d)=>{
                        this.user.tokenDeposit = this.toTokenNumber(d.citizenBalanceToken);
                        this.user.ethDeposit = this.toNumber(d.citizenBalanceEth);
                      })

                      this.contractService.fomContract.methods.getCitizenFreezing(this.account).call().then((d)=>{
                        this.user.tokenFreezing = this.toTokenNumber(d);
                      })

                      this.contractService.fomContract.methods.getBalanceOf(this.account).call().then((d)=>{
                        this.user.tokenBalance = this.toTokenNumber(d);
                        this.user.tokenDepositPending = this.user.tokenBalance;
                        this.user.tokenFreeze = this.user.tokenBalance;
                      })
                  } else {
                    this.isLogin=false;
                    this.localService.changeLoginStatus(this.isLogin);
                  }
              });
          } else {
            this.isLogin=false;
            this.localService.changeLoginStatus(this.isLogin);
            console.warn("not login");
          }
          });
        })


        this.httpService.chatSocket.onmessage = (e) => {
            let data = JSON.parse(e.data);
            if (data.message==3){
              this.loadDividendTab();
            }
        };
  }

  onClickHelp = () => {
    setTimeout(()=>{
      $(".modal-backdrop.fade.show").remove();
      $(".modal-backdrop.fade.show").css('position','relative');
    },10)
  }

  onClickShowing = (value) =>{
    function handleTouchMove(e) {
      e.preventDefault();
    }
    if (this.showNav == value){
      this.showNav = null
    } else {
      this.showNav = value;
    }
    if($( window ).width()<991){

      if (this.showNav==null){
        $("body").css("overflow","auto");
        $("html").css("overflow","auto");
      } else {
        $("body").css("overflow","hidden");
        $("body").css("position","relative");
        $("html").css("overflow","hidden");
        $("body").css("height","100%");
        $("body").css("-webkit-overflow-scrolling","auto");
      }
    }
  }

  loadDividendTab = () => {
    console.log("loading/.");

    this.contractService.fomContract.methods.currentLevel().call().then(d=>{
      this.dividendTab.currentLevel = d+1;
      this.contractService.fomContract.methods.ETH_WIN(d).call().then(c=>{
        this.dividendTab.currentLevelWin = this.toNumber(c);
      })
      this.contractService.fomContract.methods.ETH_LOSE(d).call().then(c=>{
        this.dividendTab.currentLevelLose = this.toNumber(c);
      })
    })

    this.contractService.fomContract.methods.currentRound().call().then(d=>{
      this.dividendTab.currentRound = d;
      let nextLevel;
      let nextRound = d;
      if (this.dividendTab.currentRound<9){
        if (this.dividendTab.currentLevel+1<11){
          nextLevel = this.dividendTab.currentLevel+1;
        }
        else{
          nextLevel = 1;
          nextRound = nextRound+1;
        }
      } else {
        if (this.dividendTab.currentRound == 9 && this.dividendTab.currentLevel+1<11){
          nextLevel = this.dividendTab.currentLevel+1;
        }
      }
      this.dividendTab.nextLevel = nextLevel;
      this.dividendTab.nextRound = nextRound;
      if (nextLevel!=0){
        this.contractService.fomContract.methods.ETH_WIN(nextLevel-1).call().then(c=>{
          this.dividendTab.nextLevelWin = this.toNumber(c);
        })
        this.contractService.fomContract.methods.ETH_LOSE(nextLevel-1).call().then(c=>{
          this.dividendTab.nextLevelLose = this.toNumber(c);
        })
      }
      setTimeout(()=>{
        this.contractService.fomContract.methods.totalSupplyByLevel(this.dividendTab.currentRound,this.dividendTab.currentLevel-1).call().then((d)=>{
          this.dividendTab.totalSupplyByLevel = this.toTokenNumber(d);
        })
      },500)

    })

    this.contractService.fomContract.methods.HARD_TOTAL_SUPPLY_BY_LEVEL().call().then(d=>{
        this.dividendTab.HARD_TOTAL_SUPPLY_BY_LEVEL = this.toTokenNumber(d);
    })

    this.contractService.fomContract.methods.totalSupplyBurned().call().then(d=>{
      this.burnTab.totalTokenBurned = this.toTokenNumber(d);
    })

    this.contractService.fomContract.methods.currentRoundDividend().call().then(d=>{
      this.dividendTab.currentRoundDividend = d.toNumber();
      this.contractService.fomContract.methods.dividendRound(this.dividendTab.currentRoundDividend).call().then(c=>{

        this.burnTab.totalToken = this.toTokenNumber(c.totalToken-c.totalTokenCredit);
        this.dividendTab.currentRoundDividendEth = this.toNumber(c.totalEth-c.totalEthCredit);
        if (this.dividendTab.currentRoundDividendEth>0){
          this.dividendTab.currentRoundDividendEthForCitizen=this.dividendTab.currentRoundDividendEth*0.7;
        }
        this.dividendTab.totalFrozenBalance = this.toTokenNumber(c.totalFrozenBalance);
      })

      // let last_round = this.dividendTab.currentRoundDividend - 5;
      // if (last_round<1) last_round = 1;
      // if (last_round<=this.dividendTab.currentRoundDividend){
      //   this.burnTab.history = [];
      //   for (let i = last_round; i<this.dividendTab.currentRoundDividend;i++){
      //     this.contractService.fomContract.methods.dividendRound(i).call().then((c)=>{
      //       let temp:any = {}
      //       temp.date = new Date(c.endRoundTime.toNumber()*1000);
      //       temp.tokenBurn = this.toTokenNumber(c.totalToken-c.totalTokenCredit);
      //       // call server to get hash
      //       // this.burnTab.history[i].hash = this.toTokenNumber(d.totalToken-d.totalTokenCredit);
      //       this.burnTab.history[i]=temp;
      //     })
      //   }
      // }
    })

    this.contractService.fomContract.methods.clockDevidend().call().then(d=>{
        let date = new Date(d.toNumber()*1000);
        this.dividendTab.endRoundTime = this.countdown(date, (isDone,show) => {
            if (isDone){
                clearInterval(this.dividendTab.endRoundTime);
            }
            this.dividendTab.endRoundTimeShow = show;
        });
    })

  }

  ngOnInit() {
    require('../../assets/styles/bootstrap.min.js');
    this.burnTab.history = [];
    this.burnEvent = this.contractService.fomContract.events.Burn({
                              fromBlock: 0
                            },(error, event) => {
                     // console.log(event);
             if (event!=null){
               let historyTemp:any = {}
               historyTemp.from = event.returnValues.from;
               historyTemp.date = new Date( event.returnValues.creationDate.toNumber()*1000);
               historyTemp.value = this.toTokenNumber(event.returnValues.value);
               historyTemp.txhash = event.transactionHash;
               this.burnTab.history.unshift(historyTemp);
             }
    });
  }

  activeRoute(routename: string): boolean{
        if (routename=="/"){
          return this._route.url.indexOf(routename) > -1 && this._route.url.length == 1;
        }
        return this._route.url.indexOf(routename) > -1;
  }

  onClickCommingSoon = () =>{
    if (this.isShowing == false){
      this.isShowing = true;
      this.toastr.info('Coming soon','',{
        timeOut: 1000,
        toastClass: 'commingsoon',
        positionClass: 'toast-top-center',
      })
      setTimeout(()=>{this.isShowing=false},1000);
    }
  }

  onClickWithdrawToken = () =>{
    if (this.user.tokenDeposit>0){
      this.isBuying=true;
      let tokenDeposit = parseInt((this.user.tokenDeposit*10**10).toString());
      this.contractService.fomContract.methods.citizenWithdrawDeposit(tokenDeposit).send({from: this.account})
      .on('confirmation', (confNumber, receipt)=>{
        if (this.isBuying == true){
          this.isBuying=false;
          this.httpService.chatSocket.send(JSON.stringify({
            'message': 3
          }));
        }
      })
      .on('error', function(error){console.log('error',error)})
      .then(function(receipt){
      });
    }
  }

  onClickDepositToken = () =>{
    if (this.user.tokenDepositPending>0 && this.user.tokenBalance>=this.user.tokenDepositPending){
      this.isBuying=true;
      let tokenDeposit = parseInt((this.user.tokenDepositPending*10**10).toString());
      this.contractService.fomContract.methods.citizenDeposit(tokenDeposit).send({from: this.account})
      .on('confirmation', (confNumber, receipt)=>{
        if (this.isBuying == true){
          this.isBuying=false;
          this.httpService.chatSocket.send(JSON.stringify({
            'message': 3
          }));
        }
      })
      .on('error', (error)=>{this.toastr.error('Please! Use positive integers','Smart contract')})
      .then(function(receipt){
      });
    } else {
      if (this.user.tokenBalance<this.user.tokenDepositPending){
        this.toastr.warning("insufficient balance");
      }
      if (isNaN(this.user.tokenDepositPending)){
        this.toastr.warning("Please! Use positive integers");
      }
    }
  }

  onClickFreezeToken = () => {
    if (this.user.tokenFreeze+this.user.tokenFreezing>10){
      this.isBuying=true;
      let freeingToken = parseInt((this.user.tokenFreeze*10**10).toString());
      this.contractService.fomContract.methods.citizenFreeze(freeingToken).send({from: this.account})
      .on('confirmation', (confNumber, receipt)=>{
        if (this.isBuying == true){
          this.isBuying=false;
          this.httpService.chatSocket.send(JSON.stringify({
            'message': 3
          }));
        }
      })
      .on('error', function(error){console.log('error',error)})
      .then(function(receipt){
        this.toastr.error('Please! Use positive integers','Smart contract');
      });
    } else {
      this.toastr.error('Freezed token must be more than 10 FOM','System');
    }

  }

  onClickUnfreezeToken = () => {
    this.isBuying=true;
    this.contractService.fomContract.methods.citizenUnfreeze().send({from: this.account})
    .on('confirmation', (confNumber, receipt)=>{
      if (this.isBuying == true){
        this.isBuying=false;
        this.httpService.chatSocket.send(JSON.stringify({
          'message': 3
        }));
      }
    })
    .on('error', function(error){console.log('error',error)})
    .then(function(receipt){
    });
  }


  uppercaseUsername = () => {
    this.register.username = this.register.username.toUpperCase();
  }

  onClickRegister = () => {
    this.isBuying=true;
    $("#MyRegister").modal('hide')
    let ref = localStorage.getItem('ref');
    localStorage.removeItem('ref');
    if (ref==null) {ref= this.register.ref}
    console.log(ref);
    this.contractService.citizenContract.methods.register(this.register.username.toUpperCase(),ref).send({from: this.account})
    .on('confirmation', (confNumber, receipt)=>{
      if (this.isBuying == true){
        this.isBuying=false;
        this.httpService.chatSocket.send(JSON.stringify({
          'message': 1
        }));
        // this._route.navigate(['/']);
        window.location.reload()
      }
    })
    .on('error', function(error){console.log('error',error)})
    .then(function(receipt){
    });
  }

  onClickRandomName = () =>{
    this.httpService.randomName().subscribe((data:any)=>{
      this.register.username = data.results[0].name.first+data.results[0].name.last;
    })
  }

  countdown = (countDownDate, done) =>{
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    return  setInterval(() => {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((   distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      // Display the result in the element with id="demo"
      let y = hours + ":"+ minutes + ":" + seconds;
      if (days>0){
        if (days == 1){
          y = days+" Day "+y
        } else {
          y = days+" Days "+y
        }

      }
      // If the count down is finished, write some text
      if (distance < 0) {
        y= "EXPIRED";
        done(true,y);
      }
      else{
        done(false,y);
      }
    }, 1000);
  }

  toNumber = (val) =>{
    // div 10^18
    return val/0xDE0B6B3A7640000;
  }

  toTokenNumber = (val) =>{
    // div 10^10
    return val/0x2540BE400;
  }

}
