import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PindetailComponent } from './pindetail.component';

describe('PindetailComponent', () => {
  let component: PindetailComponent;
  let fixture: ComponentFixture<PindetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PindetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
