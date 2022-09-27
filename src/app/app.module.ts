import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { NavigationComponent } from './parts/navigation/navigation.component';
import { EmployeeDetailsComponent } from './pages/employees/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './pages/employees/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './pages/employees/employee-update/employee-update.component';
import { FonctionListComponent } from './pages/fonctions/fonction-list/fonction-list.component';
import { FonctionCreateComponent } from './pages/fonctions/fonction-create/fonction-create.component';
import { FonctionUpdateComponent } from './pages/fonctions/fonction-update/fonction-update.component';
import { AbsenceListComponent } from './pages/absences/absence-list/absence-list.component';
import { DetailsAbsenceEmployeeComponent } from './pages/absences/details-absence-employee/details-absence-employee.component';
import { LoginComponent } from './pages/login/login.component';
import {CookieService} from "ngx-cookie-service";
import {JwtInterceptor} from "./_interceptors/jwt-interceptor.service";
import {ErrorInterceptor} from "./_interceptors/error-interceptor.service";
import { AbsenceCreateComponent } from './pages/absences/absence-create/absence-create.component';
import { PaginationComponent } from './parts/pagination/pagination.component';
import { PayementListComponent } from './pages/payments/payement-list/payement-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { PayementCreateComponent } from './pages/payments/payement-create/payement-create.component';
import { PayementUpdateComponent } from './pages/payments/payement-update/payement-update.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NavigationComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    FonctionListComponent,
    FonctionCreateComponent,
    FonctionUpdateComponent,
    AbsenceListComponent,
    DetailsAbsenceEmployeeComponent,
    LoginComponent,
    AbsenceCreateComponent,
    PaginationComponent,
    PayementListComponent,
    PayementCreateComponent,
    PayementUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'fr' }],

  bootstrap: [AppComponent]
})
export class AppModule { }
