import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbsenceService} from "../../../services/absence.service";
import {Absence} from "../../../models/Absence";

@Component({
  selector: 'app-details-absence-employee',
  templateUrl: './details-absence-employee.component.html',
  styleUrls: ['./details-absence-employee.component.css']
})
export class DetailsAbsenceEmployeeComponent implements OnInit {

  id: number | undefined;
  absences?: Absence[];

  constructor(private route : ActivatedRoute , private absenceService : AbsenceService) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    this.employeeAbsences(this.id);
  }

  employeeAbsences(id : number |undefined){
    this.absenceService.getAbsenceForEmployee(id).subscribe(
      {next : (data) => {
          this.absences = data ;
        }}
    )
  }

}
