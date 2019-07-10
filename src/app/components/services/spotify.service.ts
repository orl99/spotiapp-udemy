import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifySV {

  constructor( private http: HttpClient ) {
    console.log('services init');
  }

  makeRequestService() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAF6fzhhfAIdFaacXdeQTo-cc8bwDxTj6d7DhJ1yhOfgAnC23-OmosrVXF4rQkGMKGCKh-0HUosVVqqVdCWGvIvk3KRS7i8XD--Nt5fh4We7hCRJJIoss5EawQY8RZfR_fKE1FcN4cjsINBbt0572-u4EFJ9DXBxvk7mxjAjg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
