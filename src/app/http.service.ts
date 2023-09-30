import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getHomeData() {
    return this.http.get(`${this.url}/home/`);
  }

  getAboutData() {
    return this.http.get(`${this.url}/about/`);
  }

  getWorkData() {
    return this.http.get(`${this.url}/work/`);
  }

  getProjectData() {
    return this.http.get(`${this.url}/projects/`);
  }

  getCertificateData() {
    return this.http.get(`${this.url}/certificates/`);
  }
}
