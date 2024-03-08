import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  phoneNumber = CONSTANTS.phoneNumber;
  facebookID = CONSTANTS.facebookID;
  instagramID = CONSTANTS.instagramID;
  officeLocation = CONSTANTS.officeLocation;

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
