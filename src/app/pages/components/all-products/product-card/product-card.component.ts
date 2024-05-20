import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MagnifyService } from 'src/app/shared/services/magnify.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() content: any;
  @Output() checkProductEvent = new EventEmitter();

  constructor(private magnifyService: MagnifyService) {}

  checkProduct(index: number) {
    this.checkProductEvent.emit(index);
  }

  magnifyCard() {
    this.magnifyService.showMagnify(this.content);
  }

  closeMagnifiedView() {
    const magnifiedView = document.getElementById('magnified-view');
    if (magnifiedView) magnifiedView.style.display = 'none';
  }
}
