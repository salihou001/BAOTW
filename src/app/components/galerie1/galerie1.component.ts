import { Component, Input } from '@angular/core';
import { Galery1 } from './galerie1.model';

@Component({
  selector: 'app-galerie1',
  templateUrl: './galerie1.component.html',
  styleUrls: ['./galerie1.component.scss']
})
export class Galerie1Component {
  @Input()
  galery!:Galery1;
}
