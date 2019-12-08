import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewProjectRoutingModule } from "./new-project-routing.module";
import { NewProjectContainer } from "./new-project.container";
import { NzGridModule } from "ng-zorro-antd";
import { NzCardModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd';

@NgModule({
	declarations: [ NewProjectContainer],
	imports: [
    NzGridModule,
    NzCardModule,
    CommonModule,
    NzIconModule,
    NzInputModule,
		NewProjectRoutingModule
	]
})
export class NewProjectModule {}
