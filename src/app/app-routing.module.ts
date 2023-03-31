import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./services/auth.guard.service";

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },*/
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'chats', canActivate: [AuthGuardService],
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)
  },
  {
    path: 'chats-telefono',
    loadChildren: () => import('./chats-telefono/chats-telefono.module').then(m => m.ChatsTelefonoModule)
  },
  {
    path: 'chat', canActivate: [AuthGuardService],
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'configuracion', canActivate: [AuthGuardService],
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: 'chatear', canActivate: [AuthGuardService],
    loadChildren: () => import('./chatear/chatear.module').then(m => m.ChatearModule)
  },
  {
    path: 'prueba-chatear', canActivate: [AuthGuardService],
    loadChildren: () => import('./prueba-chatear/prueba-chatear.module').then(m => m.PruebaChatearModule)
  },
  {
    path: 'terminos-condiciones', canActivate: [AuthGuardService],
    loadChildren: () => import('./terminos-condiciones/terminos-condiciones.module').then(m => m.TerminosCondicionesModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
