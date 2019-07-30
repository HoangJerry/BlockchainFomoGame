import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
  import:any;
  private loginSource = new BehaviorSubject(this.import);
  currentLogin = this.loginSource.asObservable();

  private accountSource = new BehaviorSubject(this.import);
  currentAccount = this.accountSource.asObservable();

  private luckySource = new BehaviorSubject(this.import);
  currentLucky = this.luckySource.asObservable();

  constructor() { }

  changeLoginStatus(message:any){
    this.loginSource.next(message);
  }

  changeAccount(message:any){
    this.accountSource.next(message);
  }

  changeLucky(message:any){
    this.luckySource.next(message);
  }
}
