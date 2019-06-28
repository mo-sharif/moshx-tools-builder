import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundRoutingModule } from "./playground-routing.module";
import { PlaygroundComponent } from "./playground.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { CarouselComponent } from "src/app/components/ant-design/carousel/carousel.component";
import { CheckboxComponent } from "src/app/components/ant-design/checkbox/checkbox.component";
import { UploadComponent } from "src/app/components/ant-design/upload/upload.component";
import { ButtonComponent } from "src/app/components/ant-design/button/button.component";
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
