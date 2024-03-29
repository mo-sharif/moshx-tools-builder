import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listStagger } from "../../../animations/list-stagger.animation";
import { IUser } from '../../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [listStagger],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'job', 'location'];

  @Input()
  users: IUser[];

  @Input()
  loading: boolean;

  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
