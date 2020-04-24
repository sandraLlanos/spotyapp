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
      'Authorization': 'Bearer BQAOCYfj6a8RVyJ6q9_dfcBBsiF4uiWYX0SM-zYkw1xCZqx5i-WlQjmZWbUqtlQFLQmN5XRhSOJiGZoucoc'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtists(termino: string) {
    //   const headers = new HttpHeaders({
    //     'Authorization': 'Bearer BQBd0jE8mbk1C-xJ2tw4-2gpoUjqx4z1xR6KG7PY5ucdarQnI0lieX9p6Pz8R2VWEClUiQtjuGQy_Unvyvk'
    //   });
    //   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    //     .pipe(map((data: any) => data.artists.items))
    // }

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items))
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map((data:any) => data.tracks))
  }

}
