import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'nb-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
    console.log(this.spotifyService.track('4iMFxtzAcgUfbsagyY3Vla'));
  }

}
