import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { IPost } from '../model/data';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm!: FormGroup;
  isInEdit: boolean = false;
  postId!: string;

  constructor(
    private _fb: FormBuilder,
    private _post: PostService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.patchData()
  }

  createForm() {
    this.postForm = this._fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  patchData() {
    this.postId = this._routes.snapshot.paramMap.get('postId')!;
    if (this.postId) {
      this.isInEdit = true;
      this._post.fetchById(this.postId).subscribe(data => {
        this.postForm.patchValue({
          title: data.title,
          body: data.body
        });
      });
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      const createObj: IPost = this.postForm.value;
      this._post.onAdd(createObj).subscribe(() => {
        this._router.navigate(['/']);
        this._snackBar.snackBar(`Data Added SuccessFully`)
      });
    }
  }

  onPostUpdate() {
    if (this.postForm.valid) {
      const updatedObj: IPost = {
        ...this.postForm.value,
        postId: this.postId
      };
      this._post.onUpdate(updatedObj).subscribe(() => {
        this._router.navigate(['/']);
        this._snackBar.snackBar(`Data Updated SuccessFully`)
      });
    }
  }
}
