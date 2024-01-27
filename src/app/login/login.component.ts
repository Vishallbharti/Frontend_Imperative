import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username: String = "";
  password : String = "";
  errorMessage = 'Invalid Credentials';
  successMessage: String = "";
  invalidLogin = false;
  loginSuccess = false;
  user:User | any;
 
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {
    
  }

  handleLogin() {
    this.authenticationService.getUserByUsername(this.username);
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      if(sessionStorage.getItem("role") === "ROLE_USER"){
        this.router.navigate(['/app-user-dashboard']);
      }else if(sessionStorage.getItem("role") === "ROLE_ADMIN"){
        this.router.navigate(['/app-admin-dashboard'])
        console.log("Admin dashboard");
      }
      // console.log(sessionStorage.getItem("role"));
      // this.router.navigate(['/app-admin-dashboard']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }

  // getUser(){
  //   this.authenticationService.getUserByUsername(sessionStorage.getItem("authenticatedUser")).subscribe((data)=>this.user=data);
  //   console.log(this.user);
  // }

}
