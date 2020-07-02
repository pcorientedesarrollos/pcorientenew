import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../modelos/cliente.interface';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Telefono } from '../../modelos/telefono.interface';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
})

//Inicializamos clase cliente
export class NuevoClienteComponent implements OnInit {
  cliente: Cliente = {
    nombre: '',
    rfc: '',
    direccion: '',
    zip: 0,
    estado: '',
    municipio: '',
    pais: '',
    correo: '',
    especial: '',
    registro: moment([]).format('YYYY-MM-DD'),
  };

  editar: boolean = false;
  guardar: boolean = false;
  telefonosCliente: Array<Telefono> = [];
  tele: any = [];
  telefono: Telefono = {};
  telefonoVista: string;
  obtenerID: any = [];
  idCliente: any = {};

  //Invocamos el servicio de cliente
  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.obtenerId();
    this.obtenerTelefonosCliente();
    if (params.id) {
      this.clientesService.getCliente(params.id).subscribe(
        (res) => {
          this.cliente = res[0];
          this.editar = true;
        },
        (error) => console.log(error)
      );
    }
  }
  //Se obtiene del formulario el nuevo cliente
  altaCliente = () => {
    this.guardar = true;
    this.clientesService.postCrearCliente(this.cliente).subscribe(
      (data) => {
        this.obtenerID = data;
        this.idCliente = this.obtenerID.reps[0];
        this.router.navigate(['/clientes']);
        this.nuevoTelefonoCrear()
      },
      (error) => console.log(error)
    );
  };

  //Actualizamos el cliente
  actualizarCliente = () => {
    this.clientesService
      .actualizarCliente(this.cliente.id, this.cliente)
      .subscribe(
        (res) => {
          this.router.navigate(['/clientes']);
        },
        (err) => console.log(err)
      );
  };

  //Agregamos el nuevo telefono al arreglo
  nuevoTelefono = (tel) => {
    this.telefono = new Object();
    this.telefono.idCliente = this.obtenerId().id;
    this.telefono.telefono = tel;
    this.telefonosCliente.push(this.telefono);
       if (parseInt(this.telefono.idCliente) >= 1) {
      this.clientesService.postTelefonoNuevo(this.telefono).subscribe(
        (data) => {
        },
        (error) => console.log(error)
      );
    } 
    this.telefonoVista = '';
  };

  nuevoTelefonoCrear = () =>{
    console.log(this.idCliente.id)
    this.telefonosCliente.forEach((cel) =>{
      cel.idCliente = this.idCliente.id
      this.clientesService.postTelefonoNuevo(cel).subscribe(
        (data) => {
          console.log(data );
        },
        (error) => console.log(error)
      );
    });
  }

  //Obtenemos los telefonos del cliente
  obtenerTelefonosCliente = () => {
    const id = this.obtenerId();
    this.clientesService.getTelefonosClientes().subscribe(
      (data) => {
        this.tele = data;
        this.tele.forEach((tel) => {
          if (id.id == tel.idCliente) {
            this.telefonosCliente.push(tel);
          }
        });
      },
      (error) => console.log(error)
    );
  };

  eliminarTelefono = (id) => {
    const client = this.obtenerId().id;
    if (parseInt(client) >= 1) {
      console.log(id)
      this.clientesService.EliminarTelefono(id).subscribe(
        (res) => {
          console.log(res)
          location.reload()
        },
        (err) => console.log(err)
      );

    } else {
      this.telefonosCliente.splice(id, 1);
    }
  };

  //Obtenemos el id del cliente al momento de editar
  obtenerId = () => this.activatedRoute.snapshot.params;
}
