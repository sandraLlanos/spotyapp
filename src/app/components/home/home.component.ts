import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading:boolean;
  constructor(private spotifyService: SpotifyService) {
    this.getReleases();
   }

  ngOnInit() {
  }

  getReleases() {
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
      })
  }

}
