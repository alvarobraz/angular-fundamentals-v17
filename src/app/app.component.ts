import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ControlFlowComponent, RouterOutlet],
  template: `
  <app-control-flow></app-control-flow>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'angular-fundamentals-v17';
}
