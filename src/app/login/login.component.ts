import {Component} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

import {LoginService} from '../service/loginService';
import {LoginFormDto} from '../dto/LogonFormDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  logFormDto = new LoginFormDto("", "");

  loginService: LoginService;

  errorMessage = '';

  constructor(loginService: LoginService, private router: Router) {
    this.loginService = loginService;
  }

  onSubmit() {
    this.loginService.login(this.logFormDto).subscribe(
      (data: HttpResponse<any>) => {
        this.loginService.setToken(data.headers.get("Authorization").substring(7));
        this.router.navigateByUrl('/');
      },
      (error) => {
        if (error.statusText == "Unauthorized") {
          this.errorMessage = "bad login or password";
        }
      });
  }

}
