import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { appReducers } from "./store/reducers/app.reducers";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { ConfigEffects } from "./store/effects/config.effects";
import { UserEffects } from "./store/effects/user.effects";
import { PostEffects } from "./store/effects/post.effects";
import { AppComponent } from "./app.component";
import { UserService } from "./services/user.service";
import { PostService } from "./services/post.service";
import { UsersComponent as UsersContainerComponent } from "./containers/users/users.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./containers/user/user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostsComponent as PostsComponentContainer } from "./containers/posts/posts.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./components/shared/header/header.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
	declarations: [
		AppComponent,
		UsersContainerComponent,
		UsersComponent,
		UserComponent,
		UserDetailsComponent,
		PostsComponent,
		PostsComponentContainer,
		HeaderComponent,
		FooterComponent,
		SettingsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot([UserEffects, ConfigEffects, PostEffects]),
		StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AppRoutingModule,
		/** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
		NgZorroAntdModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }, UserService, PostService],
	bootstrap: [AppComponent]
})
export class AppModule {}
