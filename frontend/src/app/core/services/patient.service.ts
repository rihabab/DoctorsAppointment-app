import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, PatientRequest } from '../classes/Doctor.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  registerPatient(Data: PatientRequest): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.api_url_patient, Data);
  }

  GetDoctorApps(city: String, profession:String) : Observable<any[]> {
    console.log("city is" +city);
    console.log("profession is" +profession);
    console.log(environment.api_url+`?city=${city}&profession=${profession}`);
    return this.http.get<any[]>(environment.api_url+`?city=${city}&profession=${profession}`);
  }
}
