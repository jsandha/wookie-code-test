import { Router } from '@angular/router';
import { MoviesService } from './movies.service';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wookie-code-test';
  movies: Array<any> = [];
  constructor(private movieService: MoviesService,
              private router: Router
    ){
  }
  search(val){
    this.router.navigate(['/'])
     this.movieService.search.next(val)
  }

}
