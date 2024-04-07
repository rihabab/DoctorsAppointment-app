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
}
