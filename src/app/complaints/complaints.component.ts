import { Component, OnInit } from '@angular/core';
import {Complaint} from '../models/complaints';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  complaints: Complaint[] = [
    { title: '1', body: 'THIS IS BODY', id: 1 },
    {title: '2', body: 'THIS IS BODY', id: 2},
    {title: '3', body: 'THIS IS BODY', id: 3},
    {title: '4', body: 'THIS IS BODY', id: 4},
    {title: '5', body: 'THIS IS BODY', id: 5},
  ];
  reverse: Complaint[] = this.complaints.sort((a
    : Complaint, b: Complaint) => {
    return -(a.id - b.id);
  });
}
