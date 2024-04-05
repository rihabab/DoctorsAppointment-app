import { Component } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { ApiResponseModel, Appointment } from '../../core/classes/Doctor.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  appointments:Appointment[]=[];
  
  constructor(private appSrv: AppointmentService,private datePipe: DatePipe){
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

  formatDate(dateString: string): string {
    if (!dateString) {
      return ''; // Or you can return any other default value
    }
    
    // Use DatePipe to format the date
    return this.datePipe.transform(dateString, 'yyyy-MM-dd') ?? '';
  }
  
}
