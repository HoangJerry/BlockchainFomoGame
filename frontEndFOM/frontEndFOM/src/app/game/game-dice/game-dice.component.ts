import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContractService } from '../../contract.service';
import { LocalServiceService } from '../../local-service.service'
import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import Web3 from 'web3';
const web3:any = new Web3(Web3.givenProvider);
var $ = require('jquery');

@Component({
  selector: 'app-game-dice',
  templateUrl: './game-dice.component.html',
  styleUrls: ['./game-dice.component.css']
})
export class GameDiceComponent implements OnInit {
	prediction:any = 50;
	selected:any=0;
	selectedToken:any=0;
	under:boolean=true;
	currentLuckyNumber:any=0;
	luckyNumber:any=3;
	luckyNumberTemp:any=3;
	limmit:any = [{'name':'under','min':1,'max':95},{'name':'over','min':4,'max':98}]
	tokenLimmit = [{'name':'ETH','min':0.006,'max':10},{'name':'DAA','min':1,'max':10}]
	isBuying:boolean=false;
	chance:any=50;
	sumAmount:any;
	extraAmount:any = 0;
	runAnimation:boolean=false;
	runAnimationPending:boolean=false;
	intervalResult:any;
	timeResult:any;

	totalPayout:any=0;
	totalPayoutBase:any=0;
	topRank:any = [];

	newHistoryEvent:any;
	gameHistory:any=[];
	myHistory:any=[];
	highRollerHistory:any=[];
	rareWinsHistory:any=[];
	gameHistorylen:number=0;
	gameHistorylenBase:any=0;


	currentBlock:any;
	account:any;
	balance:any = [];
	user:any = {};
	accountSubscriber:any;
	countUpOptions:any={
		decimalPlaces: 3,
	}
  constructor(private contractService:ContractService,
  						private localService:LocalServiceService,
  						private httpService:HttpService,
  						private toastr: ToastrService,
  						private ref: ChangeDetectorRef,) {
  	this.contractService.diceContract.methods.MIN.call().then(d=>{this.tokenLimmit[0].min = this.toNumber(d);this.sumAmount = this.tokenLimmit[0].min;})
  	this.contractService.diceContract.methods.MAX.call().then(d=>{this.tokenLimmit[0].max = this.toNumber(d);})
  	this.contractService.diceContract.methods.MIN_TOKEN.call().then(d=>{this.tokenLimmit[1].min = this.toTokenNumber(d);})
  	this.contractService.diceContract.methods.MAX_TOKEN.call().then(d=>{this.tokenLimmit[1].max = this.toTokenNumber(d);})
  }

  ngAfterViewInit() {
  	require("../../../assets/styles/rangeslider.js");
  	require("../../../assets/styles/lightbutton.js");

		/** * Initialize the elements */ 
		let inputranger:any = $("#input-ranger");
		inputranger.rangeslider({ 
			polyfill: false,

			onInit: () => {
				this.valueOutput($("#input-ranger").val()); 
			},

			// Callback function
			onSlide: (position, value) =>{
				this.onChangeRanger(value); 
			},

			// Callback function
			onSlideEnd: (position, value) =>{
				this.onChangeRanger(value); 
			}
		}); 
	}

	valueOutput = (value)=>{ 
		// $("#js-output").html(rangeValue); 
		$(".rangeslider__handle").html("<span style='display: block; padding: 5px; font-weight: bold; font-size: 20px; text-align: center;'>"+value+"</span>"+
			"<div style='position:absolute; padding:35px; top:-15px; left:-15px'></div>");
		// $(".rangeslider__fill").css('width',rangeValue-3+'%');
		// $(".rangeslider__handle").css('left',rangeValue-8+'%')
		var rangeWidth = $(".rangeslider").width();
		if(this.under == true){
			if(value >= 95)
			{
				$(".rangeslider__fill").css({"width":0.92*rangeWidth});
				$(".rangeslider__handle").css({"left":0.92*rangeWidth-20});
			}
		}
		else
		{
			if(value >= 98)
			{
				$(".rangeslider__fill").css({"width":0.94*rangeWidth});
				$(".rangeslider__handle").css({"left":0.94*rangeWidth-20});
			}
			if(value <= 4)
			{
				$(".rangeslider__fill").css({"width":0.08*rangeWidth});
				$(".rangeslider__handle").css({"left":0.08*rangeWidth-20});
			}
		}
	}

