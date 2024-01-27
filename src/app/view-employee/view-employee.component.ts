import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/login/auth.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{

  employees: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthService) { }

  ngOnInit() {
    this.authenticationService.getAllEmployee().subscribe((data) => this.employees = data);
  }

  viewEmployee(employeeDetail:String){
   console.log(employeeDetail);
   this.router.navigate(['/employee']);
  }

}
