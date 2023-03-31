import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SocketService} from "./socket.service";
import {ChatearComponent} from "../chatear/chatear.component";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public id: any;
  public token: any;
  public url: string;
  public mensajes: any;

  constructor(public httpClient: HttpClient,
              private socket: SocketService,) {

    this.url = environment.apiUrl;
  }

  async iniciarSesion(data: any) {
    const query = this.httpClient.post(this.url + '/login', data).toPromise() ;
    return query;
  }

  async registro(data: any) {
    const query = this.httpClient.post(this.url + '/registro', data).toPromise() ;
    return query;
  }

  public getTokenFromLocalStorage(): any {
    const token = localStorage.getItem('token');

    if (token != null) {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  public getIdFromLocalStorage(): any {
    const id: any = localStorage.getItem('id');

    if (id != null) {
      this.id = JSON.parse(id);
    } else {
      this.id = null;
    }

    return this.id;
  }

  async encontrarUsuario(data: any) {
    const query = await this.httpClient.post(this.url + '/encontrar_usuario', data).toPromise();
    return query;
  }

  async encontrarChats(data: any) {
    const query = await this.httpClient.post(this.url + '/encontrar_chats', data).toPromise();
    return query;
  }

  async encontrarMensajes() {
    const query = await this.httpClient.get(this.url + '/encontrar_mensajes').toPromise();
    return query;
  }

  public actualizar_perfil(token: any, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.patch(this.url + '/actualizar_perfil', data, {headers});
  }

  public actualizar_activo(data: any): Observable<any> {
    "const headers = new HttpHeaders().set('Authorization', token);"
    return this.httpClient.patch(this.url + '/actualizar_activo', data);
  }

  /*async crearMensaje(data: any, token: any) {
    const headers = new HttpHeaders().set('Authorization', token);
    const query = this.httpClient.post(this.url + '/crear_mensaje', data, {headers}).toPromise() ;
    return query;
  }*/

  public crearMensaje(token: any, data: any): Observable<any> {
    console.log(data);
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.url + '/crear_mensaje', data, {headers});
  }

  public cerrar_sesion(token: any, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.patch(this.url + '/cerrar_sesion', data, {headers});
  }

  public enviarMensajeSocket(data: any){
    this.socket.io.emit("enviarMensaje", (data));
  }

  public todosLosMensajeSocket(data: any){
    this.socket.io.emit("enviarMensaje", (data));
  }


  /*public recibirMensajeSocket(mensaje: any){
    console.log("log", mensaje);
    this.socket.io.on("recibirMensaje", (data) => {
      this.encontrarMensajes();
    })
  }*/

}
