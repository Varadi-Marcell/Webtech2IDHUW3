import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuitarComponent } from './create-guitar.component';

describe('CreateGuitarComponent', () => {
  let component: CreateGuitarComponent;
  let fixture: ComponentFixture<CreateGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
