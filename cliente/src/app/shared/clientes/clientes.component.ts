import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: any[] = [];
  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.dameClientes();
  }

  dameClientes() {
    this.clientesService.getClientes().subscribe(
      (res) => {
     clientes = res
      },
      (error) => console.log(error)
    );
  }
}
