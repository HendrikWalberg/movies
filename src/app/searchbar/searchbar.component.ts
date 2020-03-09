import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MovieService } from '../movies.service';
import { Movie } from '../../interfaces/movie';
import { PopularMoviesResponse } from '../../interfaces/popularMovies';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  public searchQuery: string;
  movies: PopularMoviesResponse;

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


