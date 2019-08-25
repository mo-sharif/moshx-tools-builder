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
import { MessageEffects } from "./store/effects/message.effects";
import { routerEffects } from "./store/effects/router.effects";

import { AuthService } from "./services/auth/auth.service";
import { AuthGuard } from "./services/guard/guard.service";

// Firebase Imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { AuthEffects } from "./store/effects/auth.effects";
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageNotAllowedComponent } from "./components/page-not-allowed/page-not-allowed.component";

// Ant Design
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { ProjectEffects } from "./store/effects/project.effects";
import { ProjectService } from "./services/project/project.service";
import { addComponentModule } from "./directives/addComponent.module";
import { UserService } from "./services/user/user.service";
import { ProfileService } from "./services/profile/profile.service";
import { UserEffects } from "./store/effects/user.effects";


@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		SideMenuComponent,
		HeaderComponent,
		PageNotAllowedComponent,
	],
	imports: [
		addComponentModule,
		BrowserModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features
		HttpClientModule,
		ReactiveFormsModule,
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot([ConfigEffects, AuthEffects, MessageEffects, routerEffects, ProjectEffects, UserEffects]),
		StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AppRoutingModule,
		NgZorroAntdModule
	],
	providers: [AuthService, AuthGuard, { provide: NZ_I18N, useValue: en_US }, ProjectService, UserService, ProfileService ],
	bootstrap: [AppComponent]
})
export class AppModule {}
