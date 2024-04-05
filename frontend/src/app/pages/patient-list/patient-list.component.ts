import { Component } from '@angular/core';
import { Appointment } from '../../core/classes/Doctor.model';
import { AppointmentService } from '../../core/services/appointment.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {
  appointments:Appointment[]=[];
  
  constructor(private appSrv: AppointmentService){
    this.appSrv.GetAll().subscribe((res: any[]) => {
      if(res){
        this.appointments=res;
        console.log(this.appointments);
        // alert(this.appointments);
      }else{
        alert(res);
      }
    })
  }

 
  
}
