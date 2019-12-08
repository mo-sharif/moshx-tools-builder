import { GetUsers } from '../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectUserList } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';
import { selectLoading } from 'src/store/selectors/loading.selector';

@Component({
  templateUrl: './users.container.html',
  styleUrls: ['./users.container.css']
})
export class UsersContainer implements OnInit {
  users$ = this._store.pipe(select(selectUserList));
  loading$ = this._store.pipe(select(selectLoading));
  
  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['home/users', id]);
  }
}
