import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ReceptionComponent } from './pages/reception/reception.component';
import { NewDoctorComponent } from './pages/new-doctor/new-doctor.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';


const routes: Routes = [
  { path: '', redirectTo: '/reception', pathMatch: 'full' }, 
  { path: 'reception', component: ReceptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'new-doctor', component: NewDoctorComponent },
  { path: 'new-patient', component: NewPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
