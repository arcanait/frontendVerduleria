import { Component, OnInit } from '@angular/core';
import { CarritoDeComprasService } from '../../services/carrito-de-compras.service'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productos = {
    vegetales: [
      {
        nombre: 'Tomate',
        tipo: 'vegetal',
        precio: 1200,
        cantidad: 500,
        imagen: '../../../assets/img/tomate-2.jpg'
      },
      {
        nombre: 'Tomate',
        tipo: 'vegetal',
        precio: 1200,
        cantidad: 500,
        imagen: '../../../assets/img/tomate-2.jpg'
      },
      {
        nombre: 'Tomate',
        tipo: 'vegetal',
        precio: 1200,
        cantidad: 500,
        imagen: '../../../assets/img/tomate-2.jpg'
      },
      {
        nombre: 'Tomate',
        tipo: 'vegetal',
        precio: 1200,
        cantidad: 500,
        imagen: '../../../assets/img/tomate-2.jpg'
      },
      {
        nombre: 'Tomate',
        tipo: 'vegetal',
        precio: 1200,
        cantidad: 500,
        imagen: '../../../assets/img/tomate-2.jpg'
      }
    ],
    frutas: [
      {
        nombre: 'Feijoa',
        tipo: 'fruta',
        precio: 1800,
        cantidad: 500,
        imagen: '../../../assets/img/feijoa.jpg'
      },
      {
        nombre: 'Feijoa',
        tipo: 'fruta',
        precio: 1800,
        cantidad: 500,
        imagen: '../../../assets/img/feijoa.jpg'
      },
      {
        nombre: 'Feijoa',
        tipo: 'fruta',
        precio: 1800,
        cantidad: 500,
        imagen: '../../../assets/img/feijoa.jpg'
      }
    ],
    hierbas: [
      {
        nombre: 'Albahaca',
        tipo: 'hierba',
        precio: 2500,
        cantidad: 50,
        imagen: '../../../assets/img/albahaca.jpg'
      },
      {
        nombre: 'Albahaca',
        tipo: 'hierba',
        precio: 2500,
        cantidad: 50,
        imagen: '../../../assets/img/albahaca.jpg'
      },
      {
        nombre: 'Albahaca',
        tipo: 'hierba',
        precio: 2500,
        cantidad: 50,
        imagen: '../../../assets/img/albahaca.jpg'
      }
    ]
  }



  constructor(private carritoDeCompras: CarritoDeComprasService) { }

  ngOnInit(): void {
  }

  sumarAlCarrito(producto) {
    this.carritoDeCompras.agregarAlCarrito(producto);
    console.log(producto)
  }

}
