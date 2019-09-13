import {
	AfterContentInit,
	Component,
	Input,
	Type,
	OnInit
} from "@angular/core";
import {style, state, animate, transition, trigger} from '@angular/animations';

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
	key: string;
	value: string;
	type: string;
}
@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class FormComponent implements OnInit {
	@Input() data: any;

  projectFrom: FormGroup;
	controls: Array<Item> = [];

	ngOnInit(): void {

    this.projectFrom = this.fb.group({});
    
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
      component: InputComponent,
    },
    {
      label: "Select",
      component: SelectComponent,
    }
	];

  constructor(private fb: FormBuilder) {}
  
	addField(key, value): void {
		const id =
			this.controls.length > 0
				? this.controls[this.controls.length - 1].id + 1
				: 0;

		const control = {
			id,
			key: `${key || `Field${id}` }`,
			value: `${value}`,
			type: "text"
		};
		const index = this.controls.push(control);

		this.projectFrom.addControl(
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
			this.projectFrom.removeControl(i.key);
		}
  }
  
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
      console.log(event.item)
      // addField();
		}
	}

	ngAfterContentInit() {}

	ngOnDestroy() {}
}
