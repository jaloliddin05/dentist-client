import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constanta';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  getMe() {
    return this.httpClient.get(`${API_URL.USER}/me`, { withCredentials: true });
  }
}
