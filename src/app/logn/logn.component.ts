import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logn',
  templateUrl: './logn.component.html',
  styleUrls: ['./logn.component.css']
})
export class LognComponent implements OnInit {
  userinform: any;
  useremail:any

  constructor() {
    this.userinform = ""
    this.useremail=""
  }

  ngOnInit(): void {
  }

  login(email: any): any {
    this.useremail=email
    let userinfo: any;
    userinfo = localStorage.getItem(email);
    

    if (!userinfo) {
      return null;
    }

   
    this.userinform= JSON.parse(userinfo);
    console.log(this.userinform)




  }

}
