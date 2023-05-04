import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentbuttonComponent } from './componentbutton.component';

describe('ComponentbuttonComponent', () => {
  let component: ComponentbuttonComponent;
  let fixture: ComponentFixture<ComponentbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
