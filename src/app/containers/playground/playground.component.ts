import { AfterContentInit, Component, Input, Type } from "@angular/core";
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem
} from "@angular/cdk/drag-drop";

import { CheckboxComponent } from "../../components/ant-design/checkbox/checkbox.component";
import { CarouselComponent } from "src/app/components/ant-design/carousel/carousel.component";
import { UploadComponent } from "src/app/components/ant-design/upload/upload.component";
import { ButtonComponent } from "src/app/components/ant-design/button/button.component";

export interface Comp {
	label: string;
	component: Type<any>;
}

@Component({
	selector: "playground",
	templateUrl: "./playground.component.html",
	styleUrls: ["./playground.component.css"]
})
export class PlaygroundComponent implements AfterContentInit {
	@Input() data: any;

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

	constructor() {}

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
