import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
  GoogleLogin,
  Logout,
  GithubLogin,
  FacebookLogin,
  EmailLogin
} from "./../../store/actions/auth.actions";
import { IAppState } from "../../store/state/app.state";
import { listStagger } from "../../animations/list-stagger.animation";

import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { Router } from "@angular/router";
import { ILoginData } from "src/app/models/user.interface";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [listStagger]
})
export class LoginComponent implements OnInit {
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
    console.log(formData)
    this._store.dispatch(new EmailLogin(formData));
  }
  logout() {
    this._store.dispatch(new Logout());
  }
}
