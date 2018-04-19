
import { WebService } from './../web.service';
import { Component, OnInit } from '@angular/core';
import { Complaint } from '../models/complaints';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
  animations: [
    flyInOut(),
    expand()
  ]
})

export class ComplaintsComponent implements OnInit {

  constructor( private webService: WebService ) {}

  complaints: Complaint[];
  async ngOnInit() {
    const response = await this.webService.getMessages();
    console.log(response.json());
    this.complaints = response.json();
  }
  // reverse: Complaint[] = this.complaints.sort((a
  //   : Complaint, b: Complaint) => {
  //   return -(a.id - b.id);b
  // });
}
