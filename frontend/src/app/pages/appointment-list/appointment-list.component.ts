import { Component } from '@angular/core';
import { ApiResponseModel, Appointment } from '../../core/classes/Doctor.model';
import { AppointmentService } from '../../core/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  

  appointment: Appointment = new Appointment();
  constructor(private appSrv: AppointmentService){}

  onSubmit(){
   
  }
}
