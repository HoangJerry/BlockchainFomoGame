import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
var crypto = require('crypto'); 
const privateKeyDev = 'F0M0BankingToTheMOON8?@B##o!fV}5R8G871623JHGJ&6' // MUST be put in .env variable
const privateKeyProd = 'F0M0BankingToTheMOON@@@(*&*&^756765769879876&%^*(&' // MUST be put in .env variable
const privateKey = privateKeyDev;


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  host:any = window.location.hostname;
  roomName :any = "dabanking";
  chatSocket:any;
  constructor(private http: HttpClient) {
    if(isDevMode()) {
      this.host="localhost:8000";
    } else {
      this.host += ':8443';
    }
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    this.chatSocket = new WebSocket(
        ws_scheme+'://' + this.host +
        '/ws/chat/' + this.roomName + '/');
    // var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    // this.chatSocket = new WebSocket(
    //     'wss://' + 'fomo.dabanking.io:8443' +
    //     '/ws/chat/' + this.roomName + '/');
    // this.chatSocket.onmessage = function(e) {
    //     var data = JSON.parse(e.data);
    //     console.log(data);
    // };
    this.chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };
  }

  convertRate = () =>{
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD');
  }

  randomName = () =>{
    return this.http.get('https://randomuser.me/api/?nat=us');
  }
  genSignature = () => {
    const timeStamp = new Date().getTime()
    const input = `${timeStamp}F0M0Banking${timeStamp}`
    const signature = crypto.createHmac('sha256', privateKey).update(input).digest('hex')
    return {
      signature,
      timeStamp
    }
  }
  getFAQ = () =>{
    let data :any = this.genSignature();
    let headers= new HttpHeaders()
    headers = headers.set('timeStamp', data.timeStamp).append('signature',data.signature);
    return this.http.get('https://dabanking.io/api/faq?target=fomoGame',{headers: headers});
  }

}
