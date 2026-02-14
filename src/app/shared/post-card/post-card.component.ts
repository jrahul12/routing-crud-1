import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../model/data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: IPost

  constructor(
  ) { }

  ngOnInit(): void {
  }



}
