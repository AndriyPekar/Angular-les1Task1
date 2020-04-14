import {Component} from '@angular/core';
import {ComentModel} from "./models/ComentModel";
import {ComentService} from "./services/coment.service";

@Component({
  selector: 'app-root',
  template: `<h1>{{msg}}</h1>
    <app-coment *ngFor="let c of coments" [coment]="c"></app-coment>
  `,
  styles: [`h1 {
    background: aqua
  }`]
})
export class AppComponent {
  msg = 'Coments from JSON';
  coments: ComentModel[];

  constructor(private comentService: ComentService) {
        this.comentService.getComent().subscribe(value => this.coments = value);
  }
}
