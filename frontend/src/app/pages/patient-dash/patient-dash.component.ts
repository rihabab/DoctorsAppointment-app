import { Component } from '@angular/core';
import { DoctorService } from '../../core/services/doctor.service';
import { Doctor } from '../../core/classes/Doctor.model';

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrl: './patient-dash.component.css'
})
export class PatientDashComponent {
  searchTerm: String = "";
  cities : String[] = ["Rabat", "Tanger", "Casablanca", "Agadir", "Marakech"];
  city:String = "";
  profession: String = "";

  doctor: Doctor[] = [];
  
  constructor(private appSrv: DoctorService){
    this.appSrv.GetAll(this.searchTerm,this.searchTerm).subscribe((res: any[]) => {
      if(res){
        this.doctor=res;
        
      }else{
        alert(res);
      }
    })
  }

}
