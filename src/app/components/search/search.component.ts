import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artists:any[] = [];
  loading:boolean;
  constructor( private spotifyservice:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = true;
    this.spotifyservice.getArtists(termino).subscribe((data:any) =>{
      this.artists = data;
      this.loading = false;
    })
  }

}
