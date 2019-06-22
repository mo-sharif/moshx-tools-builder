import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponentDirective } from "../../directives/addComponent.directive";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectComponent } from "./edit-project.component";

import { CheckboxComponent } from "../../components/ant-design/checkbox/checkbox.component";
import { CarouselComponent } from "../../components/ant-design/carousel/carousel.component";
import { FormComponent } from "../../components/ant-design/form/form.component";
import { TableComponent } from "../../components/ant-design/table/table.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AddComponentDirective,
		EditProjectComponent,
		CheckboxComponent,
		CarouselComponent,
		TableComponent,
		FormComponent
	],
	imports: [
		CommonModule,
		EditProjectRoutingModule,
		NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
	],
	entryComponents: [
		CheckboxComponent,
		CarouselComponent,
		TableComponent,
		FormComponent
	]
})
export class EditProjectModule {}
