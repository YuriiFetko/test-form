import {NgModule} from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class MaterialModule {
}
