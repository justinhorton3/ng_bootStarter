webpackJsonp([0,3],{

/***/ 390:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(509);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/main.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stomp_service__ = __webpack_require__(521);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(appService, stompService) {
        //this.sidebarState = sidebarState;
        this.appService = appService;
        this.stompService = stompService;
        // newShipment: Shipment;
        // appService: AppService;
        // stompService: StompService;
        // title = 'Shipments';
        // shipments = [];
        // userid = "";
        this.sidebarLock = false;
        // this.appService = appService;
        // this.stompService = stompService;
        //
        // this.getShipments();
        // this.getUserid();
        //
        // this.stompService.connect('ws://' + window.location.host + '/aggregator/getpings');
        // this.stompService.getObservable().subscribe(payload => {
        //   this.shipments.forEach((item, index) => {
        //     if(payload.pings && this.shipments[index].id === payload.id){
        //       payload.pings.sort(function (a, b) {
        //         return new Date(b.pingtime).getTime() - new Date(a.pingtime).getTime();
        //       })
        //       this.shipments[index].pings = payload.pings;
        //     }
        //   });
        // });
        //
        // this.newShipment = {
        //   shipid: 'RX11212',
        //   origin: 'Dallas, TX',
        //   destination: 'Chicago, IL',
        //   status: 'In-Transit',
        //   driver: {
        //     name: 'Bob Dole',
        //     phoneNumber: '(479) 820-3323'
        //   }
        // };
    }
    AppComponent.prototype.onLockSideBar = function (e) {
        this.sidebarLock = e;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(692),
            styles: [__webpack_require__(689)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__services_stomp_service__["a" /* StompService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_stomp_service__["a" /* StompService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_stomp_service__["a" /* StompService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/app.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_Colors_colors_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_Aggregate_aggregate_module__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_Home_home_component__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__features_Aggregate_aggregate_module__["a" /* AggregateModule */],
                __WEBPACK_IMPORTED_MODULE_6__features_Colors_colors_module__["a" /* ColorsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_9__features_Home_home_component__["a" /* HomeComponent */],
                        data: {
                            createSidebarEntry: true,
                            pathDisplayText: "Home",
                            pathIcon: "fa fa-home fa-lg pull-right",
                            order: 1
                        }
                    },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__features_Home_home_component__["a" /* HomeComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/app.module.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_module__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_module__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_module__["a" /* SidebarModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_module__["a" /* SidebarModule */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/core.module.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: "jbh-header",
            template: __webpack_require__(693),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/header.component.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderModule);
    return HeaderModule;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/header.module.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(_router) {
        this._router = _router;
        this.tellyodaddy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.sidebarOpen = false;
        this.sidebarLocked = false;
        this.showAppDrawer = false;
        this.test = "sidebar works!";
        this.appRoutes = [];
    }
    SidebarComponent.prototype.onToggleSidebar = function () {
        if (!this.sidebarLocked) {
            this.sidebarOpen = !this.sidebarOpen;
        }
        if (!this.sidebarOpen) {
            this.showAppDrawer = false;
        }
    };
    SidebarComponent.prototype.onLockSidebar = function () {
        this.sidebarLocked = !this.sidebarLocked;
        this.tellyodaddy.emit(this.sidebarLocked);
        if (this.sidebarLocked) {
            this.sidebarOpen = true;
        }
    };
    SidebarComponent.prototype.onToggleAppDrawer = function () {
        this.showAppDrawer = !this.showAppDrawer;
    };
    SidebarComponent.prototype.getSidebarLockIcon = function () {
        return this.sidebarLocked ? 'fa fa-stop-circle-o' : 'fa fa-circle-o';
    };
    SidebarComponent.prototype.isSidebarLocked = function () {
        console.log(" isSidebarLocked Function Call " + this.sidebarLocked);
        return this.sidebarLocked ? 'router-container sidebar-locked' : 'router-container';
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var routes = this._router.config;
        var currentRoute = this._router.routerState.snapshot.root;
        var _Array = [];
        routes.forEach(function (value) {
            if (value.data) {
                var _OldData = value.data;
                var _NewData = {};
                if (_OldData.createSidebarEntry) {
                    _NewData = {
                        path: value.path,
                        order: _OldData.order || 99,
                        icon: _OldData.pathIcon,
                        display: _OldData.pathDisplayText,
                        component: value.component
                    };
                    _Array.push(_NewData);
                }
            }
        });
        this.appRoutes = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](_Array, "order");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SidebarComponent.prototype, "tellyodaddy", void 0);
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: "jbh-sidebar",
            template: __webpack_require__(694),
            styles: [__webpack_require__(691)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/sidebar.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarModule);
    return SidebarModule;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/sidebar.module.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AggregateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AggregateComponent = (function () {
    function AggregateComponent() {
        this.pageTitle = 'Aggregate';
    }
    AggregateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: __webpack_require__(695)
        }), 
        __metadata('design:paramtypes', [])
    ], AggregateComponent);
    return AggregateComponent;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/aggregate.component.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aggregate_component__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AggregateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AggregateModule = (function () {
    function AggregateModule() {
    }
    AggregateModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
                    {
                        path: 'aggregate',
                        component: __WEBPACK_IMPORTED_MODULE_3__aggregate_component__["a" /* AggregateComponent */],
                        data: {
                            createSidebarEntry: true,
                            pathDisplayText: "aggregate",
                            pathIcon: "fa fa-server fa-lg pull-right",
                            order: 2
                        }
                    },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__aggregate_component__["a" /* AggregateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__aggregate_component__["a" /* AggregateComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AggregateModule);
    return AggregateModule;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/aggregate.module.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ColorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsComponent = (function () {
    function ColorsComponent() {
    }
    ColorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: __webpack_require__(696)
        }), 
        __metadata('design:paramtypes', [])
    ], ColorsComponent);
    return ColorsComponent;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/colors.component.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colors_component__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ColorsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorsModule = (function () {
    function ColorsModule() {
    }
    ColorsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
                    {
                        path: 'colors',
                        component: __WEBPACK_IMPORTED_MODULE_3__colors_component__["a" /* ColorsComponent */],
                        data: {
                            createSidebarEntry: true,
                            pathDisplayText: "colors",
                            pathIcon: "fa fa-paint-brush fa-lg pull-right",
                            order: 3
                        }
                    },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__colors_component__["a" /* ColorsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__colors_component__["a" /* ColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ColorsModule);
    return ColorsModule;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/colors.module.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.pageTitle = 'Home';
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: __webpack_require__(697)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/home.component.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.http = http;
    }
    AppService.prototype.getShipments = function () {
        return this.http.get("/aggregator/shipments").map(function (res) { return JSON.parse(res.text()); });
    };
    AppService.prototype.deleteShipment = function (id) {
        return this.http.delete("/aggregator/shipments/" + id).map(function (res) { return res.text(); });
    };
    AppService.prototype.createShipment = function (shipment) {
        return this.http.post("/aggregator/shipments", shipment).map(function (res) { return res.text(); });
    };
    AppService.prototype.createPing = function (ping) {
        return this.http.put("/aggregator/pings?id=" + ping.id, { latitude: ping.latitude, longitude: ping.longitude, pingtime: new Date().toISOString()
        }).map(function (res) { return res.text(); });
    };
    AppService.prototype.getUserId = function () {
        return this.http.get("/aggregator/user").map(function (res) { return res.text(); });
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], AppService);
    return AppService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/app.service.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stompjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StompService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StompService = (function () {
    function StompService() {
        this._stompSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    StompService.prototype.connect = function (_webSocketUrl) {
        var self = this;
        var webSocket = new WebSocket(_webSocketUrl);
        this._stompClient = Stomp.over(webSocket);
        this._stompClient.connect({}, function (frame) {
            self._stompClient.subscribe('/topic/shipments', function (stompResponse) {
                // stompResponse = {command, headers, body with JSON
                // reflecting the object returned by Spring framework}
                self._stompSubject.next(JSON.parse(stompResponse.body));
            });
        });
    };
    StompService.prototype.getObservable = function () {
        return this._stompSubject.asObservable();
    };
    StompService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], StompService);
    return StompService;
}());
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/stomp.service.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/environment.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_weak_map__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_weak_set__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_weak_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_weak_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es6_typed__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es6_typed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es6_typed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_es6_reflect__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_es7_reflect__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_zone_js_dist_zone__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_zone_js_dist_zone__);



















//# sourceMappingURL=C:/Users/Samurai Jack/Desktop/ng_bootStarter/src/polyfills.js.map

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "h1.panel-title {\r\n  font-size: 36px;\r\n}\r\nh2.panel-title {\r\n  font-size: 30px;\r\n}\r\nh3.panel-title {\r\n  font-size: 24px;\r\n}\r\nh4.panel-title {\r\n  font-size: 18px\r\n}\r\nh5.panel-title {\r\n  font-size: 14px\r\n}\r\nh6.panel-title {\r\n  font-size: 10px;\r\n}\r\n.router-container {\r\n  padding-left: 0px;\r\n}\r\n.router-container.sidebar-locked{\r\n  padding-left: 225px;\r\n}\r\n.col-md-4 {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "/*\r\n * Top navigation\r\n * Hide default border to remove 1px line.\r\n */\r\nnav.navbar.navbar-fixed-top {\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  background-color: #FFF;\r\n  border: 0;\r\n}\r\nnav .navbar-nav>li>a {\r\n  padding: 25px 20px;\r\n  color: #A7A9AC;\r\n}\r\nnav .navbar-nav>li:nth-of-type(2)>a {\r\n  margin-right: 10px;\r\n}\r\n\r\nnav .profile-img img {\r\n  height: 70px;\r\n  border-bottom: 4px solid #3594D5;\r\n}\r\n\r\n.brand-container .navbar-brand {\r\n  width: 225px;\r\n  height:70px;\r\n  text-align: center;\r\n\r\n}\r\n.brand-container .navbar-brand>img {\r\n  display: inline-block;\r\n  line-height: 30px;\r\n  height: 35px;\r\n}\r\n\r\n.app-name {\r\n  display: inline-block;\r\n  padding: 15px 0;\r\n  line-height: 40px;\r\n  color: #404040;\r\n  font-size: 18px;\r\n  float:left; /*Hack for Header*/\r\n}\r\n"

/***/ },

/***/ 691:
/***/ function(module, exports) {

module.exports = "/*\r\n * Sidebar\r\n */\r\n\r\n/* Hide for mobile, show later */\r\n.sidebar {\r\n  display: none;\r\n  color: #A7A9AC;\r\n}\r\n@media (min-width: 768px) {\r\n  .sidebar {\r\n    position: fixed;\r\n    top: 71px;\r\n    bottom: 0;\r\n    left: -175px;\r\n    width:225px;\r\n    right: auto;\r\n    z-index: 1000;\r\n    display: block;\r\n    padding: 0 20px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n    background-color: #2B313D;\r\n    border-right: 1px solid #eee;\r\n\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n  }\r\n}\r\n\r\n.sidebar.open {\r\n  left:0;\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n/* Sidebar navigation */\r\n.nav-sidebar-header,\r\n.nav-sidebar,\r\n.app-sidebar {\r\n  margin-right: -21px; /* 20px padding + 1px border */\r\n  margin-bottom: 20px;\r\n  margin-left: -20px;\r\n}\r\n\r\n.app-sidebar {\r\n  z-index: 1000;\r\n  background-color: #0a0a0a;\r\n  padding: 10px;\r\n\r\n\r\n  -webkit-animation:opac 0.8s;\r\n  animation:opac 0.8s\r\n}\r\n.app-tile {\r\n  float: left;\r\n  background-color: #2b313d;\r\n  margin: 10px;\r\n  height: 80px;\r\n  width: 80px;\r\n}\r\n\r\n.nav-sidebar-header {\r\n  font-size: 16px;\r\n  color: #fff;\r\n  background-color: #222731;\r\n  padding: 15px;\r\n  margin-bottom: 0px;\r\n\r\n}\r\n#nav-sidebar-control i {\r\n  font-size: 14px;\r\n  color: #a7a9ac;\r\n  padding: 0px 8px;\r\n}\r\n\r\n.nav-sidebar > li > a,\r\n.nav-sidebar > li > a:hover,\r\n.nav-sidebar > li > a:focus {\r\n  padding-right: 20px;\r\n  padding-left: 20px;\r\n  color: #A7A9AC;\r\n}\r\n.nav-sidebar > li > a > i {\r\n  line-height: 20px;\r\n}\r\n\r\n.nav-sidebar > li > a:hover,\r\n.nav-sidebar > li > a:focus {\r\n  background-color: #4B5160;\r\n}\r\n.nav-sidebar > .active > a,\r\n.nav-sidebar > .active > a:hover,\r\n.nav-sidebar > .active > a:focus {\r\n  background-color: #4B5160;\r\n}\r\n\r\n"

/***/ },

/***/ 692:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <jbh-header></jbh-header>\r\n    <jbh-sidebar (tellyodaddy)=\"onLockSideBar($event)\"></jbh-sidebar>\r\n\r\n    <div [ngClass]=\"{'sidebar-locked': sidebarLock }\" class=\"router-container\" >\r\n        <div class=\"container-fluid\">\r\n            <div class=\"main row\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--<div class=\"container-fluid\">-->\r\n <!---->\r\n  <!--<div class=\"page-header\">-->\r\n\r\n  <!--</div>-->\r\n\r\n\r\n\r\n  <!--<div class=\"row\">-->\r\n    <!--<div *ngFor=\"let shipment of shipments\" class=\"col-md-4\">-->\r\n     <!--<div class=\"panel panel-default\">-->\r\n      <!--<div class=\"panel-heading\">-->\r\n        <!--<h3 class=\"panel-title\"><b>{{ shipment.shipid }}</b><button (click)=\"deleteShipment(shipment.id)\" class=\"btn btn-danger btn-xs pull-right\">Delete</button></h3>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"panel-body\">-->\r\n        <!--<ul class=\"list-group\">-->\r\n          <!--<li class=\"list-group-item\"><span class=\"label label-default\">Origin</span> {{ shipment.origin }}</li>-->\r\n          <!--<li class=\"list-group-item\"><span class=\"label label-default\">Destination</span> {{ shipment.destination }}</li>-->\r\n          <!--<li class=\"list-group-item\"><span class=\"label label-default\">Status</span> {{ shipment.status }}</li>-->\r\n          <!--<div class=\"panel panel-default\">-->\r\n            <!--<div class=\"panel-heading\">-->\r\n              <!--<h5 class=\"panel-title\">Driver</h5>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"panel-body\">-->\r\n              <!--<ul class=\"list-group\">-->\r\n                <!--<li class=\"list-group-item\"><span class=\"label label-default\">Name</span> {{ shipment.driver.name }}</li>-->\r\n                <!--<li class=\"list-group-item\"><span class=\"label label-default\">Phone</span> {{ shipment.driver.phoneNumber }}</li>-->\r\n              <!--</ul>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"panel panel-default\">-->\r\n            <!--<div class=\"panel-heading\">-->\r\n              <!--<h5 class=\"panel-title\">Pings</h5>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"panel-body\" style=\"height: 200px; overflow: auto;\">-->\r\n              <!--<ul *ngFor=\"let ping of shipment.pings\" class=\"list-group\">-->\r\n                <!--<li class=\"list-group-item\"><span class=\"label label-default\">Time</span> {{ ping.pingtime | date:'yyyy/MM/dd HH:mm:ss' }}</li>-->\r\n                <!--<li class=\"list-group-item\"><span class=\"label label-default\">Latitude</span> {{ ping.latitude }}</li>-->\r\n                <!--<li class=\"list-group-item\"><span class=\"label label-default\">Longitude</span> {{ ping.longitude }}</li>-->\r\n              <!--</ul>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</ul>-->\r\n        <!--<form #f=\"ngForm\" (ngSubmit)=\"createPing(f.value, f.valid)\" novalidate>-->\r\n          <!--<input type=\"text\" class=\"form-control\" id=\"pingId\"-->\r\n                 <!--name=\"id\" [(ngModel)]=\"shipment.newping.id\"-->\r\n                 <!--#shipid=\"ngModel\" style=\"display:none;\">-->\r\n          <!--<div class=\"panel panel-default\">-->\r\n            <!--<div class=\"panel-heading\">-->\r\n              <!--<h3 class=\"panel-title\">Add Ping <button id=\"showPingButton\" (click)=\"shipment.showNewPing = ! shipment.showNewPing\" class=\"btn btn-default btn-xs pull-right\" type=\"button\">{{ shipment.showNewPing ? 'Hide' : 'Show'}}</button></h3>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"panel-body\" [hidden]=\"!shipment.showNewPing\">-->\r\n              <!--<div class=\"form-group\">-->\r\n                <!--<ul class=\"list-group\">-->\r\n                  <!--<li class=\"list-group-item\">-->\r\n                    <!--<label for=\"pingLatitude\">Latitude</label>-->\r\n                    <!--<input type=\"text\" class=\"form-control\" id=\"pingLatitude\"-->\r\n                           <!--name=\"latitude\" [(ngModel)]=\"shipment.newping.latitude\"-->\r\n                           <!--#origin=\"ngModel\">-->\r\n                  <!--</li>-->\r\n                  <!--<li class=\"list-group-item\">-->\r\n                    <!--<label for=\"pingLongitude\">Longitude</label>-->\r\n                    <!--<input type=\"text\" class=\"form-control\" id=\"pingLongitude\"-->\r\n                           <!--name=\"longitude\" [(ngModel)]=\"shipment.newping.longitude\"-->\r\n                           <!--#destination=\"ngModel\">-->\r\n                  <!--</li>-->\r\n                <!--</ul>-->\r\n              <!--</div>-->\r\n              <!--<button type=\"submit\" class=\"btn btn-primary btn-sm pull-right\" id=\"addPingButton\">Add Ping</button>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</form>-->\r\n      <!--</div>-->\r\n     <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-md-4\">-->\r\n      <!--<form #f=\"ngForm\" (ngSubmit)=\"createShipment(f.value, f.valid)\" novalidate>-->\r\n        <!--<div class=\"panel panel-default\">-->\r\n          <!--<div class=\"panel-heading\">-->\r\n            <!--<h3 class=\"panel-title\">Add Shipment</h3>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"panel-body\">-->\r\n\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<ul class=\"list-group\">-->\r\n                <!--<li class=\"list-group-item\">-->\r\n                  <!--<label for=\"shipmentShipid\">Shipid</label>-->\r\n                  <!--<input type=\"text\" class=\"form-control\" id=\"shipmentShipid\"-->\r\n                         <!--name=\"shipid\" [(ngModel)]=\"newShipment.shipid\"-->\r\n                         <!--#shipid=\"ngModel\">-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-group-item\">-->\r\n                  <!--<label for=\"shipmentOrigin\">Origin</label>-->\r\n                  <!--<input type=\"text\" class=\"form-control\" id=\"shipmentOrigin\"-->\r\n                         <!--name=\"origin\" [(ngModel)]=\"newShipment.origin\"-->\r\n                         <!--#origin=\"ngModel\">-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-group-item\">-->\r\n                  <!--<label for=\"shipmentDestination\">Destination</label>-->\r\n                  <!--<input type=\"text\" class=\"form-control\" id=\"shipmentDestination\"-->\r\n                         <!--name=\"destination\" [(ngModel)]=\"newShipment.destination\"-->\r\n                         <!--#destination=\"ngModel\">-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-group-item\">-->\r\n                  <!--<label for=\"shipmentStatus\">Status</label>-->\r\n                  <!--<input type=\"text\" class=\"form-control\" id=\"shipmentStatus\"-->\r\n                         <!--name=\"status\" [(ngModel)]=\"newShipment.status\"-->\r\n                         <!--#status=\"ngModel\">-->\r\n                <!--</li>-->\r\n              <!--</ul>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<div class=\"panel panel-default\">-->\r\n                <!--<div class=\"panel-heading\">-->\r\n                  <!--<h5 class=\"panel-title\">Driver</h5>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"panel-body\">-->\r\n                  <!--<ul class=\"list-group\">-->\r\n                    <!--<li class=\"list-group-item\">-->\r\n                      <!--<label for=\"shipmentDriverName\">Name</label>-->\r\n                      <!--<input type=\"text\" class=\"form-control\" id=\"shipmentDriverName\"-->\r\n                             <!--name=\"drivername\" [(ngModel)]=\"newShipment.driver.name\"-->\r\n                             <!--#drivername=\"ngModel\">-->\r\n                    <!--</li>-->\r\n                    <!--<li class=\"list-group-item\">-->\r\n                      <!--<label for=\"shipmentDriverPhone\">Phone</label>-->\r\n                      <!--<input type=\"text\" class=\"form-control\" id=\"shipmentDriverPhone\"-->\r\n                             <!--name=\"driverphone\" [(ngModel)]=\"newShipment.driver.phoneNumber\"-->\r\n                             <!--#driverphone=\"ngModel\">-->\r\n                    <!--</li>-->\r\n                  <!--</ul>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<button type=\"submit\" class=\"btn btn-primary btn-sm pull-right\">Create Shipment</button>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</form>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n"

/***/ },

/***/ 693:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <div class=\"brand-container\">\r\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\"><img src=\"assets/img/jbh-logo.png\" alt=\"\"></a>\r\n      </div>\r\n    </div>\r\n\r\n    <span class=\"app-name hidden-xs\"> AngularBoot Starter</span>\r\n\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a href=\"javascript:void(0);\"><i class=\"icon-magnifier large-icons\"></i></a></li>\r\n        <li><a href=\"javascript:void(0);\"><i class=\"icon-bell large-icons\"></i></a></li>\r\n        <li class=\"profile-img\"><img src=\"assets/img/userIcon.PNG\" alt=\"\"></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ },

/***/ 694:
/***/ function(module, exports) {

module.exports = "<div (mouseenter)=\"onToggleSidebar()\"\r\n     (mouseleave)=\"onToggleSidebar()\"\r\n     [ngClass]=\"{'open': sidebarOpen}\"\r\n     class=\"sidebar\">\r\n\r\n    <div class=\"nav-sidebar-header\">\r\n       {{showAppDrawer ? 'Apps':'Navigation'}}\r\n       <span id=\"nav-sidebar-control\" class=\"pull-right\">\r\n           <i (click)=\"onToggleAppDrawer()\" class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n\r\n           <i (click)=\"onLockSidebar()\"\r\n              [ngClass]=\"getSidebarLockIcon()\"\r\n              aria-hidden=\"true\"></i>\r\n       </span>\r\n    </div>\r\n\r\n    <ul *ngIf=\"!showAppDrawer\" class=\"nav nav-sidebar\">\r\n        <li *ngFor=\"let route of appRoutes\" class=\"routeWrapper\"\r\n            [routerLink]=\"route.path\"\r\n            [routerLinkActive]=\"['is-active']\">\r\n\r\n            <a href=\"javascript:void(0);\">\r\n                <span class=\"routeDisplayText\">{{route.display}}</span>\r\n                <i [class]=\"route.icon\"></i>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n    <aside *ngIf=\"showAppDrawer\" class=\"nav app-sidebar\">\r\n        <a href=\"javascript:void(0)\" class=\"app-tile\">\r\n            <span class=\"app-tile-name\">App 1</span>\r\n        </a>\r\n        <a href=\"javascript:void(0)\" class=\"app-tile\">\r\n            <span class=\"app-tile-name\">App 2</span>\r\n        </a>\r\n        <a href=\"javascript:void(0)\" class=\"app-tile\">\r\n            <span class=\"app-tile-name\">App 3</span>\r\n        </a>\r\n        <a href=\"javascript:void(0)\" class=\"app-tile\">\r\n            <img src=\"../../../assets/img/add_app.svg\" alt=\"add app icon\">\r\n        </a>\r\n    </aside>\r\n\r\n\r\n</div>\r\n"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "<div style=\"padding:30px;\">\r\n    <h1>Welcome Aggregate Module</h1>\r\n</div>\r\n"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "<div style=\"padding:30px;\">\n  <h1>Welcome Colors Module</h1>\n\n</div>\n"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "<div style=\"padding:30px;\">\r\n  <h1>Welcome Home Module</h1>\r\n  <input type=\"text\" pInputText/>\r\n</div>\r\n"

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }

},[720]);
//# sourceMappingURL=main.bundle.map