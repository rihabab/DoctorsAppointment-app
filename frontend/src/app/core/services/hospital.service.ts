import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Hospital, User } from '../classes/Hospital.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  user: User= new User();
  constructor(private http: HttpClient) { }

  registerHospital(hospitalData: Hospital): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.api_url, hospitalData);
  }

  loginUser(userData: User): Observable<any> {
    return this.http.post<any>(environment.api_url_auth_login, userData);
  }


}
