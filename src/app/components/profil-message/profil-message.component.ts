import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profil } from './profil.model';
import { gsap } from 'gsap';

@Component({
  selector: 'app-profil-message',
  templateUrl: './profil-message.component.html',
  styleUrls: ['./profil-message.component.scss'],
})
export class ProfilMessageComponent {
  @Output()
  elementSortant = new EventEmitter();
  @Input()
  profil!: Profil;
  @Input()
  idBlockSmsReply: any;
  toggleBlockSmsReply = true;
  showSmsDialog() {
    let block_reply = document.querySelector('#block_reply') as HTMLDivElement;
    if (this.toggleBlockSmsReply) {
      gsap.to(block_reply, {
        display: 'block',
        duration: 0.1,
        ease: 'power4.out',
      });
      this.elementSortant.emit(this.profil);
    }
  }
}
