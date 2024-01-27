import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'app-user-dashboard', component: UserDashboardComponent},
  {path: 'app-admin-dashboard', component: AdminDashboardComponent},
  {path: 'viewUser', component: ViewUserComponent},
  {path: 'viewEmployee', component: ViewEmployeeComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'employee/:employeeId', component: EmployeeComponent},
  {path: 'logout', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
