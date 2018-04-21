import { Component, OnInit } from '@angular/core';
import { expand } from '../../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    expand()
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
