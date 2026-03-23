import { Component } from '@angular/core';
import { HowItWorks } from './how-it-works/how-it-works';
import { Features } from './features/features';

@Component({
  selector: 'app-landing-page',
  standalone: true, 
  imports: [Features, HowItWorks], 
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}