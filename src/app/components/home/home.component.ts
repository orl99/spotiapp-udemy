import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifySV } from '../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  ultimasCanciones: any[] = [];
  // artistas: any[] = [];
  constructor( private httpRequest: HttpClient, private spotyService: SpotifySV) {

    this.spotyService.makeRequestService()
    .subscribe((response: any) => {
      this.ultimasCanciones = response.albums.items;
      // this.artistas = response.albums.items.artists;
      console.log(this.ultimasCanciones);
      console.log(this.artistas);
    });
  }

  ngOnInit() {
  }

}
