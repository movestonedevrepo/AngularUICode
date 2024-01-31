import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class MatDialogService {
  dialogConfig: MatDialogConfig = {
    width: '40rem',
    data: {
      title: 'Error',
      message: 'Oops!! Something Went Wrong',
      buttons: ['Ok'],
    } as DialogData,
  };

  dialogRef?: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  openDialog(
    component: any = DialogBoxComponent,
    dialogConfig?: MatDialogConfig
  ): MatDialogRef<any> {
    this.dialogRef = this.dialog.open(component, {
      ...this.dialogConfig,
      ...dialogConfig,
    });

    this.dialogRef.afterClosed().subscribe((response: any) => {
      console.log(response);
    });

    return this.dialogRef;
  }
}
