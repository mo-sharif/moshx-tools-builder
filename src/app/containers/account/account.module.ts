import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./account-routing.module";
import { AccountComponent as AccountContainer } from "./account.component";
import { GoogleLoginComponent } from "../../components/shared/google-login/google-login.component";
import { LoginFormComponent } from "src/app/components/login-form/login-form.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { GithubLoginComponent } from "src/app/components/shared/github-login/github-login.component";
import { FacebookLoginComponent } from "src/app/components/shared/facebook-login/facebook-login.component";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RegisterComponent } from "src/app/components/register/register.component";

@NgModule({
	declarations: [GoogleLoginComponent, GithubLoginComponent, AccountContainer, LoginFormComponent, FacebookLoginComponent, RegisterComponent],
	imports: [
		NgZorroAntdModule,
		CommonModule,
		LoginRoutingModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class AccountModule {}
