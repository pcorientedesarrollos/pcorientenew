import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelos/cliente.interface';
import { Observable } from 'rxjs';
import { Telefono } from '../modelos/telefono.interface';

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

  postTelefonoNuevo(telefono: Telefono){
    return this.http.post(`${this.API_URI}/telefonos`,telefono);
  }

  postCrearCliente(cliente: Cliente){
    return this.http.post(`${this.API_URI}/clientes`,cliente);
  }

  getCliente(id: string){
      return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  actualizarCliente(id: string | number, actualizarCliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.API_URI}/clientes/${id}`, actualizarCliente);
  }

  EliminarCliente(idCliente: string){
      return this.http.delete(`${this.API_URI}/clientes/${idCliente}`);
  }

  EliminarTelefono(idCliente: string){
    return this.http.delete(`${this.API_URI}/telefonos/${idCliente}`)
  }

  // EliminarUnTelefono(idTelefono: string){
  //   return this.http.delete(`${this.API_URI}/telefonos/${idTelefono}`)
  // }

  
}
