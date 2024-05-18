import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CONSTANTS } from 'src/app/constants/constants';
import { DialogData } from 'src/app/models/dialog-data';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    private dialogService: MatDialogService
  ) {}

  facebookID = CONSTANTS.facebookID;
  instagramID = CONSTANTS.instagramID;
  queryForm = new FormGroup({
    queryName: new FormControl('', Validators.required),
    queryEmail: new FormControl('', [Validators.required, Validators.email]),
    queryPhone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    queryMessage: new FormControl('', Validators.required),
  });
  assetPath = `${environment.assestsBasePath}images/Homepage`;

  sendQuery(): void {
    if (this.queryForm.valid) {
      const payload = {
        queryID: uuidv4(),
        queryPhone: '' + this.queryForm.value.queryPhone,
        queryEmail: this.queryForm.value.queryEmail,
        queryMessage:
          `Message from Mr/Ms ${this.queryForm.value.queryName}:  ` +
          this.queryForm.value.queryMessage,
      };
      this.http
        .post(`${environment.baseUrl}/createQuery`, payload)
        .subscribe((data: any) => {
          this.dialogService.openDialog({
            data: {
              title: data.hasError ? 'Error' : 'Success',
              type: data.hasError ? 'error' : 'success',
              message: data.hasError
                ? data.extendedMessage
                : 'Query raised successfully',
            } as DialogData,
          });
        });
    } else {
      this.queryForm.markAllAsTouched();
    }
  }
}
