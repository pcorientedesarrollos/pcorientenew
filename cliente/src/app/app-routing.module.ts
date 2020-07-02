import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './shared/clientes/clientes.component';
import { NuevoClienteComponent } from './shared/nuevo-cliente/nuevo-cliente.component';
import { ProductosComponent } from './shared/productos/productos.component';
import { ProductoComponent } from './shared/productos/producto/producto.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'nuevoCliente', component: NuevoClienteComponent },
  { path: 'editarCliente/:id', component: NuevoClienteComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:idProducto', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
