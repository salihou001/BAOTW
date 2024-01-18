import { Component, Input } from '@angular/core';
import { Galery3 } from '../galerie3/galerie3.model';
import { Profil } from './profil.model';

@Component({
  selector: 'app-profil-message',
  templateUrl: './profil-message.component.html',
  styleUrls: ['./profil-message.component.scss']
})
export class ProfilMessageComponent {
  @Input()
  profil!:Profil;
}
