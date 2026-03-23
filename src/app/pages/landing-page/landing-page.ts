import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from './footer/footer';
import { Navbar } from '../../shared/navbar/navbar';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { HowItWorks } from './how-it-works/how-it-works';
import { Cta } from './cta/cta';

@Component({
  selector: 'app-landing-page',
  imports: [Footer, Navbar, Hero, Features, HowItWorks, Cta, ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}