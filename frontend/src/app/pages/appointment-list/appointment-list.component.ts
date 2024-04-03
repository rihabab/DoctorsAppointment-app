import { Component } from '@angular/core';
import { ApiResponseModel, Appointment } from '../../core/classes/Hospital.model';
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
    this.appSrv.newApp(this.appointment).subscribe((res: ApiResponseModel) => {
      if(res){
        alert(res.body);
      }else{
        alert(res);
      }
    })
  }
}
