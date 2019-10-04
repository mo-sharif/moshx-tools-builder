import { NgModule } from "@angular/core";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectComponent as EditProjectContainer } from "./edit-project.component";
import { EditProjectComponent } from "../../components/save-project/save-project.component";
import { addComponentModule } from "src/app/directives/addComponent.module";
import { ComponentsModule } from "src/app/custom/components-module";

@NgModule({
	declarations: [EditProjectContainer, EditProjectComponent],
	imports: [ComponentsModule, addComponentModule, EditProjectRoutingModule]
})
export class EditProjectModule {}
