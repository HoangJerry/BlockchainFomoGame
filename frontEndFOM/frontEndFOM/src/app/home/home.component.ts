import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Web3 from 'web3';
// const web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ab7a60fe027c44b58052a0ff672e9aad'));
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ab7a60fe027c44b58052a0ff672e9aad'));
import { LocalServiceService } from '../local-service.service';
import { HttpService } from '../http.service';
import { ContractService } from '../contract.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
var $ = require('jquery');
const web3 = new Web3(Web3.givenProvider);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account:any;
  accountSubscriber:any;
  user:any = {};
  register:any = {'username':'','ref':'0x8BD9aec4bbB22C7C6DCF32154c9290A8Ef95bd51'};
  isLogin:boolean=false;
  isLoginSubscriber:any;

  // Ticket
  nextRound:any;
  currentRound:any;
  winningMultiplier:any;
  isWaitingTime:boolean=false;
  isShowAtFirst:boolean=false;
  clock1:any;
  clock1_show:any;
  clock2:any;
  clock2_show:any;
  clockNextRound:any;
  clockNextRound_show:any;
  canDraw:boolean = false;
  totalEthRound:any;
  totalEthRoundSpend:any;
  totalEthPreviousRound:any;
  totalEthAllRound:any;
  ticketSum:any;
  ticketSumAllRound:any;

  masterKeyList:any = [];
  f1KeyList:any = [];
  lastBuy: any = {};

  keyBuy :any =1;
  buyTicketEvent:any;
  buyTicketNoti:any = [];
  ticketPrice:any;
  ticketPriceInterval:any;
  isBuying:boolean = false;


  resultViewIndex: any = [];
  ticketView:any;
  ticketHide:boolean = false;
  resultView:any;
	memberList:any = [];
	winnerTagList = ["Jackpot", "King of Key", "Master Key", "Ultimate Ref", "Grand Prize No. 1", "Grand Prize No. 2", "Grand Prize No. 3", "Grand Prize No. 4", "Grand Prize No. 5","Drawer No.1","Drawer No.2","Drawer No.3","Drawer No.4","Drawer No.5"];
	winnerPercent = [25,20,5,4,5,5,5,5,5,0.6,0.1,0.1,0.1,0.1]


  coverUSDT:any;
  ethWei:any = 10**18;

  dividendTab:any = {};
  burnTab:any = {};

  routeSub:any;
  questionOver:any;
  textAnimation:any;
  textAnimationList = [
    // "Buy Ticket now to receive up to 500% in your account",
    "Buy ticket immediately at Zero Round to receive up to 650% your balance",
    "Be the last buyer to become winner of our treasure",
    "Sharing the opportunity and earn smart money"
  ]
  navigationSubscription:any;
  constructor(private localService:LocalServiceService,
              private httpService:HttpService,
              private contractService:ContractService,
              private route: ActivatedRoute,
              private _route: Router,
              private toastr: ToastrService,
              private spinner:NgxSpinnerService) {
    this.navigationSubscription = this._route.events.subscribe((e: any) => {
     // If it is a NavigationEnd event re-initalise the component
     if (e instanceof NavigationEnd) {
      this.loadAll();
     }
    });

  	this.routeSub = this.route.params.subscribe(params => {
      console.log(params['ref'])
		  if(params['ref']!=undefined){
		   	if (isNaN(params['ref'][0])){
		   		this.contractService.citizenContract.methods.getAddressByUserName(params['ref']).call().then((data)=>{
		   			this.register.ref  = data;
            localStorage.setItem('ref',this.register.ref);
		   		}).then(()=>{
              if (this.register.ref=='0x0000000000000000000000000000000000000000'){
                this._route.navigate(['/']);
              }
           })
		   	} else {
		   		if (params['ref'].length==42&&isNaN(params['ref'][1])){
		   				this.register.ref = params['ref']
              localStorage.setItem('ref',this.register.ref);
		   		} else{
		   			if (!isNaN(params['ref'])){
			   			this.contractService.citizenContract.methods.getAddressById(params['ref']).call().then((data)=>{
				   			this.register.ref  = data;
                localStorage.setItem('ref',this.register.ref);
				   		}).then(()=>{
                if (this.register.ref=='0x0000000000000000000000000000000000000000'){
                    this._route.navigate(['/']);
                  }
                })
				   	}
		   		}
		   	}
		  }
      localStorage.setItem('ref',this.register.ref);
		});

    let temp = 0;
    setTimeout(()=>{
      setInterval (()=>{
        this.textAnimation=this.textAnimationList[temp];
        temp++;
        temp = temp % 3;
      },8500)
    },500)


    this.httpService.chatSocket.onmessage = (e) => {
        let data = JSON.parse(e.data);
        if (data.message==1){
          clearInterval(this.clock1);
          clearInterval(this.clock2);
          this.loadAll();
        }
        if (data.message==2){
          this.toastr.success('Some one has bought ticket','System');
        }
    };

  }

  loadAll = () => {
    if (this.isWaitingTime&&this.isShowAtFirst==false){
      $("#modalNextRound").modal('show');
      this.isShowAtFirst=true;
    }
    if (this.isLogin&&this.account){
      this.contractService.citizenContract.methods.citizen(this.account).call().then((d)=>{
        this.user.username = web3.utils.hexToUtf8(d.username._hex);
        this.user.id = d.id.toNumber();
        this.user.ref = d.ref;
        this.user.ticketRefIncome = this.toNumber(d.citizenTicketRevenue);
        this.user.gameRefIncome = this.toNumber(d.citizenGameEthRevenue);
        this.user.ethBackup = this.toNumber(d.citizenBalanceEthBackup);
        this.user.totalChild = d.totalChild.toNumber();
      });

      this.contractService.citizenContract.methods.getTotalEarlyIncome(this.account).call({from:this.account}).then((d)=>{
        this.user.totalEarlyIncome = this.toNumber(d);
      })

      this.contractService.citizenStorageContract.methods.citizenWinIncome(this.account).call().then((d)=>{
        this.user.citizenWinIncome = this.toNumber(d);
      })

      this.contractService.fomContract.methods.citizen(this.account).call().then((d)=>{
       	this.user.tokenDeposit = this.toTokenNumber(d.citizenBalanceToken);
        this.user.ethDeposit = this.toNumber(d.citizenBalanceEth);
      })

      this.contractService.citizenContract.methods.getTotalDividend(this.account).call({from:this.account}).then((d)=>{
        this.user.totalDividend = this.toNumber(d);
      })

      this.contractService.citizenContract.methods.getTotalEth().call({from:this.account}).then((d)=>{
        this.user.totalIncome = this.toNumber(d);
      })

      this.contractService.ticketContract.methods.getEarlyIncomeView(this.account, false)



      this.contractService.ticketContract.methods.currentRound().call().then(d=>{
      		this.currentRound = d.toNumber();
          this.nextRound = d.toNumber();
					if (this.isWaitingTime&&this.currentRound!=0){
	        	this.currentRound -=1;
	        }
        }).then(()=>{
          this.contractService.ticketContract.methods.round(this.currentRound).call().then(data=>{
            let startTime = data.startRound.toNumber()*1000;
            let now = new Date().getTime();
            if (startTime > now){
                this.clockNextRound = this.countdown(startTime, (isDone,show) => {
                  if (isDone){
                      clearInterval(this.clockNextRound);
                      location.reload();
                  }
                  this.clockNextRound_show = show;
                });
                this.isWaitingTime = true;
                if (this.currentRound!=0){
                  this.loadAll();
                }
            } else {        
              let endRound = data.endRound.toNumber()*1000;
              if (endRound > now){
                let date = new Date(data.endRoundByClock1.toNumber()*1000);
                if (data.endRoundByClock1.toNumber()*1000 > now){

                  let date = new Date(data.endRoundByClock1.toNumber()*1000);
                  this.clock1 = this.countdown(date, (isDone,show) => {
                      if (isDone){
                          clearInterval(this.clock1);
                          location.reload();
                      }
                      this.clock1_show = show;
                  });
                }
                if (data.endRoundByClock2.toNumber()==0){
                    this.clock2_show = "EXPIRED"
                } else {
                  if (data.endRoundByClock2.toNumber()*1000 > now){
                    date = new Date(data.endRoundByClock2.toNumber()*1000);
                    this.clock2 = this.countdown(date, (isDone,show) => {
                        if (isDone){
                            clearInterval(this.clock2);
                            location.reload();
                        }
                        this.clock2_show = show;
                    });
                  }
                } // End clock 2;
              }

              // can draw and claim
              if (endRound<now&&data.numberClaimed<5){
                this.canDraw = true;
              }
              // Price chest
              this.totalEthRound=this.toNumber(data.totalEth);
              this.totalEthRoundSpend = this.toNumber(data.totalEthRoundSpend);
              this.ticketSum = data.ticketSum.toNumber();

              this.contractService.ticketContract.methods.getEarlyIncomeMark(data.ticketSum.toNumber()).call().then((d)=>{
                this.winningMultiplier = d.toNumber();
              })

            }
          })
          let previousRound = this.currentRound-1;
          if (previousRound>=0) {
            this.contractService.ticketContract.methods.round(previousRound).call().then(data=>{
              this.totalEthPreviousRound=this.toNumber(data.totalEth);
            });
          } else {
            this.totalEthPreviousRound = 0;
          }


          this.contractService.ticketContract.methods.getMostSpender().call().then(data=>{
            this.masterKeyList = [];
            data.map((c,i)=>{
                this.masterKeyList[i] = {};
                this.masterKeyList[i]['address'] = c;

                this.contractService.ticketContract.methods.getCitizenTicketSpend(this.currentRound,c).call().then(d=>{
                  this.masterKeyList[i]['value'] = this.toNumber(d);

                })
                this.contractService.citizenContract.methods.citizen(c).call().then((d)=>{
                      this.masterKeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
                });

            });
          })

          this.contractService.ticketContract.methods.getMostF1Earnerd().call().then(data=>{
            this.f1KeyList = [];
            data.map((c,i)=>{
              this.f1KeyList[i] = {};
              this.f1KeyList[i]['address'] = c;

              this.contractService.ticketContract.methods.getRefF1Sum(this.currentRound,c).call().then(d=>{
                this.f1KeyList[i]['value'] = this.toNumber(d);

              })

              this.contractService.citizenContract.methods.citizen(c).call().then((d)=>{
                this.f1KeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
              });

            });
          })

          this.contractService.ticketContract.methods.getLastBuy(this.currentRound).call().then(data=>{
            this.lastBuy.address = data;
            this.contractService.ticketContract.methods.getCitizenTicketSpend(this.currentRound,data).call().then(d=>this.lastBuy.value=this.toNumber(d));
            this.contractService.citizenContract.methods.citizen(data).call().then(d=>this.lastBuy.username=web3.utils.hexToUtf8(d.username._hex));
          }) // end last buy

          if (this.account){
            this.contractService.ticketContract.methods.getCitizenTicketSpend(this.currentRound,this.account).call().then(d=>this.user.currentRoundTicketSpend=this.toNumber(d));
            this.contractService.ticketContract.methods.getCititzenTicketSum(this.currentRound).call({from:this.account}).then(d=>this.user.currentRoundTicketSum=d.toNumber());
          }
      })//end current round
			// Level i {1,2,3}
      // Team
      for(let i = 0;i<3;i++){
        this.memberList[i]={};
        this.contractService.citizenContract.methods.getMemberByLevelToTal(i+1).call({from:this.account}).then((d)=>{
          this.memberList[i].memberDetail = [];
          this.memberList[i].page = 1;
          this.memberList[i].totalMember = d[0].toNumber();
          this.memberList[i].totalPaytout = this.toNumber(d[1]);
          for(let j=0; j<=this.memberList[i].totalMember-1; j++){
            this.memberList[i].memberDetail[j] = {};
            this.contractService.citizenContract.methods.getMemberByLevel(i+1,this.account,j).call().then((x)=>{
              this.memberList[i].memberDetail[j].address = x;
              this.contractService.citizenContract.methods.getUsername(x).call().then((d)=>{
                this.memberList[i].memberDetail[j].username = web3.utils.hexToUtf8(d._hex);
              })
              this.contractService.citizenContract.methods.citizenPayForRef(x,this.account).call().then(c=>{
                this.memberList[i].memberDetail[j].payFor=this.toNumber(c);
              })
              this.contractService.citizenContract.methods.getTotalSpend(x).call().then(c=>{
                this.memberList[i].memberDetail[j].totalSpend = this.toNumber(c);
              })
            })
          }
        })
      }

      // for(let i = 0;i<3;i++){
      //   this.memberList[i]={};
      //   this.memberList[i].memberDetail = [];
      //   this.memberList[i].page = 1;
      //   this.memberList[i].totalMember = Math.floor(Math.random()*100);
      //   this.memberList[i].totalPaytout = Math.random();
      //     for(let j=0; j<=this.memberList[i].totalMember-1; j++){
      //       this.memberList[i].memberDetail[j] = {};
      //       this.memberList[i].memberDetail[j].address = Math.random();
      //       this.memberList[i].memberDetail[j].username = Math.random();
      //       this.memberList[i].memberDetail[j].payFor=Math.random();
      //       this.memberList[i].memberDetail[j].totalSpend = Math.random();
      //     }
      // }



    } else {
      this.contractService.ticketContract.methods.currentRound().call().then(d=>{
        this.currentRound = d.toNumber();
        this.nextRound = d.toNumber();
				if (this.isWaitingTime&&this.currentRound!=0){
        	this.currentRound -=1;
        }
      }).then(()=>{
          this.contractService.ticketContract.methods.round(this.currentRound).call().then(data=>{
            let startTime = data.startRound.toNumber()*1000;
            let now = new Date().getTime();
            if (startTime > now && this.isWaitingTime==false){
                this.clockNextRound = this.countdown(startTime, (isDone,show) => {
                  if (isDone){
                      clearInterval(this.clockNextRound);
                      location.reload();
                  }
                  this.clockNextRound_show = show;
                });
                this.isWaitingTime = true;
                if (this.currentRound!=0){
                  this.loadAll();
                }
            } else {
              let endRound = data.endRound.toNumber()*1000;
              if (endRound > now){
                let date = new Date(data.endRoundByClock1.toNumber()*1000);
                if (data.endRoundByClock1.toNumber()*1000 > now){
                  this.clock1 = this.countdown(date, (isDone,show) => {
                      if (isDone){
                          clearInterval(this.clock1);
                          location.reload();
                      }
                      this.clock1_show = show;
                  });
                }

                if (data.endRoundByClock2.toNumber()==0){
                    this.clock2_show = "EXPIRED"
                } else {
                    if (data.endRoundByClock2.toNumber()*1000 > now){
                      date = new Date(data.endRoundByClock2.toNumber()*1000);
                      this.clock2 = this.countdown(date, (isDone,show) => {
                          if (isDone){
                              clearInterval(this.clock2);
                              location.reload();
                          }
                          this.clock2_show = show;
                      });
                    }
                } // End clock 2;
              }
              // can draw and claim
              
              // Price chest
              this.totalEthRound=this.toNumber(data.totalEth);
              this.totalEthRoundSpend = this.toNumber(data.totalEthRoundSpend);
              this.ticketSum = data.ticketSum.toNumber();

              this.contractService.ticketContract.methods.getEarlyIncomeMark(data.ticketSum.toNumber()).call().then((d)=>{
                this.winningMultiplier = d.toNumber();
              })
            }
          })
          let previousRound = this.currentRound-1;
          if (previousRound>=0) {
            this.contractService.ticketContract.methods.round(previousRound).call().then(data=>{
              this.totalEthPreviousRound=this.toNumber(data.totalEth);
            });
          } else {
            this.totalEthPreviousRound = 0;
          }

          this.contractService.ticketContract.methods.getMostSpender().call().then(data=>{
            this.masterKeyList = [];
            data.map((c,i)=>{
              this.masterKeyList[i] = {};
              this.masterKeyList[i]['address'] = c;
              this.contractService.ticketContract.methods.getCitizenTicketSpend(this.currentRound,c).call().then(d=>{
                this.masterKeyList[i]['value'] = this.toNumber(d);
              })
              this.contractService.citizenContract.methods.citizen(c).call().then((d)=>{
                    this.masterKeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
              });
          });
        })

        this.contractService.ticketContract.methods.getMostF1Earnerd().call().then(data=>{
          this.f1KeyList = [];
          data.map((c,i)=>{
            this.f1KeyList[i] = {};
            this.f1KeyList[i]['address'] = c;

            this.contractService.ticketContract.methods.getRefF1Sum(this.currentRound,c).call().then(d=>{
              this.f1KeyList[i]['value'] = this.toNumber(d);

            })

            this.contractService.citizenContract.methods.citizen(c).call().then((d)=>{
              this.f1KeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
            });

          });
        })

        this.contractService.ticketContract.methods.getLastBuy(this.currentRound).call().then(data=>{
          this.lastBuy.address = data;
          this.contractService.ticketContract.methods.getCitizenTicketSpend(this.currentRound,data).call().then(d=>this.lastBuy.value=this.toNumber(d));
          this.contractService.citizenContract.methods.citizen(data).call().then(d=>this.lastBuy.username=web3.utils.hexToUtf8(d.username._hex));
        }) // end last buy

        if (this.account){
          this.contractService.ticketContract.methods.getCitizenTicketSpend(this.currentRound,this.account).call().then(d=>this.user.currentRoundTicketSpend=this.toNumber(d));
          this.contractService.ticketContract.methods.getCititzenTicketSum(this.currentRound).call({from:this.account}).then(d=>this.user.currentRoundTicketSum=d.toNumber());
        }
      })//end current round
    }

    this.ticketPriceInterval = setInterval(()=>{
      this.contractService.ticketContract.methods.getTicketPrice().call().then(d=>{
        if (d==null) {clearInterval(this.ticketPriceInterval)}
        else {
          this.ticketPrice = d.toNumber();
        }
      })
    },1000)

    this.contractService.ticketContract.methods.totalEthSpendTicket().call().then(d=>{
      this.totalEthAllRound = this.toNumber(d);
    })

    this.contractService.ticketContract.methods.ticketSum().call().then(d=>{
      if (d!=null){
        this.ticketSumAllRound = d.toNumber();
      }
    })
  }
  ngAfterViewInit() {
      require('../../assets/styles/bootstrap.min.js');
      setTimeout(()=>{
        if (this.register.ref!='0x8BD9aec4bbB22C7C6DCF32154c9290A8Ef95bd51'&&(this.isLogin==false||this.isLogin==undefined)){
          $("#MyRegister").modal({
            backdrop : "static",
            keyboard: false
          });
        }
      },4000)
	}

  uppercaseUsername = () => {
    this.register.username = this.register.username.toUpperCase();
  }

  onClickViewTicket = () =>{
    if (this.isLogin&&this.currentRound!=undefined){
      this.ticketHide = false;
      this.ticketView = [];
      let last_round = this.currentRound - 1;
      if (last_round<0) last_round = 0;

      for (let i = this.currentRound; i>=last_round;i--){
        let round:any = {};
        round.round_id = i;
        this.contractService.ticketContract.methods.getCitizenSumSlot(i).call({from:this.account}).then(slotLength=>{
          round.ticket = [];
          for(let j = 0; j<slotLength;j++){
            this.contractService.ticketContract.methods.getCitizenSlotId(i,j).call({from:this.account}).then(slotId=>{
              this.contractService.ticketContract.methods.getCitizenSlot(i,slotId).call().then(slot=>{
                let temp:any = {}
                temp.address = slot[0];
                temp.from = slot[1].toNumber();
                temp.to = slot[2].toNumber()
                round.ticket[j]=temp;
              })
            })
          }
          this.ticketView.push(round);

        })
      }
    }
  }

  onClickHideTicket(){
    this.ticketHide = true;
  }

  // Results
  onClickShowResult = () =>{
  	this.resultView = [];
      let last_round = this.currentRound - 1;
      if (last_round<0) last_round = 0;
      let main_index=0
      for (let i = this.currentRound; i>=last_round;i--){
      	let round:any = {};
        round.round_id = i;
      	this.contractService.ticketContract.methods.getResultWinner(i).call().then((data)=>{
      		round.winnerInfo = [];
          if (data!=null){
            data.map((s,index)=>{
              this.contractService.citizenContract.methods.getUsername(s).call().then((d)=>{
                let temp:any = {};
                temp.address = s;
                temp.username = web3.utils.hexToUtf8(d._hex);
                if (index<3) round.winnerInfo[index+1]=temp;
                if (index==3) round.winnerInfo[0]=temp;
                if (index>3) round.winnerInfo[index]=temp;
              })
            })
          }
          this.contractService.ticketContract.methods.round(i).call().then((d)=>{
            round.totalEth = this.toNumber(d.totalEth);
            this.resultViewIndex[main_index] = false;
            this.resultView[main_index]= round;
            main_index++;
          })
      	})
      }
  }

  onClickShowHideRound(val){
    if (this.resultViewIndex[val]) {
      this.resultViewIndex[val] = false;
    } else {
      this.resultViewIndex[val] = true;
    }

  }

  onClickDrawNow = () => {
    console.warn("drawing...");
    this.isBuying = true;
    //this.spinner.show();
    this.contractService.ticketContract.methods.drawWinner().send({from: this.account})
    .once('transactionHash', (hash)=>{
      if (this.isBuying == true){
        //this.spinner.hide();
        this.httpService.chatSocket.send(JSON.stringify({
          'message': 1
        }));
      }
    })
    .on('confirmation', (confNumber, receipt)=>{
      if (this.isBuying == true){
        this.isBuying=false;
        //this.spinner.hide();
        this.httpService.chatSocket.send(JSON.stringify({
          'message': 1
        }));
      }
    })
    .on('error', function(error){
      //this.spinner.hide();
      console.log('error',error)})
    .then(function(receipt){
    });
  }

  onClickClaim = () => {
    console.warn("claiming...");
    this.isBuying = true;
    this.contractService.ticketContract.methods.claim().send({from: this.account})
    .once('transactionHash', (hash)=>{
      if (this.isBuying == true){
        this.httpService.chatSocket.send(JSON.stringify({
          'message': 1
        }));
      }
    })
    .on('confirmation', (confNumber, receipt)=>{
      if (this.isBuying == true){
        this.isBuying=false;
        this.httpService.chatSocket.send(JSON.stringify({
          'message': 1
        }));
      }
    })
    .on('error', function(error){console.log('error',error)})
    .then(function(receipt){
    });
  }

  onClickScrollBuyTicket = () =>{
    $('body,html').animate({ scrollTop: $('#resultModal').offset().top }, 1000);
    return false;
  }

  onClickBuyTicket = () =>{
      this.isBuying = true;
      this.contractService.ticketContract.methods.buyTicket(this.keyBuy).send({from: this.account, value:this.keyBuy*this.ticketPrice}).once('transactionHash', (hash)=>{
        // console.log('transactionHash',hash);
      })
      .once('receipt', function(receipt){
        console.log('receipt',receipt)})
      .on('confirmation', (confNumber, receipt)=>{
        if (this.isBuying == true){
          this.isBuying=false;
        }
      })
      .on('error', (error)=>{
        if (JSON.stringify(error).indexOf("32603")>0){
                  this.toastr.error("Successfully cancel transaction",'Smart contract');
                  this.isBuying=false;
        }
      })
      .then(function(receipt){
      });
  }

  onClickWithdraw = () => {
  	this.isBuying = true;
  	this.contractService.citizenContract.methods.withdrawEth().send({from: this.account})
  	.on('confirmation', (confNumber, receipt)=>{
        if (this.isBuying == true){
          this.isBuying=false;
          this.httpService.chatSocket.send(JSON.stringify({
            'message': 1
          }));
        }
      })
  	.on('error', function(error){console.log('error',error)})
      .then(function(receipt){
    });
  }

  onClickCopy = (val) => {
    let selBox:any = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();

    var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

    if (isiOSDevice) {
      
      var editable = selBox.contentEditable;
      var readOnly = selBox.readOnly;

      selBox.contentEditable = true;
      selBox.readOnly = false;

      var range = document.createRange();
      range.selectNodeContents(selBox);

      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      selBox.setSelectionRange(0, 999999);
      selBox.contentEditable = editable;
      selBox.readOnly = readOnly;

    } else {
      selBox.select();
    }

    document.execCommand('copy');
    document.body.removeChild(selBox)
    this.toastr.success('Copy link to clipboard','System');
  }

  validateKeyBuy = (event) => {
    let regular = /^[0-9]*$/;
    if (!regular.test(event.target.value[0])){
      this.keyBuy=0;
    }
  }

  onAddMoreKey = (val) => {
    this.keyBuy+=val;
  }

  ngOnInit() {
    this.isLoginSubscriber = this.localService.currentLogin.subscribe((data)=>{
        this.isLogin=data;
        this.loadAll()
    })

    this.accountSubscriber = this.localService.currentAccount.subscribe((data)=>{
        this.account=data;
        this.loadAll()
    })

    this.httpService.convertRate().subscribe((data)=>{
          this.coverUSDT = data[0].price_usd;
    })
    setInterval(()=>{
      this.httpService.convertRate().subscribe((data)=>{
          this.coverUSDT = data[0].price_usd;
      })
    },60000)
    $(window).on('click.Bst',(event)=>{
      if ($('.questionIcon-part1').has(event.target).length == 0 && !$('.questionIcon-part1').is(event.target)&&
          $('.questionIcon').has(event.target).length == 0 && !$('.questionIcon').is(event.target)&&
          $('.Round-bot-questionIcon').has(event.target).length == 0 && !$('.Round-bot-questionIcon').is(event.target)){
        this.questionOver='';
      }
    })
    let now = Date.now();
    this.buyTicketEvent = this.contractService.ticketContract.events.BuyATicket({
                              fromBlock: 0
                            },(error, event) => {
                              if (event!=null){
                                let history:any = {};
                                history.txhash = event.transactionHash;
                                if (this.buyTicketNoti.filter(s=>s.txhash==event.transactionHash).length==0){
                                  let eventDate = event.returnValues.creationDate.toNumber()*1000;
                                  if (eventDate>now){
                                    this.contractService.citizenContract.methods.getUsername(event.returnValues.buyer).call().then(d=>{
                                      this.toastr.success(web3.utils.hexToUtf8(d._hex)+' bought '+event.returnValues.ticketFrom.toNumber()+'-'+event.returnValues.ticketTo.toNumber(),'System');
                                      this.loadAll();
                                    })
                                    this.buyTicketNoti.push(history);
                                  }
                                }
                              }
                            })
  }
  ngOnDestroy(){
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }
  // utils
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

  onMouseOver = (data) =>{
    this.questionOver = data;
  }
}
