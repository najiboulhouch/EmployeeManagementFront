import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../models/Employee";
import {Observable, Subscription} from "rxjs";
import {EtatCivil} from "../../../enums/EtatCivil";
import {AbsenceService} from "../../../services/absence.service";
import {Absence} from "../../../models/Absence";
import {UserService} from "../../../services/user.service";
import {DialogAnimationsDialog} from "../../../parts/dialog-animations-dialog/dialog-animations-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../../services/dialog.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees?: Employee[] ;
  EtatCivil = EtatCivil;
  deleted = false ;
  page: any;
  private querySub: Subscription;

  constructor(public employeeService : EmployeeService ,
              private route:ActivatedRoute ,
              private router : Router,
              private dialogService : DialogService) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
    });
  }

  update() {
    if (this.route.snapshot.queryParamMap.get('page')) {
      // @ts-ignore
      const currentPage = +this.route.snapshot.queryParamMap.get('page');
      // @ts-ignore
      const size = +this.route.snapshot.queryParamMap.get('size');
      this.reloadAllEmployee(currentPage, size);
    } else {
      this.reloadAllEmployee();
    }
  }

   reloadAllEmployee(page: number = 1, size: number = 7) : void {
    this.employeeService.getAllEmployees(page , size).subscribe({
      next : (data) => {
        this.page = data ;
        this.employees = data.content;
      },
      error:(e) => console.error(e),
    });
  }


  employeeDetails(id:number){
    this.router.navigate(['employees/details' , id]);
  }

  deleteEmployee(id: number) {
    this.dialogService.openConfirmDialog('Are you sure to delete this employee ?')
      .afterClosed().subscribe(res => {
      if (res === "yes"){
        this.employeeService.deleteEmployee(id).subscribe({
          next : (data) => {
            this.deleted = data ;
            this.reloadAllEmployee();
          }
        })
      }
    })
  }

  updateEmployee(id: number){
    this.router.navigate(['employees/update', id]);
  }

  addPyment(id: number){
    this.router.navigate(['payments/add', id]);
  }

  detailsAbsencesEmployee(id: number){
    this.router.navigate(['employees/detailsAbsence', id]);
  }


}
