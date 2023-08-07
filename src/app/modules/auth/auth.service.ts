import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../core/constanta';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login(data: any) {
    return this.httpClient.post(`${API_URL.AUTH}/login`, data, {
      withCredentials: true,
    });
  }
}
