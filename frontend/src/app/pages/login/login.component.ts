import { Component, inject } from '@angular/core';
import { ApiResponseModel, User } from '../../core/classes/Doctor.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../core/services/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: User = new User();
  loginError:String = "";
  private doctorService = inject(DoctorService);

  constructor(private router: Router){

  }

  onLogin(){
    this.doctorService.loginUser(this.userObj).subscribe((res)=>{
      console.log(res);
      if(res.user){
        
        localStorage.setItem('loginuser', JSON.stringify(res));
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('user-email', JSON.stringify(res.user.email));
        localStorage.setItem('user-name', JSON.stringify(res.user.username));
        localStorage.setItem('user-id', JSON.stringify(res.user.id));
        localStorage.setItem('user-nature', JSON.stringify(res.user.nature));
        localStorage.setItem('userNatureId', JSON.stringify(res.userid));
        console.log("useer id is"+res.userid);
        this.doctorService.user.email=res.email;
        this.doctorService.user.username=res.username;
        
        if(res.user.nature == "doctor"){
          this.router.navigate(['/dashboard']);
        }else if (res.user.nature == "patient"){
          this.router.navigate(['/patient']);
        }
        
        
        
      }else if(res.status != 200) {
        alert('problem');
      }
    })
    this.loginError="false credentials";
  }
}
