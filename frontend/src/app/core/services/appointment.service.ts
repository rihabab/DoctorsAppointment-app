import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Appointment } from '../classes/Hospital.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http : HttpClient) { }

  // newApp(app: Appointment) : Observable<ApiResponseModel> {
  //   return this.http.post<ApiResponseModel>(environment.api_url_app_create, app);
  // }

  GetAll() : Observable<any[]> {
    return this.http.get<any[]>(environment.api_url_get_app);
  }
  
}
