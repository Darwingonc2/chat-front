import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import {RegistroComponent} from "./registro.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    IonicModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
