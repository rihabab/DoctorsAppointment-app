import { Component, inject } from '@angular/core';
import { ApiResponseModel, User } from '../../core/classes/Hospital.model';
import { HospitalService } from '../../core/services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: User = new User();

  private hospitalService = inject(HospitalService);

  constructor(private router: Router){

  }

  onLogin(){
    this.hospitalService.loginUser(this.userObj).subscribe((res)=>{
      if(res){
        
        localStorage.setItem('loginuser', JSON.stringify(res));
        localStorage.setItem('user-email', JSON.stringify(res.email));
        localStorage.setItem('user-name', JSON.stringify(res.username));
        localStorage.setItem('user-id', JSON.stringify(res.id));
        this.hospitalService.user.email=res.email;
        this.hospitalService.user.username=res.username;
        
        this.router.navigate(['/dashboard']);
        
      }else {
        alert('problem')
      }
    })
  }
}
