// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

import { App } from './app/app';
import { appConfig } from './app/app.config';

// Lucide
import {
  LucideAngularModule,
  Clock,
  CalendarCheck,   // or CalendarCheck2 if you want 'calendar-check-2'
  Building,        // or Building2 if you want 'building-2'
  LineChart
  // icons          // dev-only: register all icons if you prefer
} from 'lucide-angular';

// Animations (required when using @staggerList etc.)
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig?.providers ?? []),

    // Register only the icons you use (tree-shakable)
    importProvidersFrom(
      LucideAngularModule.pick({
        Clock,
        CalendarCheck, // switch to CalendarCheck2 if your template uses 'calendar-check-2'
        Building,      // switch to Building2 if you use 'building-2'
        LineChart
      })
    ),

    // Enable Angular animations
    provideAnimations(),

    // DEV convenience (heavier bundle): register every icon
    // importProvidersFrom(LucideAngularModule.pick(icons)),
  ],
}).catch((err: unknown) => console.error(err));