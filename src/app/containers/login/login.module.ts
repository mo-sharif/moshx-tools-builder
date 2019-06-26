import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent as LoginContainer } from "./login.component";
import { GoogleLoginComponent } from "../../components/shared/google-login-button/google-login.component";
import { NzButtonModule } from "ng-zorro-antd";
import { LoginFormComponent } from "src/app/components/login-form/login-form.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd';

@NgModule({
	declarations: [GoogleLoginComponent, LoginContainer, LoginFormComponent],
	imports: [
    NzFormModule,
    NzInputModule,
		CommonModule,
		LoginRoutingModule,
		NzButtonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class LoginModule {}
