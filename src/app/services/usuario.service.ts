import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public id: any;
  public token: any;

  public url: string;

  constructor(public httpClient: HttpClient) {
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

  public actualizar_perfil(token: any, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.patch(this.url + '/actualizar_perfil', data, {headers});
  }

  public cerrar_sesion(token: any, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.patch(this.url + '/cerrar_sesion', data, {headers});
  }

}
