import { Component, Input } from '@angular/core';
import { Galery3 } from './galerie3.model';

@Component({
  selector: 'app-galerie3',
  templateUrl: './galerie3.component.html',
  styleUrls: ['./galerie3.component.scss']
})
export class Galerie3Component {
  @Input()
  galery3!:Galery3;
}
