import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import {ChatComponent} from "./chat.component";
import {IonicModule} from "@ionic/angular";
import {TabsPageModule} from "../tabs/tabs.module";
import {ChatsTelefonoModule} from "../chats-telefono/chats-telefono.module";


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChatRoutingModule,
    TabsPageModule,
    ChatsTelefonoModule
  ]
})
export class ChatModule { }
