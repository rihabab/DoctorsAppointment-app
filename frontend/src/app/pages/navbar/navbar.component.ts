import { Component } from '@angular/core';
import { User } from '../../core/classes/Hospital.model';
import { HospitalService } from '../../core/services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: User = new User();
  Name: String ='';
  Email: any='';

  constructor(private hospitalService: HospitalService, private router: Router) {
    this.user=this.hospitalService.user;
    this.user.email=this.hospitalService.user.email;
    this.user.username=this.hospitalService.user.username;
    this.Email=localStorage.getItem('user-email');
  }

  logout(){
    this.user.email='';
    this.user.username='';
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
