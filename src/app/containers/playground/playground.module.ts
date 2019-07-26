import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundRoutingModule } from "./playground-routing.module";
import { PlaygroundComponent } from "./playground.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { CarouselComponent } from "src/app/custom/ant-design/carousel/carousel.component";
import { CheckboxComponent } from "src/app/custom/ant-design/checkbox/checkbox.component";
import { UploadComponent } from "src/app/custom/ant-design/upload/upload.component";
import { ButtonComponent } from "src/app/custom/ant-design/button/button.component";
import { addComponentModule } from "src/app/directives/addComponent.module";

@NgModule({
	declarations: [
		PlaygroundComponent,
		CheckboxComponent,
		CarouselComponent,
		UploadComponent,
		ButtonComponent
	],
	imports: [
		addComponentModule,
		FormsModule,
		NgZorroAntdModule,
		DragDropModule,
		CommonModule,
		ReactiveFormsModule,
		PlaygroundRoutingModule
	],
	entryComponents: [
		CheckboxComponent,
		CarouselComponent,
		UploadComponent,
		ButtonComponent
	],
})
export class PlaygroundModule {}
