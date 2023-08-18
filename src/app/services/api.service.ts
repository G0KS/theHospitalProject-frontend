import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addDoctor(body:any){
    return this.http.post(`${this.base_url}/add-doctor`,body)
  }
  getAllDoctors() {
    return this.http.get(`${this.base_url}/get-all-doctors`);
  }

  getAllPatients() {
    return this.http.get(`${this.base_url}/get-all-patients`);
  }

  addPatient(body: any) {
    return this.http.post(`${this.base_url}/add-patient`, body);
  }

  deleteDoctor(id:any){
    return this.http.delete(`${this.base_url}/delete-doctor/${id}`)
  }
}
