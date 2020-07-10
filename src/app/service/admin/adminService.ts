import {Injectable} from "@angular/core";
import {User} from "../../dto/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ManagerForm} from "../../dto/ManagerForm";

@Injectable({providedIn: 'root'})
export class AdminService {

  private mainUrl = 'http://localhost:8080/rest/admin';

  private getAllUsersUrl = this.mainUrl + '/get-all-users';

  private addNewManagerUrl = this.mainUrl + '/new-manager';

  private contentHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.getAllUsersUrl);
  }

  addManager(managerForm: ManagerForm) {
    return this.httpClient.post<any>(this.addNewManagerUrl,
      managerForm, {headers: this.contentHeader, observe: 'response'});
  }
}
