import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../models/login/login-request';
import { ApiResponse } from '../../models/api-response';
import { LoginResponse } from '../../models/login/login-response';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../../models/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient){}

  login(request: LoginRequest): Observable<ApiResponse<LoginResponse>>{
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/login` , request);
  }

  register(request: RegisterRequest): Observable<ApiResponse<unknown>>{
    return this.http.post<ApiResponse<unknown>>(`${this.apiUrl}/register`,request);
  }
}
