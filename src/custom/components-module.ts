import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IProjectComponent } from "../models/project.interface";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { CalendarComponent } from "./ant-design/calendar/calendar.component";
import { PostsComponent } from "./posts/posts.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { UndefinedComponent } from "./undefined/undefined.component"
import { DragDropModule } from "@angular/cdk/drag-drop";
import { addComponentModule } from "src/directives/addComponent.module";
import { CheckboxComponent } from "./ant-design/checkbox/checkbox.component";
import { UploadComponent } from "./ant-design/upload/upload.component";
import { CarouselComponent } from "./ant-design/carousel/carousel.component";
import { ButtonComponent } from "./ant-design/button/button.component";
import { SelectComponent } from "./ant-design/select/select.component";
import { InputComponent } from "./ant-design/input/input.component";
import { CustomComponent } from "./custom-component/custom-component.component";
import { EffectsModule } from "@ngrx/effects";
import { CompEffects } from "../store/effects/comp.effects";

export const Components: IProjectComponent = {
	Form: FormComponent,
	Table: TableComponent,
	Calendar: CalendarComponent,
	Posts: PostsComponent,
	Custom: CustomComponent,
	undefined: UndefinedComponent
};

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		NgZorroAntdModule,
		DragDropModule,
		addComponentModule,
		ScrollDispatchModule,
		EffectsModule.forFeature([CompEffects])
	],

	declarations: [
		FormComponent,
		CustomComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		UndefinedComponent,
		CheckboxComponent,
		CarouselComponent,
		UploadComponent,
		ButtonComponent,
		SelectComponent,
		InputComponent
	],
	exports: [
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		UndefinedComponent,
		CustomComponent,
		NgZorroAntdModule,
		DragDropModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule
	],
	entryComponents: [
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		UndefinedComponent,
		CustomComponent,
		CheckboxComponent,
		CarouselComponent,
		UploadComponent,
		ButtonComponent,
		SelectComponent,
		InputComponent
	]
})
export class ComponentsModule {}
