import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckComponent } from './password-check.component';

describe('PasswordCheckComponent', () => {
  let component: PasswordCheckComponent;
  let fixture: ComponentFixture<PasswordCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordCheckComponent]
    });
    fixture = TestBed.createComponent(PasswordCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
