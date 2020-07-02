import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
// import { FormsModule } from '@angular/forms';

import { ClientesComponent } from './shared/clientes/clientes.component';
import { NuevoClienteComponent } from './shared/nuevo-cliente/nuevo-cliente.component';

import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ProductosComponent } from './shared/productos/productos.component';
import { ProductoComponent } from './shared/productos/producto/producto.component';

//Services
import { ClientesService } from './services/clientes.service';
import { ProductosService } from './services/productos.service';
import { ProveedoresService } from './services/proveedores.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    DashboardComponent,
    NuevoClienteComponent,
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    ClientesService,
    ProductosService,
    ProveedoresService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
