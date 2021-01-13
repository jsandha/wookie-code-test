import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
@Input() rating;
full = 'bi-star-full'
half = 'bi-star-half'
empty = 'bi-star'
classes= []
  constructor() {
  }

  ngOnInit(): void {
    this.rating = this.rating/2
      for( let i = 0; i< 5 ; i++)
      {
          if( (this.rating) >= 1){
            this.rating = this.rating - 1;
            this.classes.push(this.full)
          }else if(this.rating < 1 && this.rating >.4 ) {
            this.rating = this.rating-1
            this.classes.push(this.half)
          }else {
            this.classes.push(this.empty)
          }
      }
  }

}
