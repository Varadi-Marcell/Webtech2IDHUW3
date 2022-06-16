import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuitarComponent } from './update-guitar.component';

describe('UpdateGuitarComponent', () => {
  let component: UpdateGuitarComponent;
  let fixture: ComponentFixture<UpdateGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
