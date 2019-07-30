import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { eventNames } from 'cluster';
import Web3 from 'web3';
import { Subject } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
var $ = require('jquery');
const web3 = new Web3(Web3.givenProvider);
@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.css']
})
export class CitizensComponent implements OnInit {
  datas: any = [];
  searchText;
  filterDatas: any = [];
  page: any = 1;
  pageSize: any = 10;
  constructor(
    private contractService: ContractService,
  ) { }

  ngOnInit() {
    this.datas = [];
    this.contractService.citizenContract.events.Register(
      { fromBlock: 0 },
      (error, event) => {
        //console.log(event.returnValues);
        let user: any = {};
        user.id = event.returnValues.id;
        user.username = web3.utils.hexToUtf8(event.returnValues.username._hex);
        user.citizen = event.returnValues.citizen;
        user.ref = event.returnValues.ref;
        user.timeInvested = new Date(event.returnValues.dateJoin.toNumber() * 1000);
        this.contractService.citizenStorageContract.methods.citizenWithdrawed(user.citizen).call().then(rs => {
          user.totalWithdrawal = this.toNumber(rs);
        });
        this.contractService.ticketContract.methods.ticketSumByAddress(user.citizen).call().then(
          rs => {
            user.tickets = rs;
            //console.log(!isNaN(user.tickets));
          });
        this.contractService.citizenContract.methods.citizen(user.citizen).call().then(
          rs => {
            // user.ticketTotalIncome = this.toNumber(rs.citizenTicketRevenue);
            user.gameTotalIncome = this.toNumber(rs.citizenGameEthRevenue);
            user.ethBuyTicket = this.toNumber(rs.citizenTicketSpend);
            user.ethPlayGame = this.toNumber(rs.citizenGameEthSpend);

            this.contractService.citizenContract.methods.getTotalEth().call({from:user.citizen}).then((d)=>{
              user.ticketTotalIncome = this.toNumber(d) - user.gameTotalIncome;
            })

          });
   
        this.contractService.fomContract.methods.totalSupplyByAddress(user.citizen).call().then(
          rs => {
            user.totalMinedToken = (this.toTokenNumber(rs));
            //console.log(!isNaN(user.totalSupplyByAddress));
          });
        this.datas.push(user);
      }
    );
    // this.filterDatas = this.datas;
    // this.sort();
  }

  sort() {
    var datas = this.filterDatas;
    $(function () {
      $("#json-table th div a:last-child").click(function () {
        let key = $(this).parent().parent().attr('title');
        //console.log(key);
        $('#json-table th div a').removeClass('sort-active');
        $(this).addClass('sort-active');
        sortByKey(datas, key, true);
      });
      $("#json-table th div a:nth-child(2)").click(function () {
        let key = $(this).parent().parent().attr('title');
        $('#json-table th div a').removeClass('sort-active');
        $(this).addClass('sort-active');
        sortByKey(datas, key, false);
      });
      function sortByKey(array, key, check) {
        return array.sort(function (a, b) {
          var x = a[key]; var y = b[key];
          if (check) {
            if (!isNaN(+a[key]) && !isNaN(+b[key])) {
              //console.log("number1");
              return a[key] - b[key];
            }
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
          }
          else {
            if (!isNaN(+a[key]) && !isNaN(+b[key])) {
              //console.log("number1");
              return b[key] - a[key];
            }
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          }
        });
      }
    });
  }
  onClickSearch = () => {
    this.filterDatas = [];
    if (this.searchText!=''){
      this.filterDatas = this.datas.filter(
      e => {
        if (e.id.toString().toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
          || e.username.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
          || e.citizen.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
          return e;
      });
    }
    this.sort();
  }

  onEnter = () => {
    this.filterDatas = this.datas.filter(
      e => {
        if (e.id.toString().toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
          || e.username.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
          || e.citizen.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
          return e;
      });
    this.sort();
  }

  onChangeEntry() {
    if (this.pageSize > this.filterDatas) {
      this.pageSize = this.filterDatas;
    }
    else
      this.pageSize = $('#entry-quantity').val();
    this.sort();
  }
  toNumber = (val) => {
    // div 10^18
    return val / 0xDE0B6B3A7640000;
  }

  toTokenNumber = (val) => {
    // div 10^10
    return val / 0x2540BE400;
  }

}
