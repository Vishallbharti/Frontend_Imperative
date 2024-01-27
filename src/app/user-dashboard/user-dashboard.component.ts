import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  user:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthService) {   }

  ngOnInit() {
    this.authenticationService.getUser(sessionStorage.getItem("authenticatedUser")).subscribe((data)=>this.user=data);
  }
}
