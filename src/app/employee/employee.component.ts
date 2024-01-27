import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employeeId: any;
  employeeDetail: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthService) { }

  ngOnInit(): void {
   this.employeeId = this.route.snapshot.paramMap.get('employeeId');
   this.authenticationService.getEmployeeByEmployeeId(this.employeeId).subscribe((data) => this.employeeDetail = data);
  }

}
