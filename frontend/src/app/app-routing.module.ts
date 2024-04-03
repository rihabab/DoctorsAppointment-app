import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HospitalListComponent } from './pages/hospital-list/hospital-list.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { NewHospitalComponent } from './pages/new-hospital/new-hospital.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'new-hospital', component: NewHospitalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
