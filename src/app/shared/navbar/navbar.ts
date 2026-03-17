import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
loginDropdownOpen = signal(false);
  signupDropdownOpen = signal(false);

  toggleLoginDropdown() {
    this.loginDropdownOpen.set(!this.loginDropdownOpen());
    this.signupDropdownOpen.set(false);
  }

  toggleSignupDropdown() {
    this.signupDropdownOpen.set(!this.signupDropdownOpen());
    this.loginDropdownOpen.set(false);
  }

  closeDropdowns() {
    this.loginDropdownOpen.set(false);
    this.signupDropdownOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeDropdowns();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
