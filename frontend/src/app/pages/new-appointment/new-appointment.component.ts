import { Component } from '@angular/core';
import { ApiResponseModel, Appointment } from '../../core/classes/Doctor.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppointmentService } from '../../core/services/appointment.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {
  appointment: Appointment= new Appointment
  ();

  private subscription: Subscription [] = [];

  
  constructor(private appSrv: AppointmentService){
    //this.appointment.doctorid.id=localStorage.getItem("userNatureId");
    const data = localStorage.getItem('userNatureId');
    if(data != null){
      this.appointment.doctorid.id = JSON.parse(data);
      console.log("nature registered");
    }

  }
  
  onRegister(){
    console.log("onregister trigered");
    const sub =this.appSrv.registerApp(this.appointment).subscribe(
      (response: ApiResponseModel) => {
        alert("appointment created successfully");
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
