import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { listStagger } from '../../animations/list-stagger.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [listStagger]
})
export class LoginComponent implements OnInit {
  @Input()
  user: IUser

  @Output()
  googleLoginEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  logoutEvent: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  googleLogin() { 
    this.googleLoginEvent.emit()
  }

  logout() { 
    this.logoutEvent.emit()
  }

}
