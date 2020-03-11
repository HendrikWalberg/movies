import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies.service'; 
import { Tv } from '../../interfaces/tv';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  show: Tv;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getShow();
  }

  getShow(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.movieService.getShow(parseInt(query, 10)).subscribe(show => {
      this.show = show
      console.log(this.show);
    });
  }

}
