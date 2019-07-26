import { AfterContentInit, Component, Input, Type, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

@Component({
	selector: "app-playground",
	templateUrl: "./playground.component.html",
	styleUrls: ["./playground.component.css"]
})
export class PlaygroundComponent implements AfterContentInit, OnInit {
	@Input() data: any;

	validateForm: FormGroup;
  	listOfControl: Array<{ id: number; controlInstance: string }> = [];

	ngOnInit(): void {
	this.validateForm = this.fb.group({});
	this.addField();
	}

	addField(e?: MouseEvent): void {
		if (e) {
		  e.preventDefault();
		}
		const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
	
		const control = {
		  id,
		  controlInstance: `passenger${id}`
		};
		const index = this.listOfControl.push(control);
		console.log(this.listOfControl[this.listOfControl.length - 1]);
		this.validateForm.addControl(
		  this.listOfControl[index - 1].controlInstance,
		  new FormControl(null, Validators.required)
		);
	  }
	
	  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
		e.preventDefault();
		if (this.listOfControl.length > 1) {
		  const index = this.listOfControl.indexOf(i);
		  this.listOfControl.splice(index, 1);
		  console.log(this.listOfControl);
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
