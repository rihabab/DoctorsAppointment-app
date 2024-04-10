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
  professions : String[] = ["Anesthésiologie", "Cardiologie", "Dermatologie", "Endocrinologie", "Gastro-entérologie","Gériatrie", "Hématologie", "Infectiologie", "Médecine interne", "Néphrologie","Neurologie","Obstétrique et gynécologie","Oncologie","Ophtalmologie","Orthopédie","Oto-rhino-laryngologie (ORL)","Pédiatrie","Pneumologie","Psychiatrie","Radiologie"];
  SelectedCity:String = "";
  SelectedProfession: String = "";

  doctors: Doctor[] = [];
  
  constructor(private appSrv: DoctorService){
    this.appSrv.GetAll(this.SelectedCity,this.SelectedProfession).subscribe((res: any[]) => {
      if(res){
        this.doctors=res;
        console.log(this.doctors);
      }else{
        alert(res);
      }
    })
  }

}
