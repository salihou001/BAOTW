import { Component, Input } from '@angular/core';
import { Galery2 } from './galerie2.model';

@Component({
  selector: 'app-galerie2',
  templateUrl: './galerie2.component.html',
  styleUrls: ['./galerie2.component.scss']
})
export class Galerie2Component {
  @Input()
  galery2!:Galery2;
}
