import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-scale',
  templateUrl: './password-scale.component.html',
  styleUrls: ['./password-scale.component.scss']
})
export class PasswordScaleComponent {
  @Input() colors: string[] = [];
}
