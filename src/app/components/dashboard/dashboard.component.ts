import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario: any;

  constructor() { }

  ngOnInit(): void {
    this.obtenerInformacionDelUsuario();
  }

  obtenerInformacionDelUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log('desde el dashborad', this.usuario)
  }

  agregarProducto(){
    console.log('añadir producto')
  }

}
