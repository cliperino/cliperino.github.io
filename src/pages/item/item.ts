import { OnInit, Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Item } from '../../app/models/item.model';

import { ClipsService } from '../../app/services/clips.service';

@IonicPage({
  name: 'item',
  segment: 'item'
})
@Component({
  providers: [ClipsService],
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage implements OnInit {
	private slug: string;
	public item: Item;
  
  constructor(public navCtrl: NavController, private navParams: NavParams, private clipsService: ClipsService) {
    let slug = navParams.get('slug');

    this.slug = slug;
  }

  ngOnInit() {
  	this.item = new Item();
  	this.item.description = "AH YEET!";

    let that = this;

    let clip = that.clipsService.getLocalBySlug(that.slug);

    console.log(clip);
  }
}
