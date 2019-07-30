import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider);

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  topRank:any = [];
  constructor(private contractService:ContractService) {
  	for(let i=0; i<20;i++){
    	this.topRank[i]={};
    	this.contractService.citizenContract.methods.mostTotalSpender(i+1).call().then(d=>{
    		this.topRank[i].address = d;
        this.contractService.citizenContract.methods.getUsername(d).call().then((d)=>{
          this.topRank[i].username = web3.utils.hexToUtf8(d._hex);
        })
    		this.contractService.citizenContract.methods.getTotalSpend(d).call().then(c=>{
          this.topRank[i].totalSpend = this.toNumber(c);
        })

    	})
    }
  }

  ngOnInit() {
  }


  toNumber = (val) =>{
    // div 10^18
    return val/0xDE0B6B3A7640000;
  }
}
