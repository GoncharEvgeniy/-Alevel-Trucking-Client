import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/loginService";
import {User} from "../dto/User";
import {AdminService} from "../service/admin/adminService";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService, AdminService]
})
export class HomeComponent implements OnInit {

  username: string;

  userrole: string;

  loginService: LoginService;

  adminService: AdminService;

  users: Observable<User[]>;

  constructor(loginService: LoginService, adminService : AdminService) {
    this.loginService = loginService;
    this.adminService = adminService;
  }

  ngOnInit(): void {
    this.username = this.loginService.getUserName();
    this.userrole = this.loginService.getRole();
    this.users = this.adminService.getUsers();
  }

}
