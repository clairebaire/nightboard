import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'nb-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent {

  constructor(
    private spotifyService: SpotifyService,
  ) { }

  auth() {

  }

}
