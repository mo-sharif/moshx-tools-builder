import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundRoutingModule } from "./playground-routing.module";
import { PlaygroundComponent } from "./playground.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
// import { AddComponentDirective } from "src/app/directives/addComponent.directive";

@NgModule({
	declarations: [
		PlaygroundComponent,
		// AddComponentDirective
		// CheckboxComponent,
		// CarouselComponent,
		// UploadComponent,
		// ButtonComponent
	],
	imports: [
		FormsModule,
		NgZorroAntdModule,
		DragDropModule,
		CommonModule,
		PlaygroundRoutingModule
	],
	entryComponents: [
		// CheckboxComponent,
		// CarouselComponent,
		// UploadComponent,
		// ButtonComponent
	],
	// exports: [AddComponentDirective]
})
export class PlaygroundModule {}
