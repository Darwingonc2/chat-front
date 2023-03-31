import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UsuarioService } from '../services/usuario.service';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public id: any;
  public token: any;
  public identity: any;

  formLogin = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UsuarioService,
    private router: Router,
    private appComponent: AppComponent,
  ) { }

  ngOnInit() {}

  submitForm(form: any): void {
    const data = {
      correo: form.correo,
      password: form.password,
    };
    this.userService.iniciarSesion(data).then( (query: any) => {
        /*if (query.ok){
          this.actualizarActivo(query.data.idusuario);
        }   */
        if (query.ok){
          console.log("token:")
          console.log(query.token);
          this.actualizarActivo(query.data.idusuario);
          this.appComponent.validarToken(query.token, query.data.idusuario);
          localStorage.setItem('token', query.token);
          localStorage.setItem('id', query.data.idusuario);
          this.router.navigate(['chat']);
        } else{
          alert('los datos estan mal');
          console.log('datos malos');
        }
      }
    );
  }

  async actualizarActivo(id: any){
    const data = {
      id: id,
      activo: 1,
    };
    this.userService.actualizar_activo(data).subscribe(
      res => {
      }, error => {
        alert('Ocurrio un error no apareceras en linea');
      });
  }

}
