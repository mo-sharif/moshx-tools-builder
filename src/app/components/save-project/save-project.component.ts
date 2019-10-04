import { Component, Output, Input, EventEmitter, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { Observable, Observer } from "rxjs";
import { IProject } from "src/app/models/project.interface";
import { IUser } from "src/app/models/user.interface";
import { listStagger } from "src/app/animations/list-stagger.animation";
import { ProfileService } from "src/app/services/profile/profile.service";
import {
  map,
  distinctUntilChanged,
  debounceTime,
  withLatestFrom
} from "rxjs/operators";

export interface Item {
  id: number;
  key: string;
  value: string;
  type: string;
}

@Component({
  selector: "app-save-project",
  templateUrl: "./save-project.component.html",
  styleUrls: ["./save-project.component.css"],
  animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
  @Input()
  selectLoggedInUser$: Observable<IUser>;

  @Input()
  selectProject$: Observable<IProject>;

  @Input()
  componentConfigs: IProject["componentConfigs"];

  @Input()
  selectUiComponents: any;

  @Output()
  formData: EventEmitter<any> = new EventEmitter();

  projectFrom: FormGroup;

  controls: Array<Item> = [];

  submitForm = ($event: any, value: IProject) => {
    $event.preventDefault();
    for (const key in this.projectFrom.controls) {
      this.projectFrom.controls[key].markAsDirty();
      this.projectFrom.controls[key].updateValueAndValidity();
    }
    this.emitFormData(value);
  };

  emitFormData = value => {
    this.formData.emit(value);
  };

  titleAsyncValidator = (control: FormControl) => {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      this._profileService
        .loadProfile(control.value)
        .pipe(
          distinctUntilChanged(),
          debounceTime(500),
          withLatestFrom(this.selectLoggedInUser$),
          map(([data, user]) => {
            if (user.profile) {
              observer.next({ error: false, duplicated: false });
            } else {
              let isTaken = data.length ? true : false;
              if (isTaken) {
                observer.next({ error: true, duplicated: true });
              } else {
                observer.next(null);
              }
            }

            observer.complete();
          })
        )
        .subscribe();
    });
  };

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.projectFrom.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  addField(key, value): void {
    const id =
      this.controls.length > 0
        ? this.controls[this.controls.length - 1].id + 1
        : 0;

    const control = {
      id,
      key: `${key || `Field${id}`}`,
      value: `${value}`,
      type: "text"
    };
    const index = this.controls.push(control);

    const httpConfigsGroup = this.projectFrom.get([
      "componentConfigs",
      "httpParams"
    ]) as FormGroup;

    httpConfigsGroup.addControl(
      this.controls[index - 1].key,
      new FormControl(null)
      //Validators.required
    );
  }

  removeField(i: Item, e: MouseEvent): void {
    e.preventDefault();
    if (this.controls.length > 0) {
      const index = this.controls.indexOf(i);
      this.controls.splice(index, 1);
      const httpConfigsGroup = this.projectFrom.get([
        "componentConfigs",
        "httpParams"
      ]) as FormGroup;
      httpConfigsGroup.removeControl(i.key);
    }
  }

  constructor(
    private fb: FormBuilder,
    private _profileService: ProfileService
  ) {}

  ngOnInit() {
    this.projectFrom = this.fb.group({
      profile: [null, [Validators.required], [this.titleAsyncValidator], ""],
      title: [null, [Validators.required]],
      type: [null],
      componentConfigs: this.fb.group({
        httpRequestUrl: [null],
        responseData: [null],
        httpPostUrl: [null],
        httpParams: this.fb.group({})
      })
    });

    this.selectLoggedInUser$.subscribe(selectLoggedInUser => {
      if (selectLoggedInUser) {
        this.projectFrom.patchValue({ ...selectLoggedInUser });
        if (selectLoggedInUser && selectLoggedInUser.profile) {
          this.projectFrom.controls.profile.disable();
        }
      }
    });

    this.selectProject$.subscribe(selectProject => {
      if (selectProject) {
        this.projectFrom.patchValue({ ...selectProject });
        if (this.controls.length == 0 && selectProject.componentConfigs) {
          for (let [key, value] of Object.entries(
            selectProject.componentConfigs.httpParams
          )) {
            this.addField(key, value);
            this.projectFrom.patchValue({ ...selectProject });
          }
        }
      }
    });
  }
}
