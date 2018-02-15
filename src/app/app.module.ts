import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StyleguideModule } from './styleguide/styleguide.module';
import { ComponentsDemoComponent } from './pages/components-demo/components-demo.component';
import { SidenavDemoComponent } from './pages/components-demo/sidenav-demo/sidenav-demo.component';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { FormFieldDemoComponent } from './pages/components-demo/form-field-demo/form-field-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsDemoComponent,
    SidenavDemoComponent,
    IntroduccionComponent,
    FormFieldDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StyleguideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
