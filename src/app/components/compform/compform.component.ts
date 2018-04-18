import { WebService } from './../../web.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { flyInOut, expand } from '../../animations/app.animations';
declare const $;

@Component({
  selector: 'app-compform',
  templateUrl: './compform.component.html',
  styleUrls: ['./compform.component.css'],
  animations: [
    flyInOut(),
    expand()
  ]
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

  constructor(private fb: FormBuilder, private webService: WebService) {
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
      'minlength': 'Description must be at least 10 characters long.'
    }
  };

  createForm(): void {
    this.compForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      dept: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
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
    this.compForm.value['status'] = 'open';
    this.webService.postMessages(this.compForm.value);
    console.log(JSON.stringify(this.compForm.value));
    this.compForm.reset();
    // The submission to server code goes here.
  }

  ngOnInit() {
  }
}
