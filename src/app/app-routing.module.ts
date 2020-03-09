import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



const routes: Routes = [
  {path: 'popular', component: MovieListComponent},
  {path: 'details/:title', component: MovieDetailsComponent},
  {path: '', redirectTo: 'popular', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
