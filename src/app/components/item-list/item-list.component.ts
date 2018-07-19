import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'item-list-component',
  templateUrl: 'item-list.html'
})
export class ItemListComponent {
	@Input() itemList: Array<Item>;

	constructor(public navCtrl: NavController) {}

  goToItem(id) {
    this.navCtrl.push('item', {
      id: id
    });
  } 
}

