import {
	Component,
	Input,
	Type,
	OnInit,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef
} from "@angular/core";
import {
	style,
	animate,
	transition,
	trigger
} from "@angular/animations";

import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from "@angular/forms";

import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
	copyArrayItem
} from "@angular/cdk/drag-drop";

import { CheckboxComponent } from "../../custom/ant-design/checkbox/checkbox.component";
import { CarouselComponent } from "src/app/custom/ant-design/carousel/carousel.component";
import { UploadComponent } from "src/app/custom/ant-design/upload/upload.component";
import { ButtonComponent } from "src/app/custom/ant-design/button/button.component";
import { InputComponent } from "../ant-design/input/input.component";
import { SelectComponent } from "../ant-design/select/select.component";
import { IProject } from "src/app/models/project.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IAppState } from "src/app/store/state/app.state";
import { Store, select } from "@ngrx/store";
import { SendHttpRequest } from "src/app/store/actions/comp.actions";
import { selectSendRequestResults } from "src/app/store/selectors/comp.selectors";

export interface Comp {
	label: string;
	component: Type<any>;
}
export interface Item {
	id: number;
	key: string;
	value: string;
	type: string;
}
@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.css"],
	animations: [
		trigger("fadeInOut", [
			transition(":enter", [
				// :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 }))
			]),
			transition(":leave", [
				// :leave is alias to '* => void'
				animate(500, style({ opacity: 0 }))
			])
		])
	]
})
export class FormComponent implements OnInit {
	@Input() selectProject$: Observable<IProject>;

	@Input() selectUiComponents$: Observable<IProject["UiComponents"]>;

	@Output() formData: EventEmitter<any> = new EventEmitter();

	@ViewChild("fieldKey") fieldKey: ElementRef;

	projectFrom: FormGroup;
	controls: Array<Item> = [];
	isProjectOwner: boolean;
	isEditMode: boolean;
	httpPostUrl: string;
	selectRequestResults$ = this._store.pipe(select(selectSendRequestResults));

	ngOnInit(): void {
		this.selectProject$.subscribe(selectProject => {
			if (selectProject && selectProject.Form) {
				let selectControls: Array<Item> = Object.values(selectProject.Form);
				if (selectControls.length !== this.controls.length) {
					selectControls.map((control, key) =>
						this.addField(control.key, control.value)
					);
				}
			}
			if (
				selectProject &&
				selectProject.componentConfigs &&
				selectProject.componentConfigs.httpPostUrl
			) {
				this.httpPostUrl = selectProject.componentConfigs.httpPostUrl;
			}
		});
		this.selectUiComponents$.subscribe(selectUiComponents => {
			this.isProjectOwner =
				selectUiComponents && selectUiComponents.isProjectOwner;
			this.isEditMode =
				selectUiComponents && selectUiComponents.projectViewToggle;
			if (!this.isProjectOwner) {
				this.isEditMode = true;
			}
		});
	}
	formComponents: Comp[] = [];

	libraryComponents: Comp[] = [
		{
			label: "Checkbox",
			component: CheckboxComponent
		},
		{
			label: "Mention",
			component: CarouselComponent
		},
		{
			label: "Slider",
			component: UploadComponent
		},
		{
			label: "Radio",
			component: CheckboxComponent
		},
		{
			label: "Button",
			component: ButtonComponent
		},
		{
			label: "Input",
			component: InputComponent
		},
		{
			label: "Select",
			component: SelectComponent
		}
	];

	constructor(private fb: FormBuilder, private http: HttpClient,private _store: Store<IAppState>,) {
		this.projectFrom = this.fb.group({});
	}

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

		this.projectFrom.addControl(
			this.controls[index - 1].key,
			new FormControl(null)
			//Validators.required
		);
		this.fieldKey.nativeElement.value = "";
	}

	removeField(i: Item, e: MouseEvent): void {
		e.preventDefault();
		if (this.controls.length > 0) {
			const index = this.controls.indexOf(i);
			this.controls.splice(index, 1);
			this.projectFrom.removeControl(i.key);
		}
	}
	submitForm = ($event: any, sendData: IProject) => {
		$event.preventDefault();
		for (const key in this.projectFrom.controls) {
			this.projectFrom.controls[key].markAsDirty();
			this.projectFrom.controls[key].updateValueAndValidity();
		}
		this.handlePostSubmit(sendData);
	};

	handlePostSubmit = sendData => {
		this._store.dispatch(new SendHttpRequest(sendData))
	};

	emitFormData = value => {
		this.formData.emit(value);
	};

	drop(event: CdkDragDrop<Comp[]>) {
		if (event.container.id === "libraryComponents") {
		}

		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			copyArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
	}

	ngAfterContentInit() {}

	ngOnDestroy() {
		this.controls.length ? this.emitFormData(this.controls) : "";
	}
}
