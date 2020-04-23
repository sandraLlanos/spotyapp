import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB2FXwk7F4uxkYYzE7JR2rwCUAsiFwP3o6J1FF_DCvzJkwKaqrFR4fI-ST4k2ZGOA5MOhzpn9B7xd4DVbA'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtist(termino: string) {
    //   const headers = new HttpHeaders({
    //     'Authorization': 'Bearer BQBd0jE8mbk1C-xJ2tw4-2gpoUjqx4z1xR6KG7PY5ucdarQnI0lieX9p6Pz8R2VWEClUiQtjuGQy_Unvyvk'
    //   });
    //   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    //     .pipe(map((data: any) => data.artists.items))
    // }

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items))
  }
}
