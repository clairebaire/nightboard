import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SpotifyWebApi } from 'spotify-web-api-node';

const routes: {} = {
  'getTrack': '	https://api.spotify.com/v1/tracks/',
  'getCurrentTrack': 'https://api.spotify.com/v1/me/player'
};

// tslint:disable-next-line
const auth = '';
const httpOptions = {
  headers: new HttpHeaders().set('Authorization', 'Bearer ' + auth),
};

@Injectable()
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) {}

  public track(id: string) {
    return this.http.get('https://api.spotify.com/v1/tracks/' + id, httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
