import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StyleguideModule } from './styleguide/styleguide.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StyleguideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
