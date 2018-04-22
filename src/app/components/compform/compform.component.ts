import { WebService } from './../../web.service';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { flyOutIn, glow } from '../../animations/app.animations';
import { MatSnackBar } from '@angular/material';
declare const $;

@Component({
  selector: 'app-compform',
  templateUrl: './compform.component.html',
  styleUrls: ['./compform.component.css'],
  animations: [
    flyOutIn(),
    glow()
  ]
})
export class CompformComponent implements OnInit {

  compForm: FormGroup;
  deptList: any = [
    'electricity',
    'municipal',
    'education',
    'forest',
    'police'
  ];
  isLoggedIn = this.auth_ser.isLoggedInGuest;

  constructor(private fb: FormBuilder, private webService: WebService, 
      private route: Router, public snackBar: MatSnackBar, private auth_ser: AuthService) {
    this.createForm();
  }

  formErrors = {
    'title': '',
    'mobile': '',
    'dept': '',
    'description': ''
  };

  validationMessages = {
    'title': {
      'required': 'Complaint title is required.',
      'minlength': 'Title must be at least 4 characters long.',
      'maxlength': 'Title cannot be more than 50 characters long.'
    },
    'mobile': {
      'required': 'Mobile number is required.',
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
      mobile: ['', Validators.required],
      dept: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      ivrs: [''],
      division: [''],
      district: [''],
      location: [''],
      address: [''],
      level: [''],
      type_level: [''],
      file: ['']
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
    if(this.isLoggedIn===false) {
      alert('Please Login to continue.');
      this.compForm.reset();
      return;
    }
    $('button.btn-s')[0].disabled = true;
    this.compForm.value['status'] = 'open'; 
    this.openSnackBar('Complaint submitted', this.compForm.status);  
    // this.compForm.value['latitude'] = this.latitude || '';
    // this.compForm.value['longitude'] = this.longitude;
    this.webService.postMessages(this.compForm.value);
    console.log(JSON.stringify(this.compForm.value));
    this.compForm.reset();
    this.route.navigateByUrl('/home');
    // The submission to server code goes here.
  }

  openSnackBar(m1: string, m2: string) {
    this.snackBar.open(m1, m2, {
      duration: 4000,
    })
  }

  ngOnInit() {
    let latitude;
    let longitude;
    $(`#electricity`).hide();
    $(`#municipal`).hide();
    $('#education').hide();
    // console.log(this.compForm);
    this.compForm.controls['dept'].valueChanges
      .subscribe((data) => {  
      $(`#electricity`).hide();
      $(`#municipal`).hide();
      $('#education').hide();
        if(data === 'electricity' || data === 'municipal' || data === 'education') {
          $(`#${data}`).show(1000);
          // console.log(data);
        }
      });
      
    $('#qrCode').on('click', () => {
      confirm('Cannot detect camera!');
    })

    $('#location').on('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          console.log('lat: ' + latitude + ' lon: ' + longitude);
        })
      }
    })
  }
}
