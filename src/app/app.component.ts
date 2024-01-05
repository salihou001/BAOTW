import { Component, OnInit, ViewChild } from '@angular/core';
import Alpine from 'alpinejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Alpine.start();
  }
}
