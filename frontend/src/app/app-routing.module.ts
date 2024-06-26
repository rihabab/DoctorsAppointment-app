import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ReceptionComponent } from './pages/reception/reception.component';
import { NewDoctorComponent } from './pages/new-doctor/new-doctor.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { PatientDashComponent } from './pages/patient-dash/patient-dash.component';
import { DoctorAppListComponent } from './pages/doctor-app-list/doctor-app-list.component';
import { PatientAppComponent } from './pages/patient-app/patient-app.component';


const routes: Routes = [
  { path: '', redirectTo: '/reception', pathMatch: 'full' }, 
  { path: 'reception', component: ReceptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'new-doctor', component: NewDoctorComponent },
  { path: 'new-patient', component: NewPatientComponent },
  { path: 'patient', component: PatientDashComponent },
  { path: 'profile', component: DoctorAppListComponent },
  { path: 'myAppointments', component:  PatientAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
