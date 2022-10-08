import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/Alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userLoggedIn:string;
  constructor(private alertify : AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.userLoggedIn = localStorage.getItem('token')
    return this.userLoggedIn;
}

    onLogout(){
      localStorage.removeItem('token')
      console.log("alertify",this.alertify.showSuccessMessage("You are successfully logged out"))
      this.alertify.showSuccessMessage("You are successfully logged out")
    }

}
