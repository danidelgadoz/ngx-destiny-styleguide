import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormFieldComponent],
  exports: [
    FormFieldComponent
  ]
})
export class StyleguideModule { }
