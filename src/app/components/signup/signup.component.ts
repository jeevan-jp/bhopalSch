import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { flyOutIn } from '../../animations/app.animations';
import { AuthService1 } from './../../auth2.service';
declare const $;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    flyOutIn()
  ]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  deptList: any = [
    'electricity',
    'municipal',
    'Police',
  ];

  constructor(private fb: FormBuilder,private auth: AuthService1) {
    this.createForm();
  }

  formErrors = {
    'role': '',
    'firstname': '',
    'lastname': '',
    'dept': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 3 characters long.',
      'maxlength': 'First name cannot be more than 20 characters long.'
    },
    'lastname': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 3 characters long.',
      'maxlength': 'Last name cannot be more than 20 characters long.'
    },
    'dept': {
      'required': 'Department name is required.'
    },
    'email': {
      'required': 'EmailId is required.',
      'email': 'Email not in valid format.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 8 characters long.',
      'maxlength': 'Password cannot be more than 50 characters long.'
    },
    'confirmPassword': {
      'required': 'Confirm Password is required.',
      'minlength': 'Confirm Password must be at least 8 characters long.',
      'maxlength': 'Confirm Password cannot be more than 50 characters long.'
    }
  };

  createForm(): void {
    this.signupForm = this.fb.group({
      role: ['', Validators.required],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dept: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
    }, { validator: this.matchingFields('password', 'confirmPassword')});
    this.signupForm.valueChanges
      .subscribe((data) => {
        this.onValueChanges(data);
      });
  }

  onValueChanges(data?: any): void {
    if (!this.signupForm) { return; }

    const form = this.signupForm;
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

  onSubmit() {
    $('button.btn-s')[0].disabled = true;
    // The submission to server code goes here.
    // console.log(this.signupForm.value);
    this.auth.register(this.signupForm.value);

    // console.log(JSON.stringify(this.signupForm.value));
    // this.signupForm.reset();
  }

  

  resetForm() {
    this.signupForm.reset();
  }

  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return { mismatchedFields: true };
      }
    };
  }

  ngOnInit() {
  }

}
