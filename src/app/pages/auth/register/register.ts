import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-register',

  imports: [CommonModule, TitleCasePipe],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  currentStep: number = 1; 
  selectedRole: string = 'customer'; // The data variable

  // The function (the "doer")
  selectRole(role: string) {
    this.selectedRole = role;
    this.currentStep = 2;
  }

  toggleRole(role: string) {
    this.selectedRole = role;
  }
}
