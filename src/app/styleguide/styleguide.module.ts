import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidenavComponent,
    FormFieldComponent
  ],
  exports: [
    SidenavComponent,
    FormFieldComponent
  ]
})
export class StyleguideModule { }
