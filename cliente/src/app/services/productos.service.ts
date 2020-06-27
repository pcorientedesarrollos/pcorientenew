import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductos() {
    const result = this.http.get(`${this.API_URI}/productos`)
    return result
  }

  getProducto(idProducto: number) {
    const result = this.http.get(`${this.API_URI}/productos/${idProducto}`)
    return result
  }

  createProducto(producto: Producto) {
    const result = this.http.post(`${this.API_URI}/productos`, producto)
    return result
  }

  updateProducto(producto: Producto) {
    const result = this.http.put(`${this.API_URI}/productos/${producto.idProducto}`, producto)
    return result
  }
}
