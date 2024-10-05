import { BreakpointObserver } from '@angular/cdk/layout';
import {
  STEPPER_GLOBAL_OPTIONS,
  StepperOrientation,
} from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/constants/constants';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-action',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-action.component.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ProductActionComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  product: any;
  featuresToOmit: any = CONSTANTS.featuresToOmitInAdmin;
  assetPath = `${environment.assestsBasePath}images/Admin-Dashboard`;
  stepperOrientation: Observable<StepperOrientation>;
  basicProductDetailsForm!: FormGroup;
  productInformationForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.product =
      this.activatedRoute.snapshot.data['productDetails']?.productDetails;

    this.basicProductDetailsForm = this.createBasicProductForm();
    this.productInformationForm = this.createProductInformationForm();
  }

  createProductInformationForm(): FormGroup {
    const prodInfoForm: any = {};
    this.getProductFeatures.forEach((eachFeature: string) => {
      if (!this.featuresToOmit[eachFeature]) {
        prodInfoForm[eachFeature] = [this.product[eachFeature]];
      }
    });
    return this.formBuilder.group(prodInfoForm);
  }

  createBasicProductForm(): FormGroup {
    return this.formBuilder.group({
      productID: [
        { value: this.product.productID, disabled: this.product.productID },
        Validators.required,
      ],
      productName: [this.product.productName, Validators.required],
    });
  }

  get getProductFeatures(): Array<string> {
    return Object.keys(this.product);
  }

  camelCaseToWords(str: string): string {
    const result = str.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  onBasicDetailsFilled(event: any): void {
    if (this.basicProductDetailsForm.valid) {
      if (this.stepper && this.stepper.selected) {
        // complete the current step
        this.stepper.selected.completed = true;
        this.stepper.next();
      }
    } else {
      this.basicProductDetailsForm.markAllAsTouched();
    }
  }

  onProdInfoFilled(): void {
    if (this.productInformationForm.valid) {
      if (this.stepper && this.stepper.selected) {
        this.stepper.selected.completed = true;
        this.stepper.next();
      }
    } else {
      this.productInformationForm.markAllAsTouched();
    }
  }

  onImageUploaded(): void {
    if (this.stepper && this.stepper.selected) {
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
  }

  backToDashboard() {
    if (this.stepper) this.router.navigate(['admin/admin-dashboard']);
  }
}
