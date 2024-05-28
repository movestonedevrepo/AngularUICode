import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from 'src/app/pages/components/login/login.component';
import { environment } from 'src/environments/environment';
import { MatDialogService } from '../../services/mat-dialog.service';
import { WebService } from '../../services/web.service';
import { GlobalVariable } from '../../utilities/global-veriables';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterLinkActive,
    LoginComponent,
    MatDialogModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isVerticalScroll: boolean = false;
  logo = `${environment.assestsBasePath}images/Move_Stone_logo.png`;
  brand = `${environment.assestsBasePath}images/Move_Stone_brand.png`;
  assetPath = `${environment.assestsBasePath}images`;
  itemsToDisplayInProducts = [
    {
      id: 'eRikshaw',
      name: 'E Rikshaw',
      routerLink: '/pages/products/eRikshaw',
    },
    {
      id: 'loader',
      name: 'Loader',
      routerLink: '/pages/products/loader',
    },
  ];
  globalVeriable = GlobalVariable;
  isProductMenuVisiable: boolean = false;

  constructor(
    private router: Router,
    private webService: WebService,
    private viewportScroller: ViewportScroller,
    private matDialogService: MatDialogService
  ) {}

  ngOnInit(): void {
    if (window.scrollY > 0) {
      this.isVerticalScroll = true;
    } else {
      this.isVerticalScroll = false;
    }
    window.onscroll = () => {
      if (window.scrollY > 0) {
        this.isVerticalScroll = true;
      } else {
        this.isVerticalScroll = false;
      }
    };
  }

  get isUserLoggedIn(): boolean {
    return this.webService.isUserAuthenticated;
  }

  onMenuBtnClick() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  selectNavOptions(headerName: string) {
    GlobalVariable.selectedPage = headerName?.trim();
    this.isMenuVisible = false;
  }

  onLoginBtnClick() {
    if (!this.isUserLoggedIn) {
      this.matDialogService
        .openDialog(
          {
            width: 'auto',
            maxWidth: 'auto',
          },
          LoginComponent
        )
        .afterClosed()
        .subscribe((data) => {
          if (data && !data.hasError) {
            this.router.navigate(['pages/queries']);
          }
        });
    }
  }

  get getUserName(): string {
    return this.webService.getUserName;
  }

  onClickAnchor(elementId: string, event: any) {
    if (this.router.url.includes('/home')) {
      this.viewportScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['pages/home'], {
        queryParams: { target: elementId },
      });
    }
    this.selectNavOptions(event);
  }

  logout() {
    this.webService.removeAuthentication();
    this.router.navigate(['pages/home']);
  }

  navigateToQuery(): void {
    this.router.navigate(['pages/queries']);
  }

  openProductMenu(): void {
    this.isProductMenuVisiable = true;
  }
}
