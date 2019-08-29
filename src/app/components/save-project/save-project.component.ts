import {
	Component,
	Output,
	Input,
	EventEmitter,
	OnInit,
	OnChanges
} from "@angular/core";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators
} from "@angular/forms";
import { Observable, Observer, of } from "rxjs";
import { IProject } from "src/app/models/project.interface";
import { IUser } from "src/app/models/user.interface";
import { map, catchError, tap, delay } from "rxjs/operators";
import { listStagger } from "src/app/animations/list-stagger.animation";

@Component({
	selector: "app-save-project",
	templateUrl: "./save-project.component.html",
	styleUrls: ["./save-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit, OnChanges {
	@Input()
	selectLoggedInUser: IUser;
	
	@Input()
	selectProject: IProject;
	
	@Input()
	componentConfigs: IProject["componentConfigs"];
	
	@Input()
	selectUiComponents: any;
	
	@Output()
	formData: EventEmitter<any> = new EventEmitter();

	@Output()
	deleteProject: EventEmitter<any> = new EventEmitter();
	
	projectFrom: FormGroup;

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
	emitDeleteProject = value => {
		this.deleteProject.emit(value)
	};
	titleAsyncValidator = (control: FormControl) =>
		new Observable((observer: Observer<ValidationErrors | null>) => {
			setTimeout(() => {
				if (control.value === "home") {
					observer.next({ error: true, duplicated: true });
				} else {
					observer.next(null);
				}
				observer.complete();
			}, 1000);
		});

	confirmValidator = (control: FormControl): { [s: string]: boolean } => {
		if (!control.value) {
			return { required: true };
		} else if (control.value !== this.projectFrom.controls.password.value) {
			return { confirm: true, error: true };
		}
		return {};
	};

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.projectFrom = this.fb.group({
			profile: [null, [Validators.required], [this.titleAsyncValidator]],
			title: [null, [Validators.required]],
			type: [null],
			componentConfigs: this.fb.group({
				httpRequestUrl: [null],
				collectionUrl: [null]
			})
		});
		this.projectFrom.patchValue({ ...this.selectLoggedInUser });
	}
	ngOnChanges() {
		if (this.selectProject && this.selectProject.componentConfigs) {
			try {
				this.projectFrom.patchValue({ ...this.selectProject });
			} catch (err) {
				/* Fix undefined values in patchValues */
				console.warn(err);
			}
		}
	}
}
