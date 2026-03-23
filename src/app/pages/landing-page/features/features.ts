
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';

// Narrow the icon names to the ones you actually use.
// If your Lucide package uses "calendar-check-2", swap below accordingly.
type FeatureIcon = 'clock' | 'calendar-check' | 'building' | 'line-chart';

interface FeatureItem {
  title: string;
  description: string;
  icon: FeatureIcon;  // passed to <lucide-icon [name]>
  color: string;      // Tailwind text color class for the icon
  bgColor: string;    // Tailwind bg color class for the icon container
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('staggerList', [
      transition(':enter', [
        query('.feature-card', [
          style({ opacity: 0, transform: 'translateY(16px)' }),
          stagger(120, animate(
            '380ms cubic-bezier(0.22, 1, 0.36, 1)',
            style({ opacity: 1, transform: 'translateY(0)' })
          ))
        ], { optional: true })
      ])
    ])
  ],
  template: `
    <section id="features" class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-navy-accent font-semibold tracking-wide uppercase text-sm mb-3 font-body">
            Powerful Features
          </h2>
          <h3 class="text-3xl md:text-4xl font-bold text-navy-900 font-heading mb-6">
            Everything you need to manage flow
          </h3>
          <p class="text-lg text-gray-600 font-body">
            QueueLess provides a comprehensive suite of tools designed to
            eliminate wait times and improve the banking experience for
            everyone.
          </p>
        </div>

        <!-- Cards -->
        <div [@staggerList] class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          <div
            class="feature-card bg-white rounded-2xl p-8 border border-gray-200 shadow-sm
                   hover:shadow-md transition-all hover:-translate-y-0.5"
            *ngFor="let feature of features; trackBy: trackByTitle; let i = index"
            role="listitem"
            [attr.aria-labelledby]="'feature-h-' + i"
          >
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                 [ngClass]="feature.bgColor"
                 aria-hidden="true">
              <lucide-angular
                [name]="feature.icon"
                class="w-7 h-7"
                [ngClass]="feature.color">
              </lucide-angular>
            </div>

            <h4 class="text-xl font-bold text-navy-900 font-heading mb-3" [attr.id]="'feature-h-' + i">
              {{ feature.title }}
            </h4>

            <p class="text-gray-600 font-body leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Features {

  // 👇 The cards are created from this TypeScript array
  features: FeatureItem[] = [
    {
      title: 'Real-Time Queue Tracking',
      description:
        'Monitor your exact position in line live from your smartphone. Never wonder how much longer you have to wait.',
      icon: 'clock',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Smart Scheduling',
      description:
        'Book appointments days in advance or join the queue remotely before you even leave your house.',
      icon: 'calendar-check',          // or 'calendar-check-2' depending on your Lucide version
      color: 'text-amber-500',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Multi-Branch Support',
      description:
        'Organizations can manage queues, staff, and customer flow across hundreds of branches from a single dashboard.',
      icon: 'building',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Gain powerful insights into peak hours, average wait times, and staff performance to optimize your service.',
      icon: 'line-chart',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    }
  ];

  trackByTitle = (_: number, item: FeatureItem) => item.title;
}