import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { AppRoutingModule } from "./app-routing.module";

// Environment Variables
import { environment } from "../environments/environment";

// App Reducer
import { appReducers } from "./store/reducers/app.reducers";

// Effects
import { ConfigEffects } from "./store/effects/config.effects";
import { UserEffects } from "./store/effects/user.effects";
import { PostEffects } from "./store/effects/post.effects";

// Services
import { UserService } from "./services/user.service";
import { PostService } from "./services/post.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/guard.service";

// import { MaterialModule } from "./material/material.module";

// Ant Design
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

// Firebase Imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Containers
import { LoginComponent as loginContainer } from "./containers/login/login.component";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { LoginComponent } from "./components/login/login.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from './components/register/register.component';
import { AuthEffects } from "./store/effects/auth.effects";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageNotAllowedComponent } from './components/page-not-allowed/page-not-allowed.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		SettingsComponent,
		LoginComponent,
		loginContainer,
		CalendarComponent,
		HomeComponent,
		RegisterComponent,
		PageNotFoundComponent,
		SideMenuComponent,
		HeaderComponent,
		PageNotAllowedComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features
		HttpClientModule,
		ReactiveFormsModule,
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot([UserEffects, ConfigEffects, PostEffects, AuthEffects]),
		StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AppRoutingModule,
		/** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
		NgZorroAntdModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }, UserService, PostService, AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
