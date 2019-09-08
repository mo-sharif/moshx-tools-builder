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
	transferArrayItem,
	copyArrayItem
} from "@angular/cdk/drag-drop";

import { CheckboxComponent } from "../../custom/ant-design/checkbox/checkbox.component";
import { CarouselComponent } from "src/app/custom/ant-design/carousel/carousel.component";
import { UploadComponent } from "src/app/custom/ant-design/upload/upload.component";
import { ButtonComponent } from "src/app/custom/ant-design/button/button.component";
import { InputComponent } from "../ant-design/input/input.component";
import { SelectComponent } from "../ant-design/select/select.component";

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
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
	@Input() data: any;

	validateForm: FormGroup;
	// controls: Array<{ id: number; controlInstance: string }> = [];

	ngOnInit(): void {}

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
      component: InputComponent,
    },
    {
      label: "Select",
      component: SelectComponent,
    }
	];

	constructor(private fb: FormBuilder) {}

	drop(event: CdkDragDrop<Comp[]>) {
		if (event.container.id === "libraryComponents") {
			console.log("remove me");
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

	ngOnDestroy() {}
}
