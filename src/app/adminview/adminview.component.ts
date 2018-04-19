import { WebService } from './../web.service';
import { Component, OnInit } from '@angular/core';
import { Complaint } from '../models/complaints';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  constructor(private webService: WebService) { }

  complaints: Complaint[];
  async ngOnInit() {
    const response = await this.webService.getMessages();
    console.log(response.json());
    this.complaints = response.json();
  }

}
