import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material/';
declare const $;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>, public snack: MatSnackBar) {
      this.createForm();
     }

  loginForm: FormGroup;


  formErrors = {
    'email': '',
    'password': '',
  };

  validationMessages = {
    'email': {
      'required': 'Email ID is required.',
      'email': 'Email not in valid format'
    },
    'password': {
      'required': 'Password is required.'
    }
  };

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges
      .subscribe((data) => {
        this.onValueChanges(data);
      });
  }

  onValueChanges(data?: any): void {
    if (!this.loginForm) { return; }

    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (true) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          // console.log(this.formErrors);
          const messages = this.validationMessages[field];
          for (const err in control.errors) {
            if (true) {   // just doint this for TSLint:)
              this.formErrors[field] += messages[err] + ' ';
            }
          }
        }
      }
    }
  }

  login() {

    $('button.btn-s')[0].disabled = true;
    this.openSnackBar(this.loginForm.value['email']);
    console.log(this.loginForm.value);
    this.loginForm.reset();
    // this.auth.login(loginForm);

    this.dialogRef.close();
  }

  openSnackBar(email): Observable<any> {
    console.log('done');
    this.snack.open('Logged in as!', email, {
      duration: 4000,
    });
    return;
  }

  ngOnInit() {
  }

}
