import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {UsuarioService} from "../services/usuario.service";
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  private statusActive: any;
  private password: any;
  private countryUuid: any;

  public token: any;
  public id: any;
  public identity: any;

  informacionBasica = new FormGroup({
    /*información básica*/
    nombre: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required ),
    correo: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
  });

  constructor(
    private router: Router,
    private  userService:  UsuarioService,
    private appComponent: AppComponent,
  ) { }

  ngOnInit() {}

  submitForm(form: any): void {
    const data = {
      nombre: form.nombre,
      apellido: form.apellido,
      telefono: form.telefono,
      correo: form.correo,
      password: form.password,
      activo: 1,
    };
    this.userService.registro(data).then((query: any) => {
        if (query.ok){
          this.appComponent.validarToken(query.token, query.data.idusuario);
          localStorage.setItem('token', query.token);
          localStorage.setItem('id', query.data.idusuario);
          this.router.navigate(['chat']);
        } else{
          alert('ocurrió un error');
        }
      }
    );
  }

}
