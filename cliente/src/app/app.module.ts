import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { ClientesComponent } from './shared/clientes/clientes.component';
import { NuevoClienteComponent } from './shared/nuevo-cliente/nuevo-cliente.component';

import { DashboardComponent } from './shared/dashboard/dashboard.component';

//Services
import { ClientesService } from './services/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    DashboardComponent,
    NuevoClienteComponent

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
