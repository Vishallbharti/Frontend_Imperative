import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {
  users: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthService) { }

  ngOnInit() {
    this.authenticationService.getAllUser().subscribe((data) => this.users = data);
  }

}
