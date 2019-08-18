import { NgModule } from "@angular/core";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectComponent as EditProjectContainer } from "./edit-project.component";
import { EditProjectComponent } from "../../components/save-project/save-project.component";
import { addComponentModule } from "src/app/directives/addComponent.module";
import { ComponentsModule } from "src/app/custom/components-module";
import { ShortFormComponent } from "../../components/forms/short-form/short-form.component";

@NgModule({
  declarations: [
    EditProjectContainer,
    EditProjectComponent,
    ShortFormComponent,
  ],
  imports: [
    ComponentsModule,
    addComponentModule,
    EditProjectRoutingModule
  ],
})
export class EditProjectModule { }
