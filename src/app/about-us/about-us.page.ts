import { Component, OnInit } from '@angular/core';
import { Config, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  isApp: boolean;

  constructor(private platform: Platform, private config: Config) {
    if(this.platform.is('desktop') || this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }
}
  

ngOnInit() {

}

}
