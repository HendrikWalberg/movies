import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies.service'; 
import { Actor } from '../../interfaces/actor';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    ) { }

  actor: Actor;

  ngOnInit(): void {
    this.getActor();
  }

  getActor(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.movieService.getActor(parseInt(query, 10)).subscribe(actor => {
      this.actor = actor
      console.log(this.actor);
    });
  }
}
