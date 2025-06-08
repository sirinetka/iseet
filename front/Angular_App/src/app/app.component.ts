import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'; // adapte le chemin


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'front';
profile:any = null ;
isLogin:any = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLogin = status;
      if (status) {
        this.profile = localStorage.getItem('role');
      } else {
        this.profile = null;
      }
    });
  }

  login(){
    return this.authService.login(this.profile);
  }

  logout(){
    return this.authService.logout();
  }
}



