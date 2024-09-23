import { Injectable } from '@angular/core';
// import { AbstractControl } from '@angular/forms';
// @Injectable({
//   providedIn: 'root'
// })
// export class MatchPasswordService {

//   constructor() { }
// }

// export function passwordMatchValidator(control: AbstractControl) {
//   const password = control.get('password')?.value;
//   console.log(password)
//   const confirmPassword = control.get('confirmPassword')?.value;
//   console.log(confirmPassword)
//   return password === confirmPassword ? null : { passwordMismatch: true };
// }


import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(controlName);
    const confirmPasswordControl = formGroup.get(matchingControlName);

    if (!passwordControl || !confirmPasswordControl) {
      return null; // Return null if controls are not found
    }

    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}
