import { WebService } from './web.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import {routingComponents}  from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ComplaintsComponent,
    FooterComponent,
    HeaderComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
  ],
  providers: [WebService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
