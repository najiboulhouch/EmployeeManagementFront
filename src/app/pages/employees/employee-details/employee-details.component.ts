import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/Employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";
import {EtatCivil} from "../../../enums/EtatCivil";
import {AbsenceService} from "../../../services/absence.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number | undefined;
  employee: Employee | undefined;
  EtatCivil = EtatCivil;
  messageError : string;
  nbrAbsence: number;
  nbrConge : number;
  constructor(private route:ActivatedRoute,
              private router:Router,
              public employeeService:EmployeeService , private absenceService : AbsenceService) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    this.getNbrAbsenceByEmployee(this.id);
    this.getNbrCongeByEmployee(this.id);
    this.employeeService.getEmployee(this.id)
      .subscribe({next : ( data ) =>
        {
          this.employee = new Employee();
          this.employee = data;
      } , error : error =>  {
           this.messageError = error.message ;
        }
      });
  }

  getNbrAbsenceByEmployee(id : number | undefined){
    this.absenceService.getNbrAbsenceByEmployee(id).subscribe(
      {next : (data) => {this.nbrConge = data } ,
        error : error =>
      console.log(error)
    });
  }

  getNbrCongeByEmployee(id : number | undefined){
    this.absenceService.getNbrCongeByEmployee(id).subscribe(
      {next : (data) => {this.nbrAbsence = data } ,
        error : error =>
          console.log(error)
      });
  }


  list(){
    this.router.navigate(['/employees']);
  }



}
