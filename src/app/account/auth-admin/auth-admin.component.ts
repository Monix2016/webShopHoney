import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthenticatorService } from '../../services/authenticator.service';

@Component({
  selector: 'app-auth-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './auth-admin.component.html',
  styleUrl: './auth-admin.component.css'
})
export class AuthAdminComponent {
  authAdmin=inject(AuthenticatorService);
  applyForm = new FormGroup({
    userName: new FormControl(''),
    password:new FormControl(''),
  });

  constructor(public translate: TranslateService,) { }

  submitLogin() {
    this.authAdmin.submitLogin(
      this.applyForm.value.userName ?? '',

      this.applyForm.value.password ?? ''

    );
    this.applyForm.reset();
  }
}
