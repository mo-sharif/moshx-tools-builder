import { NgModule } from "@angular/core";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectContainer } from "./edit-project.container";
import { SaveProjectComponent } from "./save-project/save-project.component";
import { addComponentModule } from "src/directives/addComponent.module";
import { ComponentsModule } from "src/custom/components-module";

@NgModule({
	declarations: [EditProjectContainer, SaveProjectComponent],
	imports: [ComponentsModule, addComponentModule, EditProjectRoutingModule]
})
export class EditProjectModule {}
