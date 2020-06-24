import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getClientes(){
   const result = this.http.get(`${this.API_URI}/clientes`)
   return result
  }
  getTelefonosClientes(){
    const resultado = this.http.get(`${this.API_URI}/telefonos`)
    return resultado
  }

}
