import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-animations-dialog',
  templateUrl: './dialog-animations-dialog.component.html',
  styleUrls: ['./dialog-animations-dialog.component.css']
})
export class DialogAnimationsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data : {message: string},
              public dialogRef: MatDialogRef<DialogAnimationsDialog>) { }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
