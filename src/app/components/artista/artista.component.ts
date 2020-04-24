import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private route: ActivatedRoute,
    private spotify: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist( id:string ) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    })
  }
  getTopTracks( id:string ) {
    // this.loading = true;
    this.spotify.getTopTracks(id).subscribe(data => {
      console.log(data);
      this.topTracks = data;
      // this.loading = false;
    })
  }

  ngOnInit() {
  }

}
