import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetsCardComponent } from './poets-card.component';

describe('PoetsCardComponent', () => {
  let component: PoetsCardComponent;
  let fixture: ComponentFixture<PoetsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoetsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
