import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../models/login/login-request';
import { ApiResponse } from '../../models/api-response';
import { LoginResponse } from '../../models/login/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient){}

  login(request: LoginRequest){
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/login` , request);
  }
}
