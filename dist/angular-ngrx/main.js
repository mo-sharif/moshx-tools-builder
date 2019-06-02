(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/users/users.component */ "./src/app/containers/users/users.component.ts");
/* harmony import */ var _containers_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/user/user.component */ "./src/app/containers/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'users', component: _containers_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'user/:id', component: _containers_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar d-flex\">\n  <a class=\"navbar-brand\"\n    routerLink=\"/\">\n    Angular - NGRX / {{ (config$ | async)?.adminName }}\n  </a>\n  <div class=\"d-flex justify-content-end\">\n    <ul class=\"d-flex navbar-nav flex-row align-items-center\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/users\"\n          routerLinkActive=\"active\">Users</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container app-container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_config_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions/config.actions */ "./src/app/store/actions/config.actions.ts");
/* harmony import */ var _store_selectors_config_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors/config.selector */ "./src/app/store/selectors/config.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_store) {
        this._store = _store;
        this.title = 'angular-ngrx';
        this.config$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors_config_selector__WEBPACK_IMPORTED_MODULE_3__["selectConfig"]));
    }
    AppComponent.prototype.ngOnInit = function () {
        this._store.dispatch(new _store_actions_config_actions__WEBPACK_IMPORTED_MODULE_2__["GetConfig"]());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/app.reducers */ "./src/app/store/reducers/app.reducers.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _store_effects_config_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects/config.effects */ "./src/app/store/effects/config.effects.ts");
/* harmony import */ var _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/effects/user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _containers_users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/users/users.component */ "./src/app/containers/users/users.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _containers_user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/user/user.component */ "./src/app/containers/user/user.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _containers_users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                _containers_user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_17__["UserDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_7__["appReducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__["UserEffects"], _store_effects_config_effects__WEBPACK_IMPORTED_MODULE_10__["ConfigEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : [],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    Name: {{ user.name }}\n  </p>\n  <p>\n    Card Number: {{ user.cardNumber }}\n  </p>\n  <p>\n    Card Type: {{ user.cardType }}\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "user", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Card Number</th>\n      <th scope=\"col\">Card Type</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\"\n      (click)=\"navigateToUser(user.id)\">\n      <td>{{ user.id }}</td>\n      <td>{{ user.name }}</td>\n      <td>{{ user.cardNumber }}</td>\n      <td>{{ user.cardType }}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UsersComponent.prototype.ngOnInit = function () { };
    UsersComponent.prototype.navigateToUser = function (id) {
        this.userSelected.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UsersComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UsersComponent.prototype, "userSelected", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/containers/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/containers/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/containers/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-details [user]=\"user$ | async\"></app-user-details>"

/***/ }),

/***/ "./src/app/containers/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/containers/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/user.selector */ "./src/app/store/selectors/user.selector.ts");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(_store, _route) {
        this._store = _store;
        this._route = _route;
        this.user$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__["selectSelectedUser"]));
    }
    UserComponent.prototype.ngOnInit = function () {
        this._store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetUser"](this._route.snapshot.params.id));
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/containers/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/containers/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/containers/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/containers/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/containers/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-users [users]=\"users$ | async\"\n  (userSelected)=\"navigateToUser($event)\"></app-users>"

/***/ }),

/***/ "./src/app/containers/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/containers/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/user.selector */ "./src/app/store/selectors/user.selector.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(_store, _router) {
        this._store = _store;
        this._router = _router;
        this.users$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__["selectUserList"]));
    }
    UsersComponent.prototype.ngOnInit = function () {
        this._store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["GetUsers"]());
    };
    UsersComponent.prototype.navigateToUser = function (id) {
        this._router.navigate(['user', id]);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/containers/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/containers/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(_http) {
        this._http = _http;
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "config.json";
    }
    ConfigService.prototype.getConfig = function () {
        return this._http.get(this.configUrl);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.usersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "users.json";
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this.usersUrl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/store/actions/config.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/config.actions.ts ***!
  \*************************************************/
/*! exports provided: EConfigActions, GetConfig, GetConfigSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EConfigActions", function() { return EConfigActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfig", function() { return GetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfigSuccess", function() { return GetConfigSuccess; });
var EConfigActions;
(function (EConfigActions) {
    EConfigActions["GetConfig"] = "[Config] Get Config";
    EConfigActions["GetConfigSuccess"] = "[Config] Get Config Success";
})(EConfigActions || (EConfigActions = {}));
var GetConfig = /** @class */ (function () {
    function GetConfig() {
        this.type = EConfigActions.GetConfig;
    }
    return GetConfig;
}());

var GetConfigSuccess = /** @class */ (function () {
    function GetConfigSuccess(payload) {
        this.payload = payload;
        this.type = EConfigActions.GetConfigSuccess;
    }
    return GetConfigSuccess;
}());



/***/ }),

/***/ "./src/app/store/actions/user.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: EUserActions, GetUsers, GetUsersSuccess, GetUser, GetUserSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUserActions", function() { return EUserActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return GetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersSuccess", function() { return GetUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSuccess", function() { return GetUserSuccess; });
var EUserActions;
(function (EUserActions) {
    EUserActions["GetUsers"] = "[User] Get Users";
    EUserActions["GetUsersSuccess"] = "[User] Get Users Success";
    EUserActions["GetUser"] = "[User] Get User";
    EUserActions["GetUserSuccess"] = "[User] Get User Success";
})(EUserActions || (EUserActions = {}));
var GetUsers = /** @class */ (function () {
    function GetUsers() {
        this.type = EUserActions.GetUsers;
    }
    return GetUsers;
}());

