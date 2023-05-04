import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentoutputComponent } from './componentoutput.component';

describe('ComponentoutputComponent', () => {
  let component: ComponentoutputComponent;
  let fixture: ComponentFixture<ComponentoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentoutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
