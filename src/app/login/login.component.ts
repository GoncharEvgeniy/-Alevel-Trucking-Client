import {Component} from '@angular/core';

import {LoginFormDto} from '../dto/LogonFormDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logFormDto = new LoginFormDto('', '');

  errorMessage = '';

  constructor() {
  }

  onSubmit() {
  }

}
