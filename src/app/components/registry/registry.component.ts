import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  registroCliente = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    terminos: new FormControl('', [Validators.required]),
    rol: new FormControl('cliente')
  })

  registroProveedor = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    terminos: new FormControl('', [Validators.required]),
    rol: new FormControl('proveedor')
  })

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarCliente(){
    this.auth.registroUsuarioCliente(this.registroCliente.value).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/shop'])
      },
      error => console.log('este error al registrar cliente',error)
    )
  }

  registrarProveedor(){
    this.auth.registroUsuarioProveedor(this.registroProveedor.value).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/shop'])
      },
      error => console.log('este error al registrar cliente',error)
    )
  }

}
