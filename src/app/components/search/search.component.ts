import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artists:any[] = [];
  constructor( private spotifyservice:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    console.log(termino);
    this.spotifyservice.getArtist(termino).subscribe((data:any) =>{
      console.log(data.artists.items);
      this.artists = data.artists.items;
    })
  }

}
