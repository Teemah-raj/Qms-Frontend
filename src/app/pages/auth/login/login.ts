import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  customerLoginForm: FormGroup;
  staffLoginForm: FormGroup;

  selectedIndex = 0;
  mode: 'customer' | 'staff' = 'customer';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.customerLoginForm = this.fb.group({
      emailOrPhone: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.staffLoginForm = this.fb.group({
      organisation: ['', Validators.required],
      branch: ['', Validators.required],
      staffId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginCustomer() {
    const data = this.customerLoginForm.value;
    console.log('Customer login:', data);

    // later connect backend
    this.router.navigate(['/home']);
  }

  loginStaff() {
    const data = this.staffLoginForm.value;
    console.log('Staff login:', data);

    this.router.navigate(['/dashboard']);
  }

}