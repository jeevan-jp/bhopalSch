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
import {  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CompformComponent } from './components/compform/compform.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './auth.service';
import { AdminviewComponent } from './adminview/adminview.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    CompformComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    AdminviewComponent
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
    //by jatin
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, FlexLayoutModule,
    AppRoutingModule,
    //till here
  ],
  providers: [WebService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
