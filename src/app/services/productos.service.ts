import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../components/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  // private productos: Producto[] = [];
  // private lista = new BehaviorSubject<Producto[]>([]);

  // lista$ = this.lista.asObservable();

  private crearUrl = 'http://localhost:3003/api/producto';
  private listaUrl = 'http://localhost:3003/api/producto/misProductos';

  listarProductos(): Observable<any> {
    // this.productos = [...this.productos]
    // this.lista.next(this.productos)
    return this.http.get<any>(this.listaUrl);
  }

  crearProducto(producto) {
    return this.http.post<any>(this.crearUrl, producto);
  }

  editarProducto(producto) {
    return this.http.put<any>(this.crearUrl, producto);
  }

  eliminarProducto(producto){
    const _id = producto._id;
    const url = `${this.crearUrl}/${_id}`;
    console.log(url)
    return this.http.delete<any>(url);
  }
}
