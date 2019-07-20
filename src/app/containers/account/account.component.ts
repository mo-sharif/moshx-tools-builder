import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
  GoogleLogin,
  Logout,
  GithubLogin,
  FacebookLogin,
  EmailLogin,
  EmailSignUp
} from "../../store/actions/auth.actions";
import { IAppState } from "../../store/state/app.state";
import { listStagger } from "../../animations/list-stagger.animation";

import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { Router } from "@angular/router";
import {
  ILoginData,
  IUser,
  IEmailSignUpData
} from "src/app/models/user.interface";

@Component({
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  animations: [listStagger]
})
export class AccountComponent implements OnInit {
  user$ = this._store.pipe(select(selectLoggedInUser));

  constructor(private _store: Store<IAppState>, private _route: Router) {}

  ngOnInit() {}

  googleLogin() {
    this._store.dispatch(new GoogleLogin());
  }

  githubLogin() {
    this._store.dispatch(new GithubLogin());
  }

  facebookLogin() {
    this._store.dispatch(new FacebookLogin());
  }

  emailLogin = (formData: ILoginData) => {
    this._store.dispatch(new EmailLogin(formData));
  };

  register = (formData: IEmailSignUpData) => {
    this._store.dispatch(new EmailSignUp(formData));
  };
  logout() {
    this._store.dispatch(new Logout());
  }
}
