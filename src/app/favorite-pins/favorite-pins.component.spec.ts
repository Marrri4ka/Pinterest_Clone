import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePinsComponent } from './favorite-pins.component';

describe('FavoritePinsComponent', () => {
  let component: FavoritePinsComponent;
  let fixture: ComponentFixture<FavoritePinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
