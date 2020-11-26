import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../components/models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoDeComprasService {

  private productos: Producto[] = [];
  private carrito = new BehaviorSubject<Producto[]>([]);

  carrito$ = this.carrito.asObservable();

  constructor() {}

  agregarAlCarrito(producto: Producto) {
    this.productos = [...this.productos, producto];
    this.carrito.next(this.productos);
    console.log(this.productos)
  }
}
