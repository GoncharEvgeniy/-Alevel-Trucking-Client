import {Component, OnInit} from '@angular/core';
import {ManagerForm} from "../dto/ManagerForm";
import {AdminService} from "../service/admin/adminService";
import {HttpResponse} from "@angular/common/http";
import {LoginService} from "../service/loginService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css'],
  providers: [AdminService, LoginService]
})
export class AddManagerComponent implements OnInit {

  addManagerForm = new ManagerForm("", "", "", "", "", "", "", "", "");

  constructor(private adminService: AdminService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.adminService.addManager(this.addManagerForm).subscribe(
      (data: HttpResponse<any>) => {
        console.log(data);
        this.loginService.setToken(data.headers.get("Authorization").substring(7));
        this.router.navigateByUrl('/home');
      },
      (error) => {
          console.log(error);
      }
    );
  }
}
