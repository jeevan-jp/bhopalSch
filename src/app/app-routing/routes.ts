import { LoginComponent } from './../components/login/login.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { ComplaintsComponent } from '../complaints/complaints.component';
import { CompformComponent } from '../components/compform/compform.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { RegisterComponent } from '../components/register/register.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AdminviewComponent } from '../adminview/adminview.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'complaint', component: ComplaintsComponent },
    { path: 'cform' , component: CompformComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'pageNotFound', component: NotfoundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'signupDep', component: SignupComponent },
    { path: 'admin', component: AdminviewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' }
];
