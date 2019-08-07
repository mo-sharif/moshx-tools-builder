import { NgModule } from "@angular/core";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectComponent as EditProjectContainer } from "./edit-project.component";
import { EditProjectComponent } from "../../components/edit-project/edit-project.component";

import { addComponentModule } from "src/app/directives/addComponent.module";
import { ComponentsModule } from "src/app/custom/components-module";

@NgModule({
  declarations: [
    // AddComponentDirective,
    EditProjectContainer,
    EditProjectComponent,
  ],
  imports: [
    ComponentsModule,
    addComponentModule,
    EditProjectRoutingModule,
    // EffectsModule.forFeature([ProjectEffects])
  ],
  // providers: [ProjectService]
})
export class EditProjectModule { }
