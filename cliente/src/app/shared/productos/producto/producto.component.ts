import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { ProductosService } from '../../../services/productos.service';
import { ProveedoresService } from '../../../services/proveedores.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  private idProducto: number;
  producto: any = {};
  listaProveedores: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productos_service: ProductosService,
    private proveedores_service: ProveedoresService
  ) {
    this.activatedRoute.params.subscribe(p => {
      if (p.idProducto) {
        this.idProducto = p.idProducto;
      }
    })
  }

  ngOnInit(): void {
    if (this.idProducto > 0) {
      this.productos_service.getProducto(this.idProducto).subscribe(response => {
        this.producto = response[0];
        if (this.producto.servicio == '0') {
          this.producto.servicio = false;
        } else {
          this.producto.servicio = true;
        }
      });
    } else {
      this.producto = {};
    }
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.proveedores_service.getProveedores().subscribe(response => {
      this.listaProveedores = response;
    });
  }

  calcularPrecioPublico = function () {
    if (this.producto.costo && this.producto.utilidad) {
      let utilidad = (this.producto.utilidad / 100) + 1;
      if (!this.producto.importe) {
        this.producto.importe = 0;
      }
      let precio = (parseFloat(this.producto.costo) + parseFloat(this.producto.importe)) * utilidad;
      this.producto.precioPublico = precio.toFixed(2);
    } else if (this.producto.utilidad == 0 || this.producto.utilidad == null) {
      this.producto.precioPublico = parseFloat(this.producto.costo);
    }
  };

  guardarProducto(form) {
    if (this.producto.idProducto) {
      this.productos_service.updateProducto(this.producto).subscribe(res => {
        this.ngOnInit();
        alert('Registro actualizado');
        this.router.navigate(['productos']);
      });
    } else {
      this.productos_service.createProducto(this.producto).subscribe(response => {
        this.ngOnInit();
        alert('Registro creado');
        this.router.navigate(['productos']);
      });
    }
  }



}
