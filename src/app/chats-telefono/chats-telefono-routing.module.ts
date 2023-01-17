import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatsTelefonoComponent} from "./chats-telefono.component";

const routes: Routes = [{
  path: '',
  component: ChatsTelefonoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsTelefonoRoutingModule { }
