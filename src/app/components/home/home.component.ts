import { Component, OnInit } from '@angular/core';
import { WebService } from '../../web.service'
import { Complaint } from '../../models/complaints';
import { flyInOut, expand, glow } from '../../animations/app.animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    expand(),
    glow()
  ]
})
export class HomeComponent implements OnInit {
  constructor( private webService: WebService ) {}
  complaints:Complaint[];
  async ngOnInit() {
    const response = await this.webService.getMessages();
    console.log(response.json());
    this.complaints = response.json();
  }

}
