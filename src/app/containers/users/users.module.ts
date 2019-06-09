import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "../../components/users/users.component";
import { UsersComponent as UsersContainerComponent } from "../../containers/users/users.component";
import { UserComponent as UserContainerComponent } from "../../containers/user/user.component";
import { UserDetailsComponent } from "../../components/user-details/user-details.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

@NgModule({
	declarations: [
		UsersComponent,
		UsersContainerComponent,
		UserContainerComponent,
		UserDetailsComponent
	],
	imports: [CommonModule, UsersRoutingModule, NgZorroAntdModule],
	providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class UsersModule {}
