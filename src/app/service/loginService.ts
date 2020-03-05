import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {JwtHelperService} from '@auth0/angular-jwt';

import {LoginFormDto} from '../dto/LogonFormDto';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private url = 'http://localhost:8080/Server/login';

  private contentHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient, private router: Router, private storage: LocalStorageService) { }

  login(loginFormDto: LoginFormDto) {
    return this.httpClient.post<any>(this.url, loginFormDto, { headers: this.contentHeader, observe: 'response' });
  }

  isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  getRole(): string {
    const jwtHelperService = new JwtHelperService();
    const decodeToken = jwtHelperService.decodeToken(this.getToken());
    return decodeToken['role'];
  }

  getUserName(): string {
    const jwtHelperService = new JwtHelperService();
    const decodeToken = jwtHelperService.decodeToken(this.getToken());
    return decodeToken['username'];
  }

  getToken(): string {
    return this.storage.retrieve('authorizationToken');
  }

  logout() {
    this.storage.clear('authorizationToken');
  }

  setToken(token: string) {
    this.storage.store('authorizationToken', token);
  }

}
