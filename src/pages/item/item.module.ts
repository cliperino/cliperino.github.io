import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemComponent } from '../../app/components/item/item.component';
import { ItemPage } from './item';

import { ClipsService } from '../../app/services/clips.service';

@NgModule({
  declarations: [
  	ItemComponent,
    ItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemPage)
  ],
  providers: [
    ClipsService
  ],
  entryComponents: [
    ItemPage
  ]
})
export class ItemPageModule {}
