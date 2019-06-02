import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPostHttp } from '../models/http-models/post-http.interface';
import { IPost } from '../models/post.interface'; 
@Injectable()
export class PostService {

  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http:HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this._http.get<any>(this.postsUrl);
  }
}
