import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SpotifyWebApi } from 'spotify-web-api-node';

const routes: {} = {
  'getTrack': '	https://api.spotify.com/v1/tracks/',
  'getCurrentTrack': 'https://api.spotify.com/v1/me/player'
};

// tslint:disable-next-line
const baseURL = 'https://accounts.spotify.com/authorize?client_id=';

@Injectable()
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) {}
}
