import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatearRoutingModule } from './chatear-routing.module';
import {ChatearComponent} from "./chatear.component";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import {RouteReuseStrategy} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ChatearComponent],
    imports: [
        CommonModule,
        IonicModule,
        ChatearRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
})
export class ChatearModule { }
