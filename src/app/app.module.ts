import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavBarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
