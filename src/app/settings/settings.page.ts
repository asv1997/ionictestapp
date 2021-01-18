import { Component, OnInit } from '@angular/core';
import { Config, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isApp: boolean;

  constructor(private platform: Platform) {
    if(this.platform.is('desktop') || this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }
  }

   ngOnInit() {

 }

}
