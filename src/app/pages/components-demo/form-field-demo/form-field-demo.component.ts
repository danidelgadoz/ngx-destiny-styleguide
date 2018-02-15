import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-demo',
  templateUrl: './form-field-demo.component.html',
  styleUrls: ['./form-field-demo.component.css']
})
export class FormFieldDemoComponent implements OnInit {
  inputBindingA= 'Texto setteado desde el component.ts';
  inputBindingB= '';
  inputValid = true;
  inputInvalid = true;

  constructor() { }

  ngOnInit() {
  }

  inputDemoBindingSet() {
    this.inputBindingB = this.inputBindingB.concat('ABC ');
  }

  inputDemoBindingClear() {
    this.inputBindingB = '';
  }

  validationDemo() {
    this.inputValid = !this.inputValid;
    this.inputInvalid = !this.inputInvalid;
  }

}
