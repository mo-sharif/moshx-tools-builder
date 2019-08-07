import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IProjectComponent } from "../models/project.interface";
import { CheckboxComponent } from "./ant-design/checkbox/checkbox.component";
import { FormComponent } from "./ant-design/form/form.component";
import { TableComponent } from "./ant-design/table/table.component";
import { CalendarComponent } from "./ant-design/calendar/calendar.component";
import { PostsComponent } from "./posts/posts.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";

export const Components: IProjectComponent = {
	Checkbox: CheckboxComponent,
	Form: FormComponent,
	Table: TableComponent,
	Calendar: CalendarComponent,
	Posts: PostsComponent
};

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		NgZorroAntdModule,
		ScrollDispatchModule
	],

	declarations: [
		CheckboxComponent,
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent
	],
	exports: [
		CheckboxComponent,
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		NgZorroAntdModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule
	],
	entryComponents: [
		CheckboxComponent,
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent
	]
})
export class ComponentsModule {}
