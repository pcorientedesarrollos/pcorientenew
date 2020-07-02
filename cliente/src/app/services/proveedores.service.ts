import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProveedores() {
    const result = this.http.get(`${this.API_URI}/proveedores`)
    return result
  }

}
