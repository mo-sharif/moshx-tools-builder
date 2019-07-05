import { Component, OnInit } from '@angular/core';
import { listStagger } from 'src/app/animations/list-stagger.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [listStagger]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
