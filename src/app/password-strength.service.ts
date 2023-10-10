import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PasswordStrengthService {
  checkPasswordStrength(password: string): string[] {
    //console.log("password: " + password)
    if (password.length === 0) return ['grey', 'grey', 'grey'];

    const hasNumbers = /\d/.test(password);
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};'`:"\\|,.<>\/?]+/.test(password);

    if (password.length < 8) {
      return ['red', 'red', 'red'];
    } else {
      if (hasNumbers && hasLetters && hasSymbols) {
        return ['red', 'orange', 'green'];
      } else if (
        (hasNumbers && hasLetters) ||
        (hasNumbers && hasSymbols) ||
        (hasLetters && hasSymbols)
      ) {
        return ['red', 'orange', 'grey'];
      } else {
        return ['red', 'grey', 'grey'];
      }
    }
  }
}
