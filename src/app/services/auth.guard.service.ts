import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  public token: any;

  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificar(route, state);
  }

  private verificar(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.token = this.usuarioServicio.getTokenFromLocalStorage();
    if (this.token){
      return true;
    } else {
      this.router.navigate(['login']);
    }
    return  this.token;
  }

}
