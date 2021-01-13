import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HomeComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
