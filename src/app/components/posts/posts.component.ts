import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IPost } from '../../models/post.interface';
import { ILoading } from '../../models/loading.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  posts: IPost[];
  @Input()
  loading: ILoading;

  @Output()
  postSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToPost(id: number) {
    this.postSelected.emit(id);
  }
}
