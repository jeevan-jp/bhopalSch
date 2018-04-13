import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.compForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      dept: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(350)]]
    });
  }

  ngOnInit() {
  }

}
