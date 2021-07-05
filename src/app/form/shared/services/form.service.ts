import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ValidationErrors} from "@angular/forms";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private email = ['test@test.test'];
  test: Subject<any>;

  constructor() {
  }

  validateEmail(userEmail: string): Observable<ValidationErrors> {
    return new Observable<ValidationErrors>
    (res => {
      const user = this.email.find(email => email === userEmail);

      if (user) {
        res.next({
          nameError: 'The user with this email already exists'
        });
        res.complete();
      }

      res.next(null);
      res.complete();
    }).pipe(
      delay(2000)
    )
  }
}
