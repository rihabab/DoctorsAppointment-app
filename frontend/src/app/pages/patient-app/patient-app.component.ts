import { Component } from '@angular/core';
import { Appointment } from '../../core/classes/Doctor.model';
import { AppointmentService } from '../../core/services/appointment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-app',
  templateUrl: './patient-app.component.html',
  styleUrl: './patient-app.component.css'
})
export class PatientAppComponent {
  appointments:Appointment[]=[];
  patientid:number=0;
  constructor(private appSrv: AppointmentService,private datePipe: DatePipe){
    const data = localStorage.getItem('userNatureId');
    if(data != null){
      this.patientid = JSON.parse(data);
    }
    this.appSrv.GetByPatientId(this.patientid).subscribe((res: any[]) => {
      if(res){
        this.appointments=res;
        console.log(this.appointments);
        // alert(this.appointments);
      }else{
        alert(res);
      }
    })
  }

  formatDate(dateString: string): string {
    if (!dateString) {
      return ''; // Or you can return any other default value
    }
    
    // Use DatePipe to format the date
    return this.datePipe.transform(dateString, 'yyyy-MM-dd') ?? '';
  }
  
}
