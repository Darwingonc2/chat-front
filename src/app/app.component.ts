import { Component } from '@angular/core';
import {UsuarioService} from "./services/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  token: any;

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  public id: any;
  public identity: any;

  constructor(
    private usuarioServicio: UsuarioService,
  ) {
    this.token =  localStorage.getItem("token");
  }

  async ngOnInit(){
    this.token = await localStorage.getItem("token");
    this.id = await this.usuarioServicio.getIdFromLocalStorage();
    if (this.token){
      await this.encontrarUsuario(this.id);
    }
  }

  validarToken(token: any, id: any){
    this.token = token;
    this.encontrarUsuario(id);
  }

  async encontrarUsuario(id: any) {
    const data = {
      id: id,
    };
    this.usuarioServicio.encontrarUsuario(data).then((query: any) => {
      if (query.ok){
        this.identity = query.data;
      } else{
        alert('ocurrio un error');
      }
    });
  }

  cerrarSesion() {
    const data = {
      id: localStorage.getItem("id"),
      activo: 0,
    }
    this.usuarioServicio.cerrar_sesion(this.token, data).subscribe(
      res => {
        window.location.reload();
      }, error => {
        alert('token no valido');
      });
    localStorage.clear();
    window.location.reload();
  }

}
