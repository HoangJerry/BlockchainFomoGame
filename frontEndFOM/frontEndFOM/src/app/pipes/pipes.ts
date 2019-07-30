import { Pipe, PipeTransform } from '@angular/core';
import { ContractService } from '../contract.service';
import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider);

const ethWei:any = 10**18;
@Pipe({name: 'shortDisplay'})
export class ShortDisplayPipe implements PipeTransform {
  transform(value, args:string[]) : any {
  	if (value == undefined){
  		return "";
  	}
    let temp = value.slice(0,5)+'...'+value.slice(-3);
    return temp;
  }
}

@Pipe({name: 'thousandDisplay'})
export class ThousandPipe implements PipeTransform {
  transform(value, args:string[]) : any {
  	if (value == undefined){
  		return "";
  	}
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

@Pipe({name: 'ethDisplay'})
export class EthDisplayPipe implements PipeTransform {
  transform(value, args:any) : any {
  	if (value == undefined){
  		value=0
  	}
    if (args!=undefined){
      return value.toFixed(args);
    }
    return value.toFixed(3);
  }
}

@Pipe({name: 'usdDisplay'})
export class UsdDisplayPipe implements PipeTransform {
  transform(value, args:string[]) : any {
  	if (value == undefined){
  		value=0
  	}
    value =  value.toFixed(2);
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.reverse();
  }
}
@Pipe({ name: 'notUndefined' })
export class NotUndefinedPipe implements PipeTransform {
  transform(value) {
    // value = value.filter(s=>s.from!=undefined)
    return value;
  }
}

@Pipe({ name: 'atPage' })
export class AtPagePipe implements PipeTransform {
  transform(value, page) {
    let ret = value.slice((page-1)*10, page*10);
    console.log(ret);
    // value = value.filter(s=>s.from!=undefined)
    return ret;
  }
}

// @Pipe({ name: 'usernameDisplay',pure:false})
// export class UsernameDisplayPipe implements PipeTransform {
//   cacheData:any = null;
//   constructor (private contractService:ContractService){}
//    transform(value) {
//     if (value != undefined){
//       if (value !="0x0000000000000000000000000000000000000000"){
//         this.contractService.citizenContract.methods.getUsername(value).call().then((d)=>{
//           let str = web3.utils.hexToUtf8(d._hex);
//           this.cacheData =  str;
//           console.log(this.cacheData);
//         })
//       } else {
//         let temp = value.slice(0,5)+'...'+value.slice(-3);
//           this.cacheData =  temp;
//       }
//     }
//     return this.cacheData;
//   }
// }
