import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
    selector: 'input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true }]
})
export class MaxValidatorDirective implements Validator {
    @HostBinding('attr.max') @Input() max: number;

    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {
        const validator = Validators.max(this.max);
        return validator(control);
    }
}