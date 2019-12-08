import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users/users.component";
import { UsersContainer } from "./users.container";
import { UserComponent as UserContainerComponent } from "./user/user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { UserService } from "src/services/user/user.service";

@NgModule({
	declarations: [
		UsersComponent,
		UsersContainer,
		UserContainerComponent,
		UserDetailsComponent
	],
	imports: [
		CommonModule,
		UsersRoutingModule,
		NgZorroAntdModule,
	],
	providers: [UserService]
})
export class UsersModule {}
