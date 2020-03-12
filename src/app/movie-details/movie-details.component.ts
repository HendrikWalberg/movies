import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { Movie } from 'src/interfaces/movie';
import { Location } from '@angular/common';
import { Credits } from 'src/interfaces/credits';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: any;
  movie: Movie;
  credits: Credits;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
    this.getCredits();
  }
  
  getMovie(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.movieService.getMovie(parseInt(query, 10)).subscribe(movie => {
      this.movie = movie
      console.log(this.movie);
    });
  }


  getCredits(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.movieService.getMovieCredits(parseInt(query, 10)).subscribe(credits => {
      this.credits = credits
      console.log(this.credits);
    });
  }
  


  goBack(): void {
    this.location.back();
  }

}
