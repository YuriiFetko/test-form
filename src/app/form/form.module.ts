import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FormComponent} from "./form.component";

@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class FormModule {
}
