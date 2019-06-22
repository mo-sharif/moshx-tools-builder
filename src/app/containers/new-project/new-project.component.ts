import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../animations/slide-in-out.animation';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  animations: [SlideInOutAnimation]
})
export class NewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
