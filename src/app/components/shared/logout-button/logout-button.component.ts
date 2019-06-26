import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {
  @Input()
  user: IUser

  @Output()
  logoutEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  logout() { 
    this.logoutEvent.emit()
  }

}
