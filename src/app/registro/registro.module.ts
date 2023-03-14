import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import {RegistroComponent} from "./registro.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    IonicModule,
    RegistroRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule {
}
