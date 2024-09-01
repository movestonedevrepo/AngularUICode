import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/shared/services/ProductService';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  standalone: true,
  styleUrl: './control-panel.component.css',
  imports: [SharedModule]
})
export class ControlPanelComponent implements OnInit {
  contents!: any[];
  

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productDetails =
          this.activatedRoute.snapshot.data['productDetails'];
        this.contents = productDetails?.products;
  }

  editProduct(product: any) {
    // Handle edit action
    console.log('Edit product:', product);
  }

  toggleVisibility(product: any) {
    product.visible = product.visible === 'Y' ? 'N' : 'Y';
    // Save the updated product to the database
    this.productService.updateProduct(product).subscribe(
      response => {
        console.log('Product visibility updated successfully:', response);
      },
      error => {
        console.error('Error updating product visibility:', error);
        // Optionally revert the change in case of error
        product.visible = product.visible === 'Y' ? 'N' : 'Y';
      }
    );
  }
}
