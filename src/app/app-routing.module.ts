import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';



const routes: Routes = [
  {path: 'popular', component: MovieListComponent},
  {path: 'movieDetails/:query', component: MovieDetailsComponent},
  {path: 'actorDetails/:query', component: ActorDetailsComponent},
  {path: 'tvDetails/:query', component: TvDetailsComponent},
  {path: '', redirectTo: 'popular', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
