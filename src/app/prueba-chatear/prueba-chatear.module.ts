import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaChatearRoutingModule } from './prueba-chatear-routing.module';
import {IonicModule} from "@ionic/angular";
import {PruebaChatearComponent} from "./prueba-chatear.component";


@NgModule({
  declarations: [PruebaChatearComponent],
  imports: [
    CommonModule,
    IonicModule,
    PruebaChatearRoutingModule
  ]
})
export class PruebaChatearModule { }
