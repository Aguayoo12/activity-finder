import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcitivityComponent } from './add-acitivity.component';

describe('AddAcitivityComponent', () => {
  let component: AddAcitivityComponent;
  let fixture: ComponentFixture<AddAcitivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAcitivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAcitivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
