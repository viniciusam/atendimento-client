import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { FrontService } from './front.service';
import { Category, DynamicForm } from '../model';

@Component({
  selector: 'form-view',
  templateUrl: './form-view.component.html' 
})
export class FormViewComponent implements OnInit {

  dynamicForm: DynamicForm;
  errorMsg: String;

  form: FormGroup = new FormGroup({});

  constructor(private frontService: FrontService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.frontService.getFormConfig(params['id']))
      .subscribe(
        res => { this.dynamicForm = res; },
        err => { this.errorMsg = err; }
      );
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

}
