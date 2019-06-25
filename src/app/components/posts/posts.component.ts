import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listStagger } from "../../animations/list-stagger.animation";
import { IPost } from '../../models/post.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
	animations: [listStagger] // register the animation
})
export class PostsComponent implements OnInit {
  @Input()
  posts: IPost[];
  @Input()
  loading: Boolean;

  @Output()
  postSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToPost(id: number) {
    this.postSelected.emit(id);
  }
}
