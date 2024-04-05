import { Component } from '@angular/core';
import { ApiResponseModel, Hospital } from '../../core/classes/Hospital.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { HospitalService } from '../../core/services/hospital.service';
import { Doctor, DoctorRequest } from '../../core/classes/Doctor.model';
import { DoctorService } from '../../core/services/doctor.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent {
  
}
