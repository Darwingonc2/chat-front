import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import {ConfiguracionComponent} from "./configuracion.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ConfiguracionComponent],
    imports: [
        CommonModule,
        IonicModule,
        ConfiguracionRoutingModule,
        ReactiveFormsModule
    ]
})
export class ConfiguracionModule { }
