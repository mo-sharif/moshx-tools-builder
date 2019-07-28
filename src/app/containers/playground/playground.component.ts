import {
	AfterContentInit,
	Component,
	Input,
	Type,
	OnInit
} from "@angular/core";
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
	transferArrayItem
} from "@angular/cdk/drag-drop";

import { CheckboxComponent } from "../../custom/ant-design/checkbox/checkbox.component";
import { CarouselComponent } from "src/app/custom/ant-design/carousel/carousel.component";
import { UploadComponent } from "src/app/custom/ant-design/upload/upload.component";
import { ButtonComponent } from "src/app/custom/ant-design/button/button.component";

export interface Comp {
	label: string;
	component: Type<any>;
}
export interface Item {
	id: number;
	controlInstance: string;
	label: string;
	component: Type<any>;
}
@Component({
	selector: "app-playground",
	templateUrl: "./playground.component.html",
	styleUrls: ["./playground.component.css"]
})
export class PlaygroundComponent implements AfterContentInit, OnInit {
	@Input() data: any;

	validateForm: FormGroup;
	// controls: Array<{ id: number; controlInstance: string }> = [];

	ngOnInit(): void {
		this.validateForm = this.fb.group({});
		this.addField();
	}

	addField(e?: MouseEvent): void {
		if (e) {
			e.preventDefault();
		}
		const id =
			this.controls.length > 0
				? this.controls[this.controls.length - 1].id + 1
				: 0;

		const control = {
			id,
			controlInstance: `test${id}`,
			label: `checkbox${id}`,
			component: CheckboxComponent
		};
		const index = this.controls.push(control);
		console.log(this.controls[this.controls.length - 1]);
		this.validateForm.addControl(
			this.controls[index - 1].controlInstance,
			new FormControl(null, Validators.required)
		);
	}

	removeField(i: Item, e: MouseEvent): void {
		e.preventDefault();
		if (this.controls.length > 1) {
			const index = this.controls.indexOf(i);
			this.controls.splice(index, 1);
			console.log(this.controls);
			this.validateForm.removeControl(i.controlInstance);
		}
	}

	getFormControl(name: string): AbstractControl {
		return this.validateForm.controls[name];
	}

	submitForm(): void {
		for (const i in this.validateForm.controls) {
			this.validateForm.controls[i].markAsDirty();
			this.validateForm.controls[i].updateValueAndValidity();
		}
		console.log(this.validateForm.value);
	}

	components: Comp[] = [
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
		}
	];

	componentsRendered: Comp[] = [
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
		}
	];
	controls: Array<Item> = [];

	constructor(private fb: FormBuilder) {}

	drop(event: CdkDragDrop<Comp[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
	}

	ngAfterContentInit() {}

	ngOnDestroy() {}
}
