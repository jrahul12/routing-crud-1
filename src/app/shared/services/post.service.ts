import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL: string = environment.BASE_URL

  POST_URL: string = `${this.BASE_URL}/blog.json`

  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this.POST_URL).pipe(
      map((obj: any) => {
        const postArr: IPost[] = []
        for (const key in obj) {
          postArr.push({
            ...obj[key],
            postId: key
          })
        }
        return postArr
      })
    )
  }

  onAdd(post: IPost): Observable<{ name: string }> {
    return this._http.post<{ name: string }>(this.POST_URL, post)
  }

  onRemove(id: string): Observable<string> {
    let URL = `${this.BASE_URL}/blog/${id}.json`
    return this._http.delete<string>(URL)
  }
  fetchById(id: string): Observable<IPost> {
    const URL = `${this.BASE_URL}/blog/${id}.json`;
    return this._http.get<IPost>(URL);
  }

  onUpdate(post: IPost): Observable<IPost> {
    const URL = `${this.BASE_URL}/blog/${post.postId}.json`
    return this._http.patch<IPost>(URL, post)
  }


}
