import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminosCondicionesRoutingModule } from './terminos-condiciones-routing.module';
import {IonicModule} from "@ionic/angular";
import {TerminosCondicionesComponent} from "./terminos-condiciones.component";


@NgModule({
  declarations: [TerminosCondicionesComponent],
  imports: [
    CommonModule,
    IonicModule,
    TerminosCondicionesRoutingModule
  ]
})
export class TerminosCondicionesModule { }
