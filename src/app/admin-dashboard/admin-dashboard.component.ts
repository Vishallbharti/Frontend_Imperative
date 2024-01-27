import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{

  
  admin:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthService) {   }

  ngOnInit() {
    this.authenticationService.getAdmin(sessionStorage.getItem("authenticatedUser")).subscribe((data)=>this.admin=data);
  }

}
