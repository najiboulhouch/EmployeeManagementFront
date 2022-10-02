import { Component, OnInit } from '@angular/core';
import {Fonction} from "../../../models/Fonction";
import {Absence} from "../../../models/Absence";
import {Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/Employee";
import {AbsenceService} from "../../../services/absence.service";

@Component({
  selector: 'app-absence-create',
  templateUrl: './absence-create.component.html',
  styleUrls: ['./absence-create.component.css']
})
export class AbsenceCreateComponent implements OnInit {

  absence:Absence = new Absence();
  employees?:Employee[];
  submitted  = false;
  messageError : string;
  selectedEmployee: number;

  constructor(private router:Router ,
              private employeeService : EmployeeService ,
              private absenceService : AbsenceService) { }

  ngOnInit(): void {
    this.reloadAllEmployee();
  }

  reloadAllEmployee() : void {
    this.employeeService.getAllEmployeesForSelect().subscribe({
      next : (data) => {
        this.employees = data ;
      },
      error:(err) => console.error(err),
    });
  }

  goToList(){
    this.router.navigate(['/absences']);
  }

  save(){
    this.absence.employee = new Employee();
    this.absence.employee.id  = this.selectedEmployee;
    this.absenceService.createAbsence(this.absence).subscribe({next : ( data ) => {
        this.absence = data;
        this.messageError = "";
      } , error : error => {this.messageError = error.error.message ; this.submitted = false; }} );
  };

  onSubmit(){
    this.save();
    this.submitted = true;
  }
}
