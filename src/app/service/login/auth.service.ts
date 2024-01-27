import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

  public username: String = "";
  public password: String = "";
  role: any;
  user: User = new User();

  constructor(private http: HttpClient) {

  }

  authenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/api/v1/basicauth/` + username,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        // this.getUserByUsername(username);
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: String, password: String) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username.toString())
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = "";
    this.password = "";
    sessionStorage.removeItem("role");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }


  getUserByUsername(username: any) {
    this.http.get(`http://localhost:8080/api/v1/basicauth/` + username).subscribe(res => {
      this.user = res;
      this.role = this.user.role;
      sessionStorage.setItem("role", this.role);
      console.log(this.role);

    });
  }

  getUser(username: any) {
    return this.http.get(`http://localhost:8080/users/user/` + username);
  }

  getAdmin(username: any) {
    return this.http.get(`http://localhost:8080/users/admin/` + username);
  }

  public getAllUser() {
    return this.http.get(`http://localhost:8080/users/all`);
  }

  public addUser(user: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/users/addUser`, user);
  }

  public getAllEmployee() {
    return this.http.get(`http://localhost:8080/employee/all`);
  }

  getEmployeeByEmployeeId(employeeId: any) {
    return this.http.get(`http://localhost:8080/employee/` + employeeId);
  }


}
