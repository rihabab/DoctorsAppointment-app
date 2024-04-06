import { Component } from '@angular/core';
import { ApiResponseModel, Doctor, DoctorRequest } from '../../core/classes/Doctor.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { DoctorService } from '../../core/services/doctor.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrl: './new-doctor.component.css'
})
export class NewDoctorComponent {
  doctor: Doctor= new Doctor();

  private subscription: Subscription [] = [];

  doctordata: DoctorRequest= new DoctorRequest();

  constructor(private doctorSrv: DoctorService){

  }
  
  onRegister(){
    const sub =this.doctorSrv.registerDoctor(this.doctordata).subscribe(
      (response: ApiResponseModel) => {
        alert("doctor created successfully");
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
