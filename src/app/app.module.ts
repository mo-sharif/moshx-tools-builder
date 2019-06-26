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

// Ant Design
import { NzBreadCrumbModule } from 'ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd';
import { NzPageHeaderModule } from 'ng-zorro-antd';
import { NzDrawerModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd';
import { NzPopoverModule } from 'ng-zorro-antd';
import { NzAvatarModule } from 'ng-zorro-antd';
import { NzMessageModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd';
import { NzMenuModule } from 'ng-zorro-antd';


@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		SideMenuComponent,
		HeaderComponent,
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
		EffectsModule.forRoot([ConfigEffects, AuthEffects, MessageEffects, routerEffects]),
		StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AppRoutingModule,
		NzBreadCrumbModule,
		NzLayoutModule,
		NzPageHeaderModule,
		NzDrawerModule,
		NzButtonModule,
		NzPopoverModule,
		NzAvatarModule,
		NzMessageModule,
		NzGridModule,
		NzIconModule,
		NzMenuModule
	],
	providers: [AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
