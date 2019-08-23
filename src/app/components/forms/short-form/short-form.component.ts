import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { of, Subject, Subscription, Observable } from "rxjs";
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  flatMap,
  map
} from "rxjs/operators";
import { IProject } from "src/app/models/project.interface";

@Component({
  selector: "app-short-form",
  templateUrl: "./short-form.component.html",
  styleUrls: ["./short-form.component.css"]
})
export class ShortFormComponent implements OnInit{
  @Input()
  dataInput: IProject;

  @Input()
  ComponentSetting;

  @Output()
  formData: EventEmitter<any> = new EventEmitter();

  name: string;
  public keyUp = new Subject<any>();
  private subscription: Subscription;
  constructor() {}

	ngOnInit() {
    console.log(this.dataInput.ComponentSettings[this.ComponentSetting.type])

    const subscription = this.keyUp
      .pipe(
        map(event => event.target.value),
        debounceTime(1000),
        distinctUntilChanged(),
        flatMap(search => of(search).pipe(delay(500)))
      )
      .subscribe(value => this.emitFormData(value));
  }
	emitFormData = value => {
    this.formData.emit({[this.ComponentSetting.type]:value});
  };
}
