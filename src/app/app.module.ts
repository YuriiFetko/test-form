import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material/material.module";

import {AppComponent} from './app.component';
import {FormModule} from "./form/form.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
