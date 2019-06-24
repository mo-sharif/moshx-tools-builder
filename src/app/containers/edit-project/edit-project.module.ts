import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponentDirective } from "../../directives/addComponent.directive";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectComponent as EditProjectContainer } from "./edit-project.component";

import { CheckboxComponent } from "../../components/ant-design/checkbox/checkbox.component";
import { CarouselComponent } from "../../components/ant-design/carousel/carousel.component";
import { FormComponent } from "../../components/ant-design/form/form.component";
import { TableComponent } from "../../components/ant-design/table/table.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditProjectComponent } from "../../components/edit-project/edit-project.component";
import { NzTabsModule } from "ng-zorro-antd";

@NgModule({
	declarations: [
		AddComponentDirective,
		EditProjectContainer,
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
		NzTabsModule,
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
