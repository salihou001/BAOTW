import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerie3Component } from './galerie3.component';

describe('Galerie3Component', () => {
  let component: Galerie3Component;
  let fixture: ComponentFixture<Galerie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Galerie3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galerie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
