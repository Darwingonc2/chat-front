import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsTelefonoRoutingModule } from './chats-telefono-routing.module';
import {ChatsTelefonoComponent} from "./chats-telefono.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [ChatsTelefonoComponent],
  exports: [
    ChatsTelefonoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ChatsTelefonoRoutingModule
  ]
})
export class ChatsTelefonoModule { }
