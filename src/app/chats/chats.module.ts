import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import {ChatsComponent} from "./chats.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [ChatsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
