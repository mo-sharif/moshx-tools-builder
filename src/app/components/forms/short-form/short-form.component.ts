import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { of, Subject, Subscription } from "rxjs";
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  flatMap,
  map
} from "rxjs/operators";

@Component({
  selector: "app-short-form",
  templateUrl: "./short-form.component.html",
  styleUrls: ["./short-form.component.css"]
})
export class ShortFormComponent implements OnInit, OnDestroy {
  @Input()
  dataInput;

  @Output()
  formData: EventEmitter<any> = new EventEmitter();

  name: string;
  public keyUp = new Subject<any>();
  private subscription: Subscription;
  constructor() {}

  ngOnInit() {
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
    this.formData.emit(value);
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
