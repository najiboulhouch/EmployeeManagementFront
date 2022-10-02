import { Component, OnInit } from '@angular/core';
import {Fonction} from "../../../models/Fonction";
import {FonctionService} from "../../../services/fonction.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsDialog} from "../../../parts/dialog-animations-dialog/dialog-animations-dialog.component";


@Component({
  selector: 'app-fonction-create',
  templateUrl: './fonction-create.component.html',
  styleUrls: ['./fonction-create.component.css']
})

export class FonctionCreateComponent implements OnInit {

  fonction:Fonction = new Fonction(0);
  submitted  = false;
  messageError : string;

  constructor(private fonctionService : FonctionService,
              private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    this.fonctionService.createFonction(this.fonction).subscribe({next : ( data ) => {
        this.messageError = "";
      } , error : error => {this.messageError = error.error.message ; this.submitted = false; }} );
  };



  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/fonctions']);
  }

}
