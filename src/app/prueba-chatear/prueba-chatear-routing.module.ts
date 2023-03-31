import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PruebaChatearComponent} from "./prueba-chatear.component";

const routes: Routes = [
  {
    path: '',
    component: PruebaChatearComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaChatearRoutingModule { }
