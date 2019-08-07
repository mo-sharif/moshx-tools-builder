import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})


export class DeleteProjectComponent implements OnInit {
  
  @Input()
  selectedProject: IProject

  @Output()
  deleteProject: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteProjectEmit = (selectedProject) => {
    return this.deleteProject.emit(selectedProject)
  }
}
