import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ClipsService } from '../../app/services/clips.service';
import { TrendingPage } from './trending';

@NgModule({
  declarations: [
    TrendingPage
  ],
  imports: [
    IonicPageModule.forChild(TrendingPage)
  ],
  providers: [
    ClipsService
  ],
  entryComponents: [
    TrendingPage
  ]
})
export class TrendingPageModule {}
