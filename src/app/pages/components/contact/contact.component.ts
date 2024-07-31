import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { DialogData } from 'src/app/models/dialog-data';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalVariable } from 'src/app/shared/utilities/global-veriables';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private dialogService: MatDialogService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  facebookID = CONSTANTS.facebookID;
  instagramID = CONSTANTS.instagramID;
  salesDepartmentNum1 = CONSTANTS.salesDepartmentNumber1;
  salesDepartmentNum2 = CONSTANTS.salesDepartmentNumber2;
  officeLocation = CONSTANTS.officeLocation;
  queryForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    queryMessage: new FormControl('', Validators.required),
  });
  assetPath = `${environment.assestsBasePath}images/Homepage`;

  ngOnInit(): void {
    GlobalVariable.selectedPage = 'contact us';
  }

  sendQuery(): void {
    if (this.queryForm.valid) {
      const name = `${this.queryForm.value.firstName} ${this.queryForm.value.lastName}`;
      const payload = {
        queryID: uuidv4(),
        queryPhone: '' + this.queryForm.value.number,
        queryEmail: this.queryForm.value.email,
        queryMessage:
          `Message from Mr/Ms ${name}:  ` + this.queryForm.value.queryMessage,
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

  onClickAnchor(elementId: string) {
    if (this.router.url.includes('/home')) {
      this.viewportScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['pages/home'], {
        queryParams: { target: elementId },
      });
    }
  }
}
