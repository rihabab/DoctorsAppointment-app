import { Injectable } from '@angular/core';
import { ApiResponseModel, Doctor, DoctorRequest, User } from '../classes/Doctor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  user: User= new User();
  
  constructor(private http: HttpClient) {}

  registerDoctor(doctorData: DoctorRequest): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.api_url, doctorData);
  }

  loginUser(userData: User): Observable<any> {
    return this.http.post<any>(environment.api_url_auth_login, userData);
  }
  

}
