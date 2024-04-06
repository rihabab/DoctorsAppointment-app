import { Component, inject } from '@angular/core';
import { User } from './core/classes/Doctor.model';
import { DoctorService } from './core/services/doctor.service';
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

  constructor(private hospitalService :DoctorService,private router: Router) {
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
    
    this.router.navigate(['/']);
  }

  
  
}
