import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthenticatorService } from '../../services/authenticator.service';
import { MatDialogRef } from '@angular/material/dialog';

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
export class AuthAdminComponent implements OnInit {
  // authAdmin=inject(AuthenticatorService);


  loginForm: FormGroup;
  hide = true;

  constructor(
    public translate: TranslateService,
    public dialogRef: MatDialogRef<AuthAdminComponent>,
    private fb: FormBuilder,
    // private http: HttpClient,
    private authService:AuthenticatorService,
  
  ) { 
    this.loginForm = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('es el formulario:',this.loginForm)
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          console.log('la respuesta API:',response)
          if (response && response.access_token) {
            this.dialogRef.close(true);
          } else {
            console.error('Login failed', response);
          }
        },
        (error) => {
          console.error('Error en el login', error);
        }
      );
    }
  }
}
