import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdetails:{
    useremail:any,
    userpass:any,
    usercpass:any
  }
  stringfunc:any

  constructor(private router:Router, private myservice:MyserviceService) { 
    this.userdetails={
    useremail:"",
    userpass:"",
    usercpass:""
  }
  this.stringfunc=""
}

  ngOnInit(): void {
  }

  register(email:any,pass:any,cpass:any){

    if( email == "" || pass =="" || cpass == ""){
      alert("Enter valid Input");
      return;
    }
    if(pass != cpass){
      alert("New Password and Confirm password should be same");
      return;
    }
    this.userdetails={
      useremail :email,
      userpass:pass,
      usercpass:cpass
    }
    this.stringfunc=JSON.stringify(this.userdetails);
    localStorage.setItem(email,this.stringfunc);
     console.log(this.userdetails);
     console.log(this.stringfunc)

     this.router.navigateByUrl("login")
  }
  service(){
    this.myservice.nijantha;
    console.log(this.myservice.nijantha)
  }

}
