import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../interfaces/movie';
import { PopularMoviesResponse } from '../interfaces/popularMovies';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private key = 'd8b5c10e36bc8468e0cd0ecc1ee3e89a';
  private baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private httpClient: HttpClient) { }

  getPopular(): Observable<PopularMoviesResponse> {
    const result = this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}movie/popular?api_key=${this.key}`);
    console.log(result);
    return result;
  }
  
  getMovie(query: number): Observable<PopularMoviesResponse> {
      return this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}movie/${query}?api_key=${this.key}`);
  }
  
  getActor(query: number): Observable<PopularMoviesResponse> {
    return this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}person/${query}?api_key=${this.key}`);
  }

  getShowquery(query: number): Observable<PopularMoviesResponse> {
    return this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}tv/${query}?api_key=${this.key}`);
  }

  searchMovie(searchQuery: string): Observable<PopularMoviesResponse> {
    const result = this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}search/multi?api_key=${this.key}&query=${searchQuery}`);
    console.log(result);
    return result;
  }

  
}
