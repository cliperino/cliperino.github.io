import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'item-component',
  templateUrl: 'item.html'
})
export class ItemComponent {
	@Input() item: Item;
}

