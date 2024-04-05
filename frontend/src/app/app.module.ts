import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HospitalListComponent } from './pages/hospital-list/hospital-list.component';

import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';
import { NewHospitalComponent } from './pages/new-hospital/new-hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NewDoctorComponent } from './pages/new-doctor/new-doctor.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { ReceptionComponent } from './pages/reception/reception.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DashboardComponent,
    HomeComponent,
    HospitalListComponent,
    NewHospitalComponent,
    PatientListComponent,
    LoginComponent,
    NavbarComponent,
    NewDoctorComponent,
    NewPatientComponent,
    ReceptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
