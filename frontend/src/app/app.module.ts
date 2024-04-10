import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewDoctorComponent } from './pages/new-doctor/new-doctor.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { ReceptionComponent } from './pages/reception/reception.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { PatientDashComponent } from './pages/patient-dash/patient-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DashboardComponent,
    PatientListComponent,
    LoginComponent,
    NewDoctorComponent,
    NewPatientComponent,
    ReceptionComponent,
    NewAppointmentComponent,
    PatientDashComponent
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
