import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registroClienteUrl = 'http://localhost:3003/api/cliente/';
  private registroProveedorUrl = 'http://localhost:3003/api/proveedor/';
  private loginClienteUrl = 'http://localhost:3003/api/authCliente/';
  private loginProveedorUrl = 'http://localhost:3003/api/authProveedor/';

  constructor(private http: HttpClient, private router: Router) { }

  token = '';

  registroUsuarioCliente(usuario) : Observable<any> {
    return this.http.post<any>(this.registroClienteUrl, usuario)
  }

  registroUsuarioProveedor(usuario) : Observable<any> {
    return this.http.post<any>(this.registroProveedorUrl, usuario)
  }

  loginUsuarioCliente(usuario) {
    return this.http.post<any>(this.loginClienteUrl, usuario)
  }

  loginUsuarioProveedor(usuario) {
    return this.http.post<any>(this.loginProveedorUrl, usuario)
  }

  loginOn() {
    return !!localStorage.getItem('token')
  }

  obtenerToken() {
    return localStorage.getItem('token')
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }
}
