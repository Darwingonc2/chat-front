import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
})
export class ConfiguracionComponent implements OnInit {

  identity: any;
  token: any;

  constructor(
    private usuarioServicio: UsuarioService,
  ) { }

  ngOnInit() {
    this.encontrarUsuario();
  }

  formActualizarPerfil = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
  });

  async encontrarUsuario() {
    const data = {
      id: localStorage.getItem("id"),
    };
    this.usuarioServicio.encontrarUsuario(data).then((query: any) => {
      if (query.ok){
        this.identity = query.data;
      } else{
        alert('ocurrio un error');
      }
    });
  }

  async actualizarPerfil(form: any){
    const data = {
      id: this.identity.idusuario,
      apellido: form.apellido,
      nombre: form.nombre,
    };
    console.log(data);
    this.token = localStorage.getItem("token")
    console.log(this.token);
    this.usuarioServicio.actualizar_perfil(this.token, data).subscribe(
      res => {
        window.location.reload();
      }, error => {
        alert('token no valido');
      });
  }
}
