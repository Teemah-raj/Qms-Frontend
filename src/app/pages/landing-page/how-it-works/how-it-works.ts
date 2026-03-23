import { Component, Input } from '@angular/core';

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon?: 'phone' | 'bell' | 'check';
  ariaLabel?: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  templateUrl: './how-it-works.html',
})
export class HowItWorks{
  @Input() title = 'How QueueLess Works';

  @Input() subtitle =
    'A seamless experience from the moment you decide to visit the bank until your transaction is complete.';

  @Input() steps: HowItWorksStep[] = [
    {
      id: 1,
      title: 'Join the Queue',
      description:
        'Scan a QR code at the branch or use the QueueLess web app to join the line remotely from anywhere.',
      icon: 'phone',
    },
    {
      id: 2,
      title: 'Track Your Turn',
      description:
        'Get real‑time updates on your position and estimated wait time directly on your device.',
      icon: 'bell',
    },
    {
      id: 3,
      title: 'Get Served',
      description:
        'Walk into the branch exactly when it’s your turn. No more waiting in crowded areas.',
      icon: 'check',
    },
  ];
}