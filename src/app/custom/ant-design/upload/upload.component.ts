import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input()
  inputData$: any;

  @Output()
  outputEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onClick($event) {
    this.outputEvent.emit($event)
  }

}
