import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuitarComponent } from './view-guitar.component';

describe('ViewGuitarComponent', () => {
  let component: ViewGuitarComponent;
  let fixture: ComponentFixture<ViewGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
