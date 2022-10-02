import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/Employee";
import {Fonction} from "../../../models/Fonction";
import {EmployeeService} from "../../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FonctionService} from "../../../services/fonction.service";
import {Subscription} from "rxjs";
import {DialogAnimationsDialog} from "../../../parts/dialog-animations-dialog/dialog-animations-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../../services/dialog.service";

@Component({
  selector: 'app-fonction-list',
  templateUrl: './fonction-list.component.html',
  styleUrls: ['./fonction-list.component.css']
})
export class FonctionListComponent implements OnInit {

  fontions?: Fonction[] ;
  deleted = false ;
  page: any;
  private querySub: Subscription;


  constructor(public fonctionService : FonctionService ,
              private router:Router ,
              private route:ActivatedRoute,
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
      this.reloadAllFonctions(currentPage, size);
    } else {
      this.reloadAllFonctions();
    }
  }

  reloadAllFonctions(page: number = 1, size: number = 7) : void {
    this.fonctionService.getAllFonctions(+page , +size).subscribe({
      next : (data) => {
        this.page = data ;
        this.fontions = data.content ;
      },
      error:(e) => console.error(e),
    });
  }

  deleteFonction(id: number) {
    this.dialogService.openConfirmDialog('Are you sure to delete this function ?')
      .afterClosed().subscribe(res => {
      if (res === "yes"){
        this.fonctionService.deleteFonction(id).subscribe({
          next : (data) => {
            this.deleted = data ;
            this.update();
          }
        })
      }
    })
  }

  updateFonction(id: number){
    this.router.navigate(['fonctions/update', id]);
  }

}
