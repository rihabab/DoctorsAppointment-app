import { Component } from '@angular/core';
import { Appointment } from '../../core/classes/Doctor.model';
import { AppointmentService } from '../../core/services/appointment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-doctor-app-list',
  templateUrl: './doctor-app-list.component.html',
  styleUrl: './doctor-app-list.component.css'
})
export class DoctorAppListComponent {
  doctorID: number=0;
  appointments:Appointment[]=[];
  groupedAppointments: { [date: string]: Appointment[] } = {};
  constructor(private appSrv: AppointmentService,private datePipe: DatePipe){
    const storedID = localStorage.getItem("doctor-id");
    if (storedID !== null) {
      this.doctorID = JSON.parse(storedID);
    } else {
      console.error("'doctor-id' not found in localStorage");
    }
    console.log(this.doctorID);
    console.log("ngOnInit doctor id"+ this.doctorID);

    
  }

  formatDate(dateString: string): string {
    if (!dateString) {
      return ''; // Or you can return any other default value
    }
    
    // Use DatePipe to format the date
    return this.datePipe.transform(dateString, 'yyyy-MM-dd') ?? '';
  }
  

  

  ngOnInit(): void {
    console.log("constructor doctor id"+ this.doctorID);
    this.appSrv.GetByDoctorId(this.doctorID).subscribe((res: any[]) => {
      if(res){
        this.appointments=res;
        //this.appointments=res.filter(app => !app.taken);
        console.log(this.appointments);
        
        // grouping by date
        this.appointments.forEach(appointment => {
          if (!this.groupedAppointments[appointment.date]) {
            this.groupedAppointments[appointment.date] = [];
          }
          this.groupedAppointments[appointment.date].push(appointment);
        });
        console.log(this.groupedAppointments);
      }else{
        alert(res);
      }
    })
   
  }
  
}
