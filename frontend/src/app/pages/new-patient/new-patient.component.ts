import { Component } from '@angular/core';
import { ApiResponseModel, Patient, PatientRequest } from '../../core/classes/Doctor.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { Doctor, DoctorRequest } from '../../core/classes/Doctor.model';
import { DoctorService } from '../../core/services/doctor.service';
import { PatientService } from '../../core/services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent {
  patient: Patient= new Patient();

  private subscription: Subscription [] = [];

  patientdata: PatientRequest= new PatientRequest();

  constructor(private patientSrv: PatientService){

  }
  
  onRegister(){
    const sub =this.patientSrv.registerPatient(this.patientdata).subscribe(
      (response: ApiResponseModel) => {
        alert("patient created successfully");
      },
      (error) => {
        alert(JSON.stringify(error));
        
      }
    );
    this.subscription.push(sub);
  }
  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}
