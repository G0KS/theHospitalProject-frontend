import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllDoctors() {
    return this.http.get(`${this.base_url}/get-all-doctors`);
  }
}
