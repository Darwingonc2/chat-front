import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatearComponent} from "./chatear.component";

const routes: Routes = [{
  path: '',
  component: ChatearComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatearRoutingModule { }
