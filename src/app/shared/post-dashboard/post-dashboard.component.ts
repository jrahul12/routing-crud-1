import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../model/data';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  constructor(private _postService: PostService) { }

  postArr: IPost[] = []

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll() {
    this._postService.fetchAll().subscribe(res => {
      this.postArr = res
    })
  }

}
