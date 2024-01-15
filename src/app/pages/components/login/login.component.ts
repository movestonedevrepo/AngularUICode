import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/shared/services/web.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private webService: WebService) {}

  closeLoginPopup() {
    this.router.navigate(['pages/home']);
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.webService.setUserName(this.loginForm?.value?.email);
      this.closeLoginPopup();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
