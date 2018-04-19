import { Component, OnInit } from '@angular/core';
import { Complaint } from '../models/complaints';
import { WebService } from './../web.service';
import { glow } from '../animations/app.animations';
@Component({
  selector: 'app-complaint-sorted',
  templateUrl: './complaint-sorted.component.html',
  styleUrls: ['./complaint-sorted.component.css'],
  animations: [
    glow()
  ]
})
export class ComplaintSortedComponent implements OnInit {

  constructor(private webService: WebService) { }
  complaints: Complaint[];
  compSortedAccToStatus:Complaint[];
  getComplaints():Complaint[]{
    return this.complaints.filter((comp)=>{
      return comp.status==="open";
    })
  }
  async ngOnInit() {
    const response = await this.webService.getMessages();
    console.log(response.json());
    this.complaints = response.json();
    this.compSortedAccToStatus=this.getComplaints();
  }

}
