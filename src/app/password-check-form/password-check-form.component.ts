import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password-check-form',
  templateUrl: './password-check-form.component.html',
  styleUrls: ['./password-check-form.component.scss']
})
export class PasswordCheckFormComponent {
  form = this.fb.group({
    colors: [[''], Validators.required]
  });

  constructor(private fb: FormBuilder) { }
}
