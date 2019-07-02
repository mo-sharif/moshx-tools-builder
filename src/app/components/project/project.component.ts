import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';
import { listStagger } from '../../animations/list-stagger.animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [listStagger]
})
export class ProjectComponent implements OnInit {

  @Input()
  userProjects: IProject[]

  constructor() { }

  ngOnInit() {
  }

  navigateToProject() {
    return
  }

}
