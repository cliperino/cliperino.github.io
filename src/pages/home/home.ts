import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  styles: [
    'ion-avatar {border-radius: 50%; overflow: hidden; width: 50px; height: 50px;}',
    '.logo {width: 250px;}'
  ],
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }

  goToItems() {
    this.navCtrl.push('trending');
  } 
}
