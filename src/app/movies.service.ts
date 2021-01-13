import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = "https://wookie.codesubmit.io/movies"
  header =  { headers: new HttpHeaders({
    "Authorization": "Bearer Wookie2019"
  })}

  search = new BehaviorSubject<string>("");
  search$ = this.search.asObservable()

  constructor(private http: HttpClient) {}

  getMovies(){
    return this.search$.pipe(switchMap(val=>
      this.http.get(this.url, this.header).pipe(map(x=>
        (x['movies'])
          .reduce((acc, el) => {
                if(el.title.toLowerCase().includes(val))
                acc.push(el)
                return acc
            }, [])))
            ))
  }
}
