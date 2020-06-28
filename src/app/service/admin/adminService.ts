import {Injectable} from "@angular/core";
import {User} from "../../dto/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AdminService {

  private url = 'http://localhost:8080/rest/admin/get-all-users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
