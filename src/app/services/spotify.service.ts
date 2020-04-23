import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
url = 	'https://api.spotify.com/v1/browse/new-releases';
  
constructor( private http: HttpClient ) {
  console.log('Spotify service ready')
  }  
  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBd0jE8mbk1C-xJ2tw4-2gpoUjqx4z1xR6KG7PY5ucdarQnI0lieX9p6Pz8R2VWEClUiQtjuGQy_Unvyvk'
    });

    return this.http.get(this.url, {headers})
  }

  getArtist(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBd0jE8mbk1C-xJ2tw4-2gpoUjqx4z1xR6KG7PY5ucdarQnI0lieX9p6Pz8R2VWEClUiQtjuGQy_Unvyvk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
  }
}
