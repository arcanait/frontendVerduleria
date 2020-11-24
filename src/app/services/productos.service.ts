import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  
  private listaUrl = 'http://localhost:3003/api/tablero/lista';
  private crearUrl = 'http://localhost:3003/api/tablero';

  listaActividad() {
    return this.http.get<any>(this.listaUrl);
  }

  crearActividad(tablero) {
    return this.http.post<any>(this.crearUrl, tablero);
  }

  eliminarActividad(tablero){
    const _id = tablero._id;
    const url = `${this.crearUrl}/${_id}`;
    return this.http.delete<any>(url);
  }
}
