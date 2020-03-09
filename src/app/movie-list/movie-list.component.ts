import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';

import { Movie } from '../../interfaces/movie';
import { PopularMoviesResponse } from '../../interfaces/popularMovies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie;
  popularMovies: PopularMoviesResponse;
  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopular();
  }
  
  getPopular(): void {
    this.movieService.getPopular().subscribe(popularMovies => {
      this.popularMovies = popularMovies;
      console.log(this.popularMovies);
    });
  }

}
