import { Component, inject } from '@angular/core';
import { User } from './core/classes/Hospital.model';
import { HospitalService } from './core/services/hospital.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docsapp';
  user: User = this.hospitalService.user;
  Name: String ='';
  Email: String='';

  constructor(private hospitalService :HospitalService,private router: Router) {
    const data = localStorage.getItem('loginuser');
    if(data != null){
      this.user = JSON.parse(data);
      // location.reload();
    }
  }

  logout(){
    this.user= new User();
    localStorage.clear();
    // localStorage.removeItem("user-name");
    
    this.router.navigate(['/login']);
  }

  
  
}
