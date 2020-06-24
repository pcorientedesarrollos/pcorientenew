import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../modelos/cliente.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: any = [{}];
  tele: any = [{}];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.dameClientes();
  }

  dameClientes() {
    this.clientesService.getClientes().subscribe(
      (data: Cliente) => {
        this.clientes = data;
        this.dameTelefonos();
      },
      (error) => console.log(error)
    );
  }

  dameTelefonos() {
    let telefonos: any = [{}];
    let telefonosClientes: any = [{}];
    this.clientesService.getTelefonosClientes().subscribe(
      (data) => {
        var clienteTemp = 0;
        telefonos = data;
        // this.tele = telefonos;
        telefonos.forEach((tel) => {
          this.clientes.forEach(cli => {
            
            if(cli.id == tel.idCliente){
              cli.numeroP = tel.telefono;
            }
          });
        });
      },
      (error) => console.log(error)
    );
  }
}
