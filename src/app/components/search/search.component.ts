import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifySV } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor( private httRequest: HttpClient, private spotyService: SpotifySV ) {
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);

    this.spotyService.getArtistas(termino)
    .subscribe( (response: any) => {
      this.artistas = response;
      console.log(this.artistas);
      this.loading = false;
    } );

  }

}
