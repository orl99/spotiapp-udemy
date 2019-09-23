import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifySV } from '../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  loading: boolean;
  ultimasCanciones: any[] = [];
  constructor( private httpRequest: HttpClient, private spotyService: SpotifySV) {

    this.loading = true;
    this.spotyService.makeRequestService()
    .subscribe((response: any) => {
      this.ultimasCanciones = response;
      console.log(this.ultimasCanciones);
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
