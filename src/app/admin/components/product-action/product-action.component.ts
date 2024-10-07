import { BreakpointObserver } from '@angular/cdk/layout';
import {
  STEPPER_GLOBAL_OPTIONS,
  StepperOrientation,
} from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxColorsModule } from 'ngx-colors';
import { map, Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/constants/constants';
import { DialogData } from 'src/app/models/dialog-data';
import { UploadFilesComponent } from 'src/app/shared/components/upload-files/upload-files.component';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-action',
  standalone: true,
  imports: [SharedModule, NgxColorsModule],
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
  imagesByColor!: Array<any>;
  prodColors!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private dialogService: MatDialogService,
    private productService: ProductService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.product =
      this.activatedRoute.snapshot.data['productDetails']?.productDetails;

    this.prodColors = this.product?.colorOptions;

    this.basicProductDetailsForm = this.createBasicProductForm();
  }

  createBasicProductForm(): FormGroup {
    return this.formBuilder.group({
      productID: [
        { value: this.product?.productID, disabled: this.product?.productID },
        Validators.required,
      ],
      productName: [this.product?.productName, Validators.required],
    });
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

  camelCaseToWords(str: string): string {
    const result = str.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  resetProductColors(): void {
    this.prodColors = this.product?.colorOptions;
  }

  onBasicDetailsFilled(event: any): void {
    if (this.basicProductDetailsForm && this.basicProductDetailsForm.valid) {
      const newProd = {
        productID: this.basicProductDetailsForm.get('productID')?.value,
        productName: this.basicProductDetailsForm.get('productName')?.value,
      };
      const page = this.router.url;
      if (page === CONSTANTS.addProduct) {
        this.createNewProduct(newProd, true);
      } else {
        this.updateExistingProduct(newProd, true);
      }
    } else {
      this.basicProductDetailsForm.markAllAsTouched();
    }
  }

  onProdInfoFilled(): void {
    if (this.productInformationForm && this.productInformationForm.valid) {
      const productToUpdate = {
        productID: this.product.productID,
        ...this.productInformationForm.value,
      };
      this.updateExistingProduct(productToUpdate);
    } else {
      this.productInformationForm.markAllAsTouched();
    }
  }

  onImageUploaded(): void {
    this.moveToNextStep();
  }

  createNewColor(color: string): void {
    this.imagesByColor = [];
    if (color) {
      this.addImageForColor()
        .afterClosed()
        .subscribe((uploadedImage: any) => {
          if (uploadedImage) {
            this.prodColors = this.prodColors + ',' + color;

            const newColor = {
              productID: this.product.productID,
              colorOptions: this.prodColors,
            };
            this.updateExistingProduct(newColor);
          }
        });
    }
  }

  uploadImageForExistingColor(color: string): void {
    const customProd = {
      productID: this.product.productID,
      productColorHex: color,
    };
    this.productService
      .searchImageByColor(customProd)
      .subscribe((data: any) => {
        if (data && !data.hasError) {
          this.imagesByColor = data.responsePayload?.pictures;
          this.addImageForColor();
        }
      });
  }

  createNewProduct(product: any, isFirstStep = false): void {
    // TODO:
    this.productService
      .createProduct(product)
      .subscribe((createdProduct: any) => {
        if (createdProduct && !createdProduct.hasError) {
          this.product = createdProduct.responsePayload;
          if (isFirstStep) {
            this.productInformationForm = this.createProductInformationForm();
          }

          this.moveToNextStep();
        }
      });
  }

//   "PORT = 5000
// DATABASE='dev_rickshaw'
// DBUSERNAME='postgres'
// DBPASSWORD='development'
// DBHOST='localhost'
// CLOUDINARY_CLOUD='dyizlmke8'
// CLOUDINARY_API_KEY='179627892588444'
// CLOUDINARY_API_SECRET='Lb0Xl2cYfJbTNEtP5TRbjv7_cXk'"


  updateExistingProduct(product: any, isFirstStep = false): void {
    // TODO:
    this.productService
      .updateProduct(product)
      .subscribe((updatedProduct: any) => {
        if (updatedProduct && !updatedProduct.hasError) {
          this.product = updatedProduct.responsePayload[0];
          if (isFirstStep) {
            this.productInformationForm = this.createProductInformationForm();
          }

          this.moveToNextStep();
        }
      });
  }

  addImageForColor(): any {
    return this.dialogService.openDialog(
      {
        width: '700px',
        height: '700px',
        data: {
          extras: this.imagesByColor,
        } as DialogData,
      },
      UploadFilesComponent
    );
  }

  moveToNextStep(): void {
    if (this.stepper && this.stepper.selected) {
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
  }

  backToDashboard() {
    if (this.stepper && this.stepper.selected) {
      this.stepper.selected.completed = true;
      this.router.navigate(['admin/admin-dashboard']);
    }
  }

  get getProductFeatures(): Array<string> {
    return Object.keys(this.product);
  }

  get getColorOptions(): Array<string> {
    return this.prodColors?.split(',');
  }
}
