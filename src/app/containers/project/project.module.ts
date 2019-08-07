import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectRoutingModule } from "./project-routing.module";
import { ProjectComponent as ProjectContainer } from "./project.component";
import { ProjectComponent } from "../../components/project/project.component";
import { ProfileService } from "../../services/profile/profile.service";

import { NzGridModule } from "ng-zorro-antd";
import { NzCardModule } from "ng-zorro-antd";
import { NzIconModule } from "ng-zorro-antd";
import { NzInputModule } from "ng-zorro-antd";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
	declarations: [ProjectComponent, ProjectContainer],
	imports: [
    CommonModule,
		ProjectRoutingModule,
		NzGridModule,
		NzCardModule,
		CommonModule,
		NzIconModule,
		NzInputModule,
		NzSpinModule,
		NzButtonModule
	],
	providers: [ProfileService]
})
export class ProjectModule {}
