import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent as LoginContainer } from "./login.component";
import { LoginComponent } from "../../components/login/login.component";
import { NzButtonModule } from "ng-zorro-antd";

@NgModule({
  declarations: [LoginComponent, LoginContainer],
  imports: [CommonModule, LoginRoutingModule, NzButtonModule]
})
export class LoginModule {}
