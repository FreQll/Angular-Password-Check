import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  passwordControl = new FormControl();
  strengthColor: string[] = [];
  isVisible = false;

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.passwordControl.valueChanges.subscribe((value) => {
      const strength =
        this.passwordStrengthService.checkPasswordStrength(value);
      this.onChange(strength);
      this.strengthColor = strength;
    });
  }

  writeValue(object: any): void {
    this.passwordControl.setValue(object);
  }

  updatePasswordStrength(object: any) {
    const strength = this.passwordStrengthService.checkPasswordStrength(object);
    this.strengthColor = strength;
  }

  registerOnChange(func: any): void {
    this.onChange = func;
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  registerOnTouched(func: any): void {}

  onChange: (value: any) => void = () => {};
}
