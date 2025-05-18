import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LandingPageService {
  private baseUrl = 'http://localhost:5900/landing'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  getLandingById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}