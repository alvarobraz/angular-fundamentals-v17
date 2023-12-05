import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { FirstComponentComponent } from '../first-component/first-component.component';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-deferrable',
  standalone: true,
  imports: [FirstComponentComponent, AsyncPipe],
  templateUrl: './deferrable.component.html',
  styleUrl: './deferrable.component.scss'
})
export class DeferrableComponent {

  public isTrue: boolean = false

  public carregar(): void {
    this.isTrue = true
  }

  public users$: Observable<Array<{ id: number, name: string }>> = of(
    [
      { id: 1, name: "Álvaro Braz" },
      { id: 2, name: "Arthur Máximus da Cruz Braz" },
      { id: 3, name: "Cristine Schio" }
    ]
  ).pipe(delay(5000))

}
