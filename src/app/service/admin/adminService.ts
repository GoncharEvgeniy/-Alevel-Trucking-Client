import {Injectable} from "@angular/core";
import {User} from "../../dto/User";

@Injectable({providedIn: 'root'})
export class AdminService {

  getUsers(): User[] {
    return [
      {login: "login1", firstName: "firstName1", lastName: "lastName1", role: "Admin"},
      {login: "login2", firstName: "firstName2", lastName: "lastName2", role: "User"}
    ]
  }
}
