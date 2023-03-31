import { Component, OnInit, ElementRef } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {io} from 'socket.io-client';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {push} from "ionicons/icons";
import {SocketService} from "../services/socket.service";


@Component({
  selector: 'app-chatear',
  templateUrl: './chatear.component.html',
  styleUrls: ['./chatear.component.scss'],
})
export class ChatearComponent implements OnInit {

  public textAreaM: string = '';

  public mensajes2: any[] = [];
  public mensajes: any;
  public id: any;
  public mensajesPerfil: any;
  /*public idusuario1: any;*/
  public idusuario2: any;
  public persona2: any;
  public today = new Date();
  public formattedDate = this.today.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
  public token: any;
  public todosLosMensajes: any;

  public socket = io('http://localhost:3000');

  constructor(
    private usuarioServicio: UsuarioService,
    private socketServicio: SocketService,
    private elementRef: ElementRef
  ) {}

  formMensaje = new FormGroup({
    mensaje: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit() {

    this.id = this.usuarioServicio.getIdFromLocalStorage();
    this.encontrarChats();
    if (localStorage.getItem('idusuario2')){
      this.persona2 = localStorage.getItem('idusuario2');
      console.log(this.persona2);
      this.idusuario2 = parseInt(this.persona2);
      this.encontrarUsuario2(this.idusuario2);
    }
    this.token = this.usuarioServicio.getTokenFromLocalStorage();

    this.socket.on("recibirMensaje", (dato: any) => {
      console.log("log del dato", dato);
      console.log("log antes de pushear", this.mensajes)
      this.mensajes.push(dato);
      console.log("despues de pushear", this.mensajes);
    })

    const element = this.elementRef.nativeElement.querySelector('#mensajes');
    element.scrollTop = element.scrollHeight;
  }

  async encontrarChats() {
    this.usuarioServicio.encontrarMensajes().then((query: any) => {
      if (query.ok){
        this.mensajes = query.data;
        this.mensajes2 = query.data
        /*this.usuarioServicio.todosLosMensajeSocket(this.mensajes2);*/
        console.log("this.mensajes2", this.mensajes2);
      } else{
        alert('ocurrio un error');
      }
    });
  }

  async encontrarUsuario2(id: any) {
    const data = {
      id: this.idusuario2,
    };
    this.usuarioServicio.encontrarUsuario(data).then((query: any) => {
      if (query.ok){
        this.persona2 = query.data;
      } else{
        alert('ocurrio un error');
      }
    });
  }

  vincularChat(usuario1: any, usuario2: any){
    this.idusuario2 = usuario2;
    localStorage.setItem('idusuario2', usuario2);
  }

  enviarMensaje(newMessage:any){
    this.formMensaje.get("mensaje")?.setValue('');
    const data = {
      idusuario1: this.id,
      idusuario2: this.idusuario2,
      mensaje: newMessage.mensaje,
      hora: this.formattedDate,
    };
    this.usuarioServicio.crearMensaje(this.token, data).subscribe(
      res => {
        this.usuarioServicio.enviarMensajeSocket(data);
      }, error => {
        console.error(error);
        alert('Ocurrio un error refresca la página y envia el mensaje de nuevo');
      });

  }

}


