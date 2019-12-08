import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddUserRoutingModule } from "./add-user-routing.module";
import { AddUserComponent as AddUserContainer } from "./add-user.component";
import { AddUserComponent } from "../../components/form/form.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AddUserComponent, AddUserContainer],
	imports: [CommonModule, AddUserRoutingModule, NgZorroAntdModule,FormsModule, ReactiveFormsModule ],
	providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AddUserModule {}
