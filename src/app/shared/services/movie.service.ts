import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  BASE_URL: string = environment.BASE_URL

  MOVIEURL: string = `${this.BASE_URL}/movie.json`
  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<IMovie[]> {
    return this._http.get<IMovie[]>(this.MOVIEURL).pipe(
      map((obj: any) => {
        const movieArr: IMovie[] = []
        for (const key in obj) {
          movieArr.push({
            ...obj[key],
            movieId: key
          })
        }
        return movieArr
      })
    )
  }

  onAdd(movie: IMovie): Observable<IMovie> {
    return this._http.post<IMovie>(this.MOVIEURL, movie)
  }

}
