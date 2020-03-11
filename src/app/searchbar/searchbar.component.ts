import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies.service';

import { SearchResponse } from '../../interfaces/searchResponse';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  public searchQuery: string;
  movies: SearchResponse;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  searchMovie(): void {
    this.movieService.searchMovie(this.searchQuery).subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    });
    }

}


