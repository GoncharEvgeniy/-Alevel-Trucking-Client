import {Component} from '@angular/core';
import {LoginService} from './service/loginService';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {

  constructor(public loginService: LoginService, private route: Router) {
  }

  logout() {
    this.loginService.logout();
    this.route.navigateByUrl('/');
  }

}
