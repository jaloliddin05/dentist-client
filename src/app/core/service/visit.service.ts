import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constanta';

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  constructor(private readonly httpClient: HttpClient) {}

  getByDate(date: string) {
    return this.httpClient.get(`${API_URL.VISIT}/by-date`, {
      withCredentials: true,
      params: { date },
    });
  }
}
