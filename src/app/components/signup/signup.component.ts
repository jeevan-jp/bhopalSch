import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
declare const $;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
    'email': ''
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
    }
  };

  createForm(): void {
    this.signupForm = this.fb.group({
      role: ['', Validators.required],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dept: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
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

  ngOnInit() {
  }

}
