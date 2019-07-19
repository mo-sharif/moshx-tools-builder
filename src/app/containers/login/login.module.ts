import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent as LoginContainer } from "./login.component";
import { GoogleLoginComponent } from "../../components/shared/google-login/google-login.component";
import { NzButtonModule } from "ng-zorro-antd";
import { LoginFormComponent } from "src/app/components/login-form/login-form.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd';
import { GithubLoginComponent } from "src/app/components/shared/github-login/github-login.component";
import { FacebookLoginComponent } from "src/app/components/shared/facebook-login/facebook-login.component";
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
	declarations: [GoogleLoginComponent, GithubLoginComponent, LoginContainer, LoginFormComponent, FacebookLoginComponent],
	imports: [
    NzFormModule,
    NzInputModule,
		CommonModule,
		LoginRoutingModule,
		NzButtonModule,
		NzGridModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class LoginModule {}
