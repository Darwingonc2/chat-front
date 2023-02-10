import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import {ConfiguracionComponent} from "./configuracion.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [ConfiguracionComponent],
  imports: [
    CommonModule,
    IonicModule,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule { }
