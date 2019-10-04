import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  
  @Input()
  inputData$: any;

  @Output()
  outputEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
