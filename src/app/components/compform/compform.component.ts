import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare const $;

@Component({
  selector: 'app-compform',
  templateUrl: './compform.component.html',
  styleUrls: ['./compform.component.css']
})
export class CompformComponent implements OnInit {

  compForm: FormGroup;
  deptList: any = [
    'electricity',
    'water',
    'municipal',
    'PWD',
    'Police',
    'Cybercell',
    'Health'
  ];

  constructor(private fb: FormBuilder, private location: Location) {
    this.createForm();
  }

  formErrors = {
    'title': '',
    'dept': '',
    'description': ''
  };

  validationMessages = {
    'title': {
      'required': 'Complaint title is required.',
      'minlength': 'Title must be at least 4 characters long.',
      'maxlength': 'Title cannot be more than 50 characters long.'
    },
    'dept': {
      'required': 'Department is required.'
    },
    'description': {
      'required': 'Description title is required.',
      'minlength': 'Description must be at least 10 characters long.',
      'maxlength': 'Description cannot be more than 500 characters long.'
    }
  };

  createForm(): void {
    this.compForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      dept: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(350)]]
    });
    this.compForm.valueChanges
      .subscribe((data) => {
        this.onValueChanges(data);
      });
  }

  onValueChanges(data?: any): void {
    if (!this.compForm) { return; }

    const form = this.compForm;
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
    console.log(JSON.stringify(this.compForm.value));
    this.compForm.reset();
    document.location.reload();
    // The submission to server code goes here.
  }

  ngOnInit() {
  }

}