var GetUsersSuccess = /** @class */ (function () {
    function GetUsersSuccess(payload) {
        this.payload = payload;
        this.type = EUserActions.GetUsersSuccess;
    }
    return GetUsersSuccess;
}());

var GetUser = /** @class */ (function () {
    function GetUser(payload) {
        this.payload = payload;
        this.type = EUserActions.GetUser;
    }
    return GetUser;
}());

var GetUserSuccess = /** @class */ (function () {
    function GetUserSuccess(payload) {
        this.payload = payload;
        this.type = EUserActions.GetUserSuccess;
    }
    return GetUserSuccess;
}());



/***/ }),

/***/ "./src/app/store/effects/config.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/config.effects.ts ***!
  \*************************************************/
/*! exports provided: ConfigEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEffects", function() { return ConfigEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/config.actions */ "./src/app/store/actions/config.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigEffects = /** @class */ (function () {
    function ConfigEffects(_configService, _actions$) {
        var _this = this;
        this._configService = _configService;
        this._actions$ = _actions$;
        this.getConfig$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["EConfigActions"].GetConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this._configService.getConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (config) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["GetConfigSuccess"](config));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ConfigEffects.prototype, "getConfig$", void 0);
    ConfigEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], ConfigEffects);
    return ConfigEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/user.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _selectors_user_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selectors/user.selector */ "./src/app/store/selectors/user.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserEffects = /** @class */ (function () {
    function UserEffects(_userService, _actions$, _store) {
        var _this = this;
        this._userService = _userService;
        this._actions$ = _actions$;
        this._store = _store;
        this.getUser$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["EUserActions"].GetUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_user_selector__WEBPACK_IMPORTED_MODULE_7__["selectUserList"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var id = _a[0], users = _a[1];
            var selectedUser = users.filter(function (user) { return user.id === +id; })[0];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserSuccess"](selectedUser));
        }));
        this.getUsers$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["EUserActions"].GetUsers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this._userService.getUsers(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userHttp) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUsersSuccess"](userHttp.users)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "getUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "getUsers$", void 0);
    UserEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/app.reducers.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/app.reducers.ts ***!
  \************************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _config_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.reducers */ "./src/app/store/reducers/config.reducers.ts");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducers */ "./src/app/store/reducers/user.reducers.ts");



var appReducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    users: _user_reducers__WEBPACK_IMPORTED_MODULE_2__["userReducers"],
    config: _config_reducers__WEBPACK_IMPORTED_MODULE_1__["configReducers"]
};


/***/ }),

/***/ "./src/app/store/reducers/config.reducers.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/config.reducers.ts ***!
  \***************************************************/
/*! exports provided: configReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configReducers", function() { return configReducers; });
/* harmony import */ var _actions_config_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/config.actions */ "./src/app/store/actions/config.actions.ts");
/* harmony import */ var _state_config_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../state/config.state */ "./src/app/store/state/config.state.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var configReducers = function (state, action) {
    if (state === void 0) { state = _state_config_state__WEBPACK_IMPORTED_MODULE_1__["initialConfigState"]; }
    switch (action.type) {
        case _actions_config_actions__WEBPACK_IMPORTED_MODULE_0__["EConfigActions"].GetConfigSuccess: {
            return __assign({}, state, { config: action.payload });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/reducers/user.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/user.reducers.ts ***!
  \*************************************************/
/*! exports provided: userReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducers", function() { return userReducers; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _state_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/user.state */ "./src/app/store/state/user.state.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var userReducers = function (state, action) {
    if (state === void 0) { state = _state_user_state__WEBPACK_IMPORTED_MODULE_1__["initialUserState"]; }
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["EUserActions"].GetUsersSuccess: {
            return __assign({}, state, { users: action.payload });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["EUserActions"].GetUserSuccess: {
            return __assign({}, state, { selectedUser: action.payload });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/selectors/config.selector.ts":
/*!****************************************************!*\
  !*** ./src/app/store/selectors/config.selector.ts ***!
  \****************************************************/
/*! exports provided: selectConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConfig", function() { return selectConfig; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var configState = function (state) { return state.config; };
var selectConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(configState, function (state) { return state.config; });


/***/ }),

/***/ "./src/app/store/selectors/user.selector.ts":
/*!**************************************************!*\
  !*** ./src/app/store/selectors/user.selector.ts ***!
  \**************************************************/
/*! exports provided: selectUserList, selectSelectedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserList", function() { return selectUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedUser", function() { return selectSelectedUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectUsers = function (state) { return state.users; };
var selectUserList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUsers, function (state) { return state.users; });
var selectSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUsers, function (state) { return state.selectedUser; });


/***/ }),

/***/ "./src/app/store/state/config.state.ts":
/*!*********************************************!*\
  !*** ./src/app/store/state/config.state.ts ***!
  \*********************************************/
/*! exports provided: initialConfigState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfigState", function() { return initialConfigState; });
var initialConfigState = {
    config: null
};


/***/ }),

/***/ "./src/app/store/state/user.state.ts":
/*!*******************************************!*\
  !*** ./src/app/store/state/user.state.ts ***!
  \*******************************************/
/*! exports provided: initialUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return initialUserState; });
var initialUserState = {
    users: null,
    selectedUser: null
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4200/assets/data/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mo/Desktop/apps/ngrx/angular-ngrx/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map