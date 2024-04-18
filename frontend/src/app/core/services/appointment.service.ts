import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Appointment } from '../classes/Doctor.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http : HttpClient) { }

  
  registerApp(appData: Appointment): Observable<any> {
    return this.http.post<any>(environment.api_url_create_app, appData);
  }
  GetAll() : Observable<any[]> {
    return this.http.get<any[]>(environment.api_url_get_app);
  }
  GetByDoctorId(id:number) : Observable<any[]> {
    return this.http.get<any[]>(environment.api_url_get_app+`/doctor/${id}`);
  }
  GetByPatientId(id:number) : Observable<any[]> {
    return this.http.get<any[]>(environment.api_url_get_app+`/patient/${id}`);
  }
  GetAppointmentByID(id:number) : Observable<Appointment> {
    return this.http.get<Appointment>(environment.api_url_get_app+`/${id}`);
  }
  PutAppointment(id:number, app:Appointment) : Observable<any> {
    return this.http.put<any>(environment.api_url_get_app+`/${id}`,app);
  }
  
}
