import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DeferrableComponent } from './deferrable/deferrable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ControlFlowComponent,
    RouterOutlet,
    DeferrableComponent
  ],
  template: `
  <!-- <app-control-flow></app-control-flow> -->
  <app-deferrable></app-deferrable>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'angular-fundamentals-v17';
}
