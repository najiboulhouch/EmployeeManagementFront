import { Component, OnInit } from '@angular/core';
import {Absence} from "../../../models/Absence";
import {AbsenceService} from "../../../services/absence.service";
import {TypeAbsence} from "../../../enums/TypeAbsence";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {

  absences? : Absence[];
  TypeAbsence = TypeAbsence;
  page: any;
  private querySub: Subscription;

  constructor(private absenceService :AbsenceService ,
              private router:Router , private route:ActivatedRoute) { }

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
      this.reloadAllAbsences(currentPage, size);
    } else {
      this.reloadAllAbsences();
    }
  }

  employeeDetails(id:number){
    console.log(id);
    this.router.navigate(['employees/details' , id]);
  }

  reloadAllAbsences(page: number = 1, size: number = 7) : void {
    this.absenceService.getAllAbsences(page , size).subscribe({
      next : (data) => {
        this.page = data ;
        this.absences = data.content ;
      },
      error:(e) => console.error(e),
    });
  }

}
