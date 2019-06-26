import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponentDirective } from "../../directives/addComponent.directive";

import { EditProjectRoutingModule } from "./edit-project-routing.module";
import { EditProjectComponent as EditProjectContainer } from "./edit-project.component";

import { FormComponent } from "../../components/ant-design/form/form.component";
import { TableComponent } from "../../components/ant-design/table/table.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditProjectComponent } from "../../components/edit-project/edit-project.component";
import { NzTabsModule } from "ng-zorro-antd";
import { ProjectService } from "src/app/services/project/project.service";
import { EffectsModule } from "@ngrx/effects";
import { ProjectEffects } from "src/app/store/effects/project.effects";
import { CalendarComponent } from "src/app/components/calendar/calendar.component";

@NgModule({
  declarations: [
    AddComponentDirective,
    EditProjectContainer,
    EditProjectComponent,
    TableComponent,
    FormComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    EditProjectRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    NzTabsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ProjectEffects])
  ],
  entryComponents: [
    TableComponent,
    FormComponent,
    CalendarComponent
  ],
  providers: [ProjectService]
})
export class EditProjectModule {}
