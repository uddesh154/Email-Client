import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    validate(formgroup: AbstractControl<any>): ValidationErrors | null {
        const { password, passwordConfirmation } = formgroup.value;

        if(password === passwordConfirmation) {
            return null;
        } else {
            return { PasswordDontMath: true }
        }
    }
}
