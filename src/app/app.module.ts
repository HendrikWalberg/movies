import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Location } from'@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovieService } from './movies.service';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SearchbarComponent,
    ActorDetailsComponent,
    TvDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
