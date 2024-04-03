import { Component, OnDestroy } from '@angular/core';
import { ApiResponseModel, Hospital } from '../../core/classes/Hospital.model';
import { HospitalService } from '../../core/services/hospital.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {
  hospital: Hospital= new Hospital();

  private subscription: Subscription [] = [];


  constructor(private hospitalSrv: HospitalService){

  }
  
  onRegister(){
    const sub =this.hospitalSrv.registerHospital(this.hospital).subscribe(
      (response: ApiResponseModel) => {
        alert("Hospital created successfully");
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
