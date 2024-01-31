import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from 'src/app/pages/components/login/login.component';
import { MatDialogService } from '../../services/mat-dialog.service';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterLinkActive,
    LoginComponent,
    MatDialogModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isVerticalScroll: boolean = false;
  isLoginVisible: boolean = false;

  constructor(
    private router: Router,
    private webService: WebService,
    private viewportScroller: ViewportScroller,
    private matDialogService: MatDialogService
  ) {}

  ngOnInit(): void {
    this.isLoginVisible = false;

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

  onMenuBtnClick() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  selectNavOptions() {
    this.isMenuVisible = false;
  }

  onLoginBtnClick() {
    this.isLoginVisible = !this.isLoginVisible;
    if (this.isLoginVisible) {
      this.matDialogService
        .openDialog(LoginComponent)
        .afterClosed()
        .subscribe((data) => {
          if (data) this.router.navigate(['pages/queries']);
          else this.matDialogService.openDialog();
        });
    }
  }

  get getUserName(): string {
    return this.webService.getUserName();
  }

  onClickAnchor(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
