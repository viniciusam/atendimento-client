import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { DynamicField } from '../model';
import { CustomValidators } from './custom-validators';

// https://angular.io/docs/ts/latest/cookbook/dynamic-form.html
@Component({
    selector: 'dynamic-field',
    templateUrl: './dynamic-field.component.html'
})
export class DynamicFieldComponent implements OnInit {

    @Input() field: DynamicField;
    @Input() form: FormGroup;

    constructor() { }

    ngOnInit() {
        let formControl: FormControl = new FormControl();
        
        this.applyValidators(formControl);
        
        this.form.addControl(this.field.key, formControl);
    }

    isValid() {
        let control: AbstractControl = this.form.controls[this.field.key];
        return !control.touched || control.valid;
    }

    private applyValidators(formControl: FormControl) {
        let validators: ValidatorFn[] = new Array();

        if (this.field.required) {
            validators.push(Validators.required);
        }

        if ("email" == this.field.inputType) {
            validators.push(CustomValidators.email);
        }

        formControl.setValidators(Validators.compose(validators));
    }

}
