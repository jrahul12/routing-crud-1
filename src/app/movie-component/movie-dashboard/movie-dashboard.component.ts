import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/model/data';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  movieArr: IMovie[] = []
  constructor(private _movie: MovieService) { }

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll() {
    this._movie.fetchAll().subscribe(res => {
      this.movieArr = res
    })
  }

}
