import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { flyInOut } from '../../animations/app.animations';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    flyInOut()
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  };

  validationMessages = {
    'firstName': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 3 characters long.',
      'maxlength': 'First name cannot be more than 15 characters long.'
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 3 characters long.',
      'maxlength': 'Last name cannot be more than 15 characters long.'
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

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    }, { validator: this.matchingFields('password', 'confirmPassword')});

    this.registerForm.valueChanges
    .subscribe((data) => {
      this.onValueChanges(data);
    });
  }

  onSubmit() {
    // console.log(this.registerForm.errors);
    console.log(this.registerForm.value);
    this.auth.register(this.registerForm.value);
  }

  onValueChanges(data?: any): void {
    if (!this.registerForm) { return; }

    const form = this.registerForm;
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

  resetForm() {
    this.registerForm.reset();
  }

  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return { mismatchedFields: true };
      }
    };
  }
}
