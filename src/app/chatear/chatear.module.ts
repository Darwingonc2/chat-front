import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatearRoutingModule } from './chatear-routing.module';
import {ChatearComponent} from "./chatear.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [ChatearComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChatearRoutingModule
  ]
})
export class ChatearModule { }
