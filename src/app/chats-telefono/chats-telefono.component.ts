import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats-telefono',
  templateUrl: './chats-telefono.component.html',
  styleUrls: ['./chats-telefono.component.scss'],
})
export class ChatsTelefonoComponent implements OnInit {

  public folder!: string;

  constructor(private menu: MenuController,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


}
