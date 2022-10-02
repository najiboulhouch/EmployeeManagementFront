import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAnimationsDialog} from "../parts/dialog-animations-dialog/dialog-animations-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private  dialog : MatDialog) { }

  openConfirmDialog(msg : string){
    return this.dialog.open(DialogAnimationsDialog,{
      width: '550px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "300px" },
      data :{
        message : msg
      }
    });
  }
}
