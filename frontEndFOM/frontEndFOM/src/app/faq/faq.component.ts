import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqList : any = [];
  constructor(private httpService:HttpService,) {
  	this.httpService.getFAQ().subscribe((data:any)=>{
  		this.faqList = data.data.data;
  	})
  }

  ngOnInit() {
  }

}
