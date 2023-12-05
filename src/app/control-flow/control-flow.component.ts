import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  public loggedIn: boolean = true

  public users$: Observable<Array<{ id: number, name: string }>> = of(
    [
      { id: 1, name: "Álvaro Braz" },
      { id: 2, name: "Arthur Máximus da Cruz Braz" },
      { id: 3, name: "Cristine Schio" }
    ]
  ).pipe(delay(5000))

  public condition = 'A'


  // public loadingData$: Observable<string[]> = of([
  //   'item 1',
  //   'item 2',
  //   'item 3'
  // ]).pipe(delay(3000))

}
