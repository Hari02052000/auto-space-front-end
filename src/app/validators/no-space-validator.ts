import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator to check for spaces-only input
export function noSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value && value.trim().length === 0) {
      // Input contains only spaces, mark as invalid
      return { spacesOnly: true };
    }
    // Input is valid
    return null;
  };
}
