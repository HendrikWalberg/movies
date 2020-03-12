import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../interfaces/movie';
import { SearchResponse } from '../interfaces/searchResponse';
import { isNumber } from 'util';
import { Actor } from '../interfaces/actor';
import { Tv } from '../interfaces/tv';
import { Credits } from '../interfaces/credits';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private key = 'd8b5c10e36bc8468e0cd0ecc1ee3e89a';
  private baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private httpClient: HttpClient) { }

  getPopular(): Observable<SearchResponse> {
    const result = this.httpClient.get<SearchResponse>(`${this.baseUrl}movie/popular?api_key=${this.key}`);
    console.log(result);
    return result;
  }
  
  getMovie(query: number): Observable<Movie> {
      return this.httpClient.get<Movie>(`${this.baseUrl}movie/${query}?api_key=${this.key}`);
  }

  getMovieCredits(query: number): Observable<Credits> {
    return this.httpClient.get<Credits>(`${this.baseUrl}movie/${query}/credits?api_key=${this.key}`);
  }
  
  getActor(query: number): Observable<Actor> {
    return this.httpClient.get<Actor>(`${this.baseUrl}person/${query}?api_key=${this.key}`);
  }

  getShow(query: number): Observable<Tv> {
    return this.httpClient.get<Tv>(`${this.baseUrl}tv/${query}?api_key=${this.key}`);
  }

  getTvCredits(query: number): Observable<Credits> {
    return this.httpClient.get<Credits>(`${this.baseUrl}tv/${query}/credits?api_key=${this.key}`);
  }

  searchMovie(searchQuery: string): Observable<SearchResponse> {
    const result = this.httpClient.get<SearchResponse>(`${this.baseUrl}search/multi?api_key=${this.key}&query=${searchQuery}`);
    console.log(result);
    return result;
  }

  
}
