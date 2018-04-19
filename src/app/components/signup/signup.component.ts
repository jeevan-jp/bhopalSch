import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { flyOutIn } from '../../animations/app.animations';
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
    'water',
    'municipal',
    'PWD',
    'Police',
    'Cybercell',
    'Health'
  ];

  constructor(private fb: FormBuilder) {
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
    console.log(JSON.stringify(this.signupForm.value));
    this.signupForm.reset();
    // The submission to server code goes here.
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
