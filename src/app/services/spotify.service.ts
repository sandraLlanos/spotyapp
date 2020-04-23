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
      'Authorization': 'Bearer BQBnf8sfJyGZapDPRIvJ_B8IjGJteWCNsJjG-B4gfQJNcFPU2Tt5ir2Odkq3L4igp2gecx9C7JNsypbNLy8'
    });

    return this.http.get(this.url, {headers})
  }
}
