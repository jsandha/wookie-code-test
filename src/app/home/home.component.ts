import { MoviesService } from '../movies.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
genres = [];
movies;

constructor(
        private http: HttpClient,
        private movieService: MoviesService) {
    this.getMovies()
  }
getMovies(){
    this.movieService.getMovies()
    .subscribe(x=>{
      this.movies = x;
      x.forEach(el => {this.genres = [...this.genres, ...el.genres]})
    this.genres = [...new Set(this.genres)].sort()
    })
  }
}
