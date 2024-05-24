import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { DialogData } from 'src/app/models/dialog-data';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalVariable } from 'src/app/shared/utilities/global-veriables';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper/types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  contents: any = [];
  testimonials: any = [];
  emailNewsLetter: any = '';
  facebookID = CONSTANTS.facebookID;
  instagramID = CONSTANTS.instagramID;
  vehicleConfig: SwiperOptions = CONSTANTS.vehicleConfig;
  queryForm = new FormGroup({
    queryName: new FormControl('', Validators.required),
    queryEmail: new FormControl('', [Validators.required, Validators.email]),
    queryPhone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    queryMessage: new FormControl(''),
  });
  assetPath = `${environment.assestsBasePath}images/Homepage`;
  currentIndex = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private router: Router,
    private http: HttpClient,
    private dialogService: MatDialogService
  ) {}

  ngOnInit(): void {
    if (window.screen.width <= 500) this.vehicleConfig.navigation = false;
    const productDetails = this.activatedRoute.snapshot.data['productDetails'];
    this.contents = Array(3).fill(productDetails.products).flat();
    this.testimonials = productDetails.testimonials;
    GlobalVariable.selectedPage = 'home';
  }

  submitEmailForNewsLetter(): void {
    const payload = { emailID: this.emailNewsLetter };
    this.http
      .post(`${environment.baseUrl}/submitEmails`, payload)
      .subscribe((data: any) => {
        if (data.hasError) {
          this.dialogService.openDialog({
            data: {
              title: data.hasError ? 'Error' : 'Success',
              type: data.hasError ? 'error' : 'success',
              message: data.hasError
                ? data.extendedMessage
                : 'Query raised successfully',
            } as DialogData,
          });
        }
      });
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params); // { order: "popular" }
      if (params.target) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(params.target);
        }, 1600);
      }
    });
  }

  sendQuery() {
    if (this.queryForm.valid) {
      const payload = {
        queryID: uuidv4(),
        queryPhone: '' + this.queryForm.value.queryPhone,
        queryEmail: this.queryForm.value.queryEmail,
        queryMessage:
          `Message from Mr/Ms ${this.queryForm.value.queryName}:  ` +
          this.queryForm.value.queryMessage,
      };
      this.submitQuery(payload);
    } else {
      this.queryForm.markAllAsTouched();
    }
  }

  submitQuery(payload: any) {
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
  }

  getFeatureList(list: any): Array<any> {
    return list.split(',');
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
  }
}
