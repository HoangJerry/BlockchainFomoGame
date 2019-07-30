import { Component } from '@angular/core';
import { ContractService } from './contract.service';
import { LocalServiceService } from './local-service.service';
import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEndFOM';
  accountSubscriber: any;
  account: any;
  isBuying: any;
  isDev: boolean = false;
  constructor(private contractService: ContractService,
    private localService: LocalServiceService,
    private httpService: HttpService,
    private toastr: ToastrService,
    private spinner:NgxSpinnerService) {
    this.spinner.show();
    this.accountSubscriber = this.localService.currentAccount.subscribe((data) => {
      this.account = data;
      this.contractService.citizenContract.methods.isDev().call({ from: this.account }).then((d) => {
        this.isDev = d;
      })
    })
  }

  onClickEndDividend = () => {
    this.contractService.fomContract.methods.nextDividendRound().send({ from: this.account })
      .on('confirmation', (confNumber, receipt) => {
        if (this.isBuying == true) {
          this.isBuying = false;
          this.httpService.chatSocket.send(JSON.stringify({
            'message': 1
          }));
        }
      })
      .on('error', (error) => {
        this.toastr.error(error.message, 'Smart contract')
      })
  }

  onClickTransfer = () => {
    this.contractService.ticketContract.methods.sendTotalEth().send({ from: this.account })
      .on('confirmation', (confNumber, receipt) => {
        if (this.isBuying == true) {
          this.isBuying = false;
          this.httpService.chatSocket.send(JSON.stringify({
            'message': 1
          }));
        }
      })
      .on('error', (error) => {
        this.toastr.error(error.message, 'Smart contract')
      })
  }


}
