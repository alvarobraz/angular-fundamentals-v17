import { Component } from '@angular/core';
import { FirstComponentComponent } from '../first-component/first-component.component';

@Component({
  selector: 'app-deferrable',
  standalone: true,
  imports: [FirstComponentComponent],
  templateUrl: './deferrable.component.html',
  styleUrl: './deferrable.component.scss'
})
export class DeferrableComponent {

}
