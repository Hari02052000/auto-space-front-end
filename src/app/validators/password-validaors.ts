import { AbstractControl,ValidationErrors, ValidatorFn } from '@angular/forms';




export class PasswordValidators {
  static passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      // Password regex pattern: At least 8 characters, one uppercase letter, one lowercase letter, one special character, and one number
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      return passwordPattern.test(password) ? null : { invalidPassword: true };
    };
  }

  static passwordMatchValidator(confirmPasswordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      const confirmPassword = control.root.get(confirmPasswordControlName)?.value;

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }
}
