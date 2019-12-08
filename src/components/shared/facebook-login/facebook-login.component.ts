import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "facebook-login",
  templateUrl: "./facebook-login.component.html",
  styleUrls: ["./facebook-login.component.css"]
})
export class FacebookLoginComponent implements OnInit {
  @Output()
  facebookLoginEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  logoutEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  facebookLogin() {
    this.facebookLoginEvent.emit();
  }

  logout() {
    this.logoutEvent.emit();
  }
}
