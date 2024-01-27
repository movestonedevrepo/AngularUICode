import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/shared/services/web.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

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

  constructor(private router: Router, private webService: WebService, private http:HttpClient) {}

  closeLoginPopup() {
    this.router.navigate(['pages/home']);
  }

  onLogin() {
    const authPayload = {
      userID:this.loginForm?.value?.email,
      password:this.loginForm?.value?.password
    }
    if (this.loginForm.valid) {
      this.http.post(`${environment.baseUrl}/authenticate`,authPayload).subscribe((data:any)=>{
        if(!data?.hasError){
          this.webService.setAuthentication(data.responsePayload.jwtToken);
          this.webService.setUserName(this.loginForm?.value?.email);
          this.router.navigate(['pages/queries']);
        }
      })
      
      this.closeLoginPopup();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
