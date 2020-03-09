import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { Movie } from 'src/interfaces/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() title: string;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  
  getMovie(): void {
    console.log(this.route);
    const title = this.route.snapshot.paramMap.get('title');
    console.log(title);
    this.movieService.getMovie(title).subscribe(movie => {
      this.movie = movie
      console.log(this.movie);
    });
  }

}
