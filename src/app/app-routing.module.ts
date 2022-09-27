import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "./pages/employees/employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./pages/employees/employee-details/employee-details.component";
import {EmployeeCreateComponent} from "./pages/employees/employee-create/employee-create.component";
import {EmployeeUpdateComponent} from "./pages/employees/employee-update/employee-update.component";
import {FonctionListComponent} from "./pages/fonctions/fonction-list/fonction-list.component";
import {FonctionCreateComponent} from "./pages/fonctions/fonction-create/fonction-create.component";
import {FonctionUpdateComponent} from "./pages/fonctions/fonction-update/fonction-update.component";
import {AbsenceListComponent} from "./pages/absences/absence-list/absence-list.component";
import {
  DetailsAbsenceEmployeeComponent
} from "./pages/absences/details-absence-employee/details-absence-employee.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {Role} from "./enums/Role";
import {AbsenceCreateComponent} from "./pages/absences/absence-create/absence-create.component";
import {PayementListComponent} from "./pages/payments/payement-list/payement-list.component";
import {PayementCreateComponent} from "./pages/payments/payement-create/payement-create.component";
import {PayementUpdateComponent} from "./pages/payments/payement-update/payement-update.component";

const routes : Routes = [
  {path : '' , redirectTo :'employees' , pathMatch:'full'},
  {path:'photo/:id' , component:EmployeeListComponent},
  {path:'details/:id' , component:EmployeeDetailsComponent , canActivate:[AuthGuard]},
  {path:'update/:id' , component:EmployeeUpdateComponent ,canActivate:[AuthGuard] },
  {path:'fonctions' , component:FonctionListComponent , canActivate:[AuthGuard]},
  {path : 'addFonction' , component:FonctionCreateComponent , canActivate:[AuthGuard]},
  {path: 'updateFonction/:id' , component :FonctionUpdateComponent , canActivate:[AuthGuard]},
  {path : 'absences' , component : AbsenceListComponent , canActivate : [AuthGuard]},
  {path : 'detailsAbsenceEmployee/:id' , component : DetailsAbsenceEmployeeComponent , canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.User, Role.Admin]}
  },
  {path:'addEmployee' , component:EmployeeCreateComponent ,
    canActivate:[AuthGuard] , data: {roles: [Role.User, Role.Admin]}},

  {path:'addAdbsence' , component:AbsenceCreateComponent , canActivate:[AuthGuard]},
  {path:'payments' , component:PayementListComponent , canActivate:[AuthGuard]},
  {path:'addPayment/:id' , component:PayementCreateComponent , canActivate:[AuthGuard]},
  {path: 'updatePayment/:id' , component :PayementUpdateComponent , canActivate:[AuthGuard]},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
