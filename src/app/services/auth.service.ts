import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiurl;


interface auth {
  status: any;
  data: any;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginStatus = false;
  role = '';

  constructor(private http: HttpClient) { }

  getapi() {
    return API_URL;
  }

  post(ep: any, q: any) {
    return this.http.post<auth>(API_URL + ep, q);
  }

  get(ep: any) {
    return this.http.get<auth>(API_URL + ep);
  }

  patch(ep: any, q: any) {
    return this.http.patch<auth>(API_URL + ep, q);
  }

  delete(ep: any, q: any) {
    return this.http.delete<auth>(API_URL + ep, q);
  }
}