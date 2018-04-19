import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../../animations/app.animations';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
