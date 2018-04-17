import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../components/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private dialog: MatDialog) { }  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, { width: '300', height: '500' });

    dialogRef.afterClosed()
      .subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
