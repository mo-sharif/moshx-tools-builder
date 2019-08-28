import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IProjectComponent } from "../models/project.interface";
import { FormComponent } from "./ant-design/form/form.component";
import { TableComponent } from "./table/table.component";
import { CalendarComponent } from "./ant-design/calendar/calendar.component";
import { PostsComponent } from "./posts/posts.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { UndefinedComponent } from "./undefined/undefined.component"

export const Components: IProjectComponent = {
	Form: FormComponent,
	Table: TableComponent,
	Calendar: CalendarComponent,
	Posts: PostsComponent,
	undefined: UndefinedComponent
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
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		UndefinedComponent
	],
	exports: [
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		UndefinedComponent,
		NgZorroAntdModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule
	],
	entryComponents: [
		FormComponent,
		TableComponent,
		CalendarComponent,
		PostsComponent,
		UndefinedComponent
	]
})
export class ComponentsModule {}