	onClickRoll = () => {
		if (isNaN(this.sumAmount)||
			this.sumAmount>this.balance[this.selectedToken]||
			this.sumAmount>this.tokenLimmit[this.selectedToken].max||
			this.sumAmount<this.tokenLimmit[this.selectedToken].min
			){
				this.toastr.error('Invalid Number', 'System');
				this.sumAmount = this.tokenLimmit[this.selectedToken].min
		} else {
			if (this.isBuying==true){
				this.toastr.error('Check Metamask transaction', 'System');
			} else {
				this.isBuying=true;
				// Run animation
				this.runAnimationPending = true;
				// Set amount and method
				// localStorage.setItem("lastDice", Date.now().toString());

				let amount;
				try{
					if (this.selectedToken==0){
						amount = web3.utils.numberToHex(this.sumAmount*10**18);
						this.contractService.diceContract.methods.betByEth(this.under, this.prediction).send({from:this.account, value:amount})
							.on('transactionHash', (hash) => {
								localStorage.setItem("lastDiceHash", hash);
							})
							.on('error', (error)=>{
								// this.toastr.error(JSON.stringify(error),'Smart contract');
								// console.log(error)
								console.log(error);
								if (JSON.stringify(error).indexOf("32603")>0){
									this.toastr.error("Successfully cancel transaction",'Smart contract');
									this.isBuying=false;
									this.runAnimationPending = false;
									localStorage.removeItem("lastDiceHash");
								}
							})
							.on('confirmation', (confirmationNumber, receipt) => {
							    localStorage.removeItem("lastDiceHash");
							});
					} else {
						// console.warn('token roll');
						amount = web3.utils.numberToHex(this.sumAmount*10**10);
						this.contractService.diceContract.methods.betByToken(this.under, this.prediction, amount).send({from:this.account})
							.on('transactionHash', (hash) => {
								localStorage.setItem("lastDiceHash", hash);
							})
							.on('error', (error)=>{
								// this.toastr.error(error,'Smart contract');
								if (JSON.stringify(error).indexOf("32603")>0){
									this.toastr.error("Successfully cancel transaction",'Smart contract');
									this.isBuying=false;
									this.runAnimationPending = false;
									localStorage.removeItem("lastDiceHash");
								}
							})
							.on('confirmation', (confirmationNumber, receipt) => {
							    localStorage.removeItem("lastDiceHash");
							});
					}
				} catch {
					this.runAnimationPending = false;
				}
				
			}
		}
	};

	onChangeUnder = (value:boolean) =>{
		this.under = value;
		if (this.under){
			// $('#dice .rangeslider__fill').css('background-color','#2ee2ba');
			// $('#dice .rangeslider__fill').css('border','1px solid #05fdf9');
			// $('#dice .rangeslider').css('background-color','#ff5454');
			this.selected=0;
		}else{
			// over
			// $('#dice .rangeslider__fill').css('background-color','#ff5454')
			// $('#dice .rangeslider__fill').css('border','none')
			// $('#dice .rangeslider').css('background-color','#2ee2ba')
			// $('#dice .rangeslider').css('border','1px solid #05fdf9')
			this.selected=1;
		}

		this.onChangeRanger(this.prediction);
	}

	onChangeRanger = (value) =>{
		this.prediction = value;
		if (this.limmit[this.selected].min>this.prediction) this.prediction = this.limmit[this.selected].min;
		if (this.limmit[this.selected].max<this.prediction) this.prediction = this.limmit[this.selected].max;
		if (this.under) {this.chance = this.prediction}else{this.chance = 99-this.prediction}
		this.valueOutput(this.prediction);
	}

