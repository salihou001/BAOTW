import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  @Input()
  user!: Card;
  charger=false;
  ngOnInit(){
    // document.querySelectorAll('.img_loading')?.forEach(element =>{
    //   element.addEventListener('onload', () =>{
    //     this.charger = true;
    //   });
    // })
  }
  showImage(){}
}
