import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input()
  UiComponents: IProject['UiComponents']

  @Output()
  navigateToProject: EventEmitter<string> = new EventEmitter();

  @Output()
  deleteProject: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  navigateToProjectEmit = (project) => {
    return this.navigateToProject.emit(project)
  }

}
