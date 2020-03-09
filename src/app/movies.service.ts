import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../interfaces/movie';
import { PopularMoviesResponse } from '../interfaces/popularMovies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private key = 'd8b5c10e36bc8468e0cd0ecc1ee3e89a';
  private baseUrl = 'https://api.themoviedb.org/3/';
  private title: string;

  constructor(private httpClient: HttpClient) { }

  getPopular(): Observable<PopularMoviesResponse> {
    const result = this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}movie/popular?api_key=${this.key}`);
    console.log(result);
    return result;
  }
  
  getMovie(title: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.baseUrl}${title}?api_key=${this.key}`)
  }

  searchMovie(searchQuery: string): Observable<PopularMoviesResponse> {
    const result = this.httpClient.get<PopularMoviesResponse>(`${this.baseUrl}search/movie?api_key=${this.key}&query=${searchQuery}`);
    console.log(result);
    return result;
  }

  
}
