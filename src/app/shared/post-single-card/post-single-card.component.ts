import { Component, OnInit } from '@angular/core';
import { IPost } from '../model/data';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-post-single-card',
  templateUrl: './post-single-card.component.html',
  styleUrls: ['./post-single-card.component.scss']
})
export class PostSingleCardComponent implements OnInit {

  postId!: string;
  postObj!: IPost;

  constructor(
    private _routes: ActivatedRoute,
    private _post: PostService,
    private _matDialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postId = this._routes.snapshot.params['postId'];
    if (this.postId) {
      this._post.fetchById(this.postId).subscribe({
        next: (data) => {
          this.postObj = data;
        },
        error: (err) => {
          console.log('Fetch failed', err);
        }
      });
    }
  }

  onRemove() {
    const config = new MatDialogConfig();
    config.data = `Are You Sure You Want To Delete With Id ${this.postId}`;
    config.width = '400px';
    config.disableClose = true;
    const dialogRef = this._matDialog.open(ConfirmComponent, config);
    dialogRef.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this._post.onRemove(this.postId).subscribe({
          next: () => {
            this._router.navigate(['/post']);
          },
          error: (err) => {
            console.log('Delete failed', err);
          }
        });
      }
    });
  }
}
