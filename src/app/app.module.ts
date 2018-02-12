import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleguideModule } from './styleguide/styleguide.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StyleguideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
