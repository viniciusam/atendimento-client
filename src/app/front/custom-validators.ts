import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    static email(control: AbstractControl): ValidationResult {
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (!regex.test(control.value)) {
            return { invalidEmail: true };
        }

        return null;
    }
}

export interface ValidationResult {
    [key: string]: boolean
}
