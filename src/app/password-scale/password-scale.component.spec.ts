import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordScaleComponent } from './password-scale.component';

describe('PasswordScaleComponent', () => {
  let component: PasswordScaleComponent;
  let fixture: ComponentFixture<PasswordScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordScaleComponent]
    });
    fixture = TestBed.createComponent(PasswordScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
