import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//RXJS
import { map } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifySV {

  constructor( private http: HttpClient ) {
    console.log('services init');
  }

  makeSpotyQueryGet( query: string ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA8jwIGdFgzrfa8WYlhl1N1jJsyfL8eLfHE-4cSZfHT0lxLX9rVuQHffJ-OnXdRCJo6BIWmtV6j36CkrtM'
    });
    const baseApiUrl = 'https://api.spotify.com/v1/';
    return this.http.get(`${baseApiUrl}${query}`, { headers });
  }

   makeRequestService() {
    return this.makeSpotyQueryGet("browse/new-releases")
      .pipe( map( data => data["albums"].items ) );

  }
  getArtistas(termino: string) {

    const queryUrl = `search?q=${termino}&type=artist&limit=15`;
    return this.makeSpotyQueryGet(queryUrl)
      .pipe( map( data => data["artists"].items) );
  }
}
