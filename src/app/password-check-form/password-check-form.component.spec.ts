import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckFormComponent } from './password-check-form.component';

describe('PasswordCheckFormComponent', () => {
  let component: PasswordCheckFormComponent;
  let fixture: ComponentFixture<PasswordCheckFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordCheckFormComponent]
    });
    fixture = TestBed.createComponent(PasswordCheckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
