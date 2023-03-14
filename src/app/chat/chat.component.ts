import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public id: any;
  public identity: any;
  public chats: any;

  constructor(
    private usuarioServicio: UsuarioService,
  ) { }

  ngOnInit() {
    this.id = this.usuarioServicio.getIdFromLocalStorage();
    this.encontrarUsuario(this.id);
    this.encontrarChats(this.id);
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

  async encontrarChats(id: any) {
    const data = {
      id: id,
    };
    this.usuarioServicio.encontrarChats(data).then((query: any) => {
      if (query.ok){
        this.chats = query.data;
        console.log(this.chats);
      } else{
        alert('ocurrio un error');
      }
    });
  }



}
