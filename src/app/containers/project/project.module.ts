import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectRoutingModule } from "./project-routing.module";
import { ProjectComponent as ProjectContainer } from "./project.component";
import { ProjectComponent } from "../../components/project/project.component";
import { ProfileService } from "../../services/profile/profile.service";

@NgModule({
	declarations: [ProjectComponent, ProjectContainer],
	imports: [
		CommonModule,
		ProjectRoutingModule
	],
  providers: [ProfileService]
  
})
export class ProjectModule {}
