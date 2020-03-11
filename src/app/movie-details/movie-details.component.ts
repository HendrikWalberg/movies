import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { PopularMoviesResponse } from 'src/interfaces/popularMovies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: any;
  movie: PopularMoviesResponse;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  
  getMovie(): void {
    const query = this.route.snapshot.paramMap.get('searchQuery');
    this.movieService.getMovie(parseInt(query, 10)).subscribe(movie => {
      this.movie = movie
      console.log(this.movie);
    });
  }

}
