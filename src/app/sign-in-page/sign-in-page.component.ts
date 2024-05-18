import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validator} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SignInComponent} from "../sign-in/sign-in.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderService} from "../header.service";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent implements OnInit,OnDestroy{

  signUpObj:SignUpModel = new SignUpModel();
  LogInObj:LogInModel=new LogInModel();

  constructor(private router: Router,private navBarService:HeaderService)  {



  }
   OnLogIn(){
    debugger;
     const localUser=localStorage.getItem('angular_users');
     if (localUser !=null){
       const users=JSON.parse(localUser);
       const isUserPresent= users.find((user:SignUpModel)=>user.email==this.LogInObj.email && user.password==this.LogInObj.password);
       if(isUserPresent != undefined){
         alert("User Found.... ");
         localStorage.setItem('loggedUser',JSON.stringify(isUserPresent));
         this.router.navigateByUrl('/home')
       }
       else {
         alert("User not found")
       }
     }
   }

   ngOnInit() {
    this.navBarService.hide();
   }

   ngOnDestroy() {
    this.navBarService.display();
   }
}

export class SignUpModel {
  name:string;
  email:string;
  password:string;

  constructor() {
    this.email="";
    this.name ="";
    this.password="";
  }
}

export class LogInModel{
  email:string;
  password:string;

  constructor() {
    this.email="";
    this.password="";
  }
}
