import * as Promise from 'bluebird';
import * as unirest from 'unirest';

import { Injectable } from '@angular/core';

interface TrendingClips {
};

interface Clip {}

@Injectable()
export class ClipsService {

  allClips: Map<string, Clip> = new Map([]);

    getLocalBySlug(slug: string): Clip {
    /*return this.allClips.find(function(clip) {
      return clip.slug === slug;
    });*/

    return this.allClips.get(slug);
  }

  getTrending(cursor: string|undefined): Promise<TrendingClips> {

    let clips: Array<Clip> = new Array<Clip>();
    let that = this;

    return new Promise(function(resolve, reject) {
      unirest.get('http://api.cliperino.com/api/v1/clips/trending/' + cursor)
        .headers({'Accept': 'application/json'})
        .send()
        .end(function(resp) {

          if (resp && resp.body) {
            resolve(resp.body);
            return;
          } else {
            reject('no response');
          }

          

          
        });
    });
  }
}

export default new ClipsService();