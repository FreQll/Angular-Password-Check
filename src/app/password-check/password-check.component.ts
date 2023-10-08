import { Component } from '@angular/core';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.scss'],
})
export class PasswordCheckComponent {
  password: string = '';
  colors: string[] = ['grey', 'grey', 'grey'];
  isVisible: boolean = false;

  handlePasswordChange() {
    console.log(this.checkPasswordStrength(this.password));
    console.log(this.colors);
    switch (this.checkPasswordStrength(this.password)) {
      case 'weak':
        this.colors = ['red', 'grey', 'grey'];
        return;
      case 'medium':
        this.colors = ['red', 'orange', 'grey'];
        return;
      case 'strong':
        this.colors = ['red', 'orange', 'green'];
        return;
      case 'red':
        this.colors = ['red', 'red', 'red'];
        return;
      default:
        this.colors = ['grey', 'grey', 'grey'];
        return;
    }

  }

  checkPasswordStrength(password: string) {
    if (password.length === 0) return 'gray';

    const hasNumbers = /\d/.test(password);
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    if (password.length < 8) {
      return 'red';
    } else {
      if (hasNumbers && hasLetters && hasSymbols) {
        return 'strong';
      } else if (
        (hasNumbers && hasLetters) ||
        (hasNumbers && hasSymbols) ||
        (hasLetters && hasSymbols)
      ) {
        return 'medium';
      } else {
        return 'weak';
      }
    }
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}
