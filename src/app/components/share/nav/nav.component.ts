import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CarritoDeComprasService } from 'src/app/services/carrito-de-compras.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

import { Producto } from '../../models/producto';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  usuario: any;
  cantidadDeProductos$: Observable<number>;
  productos$: Observable<Producto[]>;

  perfilProveedor = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  })

  perfilCliente = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  })

  constructor(private carritoCompras: CarritoDeComprasService, 
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.cantidadDeProductos$ = this.carritoCompras.carrito$.pipe(
      map(productos => productos.length)
    )
    this.productos$ = this.carritoCompras.carrito$.pipe(
      map(productos => productos)
    )
    this.obtenerInformacionDelUsuario();
  }

  obtenerInformacionDelUsuario(){
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
  }

  logearProveedor(){
    this.auth.loginUsuarioProveedor(this.perfilProveedor.value).subscribe(
      response => {
        console.log('se logeo exitosamente', response)
        localStorage.setItem('token', response.jwtToken)
        localStorage.setItem('usuario', JSON.stringify(response.infoUsuario))
        this.router.navigate(['/dashboard']);
      },
      error => console.log(error)
    )
  } 

  logearCliente(){
    this.auth.loginUsuarioCliente(this.perfilCliente.value).subscribe(
      response => {
        console.log('se logeo exitosamente', response)
        localStorage.setItem('token', response.jwtToken)
        localStorage.setItem('token', JSON.stringify(response.infoUsuario))
        this.router.navigate(['/dashboard']);
      },
      error => console.log(error)
    )
  } 

  cerrarSesion(){
    this.auth.cerrarSesion()
  }

  pasaalgo(){
    console.log('pasalago')
  }

}
