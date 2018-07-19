/* Core */
import { Component, ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'; 
import { IonicPage, NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/* Services */
import { ClipsService } from '../../app/services/clips.service';

@IonicPage({
  name: 'trending',
  segment: 'trending'
})
@Component({
  providers: [ClipsService],
  selector: 'page-trending',
  templateUrl: 'trending.html'
})
export class TrendingPage implements OnInit {
  private cursor: string;
  private ngZone: NgZone;
  private sanitizer: DomSanitizer;
  
  public clips = [];

  ngOnInit(): void {
    this.getTrendingClips(undefined);
  }

  getTrendingClips(cursor: string|null) {
    let that = this;

    this.clipsService.getTrending(cursor).then(function(trendingClips) {
      let clips = trendingClips.clips;

      clips.forEach(function(clip) {
         let src = 'https://clips.twitch.tv/embed?clip=' + clip.slug + '&tt_medium=clips_api&tt_content=embed&autoplay=false';
         clip.embedHtml = that.sanitizer.bypassSecurityTrustHtml("<div style='overflow: hidden; padding-bottom: 56.25%; position: relative; height: 0;' class='video-responsive'><iframe style='left: 0; top: 0; height: 100%; width: 100%; position: absolute;' src='" + src + "' width='100%' height='100%' frameborder='0' scrolling='no' allowfullscreen='true' preload='metadata'></iframe></div>");
      });

      that.ngZone.run(() => {
        clips.forEach(function(clip) {
          that.clips.push(clip);
        })

        that.cursor = trendingClips.cursor;
      });
    });
  }

  loadMore() {
    this.getTrendingClips(this.cursor);
  }

  constructor(public navCtrl: NavController, private clipsService: ClipsService, private _sanitizer: DomSanitizer, private _ngZone: NgZone) {
    this.sanitizer = _sanitizer;
    this.ngZone = _ngZone;
  }
}
