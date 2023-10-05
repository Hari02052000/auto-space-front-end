import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function yearValidator():ValidatorFn{

    return (control: AbstractControl): { [key: string]: any } | null => {
        const inputValue = control.value;
        const currentYear = new Date().getFullYear();

        const yearPattern = /^\d{4}$/

        if (yearPattern.test(inputValue)) {
            const enteredYear = parseInt(inputValue, 10);
            if (enteredYear <= currentYear) {
              return null; 
            } else {
              return { invalid: true, pastYear: true }; 
            }
          } else {
            return { invalid: true, invalidFormat: true }; 
          }
      


    }
  
}
