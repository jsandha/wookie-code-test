
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id',
      component: MovieCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
