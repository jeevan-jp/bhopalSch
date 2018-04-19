import { Component, OnInit } from '@angular/core';
import { expand } from '../../animations/app.animations';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  animations: [
    expand()
  ]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
