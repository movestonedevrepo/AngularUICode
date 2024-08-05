import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-footer',
  standalone: true,
  imports: [],
  templateUrl: './contact-footer.component.html',
  styleUrl: './contact-footer.component.css',
})
export class ContactFooterComponent {
  assetPath = `${environment.assestsBasePath}images/Product Page`;
}