	onChangeUnit = () => {
		this.sumAmount = this.tokenLimmit[this.selectedToken].min;
	}

	onClickMulti = (value)=>{
		this.sumAmount*=value;
		if (this.tokenLimmit[this.selectedToken].min>this.sumAmount) this.sumAmount = this.tokenLimmit[this.selectedToken].min;
		if (this.tokenLimmit[this.selectedToken].max<this.sumAmount) this.sumAmount = this.tokenLimmit[this.selectedToken].max;
	}

	loadAll = () =>{
		for(let i=0; i<10;i++){
    	this.topRank[i]={};
    	this.contractService.diceContract.methods.mostTotalSpender(i+1).call().then(d=>{
    		this.topRank[i].address = d;
	        this.contractService.citizenContract.methods.getUsername(d).call().then((d)=>{
	          this.topRank[i].username = web3.utils.hexToUtf8(d._hex);
	        })
	    	this.contractService.diceContract.methods.citizenSpendEth(d).call().then(c=>{
	          this.topRank[i].totalSpend = this.toNumber(c);
	        })
    	})
 		}
	}

	getBalance = () =>{
    web3.eth.getBalance(this.account).then((data)=>{this.balance[0] = this.toNumber(data)}).then(()=>{
    	this.contractService.fomContract.methods.citizen(this.account).call().then((d)=>{this.balance[1] = this.toTokenNumber(d.citizenBalanceToken)})
	    this.contractService.citizenContract.methods.citizen(this.account).call().then(d=>{
	    		this.user.ethVolume = this.toNumber(d.citizenGameEthSpend);
	    		this.user.tokenVolume = this.toTokenNumber(d.citizenGameTokenSpend);
	    		this.user.ethIncome = this.toNumber(d.citizenGameEthRevenue);
	    		this.user.tokenIncome = this.toTokenNumber(d.citizenGameTokenRevenue);
	    });
    })
   
	}

	resultAnimation = () => {
		this.timeResult=0;
		this.intervalResult = setInterval(()=>{
			this.currentLuckyNumber++;
			if (this.currentLuckyNumber > 99) {
					this.currentLuckyNumber = 0;
					this.timeResult ++;
			}
			if (this.currentLuckyNumber==this.luckyNumber&&this.timeResult==2){
				clearInterval(this.intervalResult);
				this.runAnimationPending = false;

				this.runAnimation=true;
				setTimeout(()=>{
					this.runAnimation=false
				},4000);
			}
		},30)
		if (!this.ref['destroyed']) {
            this.ref.detectChanges();
        }
	}

