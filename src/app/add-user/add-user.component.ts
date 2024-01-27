import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  user: User;
  public blogError: boolean = false;
  public queMessage: string = '';
  public successError: boolean = false;
  successMessage: String = "";
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthService) {
      this.user = new User();
     }
  // this function return true if registration is successful.
  AddUser() {
    let that = this;
    this.authenticationService.addUser(this.user)
      .subscribe({
        next(data: any) {
          that.successError = true;
          that.successMessage = 'User added successfuly!';
          that.router.navigate(['/app-admin-dashboard']);;
         },
        error(data: { error: { description: string; }; }): any {
          that.blogError = true;
          that.queMessage = "Something went wrong!";
          that.router.navigate(['/app-admin-dashboard']);
        }
      });

  }

  ngOnInit(): void {
  }

}
