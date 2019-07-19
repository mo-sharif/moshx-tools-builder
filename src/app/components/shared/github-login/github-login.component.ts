import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "github-login",
  templateUrl: "./github-login.component.html"
})
export class GithubLoginComponent implements OnInit {
  @Output()
  githubLoginEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  logoutEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  githubLogin() {
    this.githubLoginEvent.emit();
  }

  logout() {
    this.logoutEvent.emit();
  }
}
