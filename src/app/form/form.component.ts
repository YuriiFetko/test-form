import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Observable} from "rxjs";
import {FormService} from "./shared/services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public versionByCurrentFramework = null;
  public jsFrameworks = [
    'angular', 'react', 'vue'
  ];
  public versionFrameworkData = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  }
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public hobby: string[] = [];

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
    this.setFormControls();
  }

  setFormControls() {
    this.form = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required
        ]),
        surname: new FormControl(null, [
          Validators.required,
        ]),
        birthday: new FormControl(null, [
          Validators.required
        ]),
        jsFrameworks: new FormControl(null, [
          Validators.required
        ]),
        versionFramework: new FormControl(
          {
            value: null,
            disabled: true
          },
          [Validators.required]
        ),
        email: new FormControl(null, [
            Validators.required, Validators.email
          ],
          [
            this.emailAsyncValidator.bind(this)
          ]),
        hobby: new FormControl(null, [])
      },
    );
  }

  submit() {
    console.log(this.form)
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.hobby.push(value);
    }
    this.form.get('hobby').setValue(this.hobby)
    event.input.value = '';
  }

  remove(fruit): void {
    const index = this.hobby.indexOf(fruit);

    if (index >= 0) {
      this.hobby.splice(index, 1);
    }

    if (this.hobby.length === 0) {
      this.form.get('hobby').setValue(null);
    }
  }

  setValueFramework(value) {
    this.versionByCurrentFramework = value;
    this.form.controls.versionFramework.enable();
    return this.versionByCurrentFramework = this.versionFrameworkData[this.versionByCurrentFramework]
  }

  private emailAsyncValidator(control: FormControl): Observable<ValidationErrors> {
    return this.formService.validateEmail(control.value);
  }

}
