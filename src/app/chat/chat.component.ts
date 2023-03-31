import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {ChatearComponent} from "../chatear/chatear.component";
import {Router} from "@angular/router";

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
    private chatear: ChatearComponent,
    private router: Router
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
      } else{
        alert('ocurrio un error');
      }
    });
  }

  vincularChat(idusuario2: any){
    this.chatear.vincularChat(this.id, idusuario2);
    this.router.navigate(['chatear']);
  }



}
