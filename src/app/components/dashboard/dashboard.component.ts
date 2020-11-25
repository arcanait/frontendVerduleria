import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario: any;

  // listaDeProductos$: Observable<Producto[]>;
  listaDeProductos: any[] = [];

  producto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    masaUnitaria: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
  })

  constructor(private productos: ProductosService,
              private router: Router) { }

  ngOnInit(): void {
    // this.listaDeProductos$ = this.productos.lista$.pipe(
    //   map(productos => productos)
    // )
    this.obtenerInformacionDelUsuario();
    this.traerProductosDB();
  }

  obtenerInformacionDelUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log('desde el dashborad', this.usuario)
  }

  agregarProducto(){
    this.productos.crearProducto(this.producto.value).subscribe(response => {
      console.log(response);
      this.traerProductosDB()
      this.router.navigate(['/dashboard'])
    },
    error => console.log('Ha ocurrido un error al crear el producto : ', error));
  }

  editarProducto(){
    this.productos.editarProducto(this.producto.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard'])
    },
    error => console.log('Ha ocurrido un error al crear el producto : ', error));
  }

  traerProductosDB(){
    this.productos.listarProductos().subscribe(response => {
      this.listaDeProductos = response
    },
      error => console.log('Ha ocurrido un error al momento de listar los productos:', error)
    )
  }

  eliminarProducto(producto){
    console.log(producto)
    this.productos.eliminarProducto(producto).subscribe(
      res =>{
        const index: number = this.listaDeProductos.indexOf(producto);
        console.log(this.listaDeProductos)
        if(index > -1){
          this.listaDeProductos.splice(index, 1);
        };
      },
      error =>{
        console.log(error)
      }
    )
  }

}
