import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../model/data';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  constructor(private _postService: PostService,
    private _snackBar: SnackbarService
  ) { }

  postArr: IPost[] = []

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll() {
    this._postService.fetchAll().subscribe(res => {
      this.postArr = res
      // this._snackBar.snackBar(`Post Fetched SuccessFully`)
    })
  }

}
