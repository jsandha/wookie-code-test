import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent{
  id: string;
  movie
  constructor(private route: ActivatedRoute,
              private movieService: MoviesService){
    this.id = this.route.snapshot.params.id
    this.movieService.getMovies()
    .subscribe(x=>
        x.forEach( x=> {
              if(x.id === this.id)
             this.movie = x
      }))
    }
  }