  ngOnInit() {
  	let now = Date.now();
  	// Check if transaction is pending 
  	if (localStorage.hasOwnProperty('lastDiceHash')){
  		web3.eth.getTransaction(localStorage.getItem("lastDiceHash")).then((obj)=>{
  	// web3.eth.getTransaction("0x6557c12859c7766c5973cac2d54abf61e63afafaeac11851ea6fa0f72480a4f5").then((obj)=>{
	  		if (obj==null){
	  			this.isBuying=true;
	  			this.runAnimationPending = true;
	  		} else {
	  			localStorage.removeItem('lastDiceHash');
	  		}	
	  	})
  	}

  	this.accountSubscriber = this.localService.currentAccount.subscribe((data)=>{
        this.account=data;
        if (data!=undefined){
        	this.getBalance();

        	this.contractService.diceContract.getPastEvents('BetAGame',{
														filter: {player: this.account},
													    fromBlock: 0,
													    toBlock: 'latest'
														},(error, event) => {
			setTimeout(()=>{
				event.map(s=>{
					let historyTemp:any={};
		    			historyTemp.address = s.returnValues.player;
		    			this.contractService.citizenContract.methods.getUsername(s.returnValues.player).call().then((d)=>{
				          historyTemp.username = web3.utils.hexToUtf8(d._hex);
				        })
		    			historyTemp.prediction = s.returnValues.prediction;
		    			historyTemp.creationDate = s.returnValues.creationDate.toNumber()*1000;
		    			historyTemp.prediction_type = s.returnValues.prediction_type;
		    			historyTemp.result = s.returnValues.result;
		    			historyTemp.isWin = s.returnValues.isWin;
		    			historyTemp.unit = s.returnValues.unit;
		    			if (historyTemp.unit==0){
		    				// ETH
		    				historyTemp.amount = this.toNumber(s.returnValues.amount);
		    				historyTemp.payout = this.toNumber(s.returnValues.payout);
		    			} else {
		    				historyTemp.amount = this.toTokenNumber(s.returnValues.amount);
		    				historyTemp.payout = this.toTokenNumber(s.returnValues.payout);
		    			}
		    		this.myHistory.unshift(historyTemp);
				})
				setTimeout(()=>{
					this.myHistory = this.myHistory.slice(0, 50);
				},100)
					
			},1000)						
		})
        }
    })
    setInterval(()=>{
		if (this.luckyNumber!=undefined&&this.luckyNumber!=this.luckyNumberTemp&&this.isBuying == true){
    		this.resultAnimation();
    		this.luckyNumberTemp = this.luckyNumber;
    		this.isBuying = false
    	}
    },2000)

    this.contractService.diceContractBK.methods.getGameHistoryLength().call().then(d=>{
    	this.gameHistorylenBase = d.toNumber();
    	this.contractService.diceContract.methods.histoyLen().call().then(d=>{
    		this.gameHistorylen = this.gameHistorylenBase + d.toNumber();
    	})
    })

    this.contractService.diceContractBK.methods.totalPayout().call().then(d=>{
    	this.totalPayoutBase = this.toNumber(d);
    	this.contractService.diceContract.methods.totalPayout().call().then(d=>{
    		this.totalPayout = this.totalPayoutBase + this.toNumber(d);
    	})
    })

    this.contractService.diceContract.methods.histoyLen().call().then(d=>{
    	let gameHistorylen = d.toNumber();
    	let array:any;
    	if (gameHistorylen>50){
    		array = Array.from(Array(50).keys()).map(x => x=x+gameHistorylen-49);
    	}
    	this.contractService.diceContract.getPastEvents('BetAGame',{
    													filter:{histoyLen:array},
													    fromBlock: 0,
													    toBlock: 'latest'
														},(error, event) => {
			setTimeout(()=>{
				event.map(s=>{
					let historyTemp:any={};
		    			historyTemp.address = s.returnValues.player;
		    			this.contractService.citizenContract.methods.getUsername(s.returnValues.player).call().then((d)=>{
				          historyTemp.username = web3.utils.hexToUtf8(d._hex);
				        })
		    			historyTemp.prediction = s.returnValues.prediction;
		    			historyTemp.prediction_type = s.returnValues.prediction_type;
		    			historyTemp.result = s.returnValues.result;
		    			historyTemp.isWin = s.returnValues.isWin;
		    			historyTemp.unit = s.returnValues.unit;
		    			if (historyTemp.unit==0){
		    				// ETH
		    				historyTemp.amount = this.toNumber(s.returnValues.amount);
		    				historyTemp.payout = this.toNumber(s.returnValues.payout);
		    			} else {
		    				historyTemp.amount = this.toTokenNumber(s.returnValues.amount);
		    				historyTemp.payout = this.toTokenNumber(s.returnValues.payout);
		    			}
		    		this.gameHistory.unshift(historyTemp);
		    		if(s.returnValues.isHighRoller){
	    				this.highRollerHistory.unshift(historyTemp);	
	    			}
	    			if(s.returnValues.isRareWins){
	    				this.rareWinsHistory.unshift(historyTemp);	
	    			}
				})
			},1000)						
		})
    })
    

	this.newHistoryEvent = this.contractService.diceContract.events.BetAGame({
												    fromBlock: 0
													},(error, event) => {
			// console.log("event",now, event.returnValues.creationDate.toNumber()*1000);
			if (now<event.returnValues.creationDate.toNumber()*1000){		 
				if (this.isBuying == true && this.account==event.returnValues.player) {
					this.luckyNumber = parseInt(event.returnValues.result);
					if (event.returnValues.isWin){
						this.extraAmount = event.returnValues.payout-event.returnValues.amount
					}else {
						this.extraAmount = event.returnValues.amount*-1
					}

					if (event.returnValues.unit==0){
						this.extraAmount = this.toNumber(this.extraAmount)
					} else {
						this.extraAmount = this.toTokenNumber(this.extraAmount)
					}
					this.getBalance();
		      	}
		      	this.totalPayout = this.totalPayoutBase + this.toNumber(event.returnValues.totalPayout);
		      	this.gameHistorylen = this.gameHistorylenBase + event.returnValues.histoyLen.toNumber();
		      	if (this.gameHistory.length>50){
			    		this.gameHistory.pop();
			    	}
		      	if (this.myHistory.length>50&&this.account==event.returnValues.player){
			    		this.myHistory.pop();
			    	}
		      	if (this.highRollerHistory.length>50&&event.returnValues.isHighRoller){
			    		this.highRollerHistory.pop();
			    	}
		      	if (this.rareWinsHistory.length>50&&event.returnValues.isRareWins){
			    		this.rareWinsHistory.pop();
			    	}

    			let historyTemp:any={};
    			historyTemp.txhash = event.transactionHash;
    			historyTemp.address = event.returnValues.player;
    			this.contractService.citizenContract.methods.getUsername(event.returnValues.player).call().then((d)=>{
		          historyTemp.username = web3.utils.hexToUtf8(d._hex);
		        })
    			historyTemp.prediction = event.returnValues.prediction;
    			historyTemp.prediction_type = event.returnValues.prediction_type;
    			historyTemp.result = event.returnValues.result;
    			historyTemp.isWin = event.returnValues.isWin;
    			historyTemp.unit = event.returnValues.unit;
    			if (historyTemp.unit==0){
    				// ETH
    				historyTemp.amount = this.toNumber(event.returnValues.amount);
    				historyTemp.payout = this.toNumber(event.returnValues.payout);
    			} else {
    				historyTemp.amount = this.toTokenNumber(event.returnValues.amount);
    				historyTemp.payout = this.toTokenNumber(event.returnValues.payout);
    			}
    			if(this.gameHistory.filter(s=>s.txhash==event.transactionHash).length==0){
    				if (event.returnValues.player!="0xa06Cd23aA37C39095D8CFe3A0fd2654331e63123"){
    					this.gameHistory.unshift(historyTemp);
    				}
    			}
    			if(this.account==event.returnValues.player&&this.myHistory.filter(s=>s.txhash==event.transactionHash).length==0){
    				this.myHistory.unshift(historyTemp);	
    			}
    			if(event.returnValues.isHighRoller&&this.highRollerHistory.filter(s=>s.txhash==event.transactionHash).length==0){
    				this.highRollerHistory.unshift(historyTemp);	
    			}
    			if(event.returnValues.isRareWins&&this.rareWinsHistory.filter(s=>s.txhash==event.transactionHash).length==0){
    				this.rareWinsHistory.unshift(historyTemp);	
    			}
    		}
	  });
    // console.log("this.newHistoryEvent", JSON.stringify(this.newHistoryEvent));
    this.loadAll();
  }

  ngOnDestroy(){
  	// console.log("deleting...", this.newHistoryEvent.unsubscribe);
  	// try{
	  // 	this.newHistoryEvent.unsubscribe(data => {
	  // 		console.log('callback data', data)
	  // 	});
  	// } catch {}
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
