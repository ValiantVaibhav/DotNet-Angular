import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/Alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService, private alertifyService : AlertifyService,
    private router : Router) { }

  ngOnInit() {
  }

  onLogin(loginForm : NgForm){
    console.log(loginForm)
    let token = this.authService.authenticateUser(loginForm.value);

    if(token){
      console.log("User logged in");
      localStorage.setItem('token',token.userName)
      this.alertifyService.showSuccessMessage("Login Successfull")
      this.router.navigate(['/'])
    }
    else{
      console.log("Username or Password is incorrect")
      this.alertifyService.showErrorMessage("Login Failed.")
    }
  }

}
