import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies.service'; 
import { Tv } from '../../interfaces/tv';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/interfaces/credits';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  show: Tv;
  credits: Credits;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getShow();
    this.getCredits();
  }

  getShow(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.movieService.getShow(parseInt(query, 10)).subscribe(show => {
      this.show = show
      console.log(this.show);
    });
  }

  getCredits(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.movieService.getTvCredits(parseInt(query, 10)).subscribe(credits => {
      this.credits = credits
      console.log(this.credits);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
