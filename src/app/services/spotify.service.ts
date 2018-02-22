import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SpotifyWebApi } from 'spotify-web-api-node';
import { SpotifyAuth } from '../models/spotify.model';

const constants: {} = {
  id: 'e48f618179c04ac2a80a456a05d19a82',
  state: 'aer90aerawermaweri34934',
};

const routes: {} = {
  auth: 'https://accounts.spotify.com/authorize?client_id=',
  getTrack: 'https://api.spotify.com/v1/tracks/',
  getCurrentTrack: 'https://api.spotify.com/v1/me/player'
};

@Injectable()
export class SpotifyService {
  authorized: SpotifyAuth;

  constructor(
    private http: HttpClient,
  ) {}

  authorize(client_id: string) {
    this.http.get(routes['auth'] +
      client_id + '&response_type=code&redirect_uri=' +
      routes['callback'] +
      '&scope=user-read-private%20user-read-email&state=' +
      constants['id']);
  }

  getTrack(id: string) {

  }
}
