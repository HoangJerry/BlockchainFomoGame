(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _citizens_citizens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./citizens/citizens.component */ "./src/app/citizens/citizens.component.ts");
/* harmony import */ var _game_game_dice_game_dice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game-dice/game-dice.component */ "./src/app/game/game-dice/game-dice.component.ts");
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/base-layout/base-layout.component.ts");
/* harmony import */ var _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site-layout/site-layout.component */ "./src/app/site-layout/site-layout.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");









var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__["BaseLayoutComponent"],
        children: [
            {
                path: 'data',
                component: _citizens_citizens_component__WEBPACK_IMPORTED_MODULE_4__["CitizensComponent"],
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
            }
        ]
    },
    {
        path: '',
        component: _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"],
        children: [
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            },
            {
                path: 'dice',
                component: _game_game_dice_game_dice_component__WEBPACK_IMPORTED_MODULE_5__["GameDiceComponent"],
            },
            {
                path: ':ref',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".button-group {\n    position: fixed;\n    overflow: hidden;\n    width: 400px;\n    bottom: 5px;\n    left: 5px;\n}\n\n.btn-color-1 {\n    display: inline-block;\n    margin: 5px 5px;\n    font-weight: bold;\n    border: 1px solid #1cc09b;\n    font-size: 16px;\n    color: #ffffff;\n    padding: 5px 10px;\n    background: #11896e;\n    border-radius: 4px;\n}\n\n.btn-color-2 {\n    display: inline-block;\n    margin: 5px 5px;\n    font-weight: bold;\n    border: 1px solid #1cc09b;\n    font-size: 16px;\n    color: #ffffff;\n    padding: 5px 10px;\n    background: #252b2e;\n    border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1ncm91cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuLmJ0bi1jb2xvci0xIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA1cHggNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxY2MwOWI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxMTg5NmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuLWNvbG9yLTIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDVweCA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFjYzA5YjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzI1MmIyZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner [fullScreen]=\"true\" bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"square-loader\">\n</ngx-spinner>\n<router-outlet></router-outlet>\n<div class=\"button-group\" *ngIf=\"isDev\">\n    <button class=\"btn btn-info btn-lg btn-color-1\" (click)=\"onClickEndDividend()\">End dividend round now</button>\n    <button class=\"btn btn-info btn-lg btn-color-2\" (click)=\"onClickTransfer()\">Transfer all reward to dividend</button>\n</div>\n<div id=\"Mydividens\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">\n                    <a routerLink=\"\" style=\"text-decoration: none;color:#fff; font-weight: 800;\"><img src=\"assets/images/logo.svg\" alt=\"home\" width=\"100px\"><br>DABANKING</a>\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contract.service */ "./src/app/contract.service.ts");
/* harmony import */ var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-service.service */ "./src/app/local-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(contractService, localService, httpService, toastr, spinner) {
        var _this = this;
        this.contractService = contractService;
        this.localService = localService;
        this.httpService = httpService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.title = 'frontEndFOM';
        this.isDev = false;
        this.onClickEndDividend = function () {
            _this.contractService.fomContract.methods.nextDividendRound().send({ from: _this.account })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('error', function (error) {
                _this.toastr.error(error.message, 'Smart contract');
            });
        };
        this.onClickTransfer = function () {
            _this.contractService.ticketContract.methods.sendTotalEth().send({ from: _this.account })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('error', function (error) {
                _this.toastr.error(error.message, 'Smart contract');
            });
        };
        this.spinner.show();
        this.accountSubscriber = this.localService.currentAccount.subscribe(function (data) {
            _this.account = data;
            _this.contractService.citizenContract.methods.isDev().call({ from: _this.account }).then(function (d) {
                _this.isDev = d;
            });
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"],
            _local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"],
            _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var countup_js_angular2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! countup.js-angular2 */ "./node_modules/countup.js-angular2/fesm5/countup.js-angular2.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/pipes */ "./src/app/pipes/pipes.ts");
/* harmony import */ var _game_game_dice_game_dice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game/game-dice/game-dice.component */ "./src/app/game/game-dice/game-dice.component.ts");
/* harmony import */ var _citizens_citizens_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./citizens/citizens.component */ "./src/app/citizens/citizens.component.ts");
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/base-layout/base-layout.component.ts");
/* harmony import */ var _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./site-layout/site-layout.component */ "./src/app/site-layout/site-layout.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"],
                _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["ShortDisplayPipe"], _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["EthDisplayPipe"], _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["UsdDisplayPipe"], _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["ThousandPipe"],
                _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["ReversePipe"], _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["NotUndefinedPipe"], _pipes_pipes__WEBPACK_IMPORTED_MODULE_15__["AtPagePipe"],
                _game_game_dice_game_dice_component__WEBPACK_IMPORTED_MODULE_16__["GameDiceComponent"], _citizens_citizens_component__WEBPACK_IMPORTED_MODULE_17__["CitizensComponent"], _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_18__["BaseLayoutComponent"], _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_19__["SiteLayoutComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__["FaqComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: false,
                }),
                countup_js_angular2__WEBPACK_IMPORTED_MODULE_7__["CountUpModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-layout/base-layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/base-layout/base-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"wrapper myWrapper\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12 col-md-12 parentWith\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/base-layout/base-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.ts ***!
  \******************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent() {
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
    };
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! ./base-layout.component.html */ "./src/app/base-layout/base-layout.component.html"),
            styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/base-layout/base-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/citizens/citizens.component.css":
/*!*************************************************!*\
  !*** ./src/app/citizens/citizens.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#player-table {\n    background-color: #151c1f;\n    display: flex;\n    flex-direction: column;\n    min-height: 90vh;\n    margin-top: -10px;\n}\n\n#player-table h1 {\n    font-size: 40px;\n    color: #2ee2ba;\n    font-weight: bold;\n    margin: 0px;\n    padding: 55px 15px 30px;\n}\n\n#player-table #table-top {\n    margin-right: 0;\n}\n\n#player-table #search-part {\n    position: relative;\n}\n\n.dabanking-part1 {\n    float: left;\n    margin-right: 50px;\n}\n\n.dabanking-part2 {\n    float: left;\n}\n\n#player-table #search-part {\n    position: relative;\n}\n\n#player-table #json-table th {\n    padding: 0px 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aXplbnMvY2l0aXplbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaXRpemVucy9jaXRpemVucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BsYXllci10YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWMxZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogOTB2aDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuI3BsYXllci10YWJsZSBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjMmVlMmJhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDU1cHggMTVweCAzMHB4O1xufVxuXG4jcGxheWVyLXRhYmxlICN0YWJsZS10b3Age1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuI3BsYXllci10YWJsZSAjc2VhcmNoLXBhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRhYmFua2luZy1wYXJ0MSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uZGFiYW5raW5nLXBhcnQyIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuI3BsYXllci10YWJsZSAjc2VhcmNoLXBhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3BsYXllci10YWJsZSAjanNvbi10YWJsZSB0aCB7XG4gICAgcGFkZGluZzogMHB4IDdweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/citizens/citizens.component.html":
/*!**************************************************!*\
  !*** ./src/app/citizens/citizens.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"player-table\">\n    <h1>Players</h1>\n    <div class=\"row\" id=\"table-top\">\n        <div class=\"col-sm-6\" id=\"view-size\">\n            <div class=\"dabanking-part1\">\n                <label>Show</label>\n                <select id=\"entry-quantity\" (change)=\"onChangeEntry()\">\n                <option>10</option>\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n            </select>\n                <label>entries</label>\n            </div>\n            <!-- <div class=\"dabanking-part2\" id=\"export-part\">\n                <label id=\"download-label\">Download</label>\n                <a href=\"#\">CSV</a>\n                <a id=\"export-excel\" href=\"#\">Excel</a>\n            </div> -->\n        </div>\n        <div class=\"col-sm-6\" id=\"search-part\">\n            <input [(ngModel)]=\"searchText\" id=\"search-input\" (keyup.enter)=\"onEnter()\" type=\"text\" name=\"seach\" placeholder=\"USERNAME/ADDRESS\">\n            <i class=\"fa fa-search\" (click)=\"onClickSearch()\"></i>\n        </div>\n    </div>\n    <div id=\"table-container\">\n        <table id=\"json-table\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th title=\"no\" style=\"line-height: 38px\">No\n\n                    </th>\n                    <th title=\"username\">Username\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"address\">Address\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"tickets\">Tickets\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"ethBuyTicket\">ETH<br>Buy Ticket\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"ethPlayGame\">ETH<br>Play Game\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"totalMinedToken\">Total Mined Token\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"timeInvested\" width=\"200px\">Time Invested\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"ticketTotalIncome\">Total Ticket  Income\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"gameTotalIncome\">Total Game Income\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                    <th title=\"totalWithdrawal\">Total Withdrawal\n                        <div>\n                            <a><i class=\"fa fa-search\"></i></a>\n                            <a><i class=\"fa fa-caret-up\"></i></a>\n                            <a><i class=\"fa fa-caret-down\"></i></a>\n                        </div>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container *ngFor=\"let item of filterDatas |slice: (page-1) * pageSize : (page-1) * pageSize + pageSize;let i =index\">\n                    <tr>\n                        <td>{{i+1}}</td>\n                        <td>{{item.username}}</td>\n                        <td><a style=\"color: #2ee2ba; text-decoration: none;\" target=\"_blank\" href=\"https://ropsten.etherscan.io/address/{{item.citizen}}\">{{item.citizen}}</a></td>\n                        <td>{{item.tickets}}</td>\n                        <td>{{item.ethBuyTicket | ethDisplay}}</td>\n                        <td>{{item.ethPlayGame | ethDisplay}}</td>\n                        <td>{{item.totalMinedToken | ethDisplay}}</td>\n                        <td>{{item.timeInvested | date}}</td>\n                        <td>{{item.ticketTotalIncome | ethDisplay}}</td>\n                        <td>{{item.gameTotalIncome | ethDisplay}}</td>\n                        <td>{{item.totalWithdrawal | ethDisplay}}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"spacer\"></div>\n    <div>\n        <!-- <label id=\"index-label\">Showing {{(page-1)*pageSize}} to {{(page-1) * pageSize + pageSize}} of {{datas.length}} entries</label> -->\n\n        <ngb-pagination [collectionSize]=\"filterDatas.length\" [pageSize]=\"pageSize\" [maxSize]=\"3\" [(page)]=\"page\" class=\"d-flex justify-content-end\"></ngb-pagination>\n\n    </div>\n    <footer id=\"dabanking-footer\">\n        <p>&copy;2019 DABANKING. All Rights Reserved</p>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/citizens/citizens.component.ts":
/*!************************************************!*\
  !*** ./src/app/citizens/citizens.component.ts ***!
  \************************************************/
/*! exports provided: CitizensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitizensComponent", function() { return CitizensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contract.service */ "./src/app/contract.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);




var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(web3__WEBPACK_IMPORTED_MODULE_3___default.a.givenProvider);
var CitizensComponent = /** @class */ (function () {
    function CitizensComponent(contractService) {
        var _this = this;
        this.contractService = contractService;
        this.datas = [];
        this.filterDatas = [];
        this.page = 1;
        this.pageSize = 10;
        this.onClickSearch = function () {
            _this.filterDatas = _this.datas.filter(function (e) {
                if (e.id.toString().toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1
                    || e.username.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1
                    || e.citizen.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1)
                    return e;
            });
            _this.sort();
        };
        this.onEnter = function () {
            _this.filterDatas = _this.datas.filter(function (e) {
                if (e.id.toString().toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1
                    || e.username.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1
                    || e.citizen.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1)
                    return e;
            });
            _this.sort();
        };
        this.toNumber = function (val) {
            // div 10^18
            return val / 0xDE0B6B3A7640000;
        };
        this.toTokenNumber = function (val) {
            // div 10^10
            return val / 0x2540BE400;
        };
    }
    CitizensComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datas = [];
        this.contractService.citizenContract.events.Register({ fromBlock: 0 }, function (error, event) {
            //console.log(event.returnValues);
            var user = {};
            user.id = event.returnValues.id;
            user.username = web3.utils.hexToUtf8(event.returnValues.username._hex);
            user.citizen = event.returnValues.citizen;
            user.ref = event.returnValues.ref;
            user.timeInvested = new Date(event.returnValues.dateJoin.toNumber() * 1000);
            _this.contractService.citizenStorageContract.methods.citizenWithdrawed(user.citizen).call().then(function (rs) {
                user.totalWithdrawal = _this.toNumber(rs);
            });
            _this.contractService.ticketContract.methods.ticketSumByAddress(user.citizen).call().then(function (rs) {
                user.tickets = rs;
                //console.log(!isNaN(user.tickets));
            });
            _this.contractService.citizenContract.methods.citizen(user.citizen).call().then(function (rs) {
                // user.ticketTotalIncome = this.toNumber(rs.citizenTicketRevenue);
                user.gameTotalIncome = _this.toNumber(rs.citizenGameEthRevenue);
                user.ethBuyTicket = _this.toNumber(rs.citizenTicketSpend);
                user.ethPlayGame = _this.toNumber(rs.citizenGameEthSpend);
                _this.contractService.citizenContract.methods.getTotalEth().call({ from: user.citizen }).then(function (d) {
                    user.ticketTotalIncome = _this.toNumber(d) - user.gameTotalIncome;
                });
            });
            _this.contractService.fomContract.methods.totalSupplyByAddress(user.citizen).call().then(function (rs) {
                user.totalMinedToken = (_this.toTokenNumber(rs));
                //console.log(!isNaN(user.totalSupplyByAddress));
            });
            _this.datas.push(user);
        });
        this.filterDatas = this.datas;
        this.sort();
    };
    CitizensComponent.prototype.sort = function () {
        var datas = this.filterDatas;
        $(function () {
            $("#json-table th div a:last-child").click(function () {
                var key = $(this).parent().parent().attr('title');
                //console.log(key);
                $('#json-table th div a').removeClass('sort-active');
                $(this).addClass('sort-active');
                sortByKey(datas, key, true);
            });
            $("#json-table th div a:nth-child(2)").click(function () {
                var key = $(this).parent().parent().attr('title');
                $('#json-table th div a').removeClass('sort-active');
                $(this).addClass('sort-active');
                sortByKey(datas, key, false);
            });
            function sortByKey(array, key, check) {
                return array.sort(function (a, b) {
                    var x = a[key];
                    var y = b[key];
                    if (check) {
                        if (!isNaN(+a[key]) && !isNaN(+b[key])) {
                            //console.log("number1");
                            return a[key] - b[key];
                        }
                        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                    }
                    else {
                        if (!isNaN(+a[key]) && !isNaN(+b[key])) {
                            //console.log("number1");
                            return b[key] - a[key];
                        }
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    }
                });
            }
        });
    };
    CitizensComponent.prototype.onChangeEntry = function () {
        if (this.pageSize > this.filterDatas) {
            this.pageSize = this.filterDatas;
        }
        else
            this.pageSize = $('#entry-quantity').val();
        this.sort();
    };
    CitizensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-citizens',
            template: __webpack_require__(/*! ./citizens.component.html */ "./src/app/citizens/citizens.component.html"),
            styles: [__webpack_require__(/*! ./citizens.component.css */ "./src/app/citizens/citizens.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"]])
    ], CitizensComponent);
    return CitizensComponent;
}());



/***/ }),

/***/ "./src/app/contract.service.ts":
/*!*************************************!*\
  !*** ./src/app/contract.service.ts ***!
  \*************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider);

var ContractService = /** @class */ (function () {
    function ContractService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.fomABI = [{ "constant": true, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_round", "type": "uint256" }], "name": "getCitizenFreezingBuyRound", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "citizenUseDeposit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "withDraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "getDividendPull", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_buyer", "type": "address" }, { "name": "_buyPrice", "type": "uint256" }, { "name": "_is_win", "type": "int8" }], "name": "citizenMintToken", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "totalSupplyByLevel", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getDividendView", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "unitRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "citizenDeposit", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getCitizenBalanceEth", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_contract", "type": "address[3]" }], "name": "joinNetwork", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "DIVIDEND_KEEP_NEXT_PERCENT", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "citizenFreeze", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "ETH_LOSE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "citizenWithdrawDeposit", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "nextDividendRound", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getCitizenFreezing", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "HARD_TOTAL_SUPPLY_BY_LEVEL", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_round", "type": "uint256" }], "name": "getCitizenDevidendBuyRound", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "ETH_WIN", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "coreContracts", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "endDividendRound", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "burnFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "BURN_TOKEN_PERCENT", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "addCoreContract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupplyBurned", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentRound", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizen", "outputs": [{ "name": "citizenBalanceToken", "type": "uint256" }, { "name": "citizenBalanceEth", "type": "uint256" }, { "name": "lastDividendPulledRound", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getBalanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentLevel", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_LEVEL", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "NEXT_DEVIDEND_ROUND", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_unit", "type": "uint256" }, { "name": "_value", "type": "uint256" }], "name": "pushGameRefIncome", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_ROUND", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentRoundDividend", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pushDividend", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "totalSupplyByAddress", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "citizenUnfreeze", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isCoreContract", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_winner", "type": "address" }, { "name": "_unit", "type": "uint256" }, { "name": "_value", "type": "uint256" }, { "name": "_valuebet", "type": "uint256" }], "name": "payOut", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "HARD_TOTAL_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "dividendRound", "outputs": [{ "name": "totalEth", "type": "uint256" }, { "name": "totalEthCredit", "type": "uint256" }, { "name": "totalToken", "type": "uint256" }, { "name": "totalTokenCredit", "type": "uint256" }, { "name": "totalFrozenBalance", "type": "uint256" }, { "name": "endRoundTime", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "coreContractSum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "clockDevidend", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DIVIDEND_FOR_CURRENT_PERCENT", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_devTeam", "type": "address[4]" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "creationDate", "type": "uint256" }], "name": "Burn", "type": "event" }];
        this.fomAddress = "0x97ECe4b03494bC1861DA1fd55f222eaCC3157a27";
        this.citizenABI = [{ "constant": true, "inputs": [{ "name": "_level", "type": "uint256" }], "name": "getMemberByLevelToTal", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getTotalEarlyIncome", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "addGameTokenSpend", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getTotalEth", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withDraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizenEthDividend", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sUsername", "type": "string" }, { "name": "_ref", "type": "address" }], "name": "register", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "DAAContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TicketContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_ref", "type": "address" }], "name": "citizenPayForRef", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getTotalDividend", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "payOutByLevel", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_username", "type": "string" }], "name": "getAddressByUserName", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "mostTotalSpenderId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getRef", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_contract", "type": "address[4]" }], "name": "joinNetwork", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "addGameEthSpendLose", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "CitizenStorageContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pushEarlyIncome", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "coreContracts", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_level", "type": "uint256" }, { "name": "_sender", "type": "address" }, { "name": "_id", "type": "uint256" }], "name": "getMemberByLevel", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }], "name": "pushTicketRefIncome", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }], "name": "pushGametRefIncome", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "addCoreContract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "pushGametRefIncomeToken", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_id", "type": "uint256" }], "name": "getAddressById", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "addTicketEthSpend", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_valuewin", "type": "uint256" }, { "name": "_enough", "type": "bool" }], "name": "addGameEthSpendWin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizen", "outputs": [{ "name": "id", "type": "uint256" }, { "name": "username", "type": "uint256" }, { "name": "ref", "type": "address" }, { "name": "totalChild", "type": "uint256" }, { "name": "treeLevel", "type": "uint256" }, { "name": "citizenBalanceEth", "type": "uint256" }, { "name": "citizenBalanceEthBackup", "type": "uint256" }, { "name": "citizenTicketSpend", "type": "uint256" }, { "name": "citizenGameEthSpend", "type": "uint256" }, { "name": "citizenGameTokenSpend", "type": "uint256" }, { "name": "citizenEarlyIncomeRevenue", "type": "uint256" }, { "name": "citizenTicketRevenue", "type": "uint256" }, { "name": "citizenGameEthRevenue", "type": "uint256" }, { "name": "citizenGameTokenRevenue", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawEth", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getTotalSpend", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "addWinIncome", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "usernameAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getUsername", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isCoreContract", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "levelCitizen", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "mostTotalSpender", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "idAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "coreContractSum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isDev", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isCitizen", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "GAME_LEVEL_REF", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "TICKET_LEVEL_REF", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_devTeam", "type": "address[4]" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "username", "type": "uint256" }, { "indexed": true, "name": "citizen", "type": "address" }, { "indexed": true, "name": "ref", "type": "address" }, { "indexed": false, "name": "ticketSpend", "type": "uint256" }, { "indexed": false, "name": "totalGameSpend", "type": "uint256" }, { "indexed": false, "name": "dateJoin", "type": "uint256" }], "name": "Register", "type": "event" }];
        this.citizenAddress = "0x2bb9d27aede6a0775b2f06d1afd65faf2dda9c65";
        this.citizenStorageABI = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizenGameWinIncome", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizenWinIncome", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "addWinIncome", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizenWithdrawed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "pushCitizenWithdrawed", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_enough", "type": "bool" }], "name": "addGameWinIncome", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_contract", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];
        this.citizenStorageAddress = "0xe324e9b68822f0d11c9168ea470173ff055ac8d1";
        this.ticketABI = [{ "constant": true, "inputs": [], "name": "PMULTI", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "REWARD_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }, { "name": "_current", "type": "bool" }], "name": "getEarlyIncomeView", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "REVENUE_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "ONE_HOUR", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DAAContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DEV_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMostSpender", "outputs": [{ "name": "", "type": "address[4]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }, { "name": "_sender", "type": "address" }], "name": "getRefF1Sum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MOST_F1_EARNED_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_contract", "type": "address[3]" }], "name": "joinNetwork", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "round", "outputs": [{ "name": "priviousTicketSum", "type": "uint256" }, { "name": "ticketSum", "type": "uint256" }, { "name": "totalEth", "type": "uint256" }, { "name": "totalEthRoundSpend", "type": "uint256" }, { "name": "ticketSlotSum", "type": "uint256" }, { "name": "earlyIncomeMarkSum", "type": "uint256" }, { "name": "startRound", "type": "uint256" }, { "name": "endRoundByClock1", "type": "uint256" }, { "name": "endRoundByClock2", "type": "uint256" }, { "name": "endRound", "type": "uint256" }, { "name": "numberClaimed", "type": "uint8" }, { "name": "is_running_clock2", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getSeed", "outputs": [{ "name": "", "type": "uint64" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }, { "name": "_sender", "type": "address" }], "name": "getCitizenTicketSpend", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "claim", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "ZOOM", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "EARLY_PERCENT_FOR_PREVIOUS", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_quantity", "type": "uint256" }], "name": "buyTicket", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }, { "name": "_slotId", "type": "uint256" }], "name": "getCitizenSlot", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }], "name": "getLastBuy", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "coreContracts", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMostF1Earnerd", "outputs": [{ "name": "", "type": "address[4]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "addCoreContract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "LIMMIT_CLOCK_2_ETH", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }], "name": "getCitizenSumSlot", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "NEXTROUND_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "ONE_DAY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_buyer", "type": "address" }, { "name": "_round", "type": "uint256" }], "name": "getEarlyIncomeByRound", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getTicketPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentRound", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "F1_LIMIT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MOST_SPENDER_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "ticketSumByAddress", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ticketSum", "type": "uint256" }], "name": "getEarlyIncomeMark", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }], "name": "getCititzenTicketSum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "JACKPOT_PERCENT", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "LAST_BUY_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "EARLY_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PBASE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }, { "name": "_id", "type": "uint256" }], "name": "getCitizenSlotId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "drawWinner", "outputs": [{ "name": "", "type": "address" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "RDIVIDER", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sendTotalEth", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "EARLY_PERCENT_FOR_CURRENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "citizenContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }, { "name": "_ticket", "type": "uint256" }], "name": "getAddressTicket", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isCoreContract", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getEarlyIncomePull", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ticketSum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_round", "type": "uint256" }], "name": "getResultWinner", "outputs": [{ "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalEthSpendTicket", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MULTI_TICKET", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "coreContractSum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DIVIDEND_PERCENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "ONE_MIN", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "DRAW_PERCENT", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_devTeam", "type": "address[4]" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ticketFrom", "type": "uint256" }, { "indexed": false, "name": "ticketTo", "type": "uint256" }, { "indexed": false, "name": "creationDate", "type": "uint256" }], "name": "BuyATicket", "type": "event" }];
        this.ticketAddress = "0x3bf045dd0086a25924880ef31fa19b7313b620e5";
        this.diceABI = [{ "constant": true, "inputs": [], "name": "getIsHighRollerHistoryLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MULTIPLIES", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getIsRareWinsHistoryLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MIN_TOKEN", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getGameHistoryLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DAAContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "unitRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MIN", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getSeed", "outputs": [{ "name": "", "type": "uint64" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalPayout", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "isRareWinsHistory", "outputs": [{ "name": "player", "type": "address" }, { "name": "prediction", "type": "uint256" }, { "name": "prediction_type", "type": "bool" }, { "name": "result", "type": "uint256" }, { "name": "isHighRoller", "type": "bool" }, { "name": "isRareWins", "type": "bool" }, { "name": "isWin", "type": "bool" }, { "name": "amount", "type": "uint256" }, { "name": "payout", "type": "uint256" }, { "name": "unit", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_sender", "type": "address" }], "name": "getMyHistoryLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "mostTotalSpenderId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "myHistory", "outputs": [{ "name": "player", "type": "address" }, { "name": "prediction", "type": "uint256" }, { "name": "prediction_type", "type": "bool" }, { "name": "result", "type": "uint256" }, { "name": "isHighRoller", "type": "bool" }, { "name": "isRareWins", "type": "bool" }, { "name": "isWin", "type": "bool" }, { "name": "amount", "type": "uint256" }, { "name": "payout", "type": "uint256" }, { "name": "unit", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "isHighRollerHistory", "outputs": [{ "name": "player", "type": "address" }, { "name": "prediction", "type": "uint256" }, { "name": "prediction_type", "type": "bool" }, { "name": "result", "type": "uint256" }, { "name": "isHighRoller", "type": "bool" }, { "name": "isRareWins", "type": "bool" }, { "name": "isWin", "type": "bool" }, { "name": "amount", "type": "uint256" }, { "name": "payout", "type": "uint256" }, { "name": "unit", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_TOKEN", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizenSpendToken", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "updateHIGHROLLERTOKEN", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "citizenSpendEth", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_method", "type": "bool" }, { "name": "_prediction", "type": "uint256" }, { "name": "_value", "type": "uint256" }], "name": "betByToken", "outputs": [{ "components": [{ "name": "player", "type": "address" }, { "name": "prediction", "type": "uint256" }, { "name": "prediction_type", "type": "bool" }, { "name": "result", "type": "uint256" }, { "name": "isHighRoller", "type": "bool" }, { "name": "isRareWins", "type": "bool" }, { "name": "isWin", "type": "bool" }, { "name": "amount", "type": "uint256" }, { "name": "payout", "type": "uint256" }, { "name": "unit", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }], "name": "", "type": "tuple" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "HIGHROLLER", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "updateMaxToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "HIGHROLLERTOKEN", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_method", "type": "bool" }, { "name": "_prediction", "type": "uint256" }], "name": "betByEth", "outputs": [{ "components": [{ "name": "player", "type": "address" }, { "name": "prediction", "type": "uint256" }, { "name": "prediction_type", "type": "bool" }, { "name": "result", "type": "uint256" }, { "name": "isHighRoller", "type": "bool" }, { "name": "isRareWins", "type": "bool" }, { "name": "isWin", "type": "bool" }, { "name": "amount", "type": "uint256" }, { "name": "payout", "type": "uint256" }, { "name": "unit", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }], "name": "", "type": "tuple" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "updateMaxEth", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "citizenContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "updateMinEth", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "gameHistory", "outputs": [{ "name": "player", "type": "address" }, { "name": "prediction", "type": "uint256" }, { "name": "prediction_type", "type": "bool" }, { "name": "result", "type": "uint256" }, { "name": "isHighRoller", "type": "bool" }, { "name": "isRareWins", "type": "bool" }, { "name": "isWin", "type": "bool" }, { "name": "amount", "type": "uint256" }, { "name": "payout", "type": "uint256" }, { "name": "unit", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "updateMinToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "mostTotalSpender", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_citizen", "type": "address" }], "name": "sortMostSpend", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "updateHIGHROLLER", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_contract", "type": "address[3]" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "totalPayout", "type": "uint256" }, { "indexed": false, "name": "histoyLen", "type": "uint256" }, { "indexed": true, "name": "player", "type": "address" }, { "indexed": false, "name": "prediction", "type": "uint256" }, { "indexed": false, "name": "prediction_type", "type": "bool" }, { "indexed": false, "name": "result", "type": "uint256" }, { "indexed": false, "name": "isHighRoller", "type": "bool" }, { "indexed": false, "name": "isRareWins", "type": "bool" }, { "indexed": false, "name": "isWin", "type": "bool" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "payout", "type": "uint256" }, { "indexed": false, "name": "unit", "type": "uint256" }, { "indexed": false, "name": "creationDate", "type": "uint256" }], "name": "BetAGame", "type": "event" }];
        this.diceAddress = "0x82f5aa10648f5b86419aeb449fae0c8716c7a628";
        this.networkSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](3);
        this.network = this.networkSource.asObservable();
        var contractOption;
        contractOption = {
            gasPrice: '2000000000' // default gas price in wei, 20 gwei in this case
            // gasPrice: '3000000' // default gas price in wei, 20 gwei in this case
        };
        var contractOptionLow;
        contractOptionLow = {
            gasPrice: '1200000000' // default gas price in wei, 20 gwei in this case
        };
        var eth = web3.givenProvider;
        try {
            eth.enable().then(function () {
                web3.eth.net.getId(function (err, netId) {
                    _this.changeNetworkStatus(netId);
                    switch (netId) {
                        case 1:
                            console.warn('This is mainnet');
                            break;
                        case 2:
                            console.log('This is the deprecated Morden test network.');
                            break;
                        case 3:
                            console.log('This is the ropsten test network.');
                            break;
                        default:
                            console.log('This is an unknown network.');
                    }
                });
            });
        }
        catch (_a) {
            this.toastr.error("Please! Install Metamask Wallet", 'System');
            https: //ropsten.infura.io/v3/ab7a60fe027c44b58052a0ff672e9aad
             web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider('https://ropsten.infura.io/v3/ab7a60fe027c44b58052a0ff672e9aad'));
            console.log(web3);
        }
        this.fomContract = new web3.eth.Contract(this.fomABI, this.fomAddress, contractOption);
        this.citizenContract = new web3.eth.Contract(this.citizenABI, this.citizenAddress, contractOption);
        this.citizenStorageContract = new web3.eth.Contract(this.citizenStorageABI, this.citizenStorageAddress, contractOption);
        this.ticketContract = new web3.eth.Contract(this.ticketABI, this.ticketAddress, contractOption);
        this.diceContract = new web3.eth.Contract(this.diceABI, this.diceAddress, contractOptionLow);
    }
    ContractService.prototype.changeNetworkStatus = function (message) {
        this.networkSource.next(message);
    };
    ContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-fqas-page {\n  padding: 15px;\n  height: auto;\n  background: #123444;\n  border-radius: 0.25rem;\n  color: white;\n}\n.list-fqas-page .title {\n  text-align: center;\n  margin: 15px 0 10px 0;\n  color: #1EBD80;\n  font-size: 25px;\n  font-weight: bold;\n}\n.list-fqas-page .sub-title {\n  font-weight: bold;\n  margin: 25px 0 15px 0;\n}\n.list-fqas-page #accordion .custom-card {\n  background: #123444;\n}\n.list-fqas-page #accordion .custom-card-header {\n  border-radius: 3px;\n  margin-bottom: 5px;\n  padding: 0 !important;\n  color: white !important;\n  background: #1B485D ;\n}\n.list-fqas-page #accordion .custom-card-header h5 label {\n    margin: 0 !important;\n}\n.list-fqas-page #accordion .custom-card-body {\n  margin-bottom: 15px;\n  background: black;\n}\n.list-fqas-page #accordion label {\n  color: white;\n  text-decoration: none;\n  width: 100%;\n  text-align: left;\n}\n.list-fqas-page #accordion label:hover {\n  cursor: pointer;\n}\n.color-title-question-default {\n    background: #1B485D !important\n}\n.color-title-question-active {\n  background: none;\n  background: #159863 !important\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1mcWFzLXBhZ2Uge1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMxMjM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5saXN0LWZxYXMtcGFnZSAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCAwIDEwcHggMDtcbiAgY29sb3I6ICMxRUJEODA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGlzdC1mcWFzLXBhZ2UgLnN1Yi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDI1cHggMCAxNXB4IDA7XG59XG4ubGlzdC1mcWFzLXBhZ2UgI2FjY29yZGlvbiAuY3VzdG9tLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMTIzNDQ0O1xufVxuLmxpc3QtZnFhcy1wYWdlICNhY2NvcmRpb24gLmN1c3RvbS1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMUI0ODVEIDtcbn1cbi5saXN0LWZxYXMtcGFnZSAjYWNjb3JkaW9uIC5jdXN0b20tY2FyZC1oZWFkZXIgaDUgbGFiZWwge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLmxpc3QtZnFhcy1wYWdlICNhY2NvcmRpb24gLmN1c3RvbS1jYXJkLWJvZHkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi5saXN0LWZxYXMtcGFnZSAjYWNjb3JkaW9uIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmxpc3QtZnFhcy1wYWdlICNhY2NvcmRpb24gbGFiZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2xvci10aXRsZS1xdWVzdGlvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMUI0ODVEICFpbXBvcnRhbnRcbn1cblxuLmNvbG9yLXRpdGxlLXF1ZXN0aW9uLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMxNTk4NjMgIWltcG9ydGFudFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding-top: 50px\">\n    <div class=\"list-fqas-page\">\n        <h4 class=\"title\"> FAQs </h4>\n        <div id=\"introduction\" *ngFor=\"let faq of faqList\">\n            <label class=\"sub-title\">{{faq.title}}</label>\n            <div id=\"accordion\">\n                <div class=\"card custom-card\" *ngFor=\"let question of faq.faqs; let i=index\">\n                    <div class=\"card-header custom-card-header\" (click)=\"showing=question._id\">\n                        <h5 class=\"mb-0\">\n                            <label class=\"btn btn-link\" >\n                               {{i+1}}. {{question.question}}\n                            </label>\n                        </h5>\n                    </div>\n\n                    <div class=\"collapse\" [ngbCollapse]=\"showing != question._id\">\n                        <div class=\"card-body custom-card-body\">\n                            {{question.answer}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.faqList = [];
        this.httpService.getFAQ().subscribe(function (data) {
            _this.faqList = data.data.data;
        });
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/game/game-dice/game-dice.component.css":
/*!********************************************************!*\
  !*** ./src/app/game/game-dice/game-dice.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textAnimationWin {\n    color: #2ee2b5;\n    font-size: 25px;\n    position: absolute;\n    z-index: 1000;\n    font-weight: 800;\n    display: none;\n}\n\n.lose {\n    color: #ff5454;\n}\n\n.runAnimation {\n    display: block;\n    -webkit-animation: slide-up 4s;\n            animation: slide-up 4s;\n}\n\n#dice .dicecontentRight .table tbody tr td.payOutValue p {\n    text-align: right;\n}\n\n.input-group-text-res {\n    width: 100%;\n    height: 44px;\n    margin-top: 3px;\n}\n\n@-webkit-keyframes slide-up {\n    0% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        -webkit-transform: translateY(-70px);\n                transform: translateY(-70px);\n    }\n}\n\n@keyframes slide-up {\n    0% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        -webkit-transform: translateY(-70px);\n                transform: translateY(-70px);\n    }\n}\n\n@media (max-width: 450px) {\n    .ctntable-part .table tr th {\n        font-size: 12px;\n        color: #fff;\n        font-weight: 600;\n        padding: 10px 8px;\n        vertical-align: middle;\n    }\n    .ctntable-part .table tr td {\n        font-size: 12px;\n        font-weight: 500;\n        padding: 10px 8px;\n    }\n    .ctntable-part .table .tabledisplayNone2 {\n        width: 15%;\n    }\n    #roll-game-body .input-group-res {\n        position: relative;\n        width: 49%;\n        float: left;\n        margin-right: 1%;\n    }\n    #dice #roll-btn {\n        width: 49%;\n        float: left;\n        margin-left: 1%;\n        margin: 0;\n    }\n    .input-group-text-res {\n        width: 100%;\n        height: 50px;\n        margin-top: 0;\n        font-weight: 700;\n        border-left: -1px;\n    }\n    #dice #roll-game-body ul li .payout-name {\n        display: block;\n        float: left;\n        font-size: 14px;\n        padding: 4px 0;\n    }\n    #dice #roll-game-body ul li .payout-value {\n        font-size: 20px;\n        font-weight: bold;\n        color: #2ee2ba;\n    }\n    #dice #roll-game-body {\n        background-color: #1d2224;\n        padding: 0 15px;\n        text-align: center;\n        color: #ffffff;\n        padding-bottom: 20px;\n    }\n    #dice #roll-game-body ul {\n        margin-top: 15px;\n    }\n    #dice #roll-game-body ul hr {\n        border: 0;\n        border-top: 1px solid #3b4449;\n        margin: 2px 0;\n    }\n    #dice .btn-group {\n        width: 100%;\n        margin: 0;\n        margin-bottom: 6px;\n    }\n    #dice #roll-direct-btn {\n        max-width: 370px;\n        margin: 0 auto;\n        margin-bottom: 20px;\n    }\n    .float-left {\n        float: none!important;\n        text-align: center;\n    }\n    .float-right {\n        float: none!important;\n        text-align: center;\n    }\n}\n\n@media (max-width: 375px) {\n    .ctntable-part .table tr th {\n        font-size: 12px;\n        color: #fff;\n        font-weight: 600;\n        padding: 10px 8px;\n        vertical-align: middle;\n    }\n    .ctntable-part .table tr td {\n        font-size: 10px;\n        font-weight: 500;\n        padding: 8px 0;\n    }\n    .ctntable-part .table .tabledisplayNone2 {\n        width: 15%;\n    }\n    #dice #roll-game-body ul li .payout-name {\n        display: block;\n        float: left;\n        font-size: 12px;\n        padding: 4px 0;\n    }\n    #dice #roll-under-btn {\n        padding: 10px 8px;\n    }\n}\n\n@media (max-width: 320px) {\n    .ctntable-part .table tr th {\n        font-size: 10px;\n        color: #fff;\n        font-weight: 600;\n        padding: 8px 4px;\n        vertical-align: middle;\n    }\n    .ctntable-part .table tr td {\n        font-size: 10px;\n        font-weight: 500;\n        padding: 8px 1px;\n    }\n    .ctntable-part .table .tabledisplayNone2 {\n        width: 15%;\n    }\n    #dice #roll-game-body ul li .payout-name {\n        display: block;\n        float: left;\n        font-size: 11px;\n        padding: 4px 0;\n    }\n    #dice #roll-game-body ul li .payout-value {\n        font-size: 17px;\n        font-weight: bold;\n        color: #2ee2ba;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLWRpY2UvZ2FtZS1kaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7QUFDSjs7QUFaQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsZUFBZTtRQUNmLFNBQVM7SUFDYjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2Qsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0IsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUtZGljZS9nYW1lLWRpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0QW5pbWF0aW9uV2luIHtcbiAgICBjb2xvcjogIzJlZTJiNTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9zZSB7XG4gICAgY29sb3I6ICNmZjU0NTQ7XG59XG5cbi5ydW5BbmltYXRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgNHM7XG59XG5cbiNkaWNlIC5kaWNlY29udGVudFJpZ2h0IC50YWJsZSB0Ym9keSB0ciB0ZC5wYXlPdXRWYWx1ZSBwIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQtcmVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzBweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuY3RudGFibGUtcGFydCAudGFibGUgdHIgdGgge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgLmN0bnRhYmxlLXBhcnQgLnRhYmxlIHRyIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICB9XG4gICAgLmN0bnRhYmxlLXBhcnQgLnRhYmxlIC50YWJsZWRpc3BsYXlOb25lMiB7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgfVxuICAgICNyb2xsLWdhbWUtYm9keSAuaW5wdXQtZ3JvdXAtcmVzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNDklO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtYnRuIHtcbiAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuaW5wdXQtZ3JvdXAtdGV4dC1yZXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBib3JkZXItbGVmdDogLTFweDtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZ2FtZS1ib2R5IHVsIGxpIC5wYXlvdXQtbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZ2FtZS1ib2R5IHVsIGxpIC5wYXlvdXQtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzJlZTJiYTtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZ2FtZS1ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjIyNDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZ2FtZS1ib2R5IHVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZ2FtZS1ib2R5IHVsIGhyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzNiNDQ0OTtcbiAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICB9XG4gICAgI2RpY2UgLmJ0bi1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZGlyZWN0LWJ0biB7XG4gICAgICAgIG1heC13aWR0aDogMzcwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAuZmxvYXQtbGVmdCB7XG4gICAgICAgIGZsb2F0OiBub25lIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZmxvYXQtcmlnaHQge1xuICAgICAgICBmbG9hdDogbm9uZSFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC5jdG50YWJsZS1wYXJ0IC50YWJsZSB0ciB0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAuY3RudGFibGUtcGFydCAudGFibGUgdHIgdGQge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIH1cbiAgICAuY3RudGFibGUtcGFydCAudGFibGUgLnRhYmxlZGlzcGxheU5vbmUyIHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtZ2FtZS1ib2R5IHVsIGxpIC5wYXlvdXQtbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICB9XG4gICAgI2RpY2UgI3JvbGwtdW5kZXItYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAuY3RudGFibGUtcGFydCAudGFibGUgdHIgdGgge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAuY3RudGFibGUtcGFydCAudGFibGUgdHIgdGQge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxcHg7XG4gICAgfVxuICAgIC5jdG50YWJsZS1wYXJ0IC50YWJsZSAudGFibGVkaXNwbGF5Tm9uZTIge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgIH1cbiAgICAjZGljZSAjcm9sbC1nYW1lLWJvZHkgdWwgbGkgLnBheW91dC1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIH1cbiAgICAjZGljZSAjcm9sbC1nYW1lLWJvZHkgdWwgbGkgLnBheW91dC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMmVlMmJhO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/game-dice/game-dice.component.html":
/*!*********************************************************!*\
  !*** ./src/app/game/game-dice/game-dice.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dice\">\n    <div class=\"diceContainer\">\n        <div class=\"row\">\n            <div class=\"col-xl-7 col-lg-12 ctn-diceRollLeft\">\n                <div id=\"roll-game\">\n                    <!-- <a class=\"questionIcon\" href=\"#\">\n                        <img src=\"assets/styles/images/ctn-conten-icon7.png\">\n                    </a> -->\n                    <div id=\"roll-game-bg\">\n                        <div id=\"roll-game-header\" class=\"row\">\n                            <div class=\"col-6\">\n                                <h1>{{prediction}}</h1>\n                                <p>Prediction</p>\n                            </div>\n                            <div class=\"col-6\">\n                                <h1 [style.color]=\"(under&&prediction<=currentLuckyNumber||(!under&&prediction>=currentLuckyNumber))?'#ff5454':'#2ee2ba'\">{{currentLuckyNumber\n                                    <10? '0'+currentLuckyNumber:currentLuckyNumber}}</h1>\n                                        <p>Lucky Number</p>\n                            </div>\n                        </div>\n                        <div id=\"roll-direct-btn\" class=\"row\">\n                            <div class=\"col-6\">\n                                <button id=\"roll-under-btn\" class=\"btn btn-success\" [class.active]=\"under\" (click)=\"onChangeUnder(true)\">Roll Under</button>\n                            </div>\n                            <div class=\"col-6\">\n                                <button id=\"roll-over-btn\" (click)=\"onChangeUnder(false)\" [class.active]=\"!under\" class=\"btn btn-success\">Roll Over</button>\n                            </div>\n                        </div>\n                        <div id=\"roll-game-range\">\n                            <section id=\"top\">\n                                <input id=\"input-ranger\" type=\"range\" min=\"1\" max=\"99\" step=\"1\" [(ngModel)]=\"prediction\" data-rangeslider>\n                            </section>\n                        </div>\n                    </div>\n                    <div id=\"roll-game-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-6\">\n                                <ul>\n                                    <li class=\"clearfix\">\n                                        <p class=\"payout-name\">Payout on win</p>\n                                        <p class=\"payout-value\">{{(sumAmount*98.5/chance) | ethDisplay : 4}}</p>\n                                    </li>\n                                    <hr>\n                                    <li class=\"clearfix\">\n                                        <p class=\"payout-name\">Win chance</p>\n                                        <p class=\"payout-value\">{{chance}}%</p>\n                                    </li>\n                                    <hr>\n                                    <li class=\"clearfix\">\n                                        <p class=\"payout-name\">Multiplier</p>\n                                        <p class=\"payout-value\">{{(98.5/chance) | ethDisplay : 4}}x</p>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-md-4 col-6\" style=\"margin: auto 0\">\n                                <p id=\"best-amount\">Bet Amount</p>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"100\" name=\"amount\" [(ngModel)]=\"sumAmount\">\n                                    <div class=\"input-group-append\">\n                                        <span class=\"input-group-text\">{{tokenLimmit[selectedToken].name}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"d-none d-md-block\">\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"onClickMulti(2)\">x2</button>\n                                        <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"onClickMulti(0.5)\">1/2</button>\n                                        <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"sumAmount=tokenLimmit[selectedToken].min\">Min</button>\n                                        <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"sumAmount=tokenLimmit[selectedToken].max\">Max</button>\n                                        <!-- <button type=\"button\" class=\"btn btn-primary amount-btn\"(click)=\"runEffect()\">Test</button> -->\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"d-md-none col-12\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"onClickMulti(2)\">x2</button>\n                                    <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"onClickMulti(0.5)\">1/2</button>\n                                    <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"sumAmount=tokenLimmit[selectedToken].min\">Min</button>\n                                    <button type=\"button\" class=\"btn btn-primary amount-btn\" (click)=\"sumAmount=tokenLimmit[selectedToken].max\">Max</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-primary amount-btn\"(click)=\"runEffect()\">Test</button> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-12\">\n                                <p class=\"best-amount2\">ETH Balance<br class=\"d-none d-md-block\">(Switch to other token)</p>\n                                <div class=\"input-group input-group-res\">\n\n                                    <select name=\"select\" [(ngModel)]=\"selectedToken\" (change)=\"onChangeUnit()\" class=\"input-group-text input-group-text-res\">\n\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let token of tokenLimmit;let i = index\"  value=\"{{i}}\" >{{balance[i] | ethDisplay}} {{token.name}}</option>\n\t\t\t\t\t\t\t\t\t\toption\n\t\t\t\t\t\t\t\t\t</select>\n                                    <p class=\"textAnimationWin\" [class.lose]=\"extraAmount<0\" [class.runAnimation]=\"runAnimation\">{{extraAmount>0?'+':''}}{{extraAmount | ethDisplay}} {{tokenLimmit[selectedToken].name}}</p>\n\n                                    <!-- <input type=\"text\" class=\"form-control\"  placeholder=\"100\" name=\"amount\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">ETH</span>\n\t\t\t\t\t\t\t\t\t</div> -->\n                                </div>\n\n                                <button id=\"roll-btn\" type=\"button\" class=\"btn btn-primary shadow-animate-pink\" (click)=\"onClickRoll()\">Roll {{under?'Under':'Over'}} {{prediction}}</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-5 col-lg-12 diceContainerRight\">\n                <div class=\"dicecontentRight\">\n                    <!-- <a class=\"questionIcon\" href=\"#\"><img src=\"assets/styles/images/ctn-conten-icon7.png\"></a> -->\n                    <div class=\"float-left\" style=\"margin-top: 15px;\">\n                        <p class=\"titleCenter\">Total payout: <span [countUp]=\"totalPayout\" [options]=\"countUpOptions\"> {{totalPayout | ethDisplay}}</span> ETH</p>\n                        <p class=\"titleCenter\">Total bet: <span [countUp]=\"gameHistorylen\"> {{gameHistorylen}}</span></p>\n                    </div>\n\n                    <div class=\"float-right\" style=\"margin-top: 15px;\">\n                        <p class=\"titleCenter\">Your Volume: <span [countUp]=\"user.ethVolume\" [options]=\"countUpOptions\"> {{user.ethVolume}}</span> ETH <span [countUp]=\"user.tokenVolume\" [options]=\"countUpOptions\"> {{user.tokenVolume}}</span> DAA</p>\n                        <p class=\"titleCenter\">Game Income: <span [countUp]=\"user.ethIncome\" [options]=\"countUpOptions\"> {{user.ethIncome}}</span> ETH <span [countUp]=\"user.tokenIncome\" [options]=\"countUpOptions\"> {{user.tokenIncome}}</span> DAA</p>\n                    </div>\n\n\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Player</th>\n                                <th class=\"float-right\" style=\"float: right!important\">Wagered</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let citizen of topRank;let i=index\">\n                                <td class=\"playerName playerNameOne\" title=\"{{citizen.address}}\">\n                                    <span *ngIf=\"i<=2\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"i==0\" src=\"assets/images/golden_crown.png\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"i==1\" src=\"assets/images/silver_crown.png\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"i==2\" src=\"assets/images/bronze_crown.png\">\n\t\t\t\t\t\t\t\t\t</span>\n                                    <span *ngIf=\"i>2\">\n\t\t\t\t\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t\t\t\t\t</span> {{citizen.username!=''?citizen.username:'0x0'}}\n                                </td>\n                                <!-- <td class=\"payOutValue\">414,281,124.00 ETH</td> -->\n                                <td class=\"payOutValue \">\n                                    <p class=\"text-sm-right\">{{(citizen.totalSpend) | ethDisplay}} ETH</p>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"diceBetsContainer\">\n            <!-- <a class=\"questionIcon\" href=\"#\"><img src=\"assets/styles/images/ctn-conten-icon7.png\"></a> -->\n            <div id=\"dicebetsHeader\">\n                <ul class=\"nav nav-tabs card-header-tabs dice-bets-part1\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link borderDicebets1\" data-toggle=\"tab\" href=\"#dicebets1\" aria-selected=\"true\">My Bets</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#dicebets2\" aria-selected=\"false\">All Bets</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#dicebets3\" aria-selected=\"false\">High Rollers</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link borderDicebets4\" data-toggle=\"tab\" href=\"#dicebets4\" aria-selected=\"false\">Rare Wins</a>\n                    </li>\n                </ul>\n            </div>\n            <div id=\"diceBetsBody\">\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane ctntable-part\" id=\"dicebets1\">\n                        <table class=\"table table-striped\">\n                            <tr>\n                                <th>Player</th>\n                                <th class=\"tabledisplayNone1\">Prediction</th>\n                                <th class=\"tabledisplayNone2\">Lucky Number</th>\n                                <th class=\"tabledisplayNone3\">Bets</th>\n                                <th class=\"tabledisplayNone4\">Payout</th>\n                            </tr>\n                            <tr *ngFor=\"let history of myHistory\">\n                                <td>{{history.username}}</td>\n                                <td class=\"tableColor tabledisplayNone1\">{{history.prediction_type?'Under':'Over'}} {{history.prediction}}</td>\n                                <td class=\"tableColor tabledisplayNone2\" [class.tableColorRed]=\"!history.isWin\">{{history.result}}</td>\n                                <td class=\"tableColor tabledisplayNone3\">{{history.amount | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"history.isWin\">{{history.payout | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"!history.isWin\">-</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"tab-pane  ctntable-part active\" id=\"dicebets2\">\n                        <table class=\"table table-striped\">\n                            <tr>\n                                <th>Player</th>\n                                <th class=\"tabledisplayNone1\">Prediction</th>\n                                <th class=\"tabledisplayNone2\">Lucky Number</th>\n                                <th class=\"tabledisplayNone3\">Bets</th>\n                                <th class=\"tabledisplayNone4\">Payout</th>\n                            </tr>\n                            <tr *ngFor=\"let history of gameHistory\">\n                                <td>{{history.username}}</td>\n                                <td class=\"tableColor tabledisplayNone1\">{{history.prediction_type?'Under':'Over'}} {{history.prediction}}</td>\n                                <td class=\"tableColor tabledisplayNone2\" [class.tableColorRed]=\"!history.isWin\">{{history.result}}</td>\n                                <td class=\"tableColor tabledisplayNone3\">{{history.amount | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"history.isWin\">{{history.payout | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"!history.isWin\">-</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"tab-pane  ctntable-part\" id=\"dicebets3\">\n                        <table class=\"table table-striped\">\n                            <tr>\n                                <th>Player</th>\n                                <th class=\"tabledisplayNone1\">Prediction</th>\n                                <th class=\"tabledisplayNone2\">Lucky Number</th>\n                                <th class=\"tabledisplayNone3\">Bets</th>\n                                <th class=\"tabledisplayNone4\">Payout</th>\n                            </tr>\n                            <tr *ngFor=\"let history of highRollerHistory\">\n                                <td>{{history.username}}</td>\n                                <td class=\"tableColor tabledisplayNone1\">{{history.prediction_type?'Under':'Over'}} {{history.prediction}}</td>\n                                <td class=\"tableColor tabledisplayNone2\" [class.tableColorRed]=\"!history.isWin\">{{history.result}}</td>\n                                <td class=\"tableColor tabledisplayNone3\">{{history.amount | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"history.isWin\">{{history.payout | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"!history.isWin\">-</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"tab-pane  ctntable-part\" id=\"dicebets4\">\n                        <table class=\"table table-striped\">\n                            <tr>\n                                <th>Player</th>\n                                <th class=\"tabledisplayNone1\">Prediction</th>\n                                <th class=\"tabledisplayNone2\">Lucky Number</th>\n                                <th class=\"tabledisplayNone3\">Bets</th>\n                                <th class=\"tabledisplayNone4\">Payout</th>\n                            </tr>\n                            <tr *ngFor=\"let history of rareWinsHistory\">\n                                <td>{{history.username}}</td>\n                                <td class=\"tableColor tabledisplayNone1\">{{history.prediction_type?'Under':'Over'}} {{history.prediction}}</td>\n                                <td class=\"tableColor tabledisplayNone2\" [class.tableColorRed]=\"!history.isWin\">{{history.result}}</td>\n                                <td class=\"tableColor tabledisplayNone3\">{{history.amount | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"history.isWin\">{{history.payout | ethDisplay}} {{history.unit==0?'ETH':''}}{{history.unit==1?'DAA':''}}</td>\n                                <td class=\"tableColor tabledisplayNone4\" *ngIf=\"!history.isWin\">-</td>\n                            </tr>\n                        </table>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/game/game-dice/game-dice.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/game-dice/game-dice.component.ts ***!
  \*******************************************************/
/*! exports provided: GameDiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDiceComponent", function() { return GameDiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contract.service */ "./src/app/contract.service.ts");
/* harmony import */ var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../local-service.service */ "./src/app/local-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);







var web3 = new web3__WEBPACK_IMPORTED_MODULE_6___default.a(web3__WEBPACK_IMPORTED_MODULE_6___default.a.givenProvider);
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var GameDiceComponent = /** @class */ (function () {
    function GameDiceComponent(contractService, localService, httpService, toastr) {
        var _this = this;
        this.contractService = contractService;
        this.localService = localService;
        this.httpService = httpService;
        this.toastr = toastr;
        this.prediction = 50;
        this.selected = 0;
        this.selectedToken = 0;
        this.under = true;
        this.currentLuckyNumber = 0;
        this.luckyNumber = 3;
        this.limmit = [{ 'name': 'under', 'min': 1, 'max': 95 }, { 'name': 'over', 'min': 4, 'max': 98 }];
        this.tokenLimmit = [{ 'name': 'ETH', 'min': 0.007, 'max': 10 }, { 'name': 'DAA', 'min': 1, 'max': 10 }];
        this.isBuying = false;
        this.chance = 50;
        this.sumAmount = this.tokenLimmit[0].min;
        this.extraAmount = 0;
        this.runAnimation = false;
        this.totalPayout = 0;
        this.topRank = [];
        this.gameHistory = [];
        this.myHistory = [];
        this.highRollerHistory = [];
        this.rareWinsHistory = [];
        this.gameHistorylen = 0;
        this.balance = [];
        this.user = {};
        this.countUpOptions = {
            decimalPlaces: 3,
        };
        this.valueOutput = function (value) {
            // $("#js-output").html(rangeValue); 
            $(".rangeslider__handle").html("<span style='display: block; padding: 5px; font-weight: bold; font-size: 20px; text-align: center;'>" + value + "</span>" +
                "<div style='position:absolute; padding:35px; top:-15px; left:-15px'></div>");
            // $(".rangeslider__fill").css('width',rangeValue-3+'%');
            // $(".rangeslider__handle").css('left',rangeValue-8+'%')
            var rangeWidth = $(".rangeslider").width();
            if (_this.under == true) {
                if (value >= 95) {
                    $(".rangeslider__fill").css({ "width": 0.92 * rangeWidth });
                    $(".rangeslider__handle").css({ "left": 0.92 * rangeWidth - 20 });
                }
            }
            else {
                if (value >= 98) {
                    $(".rangeslider__fill").css({ "width": 0.94 * rangeWidth });
                    $(".rangeslider__handle").css({ "left": 0.94 * rangeWidth - 20 });
                }
                if (value <= 4) {
                    $(".rangeslider__fill").css({ "width": 0.08 * rangeWidth });
                    $(".rangeslider__handle").css({ "left": 0.08 * rangeWidth - 20 });
                }
            }
        };
        this.onClickRoll = function () {
            if (isNaN(_this.sumAmount) ||
                _this.sumAmount > _this.balance[_this.selectedToken] ||
                _this.sumAmount > _this.tokenLimmit[_this.selectedToken].max ||
                _this.sumAmount < _this.tokenLimmit[_this.selectedToken].min) {
                _this.toastr.error('Invalid Number', 'System');
                _this.sumAmount = _this.tokenLimmit[_this.selectedToken].min;
            }
            else {
                if (_this.isBuying == true) {
                    _this.toastr.error('Check Metamask transaction', 'System');
                }
                else {
                    _this.isBuying = true;
                    // Run animation
                    var waittingInterval_1 = setInterval(function () {
                        _this.currentLuckyNumber++;
                        if (_this.currentLuckyNumber > 99) {
                            _this.currentLuckyNumber = 0;
                        }
                        var compare = parseInt((_this.luckyNumber / 10).toString()) - 1;
                        if (compare < 0) {
                            compare = 9;
                        }
                        if (_this.isBuying == false && compare == parseInt((_this.currentLuckyNumber / 10).toString())) {
                            clearInterval(waittingInterval_1);
                            var interval_1 = setInterval(function () {
                                _this.currentLuckyNumber++;
                                if (_this.currentLuckyNumber > 99) {
                                    _this.currentLuckyNumber = 0;
                                }
                                if (_this.currentLuckyNumber == _this.luckyNumber) {
                                    clearInterval(interval_1);
                                    _this.runAnimation = true;
                                    setTimeout(function () { _this.runAnimation = false; }, 4000);
                                }
                            }, 120);
                        }
                    }, 30);
                    // Set amount and method
                    var amount = void 0;
                    try {
                        if (_this.selectedToken == 0) {
                            amount = web3.utils.numberToHex(_this.sumAmount * Math.pow(10, 18));
                            _this.contractService.diceContract.methods.betByEth(_this.under, _this.prediction).send({ from: _this.account, value: amount })
                                .on('error', function (error) {
                                _this.toastr.error("Successfully cancel transaction", 'Smart contract');
                                clearInterval(waittingInterval_1);
                                _this.isBuying = false;
                            });
                        }
                        else {
                            // console.warn('token roll');
                            amount = web3.utils.numberToHex(_this.sumAmount * Math.pow(10, 10));
                            _this.contractService.diceContract.methods.betByToken(_this.under, _this.prediction, amount).send({ from: _this.account })
                                .on('error', function (error) {
                                _this.toastr.error("Successfully cancel transaction", 'Smart contract');
                                clearInterval(waittingInterval_1);
                                _this.isBuying = false;
                            });
                        }
                    }
                    catch (_a) {
                        clearInterval(waittingInterval_1);
                    }
                }
            }
        };
        this.onChangeUnder = function (value) {
            _this.under = value;
            if (_this.under) {
                // $('#dice .rangeslider__fill').css('background-color','#2ee2ba');
                // $('#dice .rangeslider__fill').css('border','1px solid #05fdf9');
                // $('#dice .rangeslider').css('background-color','#ff5454');
                _this.selected = 0;
            }
            else {
                // over
                // $('#dice .rangeslider__fill').css('background-color','#ff5454')
                // $('#dice .rangeslider__fill').css('border','none')
                // $('#dice .rangeslider').css('background-color','#2ee2ba')
                // $('#dice .rangeslider').css('border','1px solid #05fdf9')
                _this.selected = 1;
            }
            _this.onChangeRanger(_this.prediction);
        };
        this.onChangeRanger = function (value) {
            _this.prediction = value;
            if (_this.limmit[_this.selected].min > _this.prediction)
                _this.prediction = _this.limmit[_this.selected].min;
            if (_this.limmit[_this.selected].max < _this.prediction)
                _this.prediction = _this.limmit[_this.selected].max;
            if (_this.under) {
                _this.chance = _this.prediction;
            }
            else {
                _this.chance = 99 - _this.prediction;
            }
            _this.valueOutput(_this.prediction);
        };
        this.onChangeUnit = function () {
            _this.sumAmount = _this.tokenLimmit[_this.selectedToken].min;
        };
        this.onClickMulti = function (value) {
            _this.sumAmount *= value;
            if (_this.tokenLimmit[_this.selectedToken].min > _this.sumAmount)
                _this.sumAmount = _this.tokenLimmit[_this.selectedToken].min;
            if (_this.tokenLimmit[_this.selectedToken].max < _this.sumAmount)
                _this.sumAmount = _this.tokenLimmit[_this.selectedToken].max;
        };
        this.loadAll = function () {
            var _loop_1 = function (i) {
                _this.topRank[i] = {};
                _this.contractService.diceContract.methods.mostTotalSpender(i + 1).call().then(function (d) {
                    _this.topRank[i].address = d;
                    _this.contractService.citizenContract.methods.getUsername(d).call().then(function (d) {
                        _this.topRank[i].username = web3.utils.hexToUtf8(d._hex);
                    });
                    _this.contractService.diceContract.methods.citizenSpendEth(d).call().then(function (c) {
                        _this.topRank[i].totalSpend = _this.toNumber(c);
                    });
                });
            };
            for (var i = 0; i < 10; i++) {
                _loop_1(i);
            }
        };
        this.getBalance = function () {
            web3.eth.getBalance(_this.account).then(function (data) { _this.balance[0] = _this.toNumber(data); }).then(function () {
                _this.contractService.fomContract.methods.citizen(_this.account).call().then(function (d) { _this.balance[1] = _this.toTokenNumber(d.citizenBalanceToken); });
                _this.contractService.citizenContract.methods.citizen(_this.account).call().then(function (d) {
                    _this.user.ethVolume = _this.toNumber(d.citizenGameEthSpend);
                    _this.user.tokenVolume = _this.toTokenNumber(d.citizenGameTokenSpend);
                    _this.user.ethIncome = _this.toNumber(d.citizenGameEthRevenue);
                    _this.user.tokenIncome = _this.toTokenNumber(d.citizenGameTokenRevenue);
                });
            });
        };
        this.toNumber = function (val) {
            // div 10^18
            return val / 0xDE0B6B3A7640000;
        };
        this.toTokenNumber = function (val) {
            // div 10^10
            return val / 0x2540BE400;
        };
    }
    GameDiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        __webpack_require__(/*! ../../../assets/styles/rangeslider.js */ "./src/assets/styles/rangeslider.js");
        __webpack_require__(/*! ../../../assets/styles/lightbutton.js */ "./src/assets/styles/lightbutton.js");
        /** * Initialize the elements */
        var inputranger = $("#input-ranger");
        inputranger.rangeslider({
            polyfill: false,
            onInit: function () {
                _this.valueOutput($("#input-ranger").val());
            },
            // Callback function
            onSlide: function (position, value) {
                _this.onChangeRanger(value);
            },
            // Callback function
            onSlideEnd: function (position, value) {
                _this.onChangeRanger(value);
            }
        });
    };
    GameDiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountSubscriber = this.localService.currentAccount.subscribe(function (data) {
            _this.account = data;
            _this.getBalance();
        });
        // this.newHistoryEvent.unsubscribe();
        this.newHistoryEvent = this.contractService.diceContract.events.BetAGame({
            fromBlock: 0
        }, function (error, event) {
            // console.log(event, event.returnValues);
            if (_this.isBuying == true && _this.account == event.returnValues.player) {
                _this.luckyNumber = event.returnValues.result.toNumber();
                if (event.returnValues.isWin) {
                    _this.extraAmount = event.returnValues.payout - event.returnValues.amount;
                }
                else {
                    _this.extraAmount = event.returnValues.amount * -1;
                }
                if (event.returnValues.unit.toNumber() == 0) {
                    _this.extraAmount = _this.toNumber(_this.extraAmount);
                }
                else {
                    _this.extraAmount = _this.toTokenNumber(_this.extraAmount);
                }
                _this.getBalance();
                _this.isBuying = false;
            }
            _this.totalPayout = _this.toNumber(event.returnValues.totalPayout);
            _this.gameHistorylen = event.returnValues.histoyLen.toNumber();
            if (_this.gameHistory.length > 50) {
                _this.gameHistory.pop();
            }
            if (_this.myHistory.length > 50 && _this.account == event.returnValues.player) {
                _this.myHistory.pop();
            }
            if (_this.highRollerHistory.length > 50 && event.returnValues.isHighRoller) {
                _this.highRollerHistory.pop();
            }
            if (_this.rareWinsHistory.length > 50 && event.returnValues.isRareWins) {
                _this.rareWinsHistory.pop();
            }
            var historyTemp = {};
            historyTemp.address = event.returnValues.player;
            _this.contractService.citizenContract.methods.getUsername(event.returnValues.player).call().then(function (d) {
                historyTemp.username = web3.utils.hexToUtf8(d._hex);
            });
            historyTemp.prediction = event.returnValues.prediction.toNumber();
            historyTemp.prediction_type = event.returnValues.prediction_type;
            historyTemp.result = event.returnValues.result.toNumber();
            historyTemp.isWin = event.returnValues.isWin;
            historyTemp.unit = event.returnValues.unit.toNumber();
            if (historyTemp.unit == 0) {
                // ETH
                historyTemp.amount = _this.toNumber(event.returnValues.amount);
                historyTemp.payout = _this.toNumber(event.returnValues.payout);
            }
            else {
                historyTemp.amount = _this.toTokenNumber(event.returnValues.amount);
                historyTemp.payout = _this.toTokenNumber(event.returnValues.payout);
            }
            _this.gameHistory.unshift(historyTemp);
            if (_this.account == event.returnValues.player) {
                _this.myHistory.unshift(historyTemp);
            }
            if (event.returnValues.isHighRoller) {
                _this.highRollerHistory.unshift(historyTemp);
            }
            if (event.returnValues.isRareWins) {
                _this.rareWinsHistory.unshift(historyTemp);
            }
        });
        // console.log("this.newHistoryEvent", JSON.stringify(this.newHistoryEvent));
        this.loadAll();
    };
    GameDiceComponent.prototype.ngOnDestroy = function () {
        console.log("deleting...", this.newHistoryEvent.unsubscribe);
        try {
            this.newHistoryEvent.unsubscribe(function (data) {
                console.log('callback data', data);
            });
        }
        catch (_a) { }
    };
    GameDiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-dice',
            template: __webpack_require__(/*! ./game-dice.component.html */ "./src/app/game/game-dice/game-dice.component.html"),
            styles: [__webpack_require__(/*! ./game-dice.component.css */ "./src/app/game/game-dice/game-dice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"],
            _local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"],
            _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], GameDiceComponent);
    return GameDiceComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wellcome {\n    padding: 5px 15px;\n    text-decoration: none;\n    line-height: 20px;\n    border-radius: 5px;\n    text-align: center;\n    color: #fff;\n    font-weight: 700;\n    background: #ff5454;\n    border: 1px solid #ffa05a;\n}\n\n#bar-li-7 .dropdown-menu {\n    background-color: #252b2e;\n    color: #fff;\n    box-shadow: 5px 5px 12px 0px #00000054;\n    border: 0.5px solid #3f5763;\n}\n\n#bar-li-7 .dropdown-menu .dropdown-item {\n    color: #2ee2ba;\n    padding: .25rem 1.5rem;\n}\n\n#bar-li-7 .dropdown-menu .dropdown-item:hover {\n    color: #2ee2ba;\n    background-color: #151c1f;\n}\n\n.modal {\n    overflow-y: auto\n}\n\n.modal::-webkit-scrollbar {\n    display: none;\n}\n\n.headerBotContainer #logo img {\n    width: 60px;\n    margin-right: 5px;\n}\n\n.progress {\n    height: 2rem;\n}\n\n#topRank {\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #3b4449;\n    box-shadow: 4px 4px 4px #101010a8;\n}\n\n#navbarSupportedContentLG ul li.nav-modal-deplay-block{\n    display: inline-block;\n}\n\n#navbarSupportedContentLG ul li.nav-modal-deplay-none{\n    display: none;\n}\n\n.menu-help-modal{\n    width: 100%;\n    margin-top: -35px;\n}\n\n.menu-help-modal a{\n    width: 100%;\n    padding: 5px 0 !important;\n    display: inline-block;\n    color: #fff;\n    font-size: 0.9rem;\n    font-weight: 500;\n    text-decoration: none;\n}\n\n.menu-help-modal a:hover{\n    color: #70e3bb;\n}\n\n@media (max-width: 991px) {\n    #bar-li-7 .dropdown-menu {\n        display: none;\n    }\n    #bar-li-7 .dropdown-menu .dropdown-item {\n        font-size: 18px;\n    }\n    .contentLeft ul {\n        height: 60vh;\n    }\n    #wellcome {\n        line-height: 38px;\n        width: 68%;\n        display: inline-block;\n        margin: 20px 0px;\n    }\n    .headerBotContainer #logo img {\n        width: 40px;\n        margin: 8px 5px;\n    }\n    #navbarSupportedContentLG ul li:nth-child(even) {\n        width: 50%;\n        float: right;\n    }\n    #navbarSupportedContentLG ul li:nth-child(odd) {\n        width: 50%;\n        float: left;\n    }\n    #navbarSupportedContentLG .navbar-nav {\n        flex-direction: unset;\n    }\n    #navbarSupportedContentLG ul li.nav-modal-deplay-block{\n        display: none;\n    }\n    #navbarSupportedContentLG ul li.nav-modal-deplay-none{\n        display: inline-block;\n    }\n}\n\n@media (max-width: 500px) {\n     #bar-li-7 .dropdown-menu .dropdown-item {\n        font-size: 14px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNDQUFzQztJQUN0QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUNBO0tBQ0s7UUFDRyxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsbGNvbWUge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmNTQ1NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhMDVhO1xufVxuXG4jYmFyLWxpLTcgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJiMmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMnB4IDBweCAjMDAwMDAwNTQ7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjM2Y1NzYzO1xufVxuXG4jYmFyLWxpLTcgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIGNvbG9yOiAjMmVlMmJhO1xuICAgIHBhZGRpbmc6IC4yNXJlbSAxLjVyZW07XG59XG5cbiNiYXItbGktNyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgY29sb3I6ICMyZWUyYmE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWMxZjtcbn1cblxuLm1vZGFsIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvXG59XG5cbi5tb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXJCb3RDb250YWluZXIgI2xvZ28gaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cbiN0b3BSYW5rIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYjQ0NDk7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzEwMTAxMGE4O1xufVxuI25hdmJhclN1cHBvcnRlZENvbnRlbnRMRyB1bCBsaS5uYXYtbW9kYWwtZGVwbGF5LWJsb2Nre1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50TEcgdWwgbGkubmF2LW1vZGFsLWRlcGxheS1ub25le1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubWVudS1oZWxwLW1vZGFse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xufVxuLm1lbnUtaGVscC1tb2RhbCBhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1lbnUtaGVscC1tb2RhbCBhOmhvdmVye1xuICAgIGNvbG9yOiAjNzBlM2JiO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgI2Jhci1saS03IC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI2Jhci1saS03IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuY29udGVudExlZnQgdWwge1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgfVxuICAgICN3ZWxsY29tZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICB3aWR0aDogNjglO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgfVxuICAgIC5oZWFkZXJCb3RDb250YWluZXIgI2xvZ28gaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDVweDtcbiAgICB9XG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnRMRyB1bCBsaTpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50TEcgdWwgbGk6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnRMRyAubmF2YmFyLW5hdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcbiAgICB9XG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnRMRyB1bCBsaS5uYXYtbW9kYWwtZGVwbGF5LWJsb2Nre1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudExHIHVsIGxpLm5hdi1tb2RhbC1kZXBsYXktbm9uZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAjYmFyLWxpLTcgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerContainer\">\n    <div class=\"container-fluid\">\n        <nav class=\"headerBotContainer navbar navbar-expand-lg navbar-dark\">\n            <div class=\"ctn-container\">\n                <a routerLink=\"\" title=\"\" id=\"logo\" class=\"navbar-brand col-lg-3 col-5\"><img src=\"assets/images/logo.png\" alt=\"home\" (click)=\"onClickShowing(null)\">DABANKING</a>\n                <button class=\"navbar-toggler ToggleFload\" type=\"button\" (click)=\"onClickShowing('navbar')\">\n\t\t\t        <span class=\"navbar-toggler-icon\"></span>\n\t\t\t    </button>\n                <button class=\"navbar-toggler ToggleFload\" type=\"button\" (click)=\"onClickShowing('topRank')\">\n\t\t\t        <span><img style=\"width: 25px;margin: 7px 0px;\" src=\"assets/images/icon-head.png\"></span>\n\t\t\t    </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContentLG\" [ngbCollapse]=\"showNav != 'navbar'\" style=\"-webkit-overflow-scrolling: touch !important;\">\n                    <ul class=\"navbar-nav mr-auto row\">\n                        <li class=\"nav-item\" id=\"bar-li-1\"><a [ngClass]=\"{active: activeRoute('/')}\" routerLink=\"\" (click)=\"onClickShowing('navbar')\">FOMO</a></li>\n                        <li class=\"nav-item\" id=\"bar-li-2\"><a [ngClass]=\"{active: activeRoute('dice')}\" routerLink=\"/dice\" (click)=\"onClickShowing('navbar')\">DICE</a></li>\n                        <li class=\"nav-item\" id=\"bar-li-4\"><a [routerLink]=\"\" (click)=\"onClickCommingSoon()\">DUEL</a></li>\n                        <li class=\"nav-item\" id=\"bar-li-3\"><a [routerLink]=\"\" (click)=\"onClickCommingSoon()\">WATCH</a></li>\n                        <li class=\"nav-item\" id=\"bar-li-5\" (click)=\"loadDividendTab()\"><a [routerLink]=\"\" data-toggle=\"modal\" data-target=\"#Mydividens\">DIVIDEND</a></li>\n                        <!-- <li class=\"nav-item\" id=\"bar-li-6\"><a href=\"https://dabanking.io/\">MINING DAB</a></li> -->\n                        <li class=\"nav-item\" id=\"bar-li-6\"><a [routerLink]=\"\" (click)=\"onClickCommingSoon()\">MINING DAB</a></li>\n                        <li ngbDropdown class=\"nav-item nav-modal-deplay-block\" id=\"bar-li-7\" placement=\"bottom-center\">\n                            <a [routerLink]=\"\" href=\"#\" onclick=\"void(0)\" id=\"dropdownBasic1\" ngbDropdownToggle>HELP</a>\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-menu dropdown-menu-help\" style=\"\">\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://t.me/DABANKINGOFFICIAL\" target=\"_blank\">Telegram Group</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://discord.gg/uqfMjYV\">Discord Group</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"/static/whitepaper.pdf\" target=\"_blank\">Whitepaper</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://hackmd.io/s/r1wrpBSTN\" target=\"_blank\">English Documents</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://hackmd.io/s/SJv8RSSTN\" target=\"_blank\">Chinese Documents</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://hackmd.io/s/B1kxRHrT4\" target=\"_blank\">Japanese Documents</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://hackmd.io/s/SyabCSraV\" target=\"_blank\">Korean Documents</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"https://hackmd.io/s/H1wzRSHaE\" target=\"_blank\">Russian Documents</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"#\">DAA Contract</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"#\">Citizen Contract</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"#\">Citizen Storage Contract</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"#\">Ticket Contract</a>\n                                <a class=\"clickable\" ngbDropdownItem href=\"#\">Dice Contract</a>\n                                <a class=\"clickable\" ngbDropdownItem [routerLink]=\"['/data']\">Database</a>\n                            </div>\n                        </li>\n                        <li ngbDropdown class=\"nav-item nav-modal-deplay-none\" id=\"bar-li-7\" placement=\"bottom-center\">\n                            <a [routerLink]=\"\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModalHelp\" onclick=\"void(0)\" id=\"dropdownBasic1\" ngbDropdownToggle>HELP</a>\n\n                            <!-- Modal -->\n                            <div id=\"myModalHelp\" class=\"modal fade\" role=\"dialog\" *ngIf=\"dividendTab!=undefined\" style=\"-webkit-overflow-scrolling: touch !important;\">\n                                <div class=\"modal-dialog modal-dialog-help\">\n\n                                    <!-- Modal content-->\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <div class=\"menu-help-modal\">\n                                                <a class=\"clickable\" href=\"https://t.me/DABANKINGOFFICIAL\" target=\"_blank\">Telegram Group</a>\n                                                <a class=\"clickable\" href=\"https://discord.gg/uqfMjYV\">Discord Group</a>\n                                                <a class=\"clickable\" href=\"/static/whitepaper.pdf\" target=\"_blank\">Whitepaper</a>\n                                                <a class=\"clickable\" href=\"https://hackmd.io/s/r1wrpBSTN\" target=\"_blank\">English Documents</a>\n                                                <a class=\"clickable\" href=\"https://hackmd.io/s/SJv8RSSTN\" target=\"_blank\">Chinese Documents</a>\n                                                <a class=\"clickable\" href=\"https://hackmd.io/s/B1kxRHrT4\" target=\"_blank\">Japanese Documents</a>\n                                                <a class=\"clickable\" href=\"https://hackmd.io/s/SyabCSraV\" target=\"_blank\">Korean Documents</a>\n                                                <a class=\"clickable\" href=\"https://hackmd.io/s/H1wzRSHaE\" target=\"_blank\">Russian Documents</a>\n                                                <a class=\"clickable\" href=\"#\">DAA Contract</a>\n                                                <a class=\"clickable\" href=\"#\">Citizen Contract</a>\n                                                <a class=\"clickable\" href=\"#\">Citizen Storage Contract</a>\n                                                <a class=\"clickable\" href=\"#\">Ticket Contract</a>\n                                                <a class=\"clickable\" href=\"#\">Dice Contract</a>\n                                                <a class=\"clickable\" [routerLink]=\"['/data']\">Database</a>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n\n\n\n\n\n\n\n\n\n                        </li>\n\n                        <li class=\"nav-item\" id=\"bar-li-9\"><a routerLink=\"/faq\">FAQ</a></li>\n\n                    </ul>\n                    <div class=\"navloginRight\">\n                        <!-- <a href=\"#\" id=\"login\">login</a> -->\n                        <a *ngIf=\"!isLogin\" href=\"#\" id=\"wellcome\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#MyRegister\">SIGNUP</a>\n                        <!-- <a *ngIf=\"!isLogin\" href=\"#\" id=\"wellcome\" [routerLink]=\"\" (click)=\"onClickCommingSoon()\">SIGNUP</a> -->\n                        <a *ngIf=\"isLogin\" [routerLink]=\"\" id=\"wellcome\">WELLCOME {{username}}</a>\n                    </div>\n                </div>\n            </div>\n        </nav>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"Mydividens\" class=\"modal fade\" role=\"dialog\" *ngIf=\"dividendTab!=undefined\" style=\"-webkit-overflow-scrolling: touch !important;\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">\n                    <a routerLink=\"\" style=\"text-decoration: none;color:#fff; font-weight: 800;\"><img src=\"assets/images/logo.png\" alt=\"home\" width=\"100px\"><br>DABANKING</a>\n                </h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"ctn-dividens-body-part1\">\n                    <!-- <h1>Stage {{dividendTab.currentLevel}}-{{dividendTab.currentRound}} (Win {{dividendTab.currentLevelWin}} ETH, or lose game and buy ticket {{dividendTab.currentLevelLose}} ETH to mine 1 DAA)</h1> -->\n                    <h1>Stage {{dividendTab.currentRound}}-{{dividendTab.currentLevel}} (Buy ticket or lose game {{dividendTab.currentLevelLose}} ETH to mine 1 DAA and win game {{dividendTab.currentLevelWin}} ETH to mine 1 DAA</h1>\n\n                    <div class=\"ctn-body-from\">\n                        <div class=\"progress\">\n                            <div title=\"{{dividendTab.totalSupplyByLevel}}\" class=\"progress-bar\" [style.width.%]=\"dividendTab.totalSupplyByLevel/dividendTab.HARD_TOTAL_SUPPLY_BY_LEVEL*100\" role=\"progressbar\" aria-valuenow=\"200\" aria-valuemin=\"0\" aria-valuemax=\"200000\">\n                            </div>\n                        </div>\n                        <div style=\"position: absolute;margin-left: auto;margin-right: auto;    left: 0; top: 5px;  right: 0; font-size: 20px;\">{{dividendTab.totalSupplyByLevel | ethDisplay }}/{{dividendTab.HARD_TOTAL_SUPPLY_BY_LEVEL | ethDisplay }}</div>\n\n                        <span></span>\n                        <script src=\"assets/jquery.min.js\"></script>\n                        <script src=\"assets/progress.js\"></script>\n                    </div>\n                    <h1>Next stage {{dividendTab.nextRound}}-{{dividendTab.nextLevel}} (Buy ticket or lose game {{dividendTab.nextLevelLose}} ETH to mine 1 DAA and win game {{dividendTab.nextLevelWin}} ETH to mine 1 DAA)</h1>\n                </div>\n                <div class=\"ctn-dividens-body-part2\" data-dismiss=\"modal\">\n                    <a routerLink=\"\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#Myburn\" class=\"ctn-burn\">\n                        <img src=\"assets/images/burn-icon.png\">\n                        <h3>burn</h3>\n                    </a>\n                    <h2>Available Dividends</h2>\n                    <h1>{{dividendTab.currentRoundDividendEth | ethDisplay}} ETH</h1>\n                    <p>A total of <span>{{dividendTab.totalFrozenBalance | usdDisplay}} DAA </span>is frozen across the network - You will receive <span> {{dividendTab.totalFrozenBalance==0?dividendTab.currentRoundDividendEthForCitizen:user.tokenFreezing*dividendTab.currentRoundDividendEthForCitizen/dividendTab.totalFrozenBalance | ethDisplay}} ETH</span></p>\n                    <p style=\"font-size: 25px\"><img src=\"assets/images/divi-icon1.png\" width=\"20px\">Dividends Countdown: {{dividendTab.endRoundTimeShow}}</p>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"ctn-fom-dividens-part\">\n                    <h1>Your Wallet</h1>\n                    <input type=\"text\" [ngModel]=\"user.tokenDepositPending | ethDisplay\" name=\"fomTest\" (ngModelChange)=\"user.tokenDepositPending = $event\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onClickDepositToken();\" [disabled]=\"username==undefined\">Deposit</button>\n                </div>\n                <div class=\"ctn-fom-dividens-part\">\n                    <h1>Available</h1>\n                    <input type=\"text\" [ngModel]=\"user.tokenDeposit | ethDisplay\" name=\"fomTest\" disabled>\n                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"onClickWithdrawToken();\" [disabled]=\"user.tokenDeposit<=0||username==undefined\">Withdraw</button>\n                </div>\n                <div class=\"ctn-fom-dividens-part\">\n                    <h1>Your Wallet</h1>\n                    <input type=\"text\" [ngModel]=\"user.tokenFreeze | ethDisplay\" (ngModelChange)=\"user.tokenFreeze = $event\" name=\"fomTest\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickFreezeToken();\" data-dismiss=\"modal\" [disabled]=\"username==undefined\">Freeze</button>\n                </div>\n                <div class=\"ctn-fom-dividens-part\">\n                    <h1>Frozen</h1>\n                    <input type=\"text\" [ngModel]=\"user.tokenFreezing | ethDisplay\" name=\"fomTest\" disabled>\n                    <button type=\"button\" class=\"btn \" data-dismiss=\"modal\" (click)=\"onClickUnfreezeToken();\" [disabled]=\"user.tokenFreezing<=0||username==undefined\">Unfreeze</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- content burn -->\n<div id=\"Myburn\" class=\"modal fade\" role=\"dialog\" *ngIf=\"burnTab!=undefined\" style=\"-webkit-overflow-scrolling: touch !important;\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\"><img src=\"assets/images/burn-icon.png\">Burn</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"ctn-burn-body-part1\">\n                    <!-- <a href=\"#\" class=\"ctn-burn\"><img src=\"assets/images/ctn-conten-icon7.png\"></a> -->\n                    <h2>Wager Burn Pool</h2>\n                    <h1>{{burnTab.totalToken | ethDisplay }} DAA</h1>\n                    <p>DAA in burn pool is not entitled for dividends and will disappear forever after burnt. DAA burn will happen every 2 weeks. </p>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"ctn-burn-body-part1\">\n                    <!-- <a href=\"#\" class=\"ctn-burn\"><img src=\"assets/images/ctn-conten-icon7.png\"></a> -->\n                    <h2>Burnt DAA</h2>\n                    <h1>{{burnTab.totalTokenBurned | ethDisplay }} DAA</h1>\n                    <!-- <p>When DAA is burned from the pool, FomoBanking team will simultaneously burn our DAA at a 6:4 ratio. Every month, FomoBanking team will use 20% of monthly profit to buy back DAA from the secondary market and burn.</p> -->\n                    <p>When DAA is burned from the pool, team DABANKING will simultaneously burn our DAA at a 6:4 ratio</p>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"ctn-burn-body-part1\">\n                    <h2>DAA Burnt Log</h2>\n                    <table class=\"table table-striped\">\n                        <tr>\n                            <th>Time</th>\n                            <th>From</th>\n                            <th>Quantity</th>\n                            <th>Hash</th>\n                        </tr>\n                        <ng-container *ngFor=\"let history of burnTab.history | slice: (burnPage-1) * 10 : (burnPage-1) * 10 + 10\">\n                            <ng-container *ngIf=\"history!=undefined\">\n                                <tr>\n                                    <td>{{history.date | date }}</td>\n                                    <td>{{history.from==DAAContract?'DAAContract':'Dev'}}</td>\n                                    <td class=\"tableColor\">{{history.value | ethDisplay}} DAA</td>\n                                    <td><a style=\"color: #fff; text-decoration: none;\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ropsten.etherscan.io/tx/{{history.txhash}}\">{{history.txhash | shortDisplay}}</a></td>\n                                </tr>\n                            </ng-container>\n                        </ng-container>\n                    </table>\n                    <ngb-pagination [collectionSize]=\"burnTab.history.length\" [maxSize]=\"5\" [(page)]=\"burnPage\" class=\"d-flex justify-content-end\"></ngb-pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"MyRegister\" class=\"modal fade\" role=\"dialog\" style=\"-webkit-overflow-scrolling: touch !important;\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Engrave Your Username To The Blockchain</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"ctn-register-body-part1\">\n                    <button type=\"button\" class=\"btn \" (click)=\"onClickRandomName()\">Randomize</button>\n                    <input [(ngModel)]=\"register.username\" type=\"text\" name=\"username\" placeholder=\"TYPE HERE...\" (change)=\"uppercaseUsername();\">\n                </div>\n                <div class=\"ctn-register-body-part2\">\n                    <h1>Username must follow these rules:</h1>\n                    <ul>\n                        <li>Must be unique</li>\n                        <li>4 to 18 Characters</li>\n                        <li>A-Z (uppercase)</li>\n                        <li>Cannot start with number</li>\n                        <li>No special characters</li>\n                        <li>No space between characters</li>\n                    </ul>\n                    <p>If one of these criteria does not meet the requirements, the registration will fail.</p>\n                    <p>Your username is permanent</p>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn \" (click)=\"onClickRegister()\" data-dismiss=\"modal\">Register</button>\n            </div>\n        </div>\n    </div>\n</div>\n<app-side-bar class=\"collapse parentContentLeft\" id=\"topRank\" [ngbCollapse]=\"showNav != 'topRank'\" style=\"-webkit-overflow-scrolling: touch !important;\"></app-side-bar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-service.service */ "./src/app/local-service.service.ts");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contract.service */ "./src/app/contract.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider);
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(localService, contractService, httpService, route, _route, toastr) {
        var _this = this;
        this.localService = localService;
        this.contractService = contractService;
        this.httpService = httpService;
        this.route = route;
        this._route = _route;
        this.toastr = toastr;
        this.register = { 'username': '', 'ref': '0x0000000000000000000000000000000000000000' };
        this.isLogin = false;
        this.isShowing = false;
        this.isOpenHelp = false;
        this.user = {};
        this.dividendTab = {};
        this.burnTab = {};
        this.burnPage = 1;
        this.isBuying = false;
        this.onClickShowing = function (value) {
            function handleTouchMove(e) {
                e.preventDefault();
            }
            if (_this.showNav == value) {
                _this.showNav = null;
            }
            else {
                _this.showNav = value;
            }
            if ($(window).width() < 991) {
                if (_this.showNav == null) {
                    $("body").css("overflow", "auto");
                    $("html").css("overflow", "auto");
                }
                else {
                    $("body").css("overflow", "hidden");
                    $("body").css("position", "relative");
                    $("html").css("overflow", "hidden");
                    $("body").css("height", "100%");
                    $("body").css("-webkit-overflow-scrolling", "auto");
                }
            }
        };
        this.loadDividendTab = function () {
            console.log("loading/.");
            _this.contractService.fomContract.methods.currentLevel().call().then(function (d) {
                _this.dividendTab.currentLevel = d + 1;
                _this.contractService.fomContract.methods.ETH_WIN(d).call().then(function (c) {
                    _this.dividendTab.currentLevelWin = _this.toNumber(c);
                });
                _this.contractService.fomContract.methods.ETH_LOSE(d).call().then(function (c) {
                    _this.dividendTab.currentLevelLose = _this.toNumber(c);
                });
            });
            _this.contractService.fomContract.methods.currentRound().call().then(function (d) {
                _this.dividendTab.currentRound = d;
                var nextLevel;
                var nextRound = d;
                if (_this.dividendTab.currentRound < 9) {
                    if (_this.dividendTab.currentLevel + 1 < 11) {
                        nextLevel = _this.dividendTab.currentLevel + 1;
                    }
                    else {
                        nextLevel = 1;
                        nextRound = nextRound + 1;
                    }
                }
                else {
                    if (_this.dividendTab.currentRound == 9 && _this.dividendTab.currentLevel + 1 < 11) {
                        nextLevel = _this.dividendTab.currentLevel + 1;
                    }
                }
                _this.dividendTab.nextLevel = nextLevel;
                _this.dividendTab.nextRound = nextRound;
                if (nextLevel != 0) {
                    _this.contractService.fomContract.methods.ETH_WIN(nextLevel - 1).call().then(function (c) {
                        _this.dividendTab.nextLevelWin = _this.toNumber(c);
                    });
                    _this.contractService.fomContract.methods.ETH_LOSE(nextLevel - 1).call().then(function (c) {
                        _this.dividendTab.nextLevelLose = _this.toNumber(c);
                    });
                }
                setTimeout(function () {
                    _this.contractService.fomContract.methods.totalSupplyByLevel(_this.dividendTab.currentRound, _this.dividendTab.currentLevel - 1).call().then(function (d) {
                        _this.dividendTab.totalSupplyByLevel = _this.toTokenNumber(d);
                    });
                }, 500);
            });
            _this.contractService.fomContract.methods.HARD_TOTAL_SUPPLY_BY_LEVEL().call().then(function (d) {
                _this.dividendTab.HARD_TOTAL_SUPPLY_BY_LEVEL = _this.toTokenNumber(d);
            });
            _this.contractService.fomContract.methods.totalSupplyBurned().call().then(function (d) {
                _this.burnTab.totalTokenBurned = _this.toTokenNumber(d);
            });
            _this.contractService.fomContract.methods.currentRoundDividend().call().then(function (d) {
                _this.dividendTab.currentRoundDividend = d.toNumber();
                _this.contractService.fomContract.methods.dividendRound(_this.dividendTab.currentRoundDividend).call().then(function (c) {
                    _this.burnTab.totalToken = _this.toTokenNumber(c.totalToken - c.totalTokenCredit);
                    _this.dividendTab.currentRoundDividendEth = _this.toNumber(c.totalEth - c.totalEthCredit);
                    if (_this.dividendTab.currentRoundDividendEth > 0) {
                        _this.dividendTab.currentRoundDividendEthForCitizen = _this.dividendTab.currentRoundDividendEth * 0.7;
                    }
                    _this.dividendTab.totalFrozenBalance = _this.toTokenNumber(c.totalFrozenBalance);
                });
                // let last_round = this.dividendTab.currentRoundDividend - 5;
                // if (last_round<1) last_round = 1;
                // if (last_round<=this.dividendTab.currentRoundDividend){
                //   this.burnTab.history = [];
                //   for (let i = last_round; i<this.dividendTab.currentRoundDividend;i++){
                //     this.contractService.fomContract.methods.dividendRound(i).call().then((c)=>{
                //       let temp:any = {}
                //       temp.date = new Date(c.endRoundTime.toNumber()*1000);
                //       temp.tokenBurn = this.toTokenNumber(c.totalToken-c.totalTokenCredit);
                //       // call server to get hash
                //       // this.burnTab.history[i].hash = this.toTokenNumber(d.totalToken-d.totalTokenCredit);
                //       this.burnTab.history[i]=temp;
                //     })
                //   }
                // }
            });
            _this.contractService.fomContract.methods.clockDevidend().call().then(function (d) {
                var date = new Date(d.toNumber() * 1000);
                _this.dividendTab.endRoundTime = _this.countdown(date, function (isDone, show) {
                    if (isDone) {
                        clearInterval(_this.dividendTab.endRoundTime);
                    }
                    _this.dividendTab.endRoundTimeShow = show;
                });
            });
        };
        this.onClickCommingSoon = function () {
            if (_this.isShowing == false) {
                _this.isShowing = true;
                _this.toastr.info('Coming soon', '', {
                    timeOut: 1000,
                    toastClass: 'commingsoon',
                    positionClass: 'toast-top-center',
                });
                setTimeout(function () { _this.isShowing = false; }, 1000);
            }
        };
        this.onClickHelp = function () {
            if (_this.isOpenHelp == true) {
                _this.isOpenHelp = false;
            }
            else {
                _this.isOpenHelp = true;
            }
        };
        this.onClickWithdrawToken = function () {
            if (_this.user.tokenDeposit > 0) {
                _this.isBuying = true;
                var tokenDeposit = parseInt((_this.user.tokenDeposit * Math.pow(10, 10)).toString());
                _this.contractService.fomContract.methods.citizenWithdrawDeposit(tokenDeposit).send({ from: _this.account })
                    .on('confirmation', function (confNumber, receipt) {
                    if (_this.isBuying == true) {
                        _this.isBuying = false;
                        _this.httpService.chatSocket.send(JSON.stringify({
                            'message': 3
                        }));
                    }
                })
                    .on('error', function (error) { console.log('error', error); })
                    .then(function (receipt) {
                });
            }
        };
        this.onClickDepositToken = function () {
            if (_this.user.tokenDepositPending > 0 && _this.user.tokenBalance >= _this.user.tokenDepositPending) {
                _this.isBuying = true;
                var tokenDeposit = parseInt((_this.user.tokenDepositPending * Math.pow(10, 10)).toString());
                _this.contractService.fomContract.methods.citizenDeposit(tokenDeposit).send({ from: _this.account })
                    .on('confirmation', function (confNumber, receipt) {
                    if (_this.isBuying == true) {
                        _this.isBuying = false;
                        _this.httpService.chatSocket.send(JSON.stringify({
                            'message': 3
                        }));
                    }
                })
                    .on('error', function (error) { _this.toastr.error('Please! Use positive integers', 'Smart contract'); })
                    .then(function (receipt) {
                });
            }
            else {
                if (_this.user.tokenBalance < _this.user.tokenDepositPending) {
                    _this.toastr.warning("insufficient balance");
                }
                if (isNaN(_this.user.tokenDepositPending)) {
                    _this.toastr.warning("Please! Use positive integers");
                }
            }
        };
        this.onClickFreezeToken = function () {
            if (_this.user.tokenFreeze + _this.user.tokenFreezing > 10) {
                _this.isBuying = true;
                var freeingToken = parseInt((_this.user.tokenFreeze * Math.pow(10, 10)).toString());
                _this.contractService.fomContract.methods.citizenFreeze(freeingToken).send({ from: _this.account })
                    .on('confirmation', function (confNumber, receipt) {
                    if (_this.isBuying == true) {
                        _this.isBuying = false;
                        _this.httpService.chatSocket.send(JSON.stringify({
                            'message': 3
                        }));
                    }
                })
                    .on('error', function (error) { console.log('error', error); })
                    .then(function (receipt) {
                    this.toastr.error('Please! Use positive integers', 'Smart contract');
                });
            }
            else {
                _this.toastr.error('Freezed token must be more than 10 FOM', 'System');
            }
        };
        this.onClickUnfreezeToken = function () {
            _this.isBuying = true;
            _this.contractService.fomContract.methods.citizenUnfreeze().send({ from: _this.account })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 3
                    }));
                }
            })
                .on('error', function (error) { console.log('error', error); })
                .then(function (receipt) {
            });
        };
        this.uppercaseUsername = function () {
            _this.register.username = _this.register.username.toUpperCase();
        };
        this.onClickRegister = function () {
            _this.isBuying = true;
            $("#MyRegister").modal('hide');
            var ref = localStorage.getItem('ref');
            localStorage.removeItem('ref');
            if (ref == null) {
                ref = _this.register.ref;
            }
            _this.contractService.citizenContract.methods.register(_this.register.username.toUpperCase(), ref).send({ from: _this.account })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                    // this._route.navigate(['/']);
                    window.location.reload();
                }
            })
                .on('error', function (error) { console.log('error', error); })
                .then(function (receipt) {
            });
        };
        this.onClickRandomName = function () {
            _this.httpService.randomName().subscribe(function (data) {
                _this.register.username = data.results[0].name.first + data.results[0].name.last;
            });
        };
        this.countdown = function (countDownDate, done) {
            function checkTime(i) {
                return (i < 10) ? "0" + i : i;
            }
            return setInterval(function () {
                // Get todays date and time
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                hours = checkTime(hours);
                minutes = checkTime(minutes);
                seconds = checkTime(seconds);
                // Display the result in the element with id="demo"
                var y = hours + ":" + minutes + ":" + seconds;
                if (days > 0) {
                    if (days == 1) {
                        y = days + " Day " + y;
                    }
                    else {
                        y = days + " Days " + y;
                    }
                }
                // If the count down is finished, write some text
                if (distance < 0) {
                    y = "EXPIRED";
                    done(true, y);
                }
                else {
                    done(false, y);
                }
            }, 1000);
        };
        this.toNumber = function (val) {
            // div 10^18
            return val / 0xDE0B6B3A7640000;
        };
        this.toTokenNumber = function (val) {
            // div 10^10
            return val / 0x2540BE400;
        };
        this.DAAContract = this.contractService.fomAddress;
        this.contractService.network.subscribe(function (network) {
            web3.eth.getAccounts().then(function (data) {
                // Login
                if (data.length != 0 && network == 3) {
                    _this.account = data[0];
                    _this.localService.changeAccount(data[0]);
                    _this.contractService.citizenContract.methods.isCitizen(data[0]).call().then(function (result) {
                        if (result) {
                            _this.isLogin = true;
                            _this.localService.changeLoginStatus(_this.isLogin);
                            _this.contractService.citizenContract.methods.citizen(_this.account).call().then(function (d) {
                                _this.username = web3.utils.hexToUtf8(d.username._hex);
                            });
                            _this.contractService.fomContract.methods.citizen(_this.account).call().then(function (d) {
                                _this.user.tokenDeposit = _this.toTokenNumber(d.citizenBalanceToken);
                                _this.user.ethDeposit = _this.toNumber(d.citizenBalanceEth);
                            });
                            _this.contractService.fomContract.methods.getCitizenFreezing(_this.account).call().then(function (d) {
                                _this.user.tokenFreezing = _this.toTokenNumber(d);
                            });
                            _this.contractService.fomContract.methods.getBalanceOf(_this.account).call().then(function (d) {
                                _this.user.tokenBalance = _this.toTokenNumber(d);
                                _this.user.tokenDepositPending = _this.user.tokenBalance;
                                _this.user.tokenFreeze = _this.user.tokenBalance;
                            });
                        }
                        else {
                            _this.isLogin = false;
                            _this.localService.changeLoginStatus(_this.isLogin);
                        }
                    });
                }
                else {
                    _this.isLogin = false;
                    _this.localService.changeLoginStatus(_this.isLogin);
                    console.warn("not login");
                }
            });
        });
        this.httpService.chatSocket.onmessage = function (e) {
            var data = JSON.parse(e.data);
            if (data.message == 3) {
                _this.loadDividendTab();
            }
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__(/*! ../../assets/styles/bootstrap.min.js */ "./src/assets/styles/bootstrap.min.js");
        this.burnTab.history = [];
        this.burnEvent = this.contractService.fomContract.events.Burn({
            fromBlock: 0
        }, function (error, event) {
            // console.log(event);
            if (event != null) {
                var historyTemp = {};
                historyTemp.from = event.returnValues.from;
                historyTemp.date = new Date(event.returnValues.creationDate.toNumber() * 1000);
                historyTemp.value = _this.toTokenNumber(event.returnValues.value);
                historyTemp.txhash = event.transactionHash;
                _this.burnTab.history.unshift(historyTemp);
            }
        });
    };
    HeaderComponent.prototype.activeRoute = function (routename) {
        if (routename == "/") {
            return this._route.url.indexOf(routename) > -1 && this._route.url.length == 1;
        }
        return this._route.url.indexOf(routename) > -1;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"],
            _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"],
            _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n#referralList li .referralRight>a:hover {\n    opacity: 0.6;\n}\n\n#referralList li .referralRight>a:active {\n    color: #fff;\n    box-sizing: border-box;\n    border: 3px solid #1cc09b;\n    margin-right: -2px;\n    transition: border 0.1s, margin-right 0.1s;\n}\n\n#multiplierText {\n    font-size: 20px;\n    color: #fff;\n    margin-right: 7px;\n    margin-top: 15px;\n}\n\n#multiplierNumber {\n    color: #70e3bb;\n    font-size: 20px;\n    margin-top: 15px;\n}\n\n.buyticket a {\n    text-decoration: none;\n    line-height: 60px;\n}\n\n.buyticket div #buyTicketHeader {\n    font-size: 20px;\n    font-weight: bold;\n    color: #ffffff;\n    text-align: center;\n    margin: 0;\n    line-height: 56px;\n}\n\n#nextRound {\n    color: #fff;\n}\n\n/* #chest1 {\n    background-size: 76px;\n} */\n\n/* None arrow at input number */\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.contentBottom>div>div>a {\n    text-decoration: none;\n}\n\n.contentBottom>div>div>a>h1 {\n    font-size: 34px;\n    font-weight: bold;\n    color: #ffffff;\n    margin-top: 20px;\n    padding: 10px 0;\n    /*background-color: #252b2e;*/\n    position: relative;\n    width: 100%;\n    background: linear-gradient(135deg, transparent 10px, #ff3f90 0) top left, linear-gradient(225deg, transparent 10px, #ff3f90 0) top right, linear-gradient(315deg, transparent 10px, #ff3f90 0) bottom right, linear-gradient(45deg, transparent 10px, #ff3f90 0) bottom left;\n    /*Neu muon border toan bo*/\n    background-size: 60% 60%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(#ff5ade, #ff5ade), linear-gradient(#ff5ade, #ff5ade), linear-gradient(#ff5ade, #ff5ade), linear-gradient(#ff5ade, #ff5ade), linear-gradient(to bottom right, transparent calc(50% - 2px), #ff5ade calc(50% - 2px), #ff5ade calc(50% + 2px), #ff3f90 calc(50% + 2px)), linear-gradient(to bottom left, transparent calc(50% - 2px), #ff5ade calc(50% - 2px), #ff5ade calc(50% + 2px), #ff3f90 calc(50% + 2px)), linear-gradient(to top right, transparent calc(50% - 2px), #ff5ade calc(50% - 2px), #ff5ade calc(50% + 2px), #ff3f90 calc(50% + 2px)), linear-gradient(to top left, transparent calc(50% - 2px), #ff5ade calc(50% - 2px), #ff5ade calc(50% + 2px), #ff3f90 calc(50% + 2px)), linear-gradient(#ff3f90, #ff3f90), linear-gradient(#ff3f90, #ff3f90), linear-gradient(#ff3f90, #ff3f90), linear-gradient(#ff3f90, #ff3f90);\n    background-size: 4px calc(100% - 30px), 4px calc(100% - 30px), calc(100% - 30px) 4px, calc(100% - 30px) 4px, /*Cac goc*/\n    15px 15px, 15px 15px, 15px 15px, 15px 15px, /*Tap nen*/\n    calc(100% - 30px) 60%, calc(100% - 30px) 60%, 60% calc(100% - 30px), 60% calc(100% - 30px);\n    background-position: left center, right center, top center, bottom center, top left, top right, bottom left, bottom right, center 100%, center 0%, left center, right center;\n}\n\n.centerChildent {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n}\n\n#levelBody p {\n    color: #fff;\n    font-weight: 700;\n}\n\n#MyRegister .modal-dialog .modal-content .modal-footer button:hover {\n    background-size: 4px calc(100% - 30px), 4px calc(100% - 30px), calc(100% - 30px) 4px, calc(100% - 30px) 4px, /*Cac goc*/\n    15px 15px, 15px 15px, 15px 15px, 15px 15px, /*Tap nen*/\n    calc(100% - 27px) 60%, calc(100% - 27px) 60%, 60% calc(100% - 27px), 60% calc(100% - 27px);\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n/*light button*/\n\n@-webkit-keyframes shadow-pulse-orange {\n    0% {\n        box-shadow: 0 0 0 0px rgba(255, 84, 84, 1);\n    }\n    100% {\n        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n    }\n}\n\n@keyframes shadow-pulse-orange {\n    0% {\n        box-shadow: 0 0 0 0px rgba(255, 84, 84, 1);\n    }\n    100% {\n        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n    }\n}\n\n@-webkit-keyframes shadow-pulse-pink {\n    0% {\n        box-shadow: 0 0 0 0px rgba(255, 63, 144, 1);\n    }\n    100% {\n        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n    }\n}\n\n@keyframes shadow-pulse-pink {\n    0% {\n        box-shadow: 0 0 0 0px rgba(255, 63, 144, 1);\n    }\n    100% {\n        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n    }\n}\n\n@-webkit-keyframes shadow-pulse-green {\n    0% {\n        box-shadow: 0 0 0 0px rgba(17, 137, 110, 1);\n    }\n    100% {\n        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n    }\n}\n\n@keyframes shadow-pulse-green {\n    0% {\n        box-shadow: 0 0 0 0px rgba(17, 137, 110, 1);\n    }\n    100% {\n        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n    }\n}\n\n.shadow-animate-orange {\n    -webkit-animation: shadow-pulse-orange 1s infinite;\n            animation: shadow-pulse-orange 1s infinite;\n}\n\n.shadow-animate-green {\n    -webkit-animation: shadow-pulse-green 1s infinite;\n            animation: shadow-pulse-green 1s infinite;\n}\n\n.contentBottom>div>div {\n    border-radius: 22px;\n}\n\n.shadow-animate-pink {\n    -webkit-animation: shadow-pulse-pink 1s infinite;\n            animation: shadow-pulse-pink 1s infinite;\n}\n\n/*end light button*/\n\n/*progress bar*/\n\n.progress {\n    background-color: transparent;\n}\n\n.ctn-body-from .progress .progress-bar {\n    background-color: #ff3f90;\n    border: 2px solid #ff5ade;\n}\n\n.ctn-body-from {\n    position: relative;\n}\n\n.ctn-body-from span {\n    position: absolute;\n    top: 0;\n}\n\n.brightness:hover {\n    box-shadow: 0 0px 12px 6px rgb(233, 146, 27);\n}\n\n#buyTicketHeader {\n    overflow: hidden;\n    /* Ensures the content is not revealed until the animation */\n    white-space: nowrap;\n    /* Keeps the content on a single line */\n    margin: 0 auto;\n    /* Gives that scrolling effect as the typing happens */\n    -webkit-animation: slide-up 8.5s infinite;\n            animation: slide-up 8.5s infinite;\n}\n\n@-webkit-keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    10% {\n        opacity: 0;\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    35% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n    90% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px);\n    }\n}\n\n@keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    10% {\n        opacity: 0;\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    35% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n    90% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px);\n    }\n}\n\n#modalNextRound .modal-header {\n    position: relative;\n}\n\n#modalNextRound .modal-header img {\n    position: absolute;\n    top: -25px;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    width: 110px;\n}\n\n#modalNextRound #roundBotRightHeader>p {\n    padding-top: 40px;\n    margin-bottom: 15px;\n}\n\n.my-popover {\n    background-color: #151b1f;\n    color: #fff;\n    border: 1px solid #ff9f59;\n    padding: 10px;\n}\n\n.my-popover .arrow {\n    display: none;\n}\n\n.my-popover .popover-body {\n    color: #fff;\n    text-align: justify;\n}\n\nhr {\n    border-top: 2px solid #3b4449;\n}\n\n#incomeList li p.incomeValue {\n    color: #2ee2ba;\n}\n\n.forSmartPhone {\n    display: none;\n}\n\n.buyticket-row {\n    overflow: hidden;\n    height: 60px;\n}\n\n.ctn-banner-multipRight{\n    display: none;\n}\n\n.ctn-banner-multip{\n    width: 30%;\n    float: left;\n    padding-top: 15px;\n    text-align: center;\n}\n\n.ctn-banner-lockLeft{\n    width: 70%;\n    float: left;\n    text-align: center;\n}\n\n@media (max-width: 1300px) {\n    .buyticket div #buyTicketHeader {\n        font-size: 20px;\n        line-height: 25px;\n        /* padding: 20px 0; */\n    }\n    .buyticket-row {\n        display: flex;\n        flex-wrap: wrap;\n        margin-right: -15px;\n        margin-left: -15px;\n    }\n}\n\n@media (max-width: 1160px) {\n    .buyticket div #buyTicketHeader {\n        font-size: 20px;\n        line-height: 25px;\n        /* padding: 20px 0; */\n    }\n}\n\n@media (max-width: 991px) {\n    .buyticket div #buyTicketHeader {\n        font-size: 17px;\n        line-height: 20px;\n        /* padding: 20px 0; */\n\n    }\n    .ctn-banner-multipleft{\n        display: none;\n    }\n    .ctn-banner-multipRight{\n        display: inline-block;\n        width: 100%;\n        padding-top: 0;\n    }\n    .ctn-banner-lockLeft{\n        width: 100%;\n    }\n}\n\n@media (max-width: 767px) {\n    .buyticket-row {\n        height: auto;\n        display: unset;\n        flex-wrap: wrap;\n        margin-right: 0;\n        margin-left: 0;\n    }\n    .forSmartPhone {\n        font-size: 20px;\n        font-weight: 800;\n        color: #ffffff;\n        text-align: center;\n        display: inline-block;\n    }\n    \n}\n\n@media (max-width: 320px) {\n    #kingOfKey h2 {\n        font-size: 20px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0E7O0dBRUc7O0FBR0gsK0JBQStCOztBQUUvQjs7SUFFSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw2UUFBNlE7SUFDN1EsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsdzBCQUF3MEI7SUFDeDBCOzs4RkFFMEY7SUFDMUYsNEtBQTRLO0FBQ2hMOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7OzhGQUUwRjtJQUMxRiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUdBLGVBQWU7O0FBRWY7SUFDSTtRQUNJLDBDQUEwQztJQUM5QztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDBDQUEwQztJQUM5QztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSSxrREFBMEM7WUFBMUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdEQUF3QztZQUF4Qyx3Q0FBd0M7QUFDNUM7O0FBR0EsbUJBQW1COztBQUduQixlQUFlOztBQUVmO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHNEQUFzRDtJQUN0RCx5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsbUNBQTJCO2dCQUEzQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVixtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFVBQVU7UUFDVixvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtJQUNoQztBQUNKOztBQXJCQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsbUNBQTJCO2dCQUEzQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVixnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHFCQUFxQjs7SUFFekI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIscUJBQXFCO0lBQ3pCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jcmVmZXJyYWxMaXN0IGxpIC5yZWZlcnJhbFJpZ2h0PmE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuI3JlZmVycmFsTGlzdCBsaSAucmVmZXJyYWxSaWdodD5hOmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMWNjMDliO1xuICAgIG1hcmdpbi1yaWdodDogLTJweDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4xcywgbWFyZ2luLXJpZ2h0IDAuMXM7XG59XG5cbiNtdWx0aXBsaWVyVGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiNtdWx0aXBsaWVyTnVtYmVyIHtcbiAgICBjb2xvcjogIzcwZTNiYjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJ1eXRpY2tldCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5idXl0aWNrZXQgZGl2ICNidXlUaWNrZXRIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xufVxuXG4jbmV4dFJvdW5kIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKiAjY2hlc3QxIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc2cHg7XG59ICovXG5cblxuLyogTm9uZSBhcnJvdyBhdCBpbnB1dCBudW1iZXIgKi9cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGVudEJvdHRvbT5kaXY+ZGl2PmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRlbnRCb3R0b20+ZGl2PmRpdj5hPmgxIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyYjJlOyovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDEwcHgsICNmZjNmOTAgMCkgdG9wIGxlZnQsIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHRyYW5zcGFyZW50IDEwcHgsICNmZjNmOTAgMCkgdG9wIHJpZ2h0LCBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCB0cmFuc3BhcmVudCAxMHB4LCAjZmYzZjkwIDApIGJvdHRvbSByaWdodCwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAxMHB4LCAjZmYzZjkwIDApIGJvdHRvbSBsZWZ0O1xuICAgIC8qTmV1IG11b24gYm9yZGVyIHRvYW4gYm8qL1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlIDYwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmY1YWRlLCAjZmY1YWRlKSwgbGluZWFyLWdyYWRpZW50KCNmZjVhZGUsICNmZjVhZGUpLCBsaW5lYXItZ3JhZGllbnQoI2ZmNWFkZSwgI2ZmNWFkZSksIGxpbmVhci1ncmFkaWVudCgjZmY1YWRlLCAjZmY1YWRlKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAycHgpLCAjZmY1YWRlIGNhbGMoNTAlIC0gMnB4KSwgI2ZmNWFkZSBjYWxjKDUwJSArIDJweCksICNmZjNmOTAgY2FsYyg1MCUgKyAycHgpKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDJweCksICNmZjVhZGUgY2FsYyg1MCUgLSAycHgpLCAjZmY1YWRlIGNhbGMoNTAlICsgMnB4KSwgI2ZmM2Y5MCBjYWxjKDUwJSArIDJweCkpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDJweCksICNmZjVhZGUgY2FsYyg1MCUgLSAycHgpLCAjZmY1YWRlIGNhbGMoNTAlICsgMnB4KSwgI2ZmM2Y5MCBjYWxjKDUwJSArIDJweCkpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMnB4KSwgI2ZmNWFkZSBjYWxjKDUwJSAtIDJweCksICNmZjVhZGUgY2FsYyg1MCUgKyAycHgpLCAjZmYzZjkwIGNhbGMoNTAlICsgMnB4KSksIGxpbmVhci1ncmFkaWVudCgjZmYzZjkwLCAjZmYzZjkwKSwgbGluZWFyLWdyYWRpZW50KCNmZjNmOTAsICNmZjNmOTApLCBsaW5lYXItZ3JhZGllbnQoI2ZmM2Y5MCwgI2ZmM2Y5MCksIGxpbmVhci1ncmFkaWVudCgjZmYzZjkwLCAjZmYzZjkwKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDRweCBjYWxjKDEwMCUgLSAzMHB4KSwgNHB4IGNhbGMoMTAwJSAtIDMwcHgpLCBjYWxjKDEwMCUgLSAzMHB4KSA0cHgsIGNhbGMoMTAwJSAtIDMwcHgpIDRweCwgLypDYWMgZ29jKi9cbiAgICAxNXB4IDE1cHgsIDE1cHggMTVweCwgMTVweCAxNXB4LCAxNXB4IDE1cHgsIC8qVGFwIG5lbiovXG4gICAgY2FsYygxMDAlIC0gMzBweCkgNjAlLCBjYWxjKDEwMCUgLSAzMHB4KSA2MCUsIDYwJSBjYWxjKDEwMCUgLSAzMHB4KSwgNjAlIGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyLCByaWdodCBjZW50ZXIsIHRvcCBjZW50ZXIsIGJvdHRvbSBjZW50ZXIsIHRvcCBsZWZ0LCB0b3AgcmlnaHQsIGJvdHRvbSBsZWZ0LCBib3R0b20gcmlnaHQsIGNlbnRlciAxMDAlLCBjZW50ZXIgMCUsIGxlZnQgY2VudGVyLCByaWdodCBjZW50ZXI7XG59XG5cbi5jZW50ZXJDaGlsZGVudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbGV2ZWxCb2R5IHAge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNNeVJlZ2lzdGVyIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWZvb3RlciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogNHB4IGNhbGMoMTAwJSAtIDMwcHgpLCA0cHggY2FsYygxMDAlIC0gMzBweCksIGNhbGMoMTAwJSAtIDMwcHgpIDRweCwgY2FsYygxMDAlIC0gMzBweCkgNHB4LCAvKkNhYyBnb2MqL1xuICAgIDE1cHggMTVweCwgMTVweCAxNXB4LCAxNXB4IDE1cHgsIDE1cHggMTVweCwgLypUYXAgbmVuKi9cbiAgICBjYWxjKDEwMCUgLSAyN3B4KSA2MCUsIGNhbGMoMTAwJSAtIDI3cHgpIDYwJSwgNjAlIGNhbGMoMTAwJSAtIDI3cHgpLCA2MCUgY2FsYygxMDAlIC0gMjdweCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5cbi8qbGlnaHQgYnV0dG9uKi9cblxuQGtleWZyYW1lcyBzaGFkb3ctcHVsc2Utb3JhbmdlIHtcbiAgICAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDI1NSwgODQsIDg0LCAxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2hhZG93LXB1bHNlLXBpbmsge1xuICAgIDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMjU1LCA2MywgMTQ0LCAxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2hhZG93LXB1bHNlLWdyZWVuIHtcbiAgICAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDE3LCAxMzcsIDExMCwgMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgfVxufVxuXG4uc2hhZG93LWFuaW1hdGUtb3JhbmdlIHtcbiAgICBhbmltYXRpb246IHNoYWRvdy1wdWxzZS1vcmFuZ2UgMXMgaW5maW5pdGU7XG59XG5cbi5zaGFkb3ctYW5pbWF0ZS1ncmVlbiB7XG4gICAgYW5pbWF0aW9uOiBzaGFkb3ctcHVsc2UtZ3JlZW4gMXMgaW5maW5pdGU7XG59XG5cbi5jb250ZW50Qm90dG9tPmRpdj5kaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG59XG5cbi5zaGFkb3ctYW5pbWF0ZS1waW5rIHtcbiAgICBhbmltYXRpb246IHNoYWRvdy1wdWxzZS1waW5rIDFzIGluZmluaXRlO1xufVxuXG5cbi8qZW5kIGxpZ2h0IGJ1dHRvbiovXG5cblxuLypwcm9ncmVzcyBiYXIqL1xuXG4ucHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY3RuLWJvZHktZnJvbSAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2Y5MDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY1YWRlO1xufVxuXG4uY3RuLWJvZHktZnJvbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3RuLWJvZHktZnJvbSBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xufVxuXG4uYnJpZ2h0bmVzczpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTJweCA2cHggcmdiKDIzMywgMTQ2LCAyNyk7XG59XG5cbiNidXlUaWNrZXRIZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogRW5zdXJlcyB0aGUgY29udGVudCBpcyBub3QgcmV2ZWFsZWQgdW50aWwgdGhlIGFuaW1hdGlvbiAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLyogS2VlcHMgdGhlIGNvbnRlbnQgb24gYSBzaW5nbGUgbGluZSAqL1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDguNXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgfVxuICAgIDM1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB9XG59XG5cbiNtb2RhbE5leHRSb3VuZCAubW9kYWwtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNtb2RhbE5leHRSb3VuZCAubW9kYWwtaGVhZGVyIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xufVxuXG4jbW9kYWxOZXh0Um91bmQgI3JvdW5kQm90UmlnaHRIZWFkZXI+cCB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm15LXBvcG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTFiMWY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWY1OTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubXktcG9wb3ZlciAuYXJyb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5teS1wb3BvdmVyIC5wb3BvdmVyLWJvZHkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmhyIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNiNDQ0OTtcbn1cblxuI2luY29tZUxpc3QgbGkgcC5pbmNvbWVWYWx1ZSB7XG4gICAgY29sb3I6ICMyZWUyYmE7XG59XG5cbi5mb3JTbWFydFBob25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV5dGlja2V0LXJvdyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4uY3RuLWJhbm5lci1tdWx0aXBSaWdodHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmN0bi1iYW5uZXItbXVsdGlwe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN0bi1iYW5uZXItbG9ja0xlZnR7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgLmJ1eXRpY2tldCBkaXYgI2J1eVRpY2tldEhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIC8qIHBhZGRpbmc6IDIwcHggMDsgKi9cbiAgICB9XG4gICAgLmJ1eXRpY2tldC1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTYwcHgpIHtcbiAgICAuYnV5dGlja2V0IGRpdiAjYnV5VGlja2V0SGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgLyogcGFkZGluZzogMjBweCAwOyAqL1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmJ1eXRpY2tldCBkaXYgI2J1eVRpY2tldEhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIC8qIHBhZGRpbmc6IDIwcHggMDsgKi9cblxuICAgIH1cbiAgICAuY3RuLWJhbm5lci1tdWx0aXBsZWZ0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuY3RuLWJhbm5lci1tdWx0aXBSaWdodHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC5jdG4tYmFubmVyLWxvY2tMZWZ0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5idXl0aWNrZXQtcm93IHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAuZm9yU21hcnRQaG9uZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgI2tpbmdPZktleSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parentContentRight\">\n    <div id=\"round1Top\">\n        <p>Round {{currentRound==0?'Zero':'#'+currentRound}}</p>\n    </div>\n    <div class=\"contentRoundTop row\">\n        <div class=\"col-md-5 col-sm-6 col-xs-12\">\n            <p><span id=\"key1Span\">{{ticketSum | thousandDisplay}}</span><span>/{{ticketSumAllRound | thousandDisplay}}</span></p>\n            <p><span id=\"key2Span\">{{totalEthRoundSpend | ethDisplay}}</span><span>/{{totalEthAllRound | ethDisplay}} ETH</span></p>\n        </div>\n        <hr class=\"hr-display\">\n        <div class=\"col-md-7 col-sm-6 col-xs-12\">\n            <div class=\"ctn-banner-multip ctn-banner-multipleft\">\n                <p><span id=\"multiplierText\">Winning Multiplier</span><span id=\"multiplierNumber\">x{{winningMultiplier}}</span></p>\n            </div>\n            <div class=\"ctn-banner-lockLeft\">\n                <p *ngIf=\"clockNextRound_show!=undefined\"><span id=\"nextRound\">Next round</span></p>\n                <p *ngIf=\"clockNextRound_show!=undefined\"><span id=\"clock1Span\">{{clockNextRound_show }}</span></p>\n                <p *ngIf=\"clock1_show!='EXPIRED'&&clock1_show!=undefined&&clockNextRound_show==undefined\"><span id=\"clock1Span\">{{clock1_show}}</span></p>\n                <p *ngIf=\"clock2_show!='EXPIRED'&&clock2_show!=undefined&&clockNextRound_show==undefined\"><span id=\"clock2Span\">{{clock2_show}}</span></p>\n            </div>\n            <div class=\"ctn-banner-multip ctn-banner-multipRight\">\n                <p><span id=\"multiplierText\">Winning Multiplier</span><span id=\"multiplierNumber\">x{{winningMultiplier}}</span></p>\n            </div>\n        </div>\n    </div>\n    <!-- End contenrRoundTop -->\n    <div class=\"buyticket\">\n        <div class=\"buyticket-row row\">\n            <div class=\"col-md-2\">\n                <p id=\"x1\">x1</p>\n                <p class=\"forSmartPhone\">Buy ticket immediately at Zero Round to receive up to 650% your balance</p>\n            </div>\n            <div class=\"col-md-10 d-none d-md-block\">\n                <a routerLink=\"\" (click)=\"onClickScrollBuyTicket()\">\n                    <p id=\"buyTicketHeader\">{{textAnimation}}</p>\n                </a>\n            </div>\n        </div>\n\n        <!-- <div class=\"col-md-12 buyticket-row\">\n            <div class=\"col-md-2\">\n                <p id=\"x1\">x1</p>\n                <p class=\"forSmartPhone\">Buy ticket immediately at Zero Round to receive up to 650% your balance</p>\n            </div>\n            <div class=\"col-md-10\">\n                <a routerLink=\"\" (click)=\"onClickScrollBuyTicket()\">\n                    <p id=\"buyTicketHeader\">{{textAnimation}}</p>\n                </a>\n            </div>\n        </div> -->\n    </div>\n\n    <h1>\n        <a href=\"\" class=\"typewrite\" data-period=\"2000\" data-type='[ \"Hi, Im Si.\", \"I am Creative.\", \"I Love Design.\", \"I Love to Develop.\" ]'>\n            <span class=\"wrap\"></span>\n        </a>\n    </h1>\n    <!-- End buyticket -->\n    <h1 id=\"round1Mid\">Round {{currentRound==0?'Zero':'#'+currentRound}}</h1>\n    <div class=\"contentRoundMid row\">\n\n        <div class=\"col-lg-8 col-md-12\">\n            <div id=\"round1Left\">\n                <div class=\"clearfix round1Row brightness\">\n                    <div class=\"round-mid-left chest\" id=\"chest1\">\n                        <h1 id=\"megaChest\">Diamond Chest</h1>\n                    </div>\n                    <div class=\"round-mid-right\">\n                        <h1>{{totalEthRound*0.5 | ethDisplay}} ETH</h1>\n                        <p><img src=\"assets/images/ctn-conten-icon5.png\">{{totalEthRound*0.5*coverUSDT | usdDisplay}} USDT</p>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"clearfix round1Row brightness\">\n                    <div class=\"round-mid-left chest\" id=\"chest2\">\n                        <h1 id=\"grandChest\">Ruby Chest</h1>\n                    </div>\n                    <div class=\"round-mid-right\">\n                        <h1>{{totalEthRound*0.2 | ethDisplay}} ETH</h1>\n                        <p><img src=\"assets/images/ctn-conten-icon5.png\">{{totalEthRound*0.2*coverUSDT | usdDisplay}} USDT</p>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"clearfix round1Row brightness\">\n                    <div class=\"round-mid-left chest\" id=\"chest3\">\n                        <h1>Gold Chest</h1>\n                    </div>\n                    <div class=\"round-mid-right\">\n                        <h1>{{totalEthRound*0.05 | ethDisplay}} ETH</h1>\n                        <p><img src=\"assets/images/ctn-conten-icon5.png\">{{totalEthRound*0.05*coverUSDT | usdDisplay}} USDT</p>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"clearfix round1Row brightness\">\n                    <div class=\"round-mid-left chest\" id=\"chest4\">\n                        <h1>Silver Chest</h1>\n                    </div>\n                    <div class=\"round-mid-right\">\n                        <h1>{{totalEthRound*0.04 | ethDisplay}} ETH</h1>\n                        <p><img src=\"assets/images/ctn-conten-icon5.png\">{{totalEthRound*0.04*coverUSDT | usdDisplay}} USDT</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4 col-md-12\">\n            <div id=\"kingOfKey\" class=\"brightness\">\n                <h1>KING OF KEY</h1>\n                <ng-template #pop1Content>\n                    CONGRATULATIONS! You are the last ticket buyer and possess the key to open our Ruby Chest. All of the treasure will belong to you after the clock turns 00.\n                </ng-template>\n                <a class=\"questionIcon\" [style.top.px]=\"questionOver=='question1'?41:50\" [style.right.px]=\"questionOver=='question1'?-1:8\" routerLink=\"\" [ngbPopover]=\"pop1Content\" popoverClass=\"my-popover\" placement=\"left\" (click)=\"onMouseOver('question1')\"><img src=\"assets/images/{{questionOver=='question1'?'ctn-conten-icon9.png':'ctn-conten-icon7.png'}}\"></a>\n                <h2 title=\"{{lastBuy.address}}\">{{lastBuy.username}}</h2>\n                <p>{{lastBuy.value | ethDisplay}} ETH</p>\n            </div>\n\n\n            <ng-template #pop2Content>\n                When the time is running out:<br><br> - Bravo!!! You are the owner of Gold Chest with being the top spending ETH to buy tickets<br><br> - Congratulations!!! The Silver Chest will belong to you, If you are the person who has the most ETH\n                sales of F1s buying tickets (each F1 does not take more than 1 ETH to calculate).\n            </ng-template>\n            <div id=\"masterKey\" class=\"clearfix\">\n                <a class=\"questionIcon\" [style.top.px]=\"questionOver=='question2'?-1:8\" [style.right.px]=\"questionOver=='question2'?-1:8\" routerLink=\"\" [ngbPopover]=\"pop2Content\" (click)=\"onMouseOver('question2')\" placement=\"left\" popoverClass=\"my-popover\"><img src=\"assets/images/{{questionOver=='question2'?'ctn-conten-icon9.png':'ctn-conten-icon7.png'}}\"></a>\n                <div id=\"masterKeyHeader\">\n                    <ul class=\"nav nav-tabs card-header-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link item-part1 active show\" data-toggle=\"tab\" href=\"#masterKeyTab\" aria-selected=\"true\">Master Key</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link item-part2\" data-toggle=\"tab\" href=\"#f1KeyTab\" aria-selected=\"false\">Ultimate Ref</a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane p-3 active\" id=\"masterKeyTab\">\n                        <ul id=\"masterKeyList\" class=\"clearfix\">\n                            <div *ngFor=\"let masterKey of masterKeyList ; let i = index\">\n                                <hr *ngIf=\"i>1\">\n                                <li class=\"clearfix\" title=\"{{masterKey.address}}\" *ngIf=\"i!=0\">\n                                    <p class=\"keyName\"><span><img *ngIf=\"i==1\"  src=\"assets/images/ctn-conten-icon8.png\"> </span>{{masterKey.username}}</p>\n                                    <p class=\"keyValue\">{{masterKey.value | ethDisplay}} ETH</p>\n                                </li>\n                            </div>\n                        </ul>\n                    </div>\n                    <div class=\"tab-pane p-3\" id=\"f1KeyTab\">\n                        <ul id=\"masterKeyList\" class=\"clearfix\">\n                            <div *ngFor=\"let f1Key of f1KeyList; let i = index\">\n                                <hr *ngIf=\"i>1\">\n                                <li class=\"clearfix\" title=\"{{f1Key.address}}\" *ngIf=\"i!=0\">\n                                    <p class=\"keyName\"><span><img *ngIf=\"i==1\" src=\"assets/images/ctn-conten-icon8.png\"> </span>{{f1Key.username}}</p>\n                                    <p class=\"keyValue\">{{f1Key.value | ethDisplay}} ETH</p>\n                                </li>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- end contenrRoundMid -->\n    <div class=\"contentBottom row\">\n        <div class=\"col-md-12\">\n            <div class=\"container-fluid\">\n                <!-- Trigger the modal with a button -->\n                <button type=\"button\" class=\"btn btn-info btn-lg\" id=\"resultModal\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"onClickShowResult()\">Results</button>\n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n                    <div class=\"modal-dialog modal-lg\">\n\n                        <!-- Modal content-->\n                        <div class=\"modal-content\" *ngIf=\"resultView!=undefined\">\n                            <div class=\"modal-header\">\n                                <!-- <button type=\"button\" class=\"close\" data-dismiss=\"\"><img src=\"assets/images/ctn-conten-icon7.png\"></button> -->\n                                <h1 class=\"modal-title\">Result</h1>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"panel-group\" id=\"accordion\">\n                                    <div *ngFor=\"let result of resultView; let result_index = index\" class=\"panel panel-default\">\n                                        <div class=\"panel-heading\">\n                                            <h4 class=\"panel-title\">\n                                                <a (click)=\"(onClickShowHideRound(result_index))\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{result_index}}\">Round #{{result.round_id}}</a>\n                                            </h4>\n                                        </div>\n                                        <!-- <div id=\"collapse{{result_index}}\" class=\"panel-collapse collapse in {{result_index==0?'show':''}}\"> -->\n                                        <div class=\"panel-collapse collapse in {{resultViewIndex[result_index]?'show':''}}\">\n                                            <div class=\"panel-body\">\n                                                <ul class=\"levelList\">\n                                                    <li class=\"row\">\n                                                        <div class=\"col-md-5 col-5\">\n                                                            <p class=\"levelPlayer\">Members</p>\n                                                        </div>\n                                                        <div class=\"col-md-4 col-4\">\n                                                            <p class=\"levelVolume\">Prize Category</p>\n                                                        </div>\n                                                        <div class=\"col-md-3 col-3\">\n                                                            <p class=\"levelPayout\">Payout</p>\n                                                        </div>\n                                                    </li>\n                                                    <hr>\n                                                    <li class=\"row\" *ngFor=\"let winner of result.winnerInfo;let i = index\">\n                                                        <div class=\"col-md-5 col-5\">\n                                                            <p class=\"levelPlayer\" title=\"{{winner.address}}\"><span>{{i+1}}</span>{{winner.username}}</p>\n                                                        </div>\n                                                        <div class=\"col-md-4 col-4\">\n                                                            <p class=\"levelVolume\">{{winnerTagList[i]}}</p>\n                                                        </div>\n                                                        <div class=\"col-md-3 col-3\">\n                                                            <p class=\"levelPayout\">{{result.totalEth*winnerPercent[i]/100 | ethDisplay}} ETH</p>\n                                                        </div>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <a data-dismiss=\"modal\">Hide Results</a>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n            <div *ngIf=\"canDraw\" class=\"shadow-animate-pink\">\n                <a routerLink=\"\" *ngIf=\"clockNextRound_show==undefined\" (click)=\"onClickDrawNow()\">\n                    <h1>Draw Now</h1>\n                </a>\n                <a routerLink=\"\" *ngIf=\"clockNextRound_show!=undefined\" (click)=\"onClickClaim()\">\n                    <h1>Draw Now</h1>\n                </a>\n            </div>\n        </div>\n    </div>\n    <!-- end contentButtom -->\n    <div class=\"contentRoundBot row\">\n        <div class=\"col-md-6 col-xs-12\">\n            <div class=\"Round-bot-Left clearfix\">\n\n\n                <div id=\"roundBotLeftHeader\">\n                    <ul class=\"nav nav-tabs card-header-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#buyTicketTab\" aria-selected=\"true\">Buy Ticket</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#incomeTab\" aria-selected=\"false\">Income</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#referralTab\" aria-selected=\"false\">Referral</a>\n                        </li>\n                    </ul>\n                </div>\n                <ng-template #pop3Content>\n                    Swiftly buy one or more tickets to get a chance of receiving up to 500% from \"\"Instant Income\"\" and take an opportunity to win Four Treasure Chests.<br> - 30 seconds are added to the \"\"Green Watch\"\" when a ticket is purchased and no\n                    more than 24 hours.<br> - The Yellow Clock will start counting down, if the total prize of the chests in the current round is greater than the previous round. When either of those clocks runs out of time, Four Treasure Chests will\n                    open to the winners:<br> - Diamond Chest: Will be opened winners randomly selected (The first person receive 50% and equally 10% for each of the last 5 persion).<br> - Ruby Chest: Belong to the last ticket buyer before one of those\n                    clocks returns to 0.<br> - Gold Chest: Belong to the top ETH consumer for buying ticket when one of those clock return to 0.<br> - Silver Chest: Share to person with the largest total F1 sales when one of those clocks return to 0.<br>                    Whenever you buy a ticket, there always a chance for you. Join us and develop your own community, we offer you the smartest way to maximize your income.\n                </ng-template>\n                <div class=\"tab-content border-diagonal\">\n                    <div class=\"tab-pane p-3 active\" id=\"buyTicketTab\">\n                        <a class=\"questionIcon-part1\" [style.top.px]=\"questionOver=='question3'?1:10\" [style.right.px]=\"questionOver=='question3'?1:10\" routerLink=\"\" [ngbPopover]='pop3Content' popoverClass=\"my-popover\" (click)=\"onMouseOver('question3')\" placement=\"left\"><img src=\"assets/images/{{questionOver=='question3'?'ctn-conten-icon9.png':'ctn-conten-icon7.png'}}\"></a>\n                        <div id=\"roundBotLeftBody\">\n                            <h1>Buy Ticket</h1>\n                            <div class=\"roundBotLeftBodyTop\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon input-addon-part1\"><img src=\"assets/images/key-icon1.png\"></span>\n                                    <input type=\"number\" min=\"0\" name=\"keyBuy\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" [(ngModel)]=\"keyBuy\" (keyup)=\"validateKeyBuy($event)\">\n                                    <span class=\"input-group-addon input-addon-part2\"> {{ticketPrice*keyBuy/ethWei}} ETH</span>\n                                </div>\n                            </div>\n                            <div class=\"roundBotLeftBodyBottom\">\n                                <ul>\n                                    <li><a class=\"BodyBottom-part1\" routerLink=\"\" (click)=\"onAddMoreKey(1)\">+ 1</a></li>\n                                    <li><a routerLink=\"\" (click)=\"onAddMoreKey(2)\">+ 2</a></li>\n                                    <li><a routerLink=\"\" (click)=\"onAddMoreKey(5)\">+ 5</a></li>\n                                    <li><a routerLink=\"\" (click)=\"onAddMoreKey(50)\">+ 50</a></li>\n                                    <li><a class=\"BodyBottom-part2\" routerLink=\"\" (click)=\"onAddMoreKey(500)\">+ 500</a></li>\n                                </ul>\n                            </div>\n                            <div id=\"sendETHBackground\">\n                                <div *ngIf=\"!isLogin\">\n                                    <a *ngIf=\"clockNextRound_show==undefined&&!isLogin\" class=\"shadow-animate-orange\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#MyRegister\"><img src=\"assets/images/key-icon2.png\">Send ETH</a>\n                                    <a *ngIf=\"clockNextRound_show!=undefined&&!isLogin\" class=\"shadow-animate-orange\" routerLink=\"\"><img src=\"assets/images/key-icon2.png\">Send ETH</a>\n                                </div>\n                                <div *ngIf=\"isLogin\">\n                                    <a *ngIf=\"!canDraw&&clockNextRound_show==undefined\" class=\"shadow-animate-orange\" routerLink=\"\" (click)=\"onClickBuyTicket()\"><img src=\"assets/images/key-icon2.png\">Send ETH</a>\n\n                                    <a *ngIf=\"!canDraw&&clockNextRound_show!=undefined\" class=\"shadow-animate-orange\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#modalNextRound\"><img src=\"assets/images/key-icon2.png\">Send ETH</a>\n\n                                    <a *ngIf=\"canDraw\" routerLink=\"\" data-toggle=\"modal\" class=\"shadow-animate-orange\" data-target=\"#modalDraw\"><img src=\"assets/images/key-icon2.png\">Send ETH</a>\n                                </div>\n                                <!-- Modal -->\n                                <div class=\"modal fade\" id=\"modalNextRound\" role=\"dialog\">\n                                    <div class=\"modal-dialog modal-lg\">\n\n                                        <!-- Modal content-->\n                                        <div class=\"modal-content\" style=\"border: 1px solid #2ee2ba;\">\n                                            <div class=\"modal-header\">\n                                                <!-- <h1 class=\"modal-title\">Notification</h1> -->\n                                                <img src=\"assets/images/countdown.svg\" alt=\"\">\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div *ngIf=\"clockNextRound_show!=undefined\" id=\"roundBotRightHeader\">\n                                                    <p>Countdown To Round {{nextRound==0?'Zero':'#'+nextRound}}</p>\n                                                    <div class=\"clock\">\n                                                        <p class=\"clock1Span\"><img src=\"assets/images/ctn-rou-icon3.png\">{{clockNextRound_show}}</p>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                                <!-- modal -->\n                                <div class=\"modal fade\" id=\"modalDraw\" role=\"dialog\">\n                                    <div class=\"modal-dialog modal-lg\">\n\n                                        <!-- Modal content-->\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h1 class=\"modal-title\">Draw now</h1>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                            </div>\n                            <p></p>\n                            <a routerLink=\"\" (click)=\"onClickViewTicket()\" class=\"btn btn-info btn-lg\" data-toggle=\"collapse\" data-target=\"#viewticketspart1\">View Tickets</a>\n\n                            <div *ngIf=\"ticketView!=undefined && !ticketHide\" class=\"ctn-tickets collapse \" id=\"viewticketspart1\">\n                                <div class=\"panel panel-default\" *ngFor=\"let ticketByRound of ticketView; let i = index\">\n                                    <div class=\"panel-heading\">\n                                        <h4 class=\"panel-title\">\n                                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#tickets{{i}}\">Round #{{ticketByRound.round_id}}</a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"tickets{{i}}\" class=\"panel-collapse collapse in show\" *ngIf=\"ticketByRound.ticket!=undefined\">\n                                        <div class=\"panel-body ctn-colorbackgrour\">\n                                            <span *ngFor=\"let slot of ticketByRound.ticket | notUndefined\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"slot!=undefined\" style=\"color:#fff;\">{{slot.from}}{{slot.to!=slot.from?'-'+slot.to:''}}, </span></span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"ctn-tickets-btt\">\n                                    <a (click)=\"onClickHideTicket()\" data-toggle=\"collapse\" id=\"viewticketspart1\">Hide tickets</a>\n                                    <!-- <a data-dismiss=\"collapse\">Hide Tickets</a> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <ng-template #pop31Content>\n                        Instant Income: Buy ticket immediately and receive up to 500% of the investment from the following buyers in the current round and the next round. (You can withdraw ETH after the current round ENDS).<br> - 10 Levels Income: You\n                        can receive unlimited reward up to 10 levels via your referral link. The larger the system is, the higher your income will be.<br> - Chest Income: Earnings come from the reward of Four Treasure Chests.<br> - Dividend Income: Earnings\n                        come from the dividends every 2 weeks when you own a DAA token.<br> - Game Income: You will receive percentage from gaming volume of your system (Dice, Watch, Dual,...).<br> - Total Income: Your total ETH has been rewarded.<br>                        - Withdrawable Wallet: ETH amount that you can draw immediately from Smart Contract.\n                    </ng-template>\n                    <div class=\"tab-pane p-3\" id=\"incomeTab\">\n                        <a class=\"questionIcon-part1\" [style.top.px]=\"questionOver=='question3'?1:10\" [style.right.px]=\"questionOver=='question3'?1:10\" routerLink=\"\" [ngbPopover]='pop31Content' popoverClass=\"my-popover\" (click)=\"onMouseOver('question3')\"><img src=\"assets/images/{{questionOver=='question3'?'ctn-conten-icon9.png':'ctn-conten-icon7.png'}}\"></a>\n                        <h1>FomoGame Income</h1>\n                        <ul id=\"incomeList\">\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">Instant Income</p>\n                                <p class=\"incomeValue\">{{user.totalEarlyIncome | ethDisplay}} ETH</p>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">10 Levels Income</p>\n                                <p class=\"incomeValue\">{{user.ticketRefIncome | ethDisplay}} ETH</p>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">Chest Income</p>\n                                <p class=\"incomeValue\">{{user.citizenWinIncome | ethDisplay}} ETH</p>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">Dividend Income</p>\n                                <p class=\"incomeValue\">{{user.totalDividend | ethDisplay}} ETH</p>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">Game Income</p>\n                                <p class=\"incomeValue\">{{user.gameRefIncome | ethDisplay }} ETH</p>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">Total Income</p>\n                                <p class=\"incomeValue\">{{user.totalIncome | ethDisplay}} ETH</p>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <p class=\"incomeName\">Withdrawable Wallet</p>\n                                <p class=\"incomeValue\">{{(user.totalIncome-user.citizenWinIncome-user.ethBackup+user.ethDeposit)| ethDisplay}} ETH</p>\n                            </li>\n                        </ul>\n                        <a routerLink=\"\" class=\"withdraw shadow-animate-green\" (click)=\"onClickWithdraw()\">Withdraw</a>\n                    </div>\n                    <ng-template #pop32Content>\n                        You can share one of those referral links to your friends. Choose a link appropriate for your own security demand.\n                    </ng-template>\n                    <div class=\"tab-pane p-3\" id=\"referralTab\">\n                        <a class=\"questionIcon-part1\" [style.top.px]=\"questionOver=='question3'?1:10\" [style.right.px]=\"questionOver=='question3'?1:10\" routerLink=\"\" [ngbPopover]='pop32Content' popoverClass=\"my-popover\" placement=\"left\" (click)=\"onMouseOver('question3')\"><img src=\"assets/images/{{questionOver=='question3'?'ctn-conten-icon9.png':'ctn-conten-icon7.png'}}\"></a>\n                        <h1>Referral</h1>\n                        <ul id=\"referralList\" *ngIf=\"user!=undefined\">\n                            <li class=\"clearfix\">\n                                <div class=\"referralLeft\">\n                                    <p>Wallet Link</p>\n                                    <p class=\"d-none d-md-block\">https://fomobanking.io</p>\n                                    <p>/{{account | shortDisplay}}</p>\n                                </div>\n                                <div class=\"referralRight\">\n                                    <a routerLink=\"\" (click)=\"onClickCopy('https://fomobanking.io/'+account)\">Copy</a>\n                                </div>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <div class=\"referralLeft\">\n                                    <p>Anonymous Link</p>\n                                    <p class=\"d-none d-md-block\">https://fomobanking.io\n                                        <p>\n                                            <p>/{{user.id}}</p>\n                                </div>\n                                <div class=\"referralRight\">\n                                    <a routerLink=\"\" (click)=\"onClickCopy('https://fomobanking.io/'+user.id)\">Copy</a>\n                                </div>\n                            </li>\n                            <hr>\n                            <li class=\"clearfix\">\n                                <div class=\"referralLeft\">\n                                    <!-- <p>Vanity Referral</p> -->\n                                    <p>Public Link</p>\n                                    <p class=\"d-none d-md-block\">https://fomobanking.io</p>\n                                    <p>/{{user.username}}</p>\n                                </div>\n                                <div class=\"referralRight\">\n                                    <a routerLink=\"\" (click)=\"onClickCopy('https://fomobanking.io/'+user.username)\">Copy</a>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"col-md-6 col-xs-12\">\n            <div class=\"Round-bot-right\">\n                <div *ngIf=\"clockNextRound_show==undefined\" id=\"roundBotRightHeader\">\n                    <p>Current Round ends in:</p>\n                    <div class=\"clock\">\n                        <p *ngIf=\"clock1_show!='EXPIRED'&&clock1_show!=undefined\" class=\"clock1Span\"><img src=\"assets/images/ctn-rou-icon3.png\">{{clock1_show}}</p>\n                        <p *ngIf=\"clock2_show!='EXPIRED'&&clock2_show!=undefined\" class=\"clock2Span\"><img src=\"assets/images/ctn-rou-icon4.png\">{{clock2_show}}</p>\n                    </div>\n                </div>\n                <div *ngIf=\"clockNextRound_show!=undefined\" id=\"roundBotRightHeader\">\n                    <p>Next round starts in:</p>\n                    <div class=\"clock\">\n                        <p class=\"clock1Span\"><img src=\"assets/images/ctn-rou-icon3.png\">{{clockNextRound_show}}</p>\n                    </div>\n                </div>\n                <ng-template #pop4Content>\n                    Chest Volume: The total ETH is available in the current Four Treasure Chests.<br> - Your ticket: The total ticket you have purchased in the current round.<br> - Your ETH: The total ETH you have deposited\n                </ng-template>\n                <div id=\"roundBotRightbody\">\n                    <a class=\"Round-bot-questionIcon\" [style.top.px]=\"questionOver=='question4'?1:10\" [style.right.px]=\"questionOver=='question4'?1:10\" routerLink=\"\" [ngbPopover]='pop4Content' popoverClass=\"my-popover\" placement=\"left\" (click)=\"onMouseOver('question4')\"><img src=\"assets/images/{{questionOver=='question4'?'ctn-conten-icon9.png':'ctn-conten-icon7.png'}}\"></a>\n                    <ul class=\"clearfix\">\n                        <li class=\"clearfix\">\n                            <div class=\"Round-bot-right-row-left\">\n                                <p>Chest Volume</p>\n                            </div>\n                            <div class=\"Round-bot-right-row-right\">\n                                <h1>{{totalEthRound | ethDisplay}} ETH</h1>\n                                <p>Last Round: {{totalEthPreviousRound | ethDisplay}} ETH</p>\n                            </div>\n                        </li>\n                        <hr>\n                        <li class=\"clearfix\">\n                            <div class=\"Round-bot-right-row-left\">\n                                <p>Your Ticket(s)</p>\n                            </div>\n                            <div class=\"Round-bot-right-row-right\">\n                                <h1>{{user.currentRoundTicketSum | thousandDisplay}} <span><img src=\"assets/images/ctn-rou-icon1.png\"></span></h1>\n                                <p>Total Market: {{ticketSum | thousandDisplay}} Tickets</p>\n                            </div>\n                        </li>\n                        <hr>\n                        <li class=\"clearfix\">\n                            <div class=\"Round-bot-right-row-left\">\n                                <p>Your ETH</p>\n                            </div>\n                            <div class=\"Round-bot-right-row-right\">\n                                <h1>{{user.currentRoundTicketSpend | ethDisplay}} ETH</h1>\n                                <p>Total Market: {{totalEthRoundSpend | ethDisplay}} ETH</p>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- end contentRoundBot -->\n    <div class=\"contentLevel row\" *ngIf=\"isLogin\">\n        <div class=\"col-md-12\">\n            <div id=\"levelHeader\">\n                <ul class=\"nav nav-tabs card-header-tabs levelHeader-display-part1\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#team\" aria-selected=\"true\">Team</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#level1\" aria-selected=\"false\">Level 1</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#level2\" aria-selected=\"false\">Level 2</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#level3\" aria-selected=\"false\">Level 3</a>\n                    </li>\n                </ul>\n            </div>\n            <div id=\"levelBody\">\n                <!-- <img class=\"questionIcon\" src=\"assets/images/ctn-conten-icon7.png\"> -->\n\n                <div class=\"tab-content\">\n\n                    <div class=\"tab-pane p-3 ctntable-part active show\" id=\"team\">\n                        <div class=\"row text-center\">\n                            <p class=\"col-12 col-sm-6\">Member Count: <span style=\"padding-right: 30px\">{{user.totalChild | thousandDisplay}}</span></p>\n                            <p class=\"col-12 col-sm-6\"> Total Commision: <span>{{(user.ticketRefIncome+user.gameRefIncome) | ethDisplay}} ETH</span></p>\n                        </div>\n\n                    </div>\n                    <div *ngFor=\"let members of memberList; let i = index\" class=\"tab-pane p-3 ctntable-part\" id=\"level{{i+1}}\">\n                        <div class=\"row text-center\">\n                            <p class=\"col-12 col-sm-6\">Member Count: <span style=\"padding-right: 30px\">{{members.totalMember | thousandDisplay}}</span> </p>\n                            <p class=\"col-12 col-sm-6\">Total Commision: <span>{{members.totalPaytout | ethDisplay}} ETH</span></p>\n                        </div>\n                        <table class=\"table table-striped\">\n                            <tr>\n                                <th>Members</th>\n                                <th class=\"tabledisplayNone\">Volume</th>\n                                <th>Commision</th>\n                            </tr>\n                            <tr *ngFor=\"let member of members.memberDetail | slice: (members.page-1) * 10 : (members.page-1) * 10 + 10;let j=index\">\n                                <td title=\"{{member.address}}\"><span>{{(members.page-1) * 10+j+1}}</span>{{member.username}}</td>\n                                <td class=\"tableColor tabledisplayNone\">{{member.totalSpend | ethDisplay}} ETH</td>\n                                <td class=\"tableColor\">{{member.payFor | ethDisplay}} ETH</td>\n                            </tr>\n                        </table>\n                        <ngb-pagination [collectionSize]=\"members.totalMember\" [(page)]=\"members.page\" class=\"d-flex justify-content-end\"></ngb-pagination>\n                    </div>\n\n\n\n                </div>\n            </div>\n        </div>\n\n        <!-- end contentLevel -->\n    </div>\n    <div class=\"footer\">\n        <!-- <p>If you reside in a location where lottery, gambling, or betting over the internet is illegal, please do not click on anything related to these activities on this site.  You must be 21 years of age to click on any gambling related items even if it is legal to do so in your location.  Recognising that the laws and regulations involving online gaming are different everywhere, players are advised to check with the laws that exist within their own jurisdiction or region to ascertain the legality of the activities which are covered.\n\t</p>\n\t<p>\n\tThe games provided by FOMOBANKING are based on blockchain, fair, and transparency.  When you start playing these games, please take not that online gambling and lottery is an entertainment vehicle and that it carries with it a certain degree of financial risk.  Players should be aware of these risks and govern themselves accordingly.</p> -->\n        <!-- <div id=\"subscribe\">\n\t\t<input type=\"text\" name=\"email\" placeholder=\"Your email\">\n\t\t<input type=\"button\" name=\"subscribe\" value=\"Subscribe\">\n\t</div> -->\n        <p>© 2019 DABANKING. All Rights Reserved. </p>\n    </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _local_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-service.service */ "./src/app/local-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contract.service */ "./src/app/contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



// const web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ab7a60fe027c44b58052a0ff672e9aad'));
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ab7a60fe027c44b58052a0ff672e9aad'));







var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider);
var HomeComponent = /** @class */ (function () {
    function HomeComponent(localService, httpService, contractService, route, _route, toastr, spinner) {
        var _this = this;
        this.localService = localService;
        this.httpService = httpService;
        this.contractService = contractService;
        this.route = route;
        this._route = _route;
        this.toastr = toastr;
        this.spinner = spinner;
        this.user = {};
        this.register = { 'username': '', 'ref': '0x0000000000000000000000000000000000000000' };
        this.isLogin = false;
        this.isWaitingTime = false;
        this.isShowAtFirst = false;
        this.canDraw = false;
        this.masterKeyList = [];
        this.f1KeyList = [];
        this.lastBuy = {};
        this.keyBuy = 1;
        this.isBuying = false;
        this.resultViewIndex = [];
        this.ticketHide = false;
        this.memberList = [];
        this.winnerTagList = ["Jackpot", "King of Key", "Master Key", "Ultimate Ref", "Grand Prize No. 1", "Grand Prize No. 2", "Grand Prize No. 3", "Grand Prize No. 4", "Grand Prize No. 5", "Drawer No.1", "Drawer No.2", "Drawer No.3", "Drawer No.4", "Drawer No.5"];
        this.winnerPercent = [25, 20, 5, 4, 5, 5, 5, 5, 5, 0.6, 0.1, 0.1, 0.1, 0.1];
        this.ethWei = Math.pow(10, 18);
        this.dividendTab = {};
        this.burnTab = {};
        this.textAnimationList = [
            // "Buy Ticket now to receive up to 500% in your account",
            "Buy ticket immediately at Zero Round to receive up to 650% your balance",
            "Be the last buyer to become winner of our treasure",
            "Sharing the opportunity and earn smart money"
        ];
        this.loadAll = function () {
            if (_this.isWaitingTime && _this.isShowAtFirst == false) {
                $("#modalNextRound").modal('show');
                _this.isShowAtFirst = true;
            }
            if (_this.isLogin && _this.account) {
                _this.contractService.citizenContract.methods.citizen(_this.account).call().then(function (d) {
                    _this.user.username = web3.utils.hexToUtf8(d.username._hex);
                    _this.user.id = d.id.toNumber();
                    _this.user.ref = d.ref;
                    _this.user.ticketRefIncome = _this.toNumber(d.citizenTicketRevenue);
                    _this.user.gameRefIncome = _this.toNumber(d.citizenGameEthRevenue);
                    _this.user.ethBackup = _this.toNumber(d.citizenBalanceEthBackup);
                    _this.user.totalChild = d.totalChild.toNumber();
                });
                _this.contractService.citizenContract.methods.getTotalEarlyIncome(_this.account).call({ from: _this.account }).then(function (d) {
                    _this.user.totalEarlyIncome = _this.toNumber(d);
                });
                _this.contractService.citizenStorageContract.methods.citizenWinIncome(_this.account).call().then(function (d) {
                    _this.user.citizenWinIncome = _this.toNumber(d);
                });
                _this.contractService.fomContract.methods.citizen(_this.account).call().then(function (d) {
                    _this.user.tokenDeposit = _this.toTokenNumber(d.citizenBalanceToken);
                    _this.user.ethDeposit = _this.toNumber(d.citizenBalanceEth);
                });
                _this.contractService.citizenContract.methods.getTotalDividend(_this.account).call({ from: _this.account }).then(function (d) {
                    _this.user.totalDividend = _this.toNumber(d);
                });
                _this.contractService.citizenContract.methods.getTotalEth().call({ from: _this.account }).then(function (d) {
                    _this.user.totalIncome = _this.toNumber(d);
                });
                _this.contractService.ticketContract.methods.getEarlyIncomeView(_this.account, false);
                _this.contractService.ticketContract.methods.currentRound().call().then(function (d) {
                    _this.currentRound = d.toNumber();
                    _this.nextRound = d.toNumber();
                    if (_this.isWaitingTime && _this.currentRound != 0) {
                        _this.currentRound -= 1;
                    }
                }).then(function () {
                    _this.contractService.ticketContract.methods.round(_this.currentRound).call().then(function (data) {
                        var startTime = data.startRound.toNumber() * 1000;
                        var now = new Date().getTime();
                        if (startTime > now) {
                            _this.clockNextRound = _this.countdown(startTime, function (isDone, show) {
                                if (isDone) {
                                    clearInterval(_this.clockNextRound);
                                    location.reload();
                                }
                                _this.clockNextRound_show = show;
                            });
                            _this.isWaitingTime = true;
                            _this.loadAll();
                        }
                        else {
                            var endRound = data.endRound.toNumber() * 1000;
                            if (endRound > now) {
                                var date = new Date(data.endRoundByClock1.toNumber() * 1000);
                                _this.clock1 = _this.countdown(date, function (isDone, show) {
                                    if (isDone) {
                                        clearInterval(_this.clock1);
                                        location.reload();
                                    }
                                    _this.clock1_show = show;
                                });
                                if (data.endRoundByClock2.toNumber() == 0) {
                                    _this.clock2_show = "EXPIRED";
                                }
                                else {
                                    date = new Date(data.endRoundByClock2.toNumber() * 1000);
                                    _this.clock2 = _this.countdown(date, function (isDone, show) {
                                        if (isDone) {
                                            clearInterval(_this.clock2);
                                            location.reload();
                                        }
                                        _this.clock2_show = show;
                                    });
                                } // End clock 2;
                            }
                            // can draw and claim
                            if (endRound < now && data.numberClaimed < 5) {
                                _this.canDraw = true;
                            }
                            // Price chest
                            _this.totalEthRound = _this.toNumber(data.totalEth);
                            _this.totalEthRoundSpend = _this.toNumber(data.totalEthRoundSpend);
                            _this.ticketSum = data.ticketSum.toNumber();
                            _this.contractService.ticketContract.methods.getEarlyIncomeMark(data.ticketSum.toNumber()).call().then(function (d) {
                                _this.winningMultiplier = d.toNumber();
                            });
                        }
                    });
                    var previousRound = _this.currentRound - 1;
                    if (previousRound >= 0) {
                        _this.contractService.ticketContract.methods.round(previousRound).call().then(function (data) {
                            _this.totalEthPreviousRound = _this.toNumber(data.totalEth);
                        });
                    }
                    else {
                        _this.totalEthPreviousRound = 0;
                    }
                    _this.contractService.ticketContract.methods.getMostSpender().call().then(function (data) {
                        _this.masterKeyList = [];
                        data.map(function (c, i) {
                            _this.masterKeyList[i] = {};
                            _this.masterKeyList[i]['address'] = c;
                            _this.contractService.ticketContract.methods.getCitizenTicketSpend(_this.currentRound, c).call().then(function (d) {
                                _this.masterKeyList[i]['value'] = _this.toNumber(d);
                            });
                            _this.contractService.citizenContract.methods.citizen(c).call().then(function (d) {
                                _this.masterKeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
                            });
                        });
                    });
                    _this.contractService.ticketContract.methods.getMostF1Earnerd().call().then(function (data) {
                        _this.f1KeyList = [];
                        data.map(function (c, i) {
                            _this.f1KeyList[i] = {};
                            _this.f1KeyList[i]['address'] = c;
                            _this.contractService.ticketContract.methods.getRefF1Sum(_this.currentRound, c).call().then(function (d) {
                                _this.f1KeyList[i]['value'] = _this.toNumber(d);
                            });
                            _this.contractService.citizenContract.methods.citizen(c).call().then(function (d) {
                                _this.f1KeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
                            });
                        });
                    });
                    _this.contractService.ticketContract.methods.getLastBuy(_this.currentRound).call().then(function (data) {
                        _this.lastBuy.address = data;
                        _this.contractService.ticketContract.methods.getCitizenTicketSpend(_this.currentRound, data).call().then(function (d) { return _this.lastBuy.value = _this.toNumber(d); });
                        _this.contractService.citizenContract.methods.citizen(data).call().then(function (d) { return _this.lastBuy.username = web3.utils.hexToUtf8(d.username._hex); });
                    }); // end last buy
                    if (_this.account) {
                        _this.contractService.ticketContract.methods.getCitizenTicketSpend(_this.currentRound, _this.account).call().then(function (d) { return _this.user.currentRoundTicketSpend = _this.toNumber(d); });
                        _this.contractService.ticketContract.methods.getCititzenTicketSum(_this.currentRound).call({ from: _this.account }).then(function (d) { return _this.user.currentRoundTicketSum = d.toNumber(); });
                    }
                }); //end current round
                var _loop_1 = function (i) {
                    _this.memberList[i] = {};
                    _this.contractService.citizenContract.methods.getMemberByLevelToTal(i + 1).call({ from: _this.account }).then(function (d) {
                        _this.memberList[i].memberDetail = [];
                        _this.memberList[i].page = 1;
                        _this.memberList[i].totalMember = d[0].toNumber();
                        _this.memberList[i].totalPaytout = _this.toNumber(d[1]);
                        var _loop_2 = function (j) {
                            _this.memberList[i].memberDetail[j] = {};
                            _this.contractService.citizenContract.methods.getMemberByLevel(i + 1, _this.account, j).call().then(function (x) {
                                _this.memberList[i].memberDetail[j].address = x;
                                _this.contractService.citizenContract.methods.getUsername(x).call().then(function (d) {
                                    _this.memberList[i].memberDetail[j].username = web3.utils.hexToUtf8(d._hex);
                                });
                                _this.contractService.citizenContract.methods.citizenPayForRef(x, _this.account).call().then(function (c) {
                                    _this.memberList[i].memberDetail[j].payFor = _this.toNumber(c);
                                });
                                _this.contractService.citizenContract.methods.getTotalSpend(x).call().then(function (c) {
                                    _this.memberList[i].memberDetail[j].totalSpend = _this.toNumber(c);
                                });
                            });
                        };
                        for (var j = 0; j <= _this.memberList[i].totalMember - 1; j++) {
                            _loop_2(j);
                        }
                    });
                };
                // Level i {1,2,3}
                // Team
                for (var i = 0; i < 3; i++) {
                    _loop_1(i);
                }
                // for(let i = 0;i<3;i++){
                //   this.memberList[i]={};
                //   this.memberList[i].memberDetail = [];
                //   this.memberList[i].page = 1;
                //   this.memberList[i].totalMember = Math.floor(Math.random()*100);
                //   this.memberList[i].totalPaytout = Math.random();
                //     for(let j=0; j<=this.memberList[i].totalMember-1; j++){
                //       this.memberList[i].memberDetail[j] = {};
                //       this.memberList[i].memberDetail[j].address = Math.random();
                //       this.memberList[i].memberDetail[j].username = Math.random();
                //       this.memberList[i].memberDetail[j].payFor=Math.random();
                //       this.memberList[i].memberDetail[j].totalSpend = Math.random();
                //     }
                // }
            }
            else {
                _this.contractService.ticketContract.methods.currentRound().call().then(function (d) {
                    _this.currentRound = d.toNumber();
                    _this.nextRound = d.toNumber();
                    if (_this.isWaitingTime && _this.currentRound != 0) {
                        _this.currentRound -= 1;
                    }
                }).then(function () {
                    _this.contractService.ticketContract.methods.round(_this.currentRound).call().then(function (data) {
                        var startTime = data.startRound.toNumber() * 1000;
                        var now = new Date().getTime();
                        if (startTime > now && _this.isWaitingTime == false) {
                            _this.clockNextRound = _this.countdown(startTime, function (isDone, show) {
                                if (isDone) {
                                    clearInterval(_this.clockNextRound);
                                    location.reload();
                                }
                                _this.clockNextRound_show = show;
                            });
                            _this.isWaitingTime = true;
                            _this.loadAll();
                        }
                        else {
                            var endRound = data.endRound.toNumber() * 1000;
                            if (endRound > now) {
                                var date = new Date(data.endRoundByClock1.toNumber() * 1000);
                                _this.clock1 = _this.countdown(date, function (isDone, show) {
                                    if (isDone) {
                                        clearInterval(_this.clock1);
                                        location.reload();
                                    }
                                    _this.clock1_show = show;
                                });
                                if (data.endRoundByClock2.toNumber() == 0) {
                                    _this.clock2_show = "EXPIRED";
                                }
                                else {
                                    date = new Date(data.endRoundByClock2.toNumber() * 1000);
                                    _this.clock2 = _this.countdown(date, function (isDone, show) {
                                        if (isDone) {
                                            clearInterval(_this.clock2);
                                            location.reload();
                                        }
                                        _this.clock2_show = show;
                                    });
                                } // End clock 2;
                            }
                            // can draw and claim
                            // Price chest
                            _this.totalEthRound = _this.toNumber(data.totalEth);
                            _this.totalEthRoundSpend = _this.toNumber(data.totalEthRoundSpend);
                            _this.ticketSum = data.ticketSum.toNumber();
                            _this.contractService.ticketContract.methods.getEarlyIncomeMark(data.ticketSum.toNumber()).call().then(function (d) {
                                _this.winningMultiplier = d.toNumber();
                            });
                        }
                    });
                    var previousRound = _this.currentRound - 1;
                    if (previousRound >= 0) {
                        _this.contractService.ticketContract.methods.round(previousRound).call().then(function (data) {
                            _this.totalEthPreviousRound = _this.toNumber(data.totalEth);
                        });
                    }
                    else {
                        _this.totalEthPreviousRound = 0;
                    }
                    _this.contractService.ticketContract.methods.getMostSpender().call().then(function (data) {
                        _this.masterKeyList = [];
                        data.map(function (c, i) {
                            _this.masterKeyList[i] = {};
                            _this.masterKeyList[i]['address'] = c;
                            _this.contractService.ticketContract.methods.getCitizenTicketSpend(_this.currentRound, c).call().then(function (d) {
                                _this.masterKeyList[i]['value'] = _this.toNumber(d);
                            });
                            _this.contractService.citizenContract.methods.citizen(c).call().then(function (d) {
                                _this.masterKeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
                            });
                        });
                    });
                    _this.contractService.ticketContract.methods.getMostF1Earnerd().call().then(function (data) {
                        _this.f1KeyList = [];
                        data.map(function (c, i) {
                            _this.f1KeyList[i] = {};
                            _this.f1KeyList[i]['address'] = c;
                            _this.contractService.ticketContract.methods.getRefF1Sum(_this.currentRound, c).call().then(function (d) {
                                _this.f1KeyList[i]['value'] = _this.toNumber(d);
                            });
                            _this.contractService.citizenContract.methods.citizen(c).call().then(function (d) {
                                _this.f1KeyList[i]['username'] = web3.utils.hexToUtf8(d.username._hex);
                            });
                        });
                    });
                    _this.contractService.ticketContract.methods.getLastBuy(_this.currentRound).call().then(function (data) {
                        _this.lastBuy.address = data;
                        _this.contractService.ticketContract.methods.getCitizenTicketSpend(_this.currentRound, data).call().then(function (d) { return _this.lastBuy.value = _this.toNumber(d); });
                        _this.contractService.citizenContract.methods.citizen(data).call().then(function (d) { return _this.lastBuy.username = web3.utils.hexToUtf8(d.username._hex); });
                    }); // end last buy
                    if (_this.account) {
                        _this.contractService.ticketContract.methods.getCitizenTicketSpend(_this.currentRound, _this.account).call().then(function (d) { return _this.user.currentRoundTicketSpend = _this.toNumber(d); });
                        _this.contractService.ticketContract.methods.getCititzenTicketSum(_this.currentRound).call({ from: _this.account }).then(function (d) { return _this.user.currentRoundTicketSum = d.toNumber(); });
                    }
                }); //end current round
            }
            _this.ticketPriceInterval = setInterval(function () {
                _this.contractService.ticketContract.methods.getTicketPrice().call().then(function (d) {
                    _this.ticketPrice = d.toNumber();
                });
            }, 1000);
            _this.contractService.ticketContract.methods.totalEthSpendTicket().call().then(function (d) {
                _this.totalEthAllRound = _this.toNumber(d);
            });
            _this.contractService.ticketContract.methods.ticketSum().call().then(function (d) {
                _this.ticketSumAllRound = d.toNumber();
            });
        };
        this.uppercaseUsername = function () {
            _this.register.username = _this.register.username.toUpperCase();
        };
        this.onClickViewTicket = function () {
            if (_this.isLogin && _this.currentRound != undefined) {
                _this.ticketHide = false;
                _this.ticketView = [];
                var last_round = _this.currentRound - 1;
                if (last_round < 0)
                    last_round = 0;
                var _loop_3 = function (i) {
                    var round = {};
                    round.round_id = i;
                    _this.contractService.ticketContract.methods.getCitizenSumSlot(i).call({ from: _this.account }).then(function (slotLength) {
                        round.ticket = [];
                        var _loop_4 = function (j) {
                            _this.contractService.ticketContract.methods.getCitizenSlotId(i, j).call({ from: _this.account }).then(function (slotId) {
                                _this.contractService.ticketContract.methods.getCitizenSlot(i, slotId).call().then(function (slot) {
                                    var temp = {};
                                    temp.address = slot[0];
                                    temp.from = slot[1].toNumber();
                                    temp.to = slot[2].toNumber();
                                    round.ticket[j] = temp;
                                });
                            });
                        };
                        for (var j = 0; j < slotLength; j++) {
                            _loop_4(j);
                        }
                        _this.ticketView.push(round);
                    });
                };
                for (var i = _this.currentRound; i >= last_round; i--) {
                    _loop_3(i);
                }
            }
        };
        // Results
        this.onClickShowResult = function () {
            _this.resultView = [];
            var last_round = _this.currentRound - 1;
            if (last_round < 0)
                last_round = 0;
            var main_index = 0;
            var _loop_5 = function (i) {
                var round = {};
                round.round_id = i;
                _this.contractService.ticketContract.methods.getResultWinner(i).call().then(function (data) {
                    round.winnerInfo = [];
                    if (data != null) {
                        data.map(function (s, index) {
                            _this.contractService.citizenContract.methods.getUsername(s).call().then(function (d) {
                                var temp = {};
                                temp.address = s;
                                temp.username = web3.utils.hexToUtf8(d._hex);
                                if (index < 3)
                                    round.winnerInfo[index + 1] = temp;
                                if (index == 3)
                                    round.winnerInfo[0] = temp;
                                if (index > 3)
                                    round.winnerInfo[index] = temp;
                            });
                        });
                    }
                    _this.contractService.ticketContract.methods.round(i).call().then(function (d) {
                        round.totalEth = _this.toNumber(d.totalEth);
                        _this.resultViewIndex[main_index] = false;
                        _this.resultView[main_index] = round;
                        main_index++;
                    });
                });
            };
            for (var i = _this.currentRound; i >= last_round; i--) {
                _loop_5(i);
            }
        };
        this.onClickDrawNow = function () {
            console.warn("drawing...");
            _this.isBuying = true;
            //this.spinner.show();
            _this.contractService.ticketContract.methods.drawWinner().send({ from: _this.account })
                .once('transactionHash', function (hash) {
                if (_this.isBuying == true) {
                    //this.spinner.hide();
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    //this.spinner.hide();
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('error', function (error) {
                //this.spinner.hide();
                console.log('error', error);
            })
                .then(function (receipt) {
            });
        };
        this.onClickClaim = function () {
            console.warn("claiming...");
            _this.isBuying = true;
            _this.contractService.ticketContract.methods.claim().send({ from: _this.account })
                .once('transactionHash', function (hash) {
                if (_this.isBuying == true) {
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('error', function (error) { console.log('error', error); })
                .then(function (receipt) {
            });
        };
        this.onClickScrollBuyTicket = function () {
            $('body,html').animate({ scrollTop: $('#resultModal').offset().top }, 1000);
            return false;
        };
        this.onClickBuyTicket = function () {
            _this.isBuying = true;
            _this.contractService.ticketContract.methods.buyTicket(_this.keyBuy).send({ from: _this.account, value: _this.keyBuy * _this.ticketPrice }).once('transactionHash', function (hash) {
                // console.log('transactionHash',hash);
            })
                .once('receipt', function (receipt) {
                console.log('receipt', receipt);
            })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                }
            })
                .on('error', function (error) {
                _this.toastr.error("Successfully cancel transaction", 'Smart contract');
                _this.isBuying = false;
            })
                .then(function (receipt) {
            });
        };
        this.onClickWithdraw = function () {
            _this.isBuying = true;
            _this.contractService.citizenContract.methods.withdrawEth().send({ from: _this.account })
                .on('confirmation', function (confNumber, receipt) {
                if (_this.isBuying == true) {
                    _this.isBuying = false;
                    _this.httpService.chatSocket.send(JSON.stringify({
                        'message': 1
                    }));
                }
            })
                .on('error', function (error) { console.log('error', error); })
                .then(function (receipt) {
            });
        };
        this.onClickCopy = function (val) {
            var selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = val;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            _this.toastr.success('Copy link to clipboard', 'System');
        };
        this.validateKeyBuy = function (event) {
            var regular = /^[0-9]*$/;
            if (!regular.test(event.target.value[0])) {
                _this.keyBuy = 0;
            }
        };
        this.onAddMoreKey = function (val) {
            _this.keyBuy += val;
        };
        // utils
        this.countdown = function (countDownDate, done) {
            function checkTime(i) {
                return (i < 10) ? "0" + i : i;
            }
            return setInterval(function () {
                // Get todays date and time
                var now = new Date().getTime();
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                hours = checkTime(hours);
                minutes = checkTime(minutes);
                seconds = checkTime(seconds);
                // Display the result in the element with id="demo"
                var y = hours + ":" + minutes + ":" + seconds;
                if (days > 0) {
                    if (days == 1) {
                        y = days + " Day " + y;
                    }
                    else {
                        y = days + " Days " + y;
                    }
                }
                // If the count down is finished, write some text
                if (distance < 0) {
                    y = "EXPIRED";
                    done(true, y);
                }
                else {
                    done(false, y);
                }
            }, 1000);
        };
        this.toNumber = function (val) {
            // div 10^18
            return val / 0xDE0B6B3A7640000;
        };
        this.toTokenNumber = function (val) {
            // div 10^10
            return val / 0x2540BE400;
        };
        this.onMouseOver = function (data) {
            _this.questionOver = data;
        };
        this.routeSub = this.route.params.subscribe(function (params) {
            console.log(params['ref']);
            if (params['ref'] != undefined) {
                if (isNaN(params['ref'][0])) {
                    _this.contractService.citizenContract.methods.getAddressByUserName(params['ref']).call().then(function (data) {
                        _this.register.ref = data;
                        localStorage.setItem('ref', _this.register.ref);
                    }).then(function () {
                        if (_this.register.ref == '0x0000000000000000000000000000000000000000') {
                            _this._route.navigate(['/']);
                        }
                    });
                }
                else {
                    if (params['ref'].length == 42 && isNaN(params['ref'][1])) {
                        _this.register.ref = params['ref'];
                        localStorage.setItem('ref', _this.register.ref);
                    }
                    else {
                        if (!isNaN(params['ref'])) {
                            _this.contractService.citizenContract.methods.getAddressById(params['ref']).call().then(function (data) {
                                _this.register.ref = data;
                                localStorage.setItem('ref', _this.register.ref);
                            }).then(function () {
                                if (_this.register.ref == '0x0000000000000000000000000000000000000000') {
                                    _this._route.navigate(['/']);
                                }
                            });
                        }
                    }
                }
            }
            localStorage.setItem('ref', _this.register.ref);
        });
        var temp = 0;
        setTimeout(function () {
            setInterval(function () {
                _this.textAnimation = _this.textAnimationList[temp];
                temp++;
                temp = temp % 3;
            }, 8500);
        }, 500);
        this.httpService.chatSocket.onmessage = function (e) {
            var data = JSON.parse(e.data);
            if (data.message == 1) {
                clearInterval(_this.clock1);
                clearInterval(_this.clock2);
                _this.loadAll();
            }
            if (data.message == 2) {
                _this.toastr.success('Some one has bought ticket', 'System');
            }
        };
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        __webpack_require__(/*! ../../assets/styles/bootstrap.min.js */ "./src/assets/styles/bootstrap.min.js");
        setTimeout(function () {
            if (_this.register.ref != '0x0000000000000000000000000000000000000000' && (_this.isLogin == false || _this.isLogin == undefined)) {
                $("#MyRegister").modal({
                    backdrop: "static",
                    keyboard: false
                });
            }
        }, 4000);
    };
    HomeComponent.prototype.onClickHideTicket = function () {
        this.ticketHide = true;
    };
    HomeComponent.prototype.onClickShowHideRound = function (val) {
        if (this.resultViewIndex[val]) {
            this.resultViewIndex[val] = false;
        }
        else {
            this.resultViewIndex[val] = true;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoginSubscriber = this.localService.currentLogin.subscribe(function (data) {
            _this.isLogin = data;
            _this.loadAll();
        });
        this.accountSubscriber = this.localService.currentAccount.subscribe(function (data) {
            _this.account = data;
            _this.loadAll();
        });
        this.httpService.convertRate().subscribe(function (data) {
            _this.coverUSDT = data[0].price_usd;
        });
        setInterval(function () {
            _this.httpService.convertRate().subscribe(function (data) {
                _this.coverUSDT = data[0].price_usd;
            });
        }, 60000);
        $(window).on('click.Bst', function (event) {
            if ($('.questionIcon-part1').has(event.target).length == 0 && !$('.questionIcon-part1').is(event.target) &&
                $('.questionIcon').has(event.target).length == 0 && !$('.questionIcon').is(event.target) &&
                $('.Round-bot-questionIcon').has(event.target).length == 0 && !$('.Round-bot-questionIcon').is(event.target)) {
                _this.questionOver = '';
            }
        });
        var now = Date.now();
        this.buyTicketEvent = this.contractService.ticketContract.events.BuyATicket({
            fromBlock: 0
        }, function (error, event) {
            console.log(event.returnValues);
            var eventDate = event.returnValues.creationDate.toNumber() * 1000;
            if (eventDate > now) {
                _this.contractService.citizenContract.methods.getUsername(event.returnValues.buyer).call().then(function (d) {
                    _this.toastr.success(web3.utils.hexToUtf8(d._hex) + ' bought ' + event.returnValues.ticketFrom.toNumber() + '-' + event.returnValues.ticketTo.toNumber(), 'System');
                    _this.loadAll();
                });
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_service_service__WEBPACK_IMPORTED_MODULE_3__["LocalServiceService"],
            _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
var privateKeyDev = 'F0M0BankingToTheMOON8?@B##o!fV}5R8G871623JHGJ&6'; // MUST be put in .env variable
var privateKeyProd = 'F0M0BankingToTheMOON@@@(*&*&^756765769879876&%^*(&'; // MUST be put in .env variable
var privateKey = privateKeyDev;
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        var _this = this;
        this.http = http;
        this.host = window.location.hostname;
        this.roomName = "dabanking";
        this.convertRate = function () {
            return _this.http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD');
        };
        this.randomName = function () {
            return _this.http.get('https://randomuser.me/api/?nat=us');
        };
        this.genSignature = function () {
            var timeStamp = new Date().getTime();
            var input = timeStamp + "F0M0Banking" + timeStamp;
            var signature = crypto.createHmac('sha256', privateKey).update(input).digest('hex');
            return {
                signature: signature,
                timeStamp: timeStamp
            };
        };
        this.getFAQ = function () {
            var data = _this.genSignature();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.set('timeStamp', data.timeStamp).append('signature', data.signature);
            return _this.http.get('http://18.136.205.85:3001/faq?target=fomoGame', { headers: headers });
        };
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            this.host = "localhost:8000";
        }
        var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
        this.chatSocket = new WebSocket(ws_scheme + '://' + this.host +
            '/ws/chat/' + this.roomName + '/');
        // var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
        // this.chatSocket = new WebSocket(
        //     'wss://' + 'dabanking.io' +
        //     '/ws/chat/' + this.roomName + '/');
        // this.chatSocket.onmessage = function(e) {
        //     var data = JSON.parse(e.data);
        //     console.log(data);
        // };
        this.chatSocket.onclose = function (e) {
            console.error('Chat socket closed unexpectedly');
        };
    }
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/local-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/local-service.service.ts ***!
  \******************************************/
/*! exports provided: LocalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalServiceService", function() { return LocalServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LocalServiceService = /** @class */ (function () {
    function LocalServiceService() {
        this.loginSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.import);
        this.currentLogin = this.loginSource.asObservable();
        this.accountSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.import);
        this.currentAccount = this.accountSource.asObservable();
    }
    LocalServiceService.prototype.changeLoginStatus = function (message) {
        this.loginSource.next(message);
    };
    LocalServiceService.prototype.changeAccount = function (message) {
        this.accountSource.next(message);
    };
    LocalServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalServiceService);
    return LocalServiceService;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.ts":
/*!********************************!*\
  !*** ./src/app/pipes/pipes.ts ***!
  \********************************/
/*! exports provided: ShortDisplayPipe, ThousandPipe, EthDisplayPipe, UsdDisplayPipe, ReversePipe, NotUndefinedPipe, AtPagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortDisplayPipe", function() { return ShortDisplayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThousandPipe", function() { return ThousandPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthDisplayPipe", function() { return EthDisplayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsdDisplayPipe", function() { return UsdDisplayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotUndefinedPipe", function() { return NotUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtPagePipe", function() { return AtPagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);



var web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider);
var ethWei = Math.pow(10, 18);
var ShortDisplayPipe = /** @class */ (function () {
    function ShortDisplayPipe() {
    }
    ShortDisplayPipe.prototype.transform = function (value, args) {
        if (value == undefined) {
            return "";
        }
        var temp = value.slice(0, 5) + '...' + value.slice(-3);
        return temp;
    };
    ShortDisplayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'shortDisplay' })
    ], ShortDisplayPipe);
    return ShortDisplayPipe;
}());

var ThousandPipe = /** @class */ (function () {
    function ThousandPipe() {
    }
    ThousandPipe.prototype.transform = function (value, args) {
        if (value == undefined) {
            return "";
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    ThousandPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'thousandDisplay' })
    ], ThousandPipe);
    return ThousandPipe;
}());

var EthDisplayPipe = /** @class */ (function () {
    function EthDisplayPipe() {
    }
    EthDisplayPipe.prototype.transform = function (value, args) {
        if (value == undefined) {
            value = 0;
        }
        if (args != undefined) {
            return value.toFixed(args);
        }
        return value.toFixed(3);
    };
    EthDisplayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ethDisplay' })
    ], EthDisplayPipe);
    return EthDisplayPipe;
}());

var UsdDisplayPipe = /** @class */ (function () {
    function UsdDisplayPipe() {
    }
    UsdDisplayPipe.prototype.transform = function (value, args) {
        if (value == undefined) {
            value = 0;
        }
        value = value.toFixed(2);
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    UsdDisplayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'usdDisplay' })
    ], UsdDisplayPipe);
    return UsdDisplayPipe;
}());

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        return value.reverse();
    };
    ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'reverse' })
    ], ReversePipe);
    return ReversePipe;
}());

var NotUndefinedPipe = /** @class */ (function () {
    function NotUndefinedPipe() {
    }
    NotUndefinedPipe.prototype.transform = function (value) {
        // value = value.filter(s=>s.from!=undefined)
        return value;
    };
    NotUndefinedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'notUndefined' })
    ], NotUndefinedPipe);
    return NotUndefinedPipe;
}());

var AtPagePipe = /** @class */ (function () {
    function AtPagePipe() {
    }
    AtPagePipe.prototype.transform = function (value, page) {
        var ret = value.slice((page - 1) * 10, page * 10);
        console.log(ret);
        // value = value.filter(s=>s.from!=undefined)
        return ret;
    };
    AtPagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'atPage' })
    ], AtPagePipe);
    return AtPagePipe;
}());

// @Pipe({ name: 'usernameDisplay',pure:false})
// export class UsernameDisplayPipe implements PipeTransform {
//   cacheData:any = null;
//   constructor (private contractService:ContractService){}
//    transform(value) {
//     if (value != undefined){
//       if (value !="0x0000000000000000000000000000000000000000"){
//         this.contractService.citizenContract.methods.getUsername(value).call().then((d)=>{
//           let str = web3.utils.hexToUtf8(d._hex);
//           this.cacheData =  str;
//           console.log(this.cacheData);
//         })
//       } else {
//         let temp = value.slice(0,5)+'...'+value.slice(-3);
//           this.cacheData =  temp;
//       }
//     }
//     return this.cacheData;
//   }
// }


/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentLeft ul li {\n\tline-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudExlZnQgdWwgbGkge1xuXHRsaW5lLWhlaWdodDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentLeft clearfix\">\n\t<p class=\"titleCenter\">Members Ranking</p>\n\t<div class=\"clearfix\">\n\t\t<p id=\"playerTitle\">Members</p>\n\t\t<p id=\"payOutTitle\">Total Volume</p>\n\t</div>\n\t<hr id=\"underTitle\">\n\t<ul class=\"clearfix\" id=\"playerRanking\">\n\t\t<li *ngFor=\"let citizen of topRank;let i = index;\">\n\t\t\t<!-- <span *ngIf=\"citizen.address!='0x0000000000000000000000000000000000000000'\"> -->\n\t\t\t\t<p class=\"playerName playerNameOne\" title=\"{{citizen.address}}\">\n\t\t\t\t<span *ngIf=\"i<=2\">\n\t\t\t\t\t<img *ngIf=\"i==0\" src=\"assets/images/golden_crown.png\">\n\t\t\t\t\t<img *ngIf=\"i==1\" src=\"assets/images/silver_crown.png\">\n\t\t\t\t\t<img *ngIf=\"i==2\" src=\"assets/images/bronze_crown.png\">\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf=\"i>2\">\n\t\t\t\t\t{{i+1}}\n\t\t\t\t</span>\n\t\t\t\t{{citizen.username!=''?citizen.username:'0x0'}}</p>\n\t\t\t<p class=\"payOutValue\">{{citizen.totalSpend | ethDisplay}} ETH</p>\n\t\t\t<!-- </span> -->\n\t\t\t\n\t\t</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contract.service */ "./src/app/contract.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);




var web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(web3__WEBPACK_IMPORTED_MODULE_3___default.a.givenProvider);
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(contractService) {
        var _this = this;
        this.contractService = contractService;
        this.topRank = [];
        this.toNumber = function (val) {
            // div 10^18
            return val / 0xDE0B6B3A7640000;
        };
        var _loop_1 = function (i) {
            this_1.topRank[i] = {};
            this_1.contractService.citizenContract.methods.mostTotalSpender(i + 1).call().then(function (d) {
                _this.topRank[i].address = d;
                _this.contractService.citizenContract.methods.getUsername(d).call().then(function (d) {
                    _this.topRank[i].username = web3.utils.hexToUtf8(d._hex);
                });
                _this.contractService.citizenContract.methods.getTotalSpend(d).call().then(function (c) {
                    _this.topRank[i].totalSpend = _this.toNumber(c);
                });
            });
        };
        var this_1 = this;
        for (var i = 0; i < 20; i++) {
            _loop_1(i);
        }
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/site-layout/site-layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/site-layout/site-layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUtbGF5b3V0L3NpdGUtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/site-layout/site-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/site-layout/site-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"wrapper myWrapper\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-md-12 navbar-collapse parentContentLeft\" id=\"navbarSupportedmenuleft\">\n\t\t\t\t<app-side-bar></app-side-bar>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-9 col-md-12 parentWith\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/site-layout/site-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/site-layout/site-layout.component.ts ***!
  \******************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/app/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.css */ "./src/app/site-layout/site-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/assets/styles/bootstrap.min.js":
/*!********************************************!*\
  !*** ./src/assets/styles/bootstrap.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){ true?e(exports,__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"),__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")):undefined}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map

/***/ }),

/***/ "./src/assets/styles/lightbutton.js":
/*!******************************************!*\
  !*** ./src/assets/styles/lightbutton.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function() {
	//light button
	$("#sendETHBackground > a").hover(function() {
		$(this).removeClass("shadow-animate-orange");
	}, function() {
		$(this).addClass("shadow-animate-orange");
	});
	$("#roundBotLeftBody > a").hover(function() {
		$(this).removeClass("shadow-animate-green");
	}, function() {
		$(this).addClass("shadow-animate-green");
	});
	$("#resultModal").hover(function() {
		$(this).removeClass("shadow-animate-green");
	}, function() {
		$(this).addClass("shadow-animate-green");
	});
	$(".contentBottom > div > div > h1").hover(function() {
		$(this).parent().removeClass("shadow-animate-pink");
	}, function() {
		$(this).parent().addClass("shadow-animate-pink");
	});
	$("#roll-btn").hover(function() {
		$(this).removeClass("shadow-animate-pink");
	}, function() {
		$(this).addClass("shadow-animate-pink");
	});
});

/***/ }),

/***/ "./src/assets/styles/rangeslider.js":
/*!******************************************!*\
  !*** ./src/assets/styles/rangeslider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
(function(factory) {
    'use strict';

    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function($) {
    'use strict';

    // Polyfill Number.isNaN(value)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    Number.isNaN = Number.isNaN || function(value) {
        return typeof value === 'number' && value !== value;
    };

    /**
     * Range feature detection
     * @return {Boolean}
     */
    function supportsRange() {
        var input = document.createElement('input');
        input.setAttribute('type', 'range');
        return input.type !== 'text';
    }

    var pluginName = 'rangeslider',
        pluginIdentifier = 0,
        hasInputRangeSupport = supportsRange(),
        defaults = {
            polyfill: true,
            orientation: 'horizontal',
            rangeClass: 'rangeslider',
            disabledClass: 'rangeslider--disabled',
            activeClass: 'rangeslider--active',
            horizontalClass: 'rangeslider--horizontal',
            verticalClass: 'rangeslider--vertical',
            fillClass: 'rangeslider__fill',
            handleClass: 'rangeslider__handle',
            startEvent: ['mousedown', 'touchstart', 'pointerdown'],
            moveEvent: ['mousemove', 'touchmove', 'pointermove'],
            endEvent: ['mouseup', 'touchend', 'pointerup']
        },
        constants = {
            orientation: {
                horizontal: {
                    dimension: 'width',
                    direction: 'left',
                    directionStyle: 'left',
                    coordinate: 'x'
                },
                vertical: {
                    dimension: 'height',
                    direction: 'top',
                    directionStyle: 'bottom',
                    coordinate: 'y'
                }
            }
        };

    /**
     * Delays a function for the given number of milliseconds, and then calls
     * it with the arguments supplied.
     *
     * @param  {Function} fn   [description]
     * @param  {Number}   wait [description]
     * @return {Function}
     */
    function delay(fn, wait) {
        var args = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function(){ return fn.apply(null, args); }, wait);
    }

    /**
     * Returns a debounced function that will make sure the given
     * function is not triggered too much.
     *
     * @param  {Function} fn Function to debounce.
     * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the function. (defaults to 100ms)
     * @return {Function}
     */
    function debounce(fn, debounceDuration) {
        debounceDuration = debounceDuration || 100;
        return function() {
            if (!fn.debouncing) {
                var args = Array.prototype.slice.apply(arguments);
                fn.lastReturnVal = fn.apply(window, args);
                fn.debouncing = true;
            }
            clearTimeout(fn.debounceTimeout);
            fn.debounceTimeout = setTimeout(function(){
                fn.debouncing = false;
            }, debounceDuration);
            return fn.lastReturnVal;
        };
    }

    /**
     * Check if a `element` is visible in the DOM
     *
     * @param  {Element}  element
     * @return {Boolean}
     */
    function isHidden(element) {
        return (
            element && (
                element.offsetWidth === 0 ||
                element.offsetHeight === 0 ||
                // Also Consider native `<details>` elements.
                element.open === false
            )
        );
    }

    /**
     * Get hidden parentNodes of an `element`
     *
     * @param  {Element} element
     * @return {[type]}
     */
    function getHiddenParentNodes(element) {
        var parents = [],
            node    = element.parentNode;

        while (isHidden(node)) {
            parents.push(node);
            node = node.parentNode;
        }
        return parents;
    }

    /**
     * Returns dimensions for an element even if it is not visible in the DOM.
     *
     * @param  {Element} element
     * @param  {String}  key     (e.g. offsetWidth …)
     * @return {Number}
     */
    function getDimension(element, key) {
        var hiddenParentNodes       = getHiddenParentNodes(element),
            hiddenParentNodesLength = hiddenParentNodes.length,
            inlineStyle             = [],
            dimension               = element[key];

        // Used for native `<details>` elements
        function toggleOpenProperty(element) {
            if (typeof element.open !== 'undefined') {
                element.open = (element.open) ? false : true;
            }
        }

        if (hiddenParentNodesLength) {
            for (var i = 0; i < hiddenParentNodesLength; i++) {

                // Cache style attribute to restore it later.
                inlineStyle[i] = hiddenParentNodes[i].style.cssText;

                // visually hide
                if (hiddenParentNodes[i].style.setProperty) {
                    hiddenParentNodes[i].style.setProperty('display', 'block', 'important');
                } else {
                    hiddenParentNodes[i].style.cssText += ';display: block !important';
                }
                hiddenParentNodes[i].style.height = '0';
                hiddenParentNodes[i].style.overflow = 'hidden';
                hiddenParentNodes[i].style.visibility = 'hidden';
                toggleOpenProperty(hiddenParentNodes[i]);
            }

            // Update dimension
            dimension = element[key];

            for (var j = 0; j < hiddenParentNodesLength; j++) {

                // Restore the style attribute
                hiddenParentNodes[j].style.cssText = inlineStyle[j];
                toggleOpenProperty(hiddenParentNodes[j]);
            }
        }
        return dimension;
    }

    /**
     * Returns the parsed float or the default if it failed.
     *
     * @param  {String}  str
     * @param  {Number}  defaultValue
     * @return {Number}
     */
    function tryParseFloat(str, defaultValue) {
        var value = parseFloat(str);
        return Number.isNaN(value) ? defaultValue : value;
    }

    /**
     * Capitalize the first letter of string
     *
     * @param  {String} str
     * @return {String}
     */
    function ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.substr(1);
    }

    /**
     * Plugin
     * @param {String} element
     * @param {Object} options
     */
    function Plugin(element, options) {
        this.$window            = $(window);
        this.$document          = $(document);
        this.$element           = $(element);
        this.options            = $.extend( {}, defaults, options );
        this.polyfill           = this.options.polyfill;
        this.orientation        = this.$element[0].getAttribute('data-orientation') || this.options.orientation;
        this.onInit             = this.options.onInit;
        this.onSlide            = this.options.onSlide;
        this.onSlideEnd         = this.options.onSlideEnd;
        this.DIMENSION          = constants.orientation[this.orientation].dimension;
        this.DIRECTION          = constants.orientation[this.orientation].direction;
        this.DIRECTION_STYLE    = constants.orientation[this.orientation].directionStyle;
        this.COORDINATE         = constants.orientation[this.orientation].coordinate;

        // Plugin should only be used as a polyfill
        if (this.polyfill) {
            // Input range support?
            if (hasInputRangeSupport) { return false; }
        }

        this.identifier = 'js-' + pluginName + '-' +(pluginIdentifier++);
        this.startEvent = this.options.startEvent.join('.' + this.identifier + ' ') + '.' + this.identifier;
        this.moveEvent  = this.options.moveEvent.join('.' + this.identifier + ' ') + '.' + this.identifier;
        this.endEvent   = this.options.endEvent.join('.' + this.identifier + ' ') + '.' + this.identifier;
        this.toFixed    = (this.step + '').replace('.', '').length - 1;
        this.$fill      = $('<div class="' + this.options.fillClass + '" />');
        this.$handle    = $('<div class="' + this.options.handleClass + '" />');
        this.$range     = $('<div class="' + this.options.rangeClass + ' ' + this.options[this.orientation + 'Class'] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle);

        // visually hide the input
        this.$element.css({
            'position': 'absolute',
            'width': '1px',
            'height': '1px',
            'overflow': 'hidden',
            'opacity': '0'
        });

        // Store context
        this.handleDown = $.proxy(this.handleDown, this);
        this.handleMove = $.proxy(this.handleMove, this);
        this.handleEnd  = $.proxy(this.handleEnd, this);

        this.init();

        // Attach Events
        var _this = this;
        this.$window.on('resize.' + this.identifier, debounce(function() {
            // Simulate resizeEnd event.
            delay(function() { _this.update(false, false); }, 300);
        }, 20));

        this.$document.on(this.startEvent, '#' + this.identifier + ':not(.' + this.options.disabledClass + ')', this.handleDown);

        // Listen to programmatic value changes
        this.$element.on('change.' + this.identifier, function(e, data) {
            if (data && data.origin === _this.identifier) {
                return;
            }

            var value = e.target.value,
                pos = _this.getPositionFromValue(value);
            _this.setPosition(pos);
        });
    }

    Plugin.prototype.init = function() {
        this.update(true, false);

        if (this.onInit && typeof this.onInit === 'function') {
            this.onInit();
        }
    };

    Plugin.prototype.update = function(updateAttributes, triggerSlide) {
        updateAttributes = updateAttributes || false;

        if (updateAttributes) {
            this.min    = tryParseFloat(this.$element[0].getAttribute('min'), 0);
            this.max    = tryParseFloat(this.$element[0].getAttribute('max'), 100);
            this.value  = tryParseFloat(this.$element[0].value, Math.round(this.min + (this.max-this.min)/2));
            this.step   = tryParseFloat(this.$element[0].getAttribute('step'), 1);
        }

        this.handleDimension    = getDimension(this.$handle[0], 'offset' + ucfirst(this.DIMENSION));
        this.rangeDimension     = getDimension(this.$range[0], 'offset' + ucfirst(this.DIMENSION));
        this.maxHandlePos       = this.rangeDimension - this.handleDimension;
        this.grabPos            = this.handleDimension / 2;
        this.position           = this.getPositionFromValue(this.value);

        // Consider disabled state
        if (this.$element[0].disabled) {
            this.$range.addClass(this.options.disabledClass);
        } else {
            this.$range.removeClass(this.options.disabledClass);
        }

        this.setPosition(this.position, triggerSlide);
    };

    Plugin.prototype.handleDown = function(e) {
        e.preventDefault();
        this.$document.on(this.moveEvent, this.handleMove);
        this.$document.on(this.endEvent, this.handleEnd);

        // add active class because Firefox is ignoring
        // the handle:active pseudo selector because of `e.preventDefault();`
        this.$range.addClass(this.options.activeClass);

        // If we click on the handle don't set the new position
        if ((' ' + e.target.className + ' ').replace(/[\n\t]/g, ' ').indexOf(this.options.handleClass) > -1) {
            return;
        }

        var pos         = this.getRelativePosition(e),
            rangePos    = this.$range[0].getBoundingClientRect()[this.DIRECTION],
            handlePos   = this.getPositionFromNode(this.$handle[0]) - rangePos,
            setPos      = (this.orientation === 'vertical') ? (this.maxHandlePos - (pos - this.grabPos)) : (pos - this.grabPos);

        this.setPosition(setPos);

        if (pos >= handlePos && pos < handlePos + this.handleDimension) {
            this.grabPos = pos - handlePos;
        }
    };

    Plugin.prototype.handleMove = function(e) {
        e.preventDefault();
        var pos = this.getRelativePosition(e);
        var setPos = (this.orientation === 'vertical') ? (this.maxHandlePos - (pos - this.grabPos)) : (pos - this.grabPos);
        this.setPosition(setPos);
    };

    Plugin.prototype.handleEnd = function(e) {
        e.preventDefault();
        this.$document.off(this.moveEvent, this.handleMove);
        this.$document.off(this.endEvent, this.handleEnd);

        this.$range.removeClass(this.options.activeClass);

        // Ok we're done fire the change event
        this.$element.trigger('change', { origin: this.identifier });

        if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
            this.onSlideEnd(this.position, this.value);
        }
    };

    Plugin.prototype.cap = function(pos, min, max) {
        if (pos < min) { return min; }
        if (pos > max) { return max; }
        return pos;
    };

    Plugin.prototype.setPosition = function(pos, triggerSlide) {
        var value, newPos;

        if (triggerSlide === undefined) {
            triggerSlide = true;
        }

        // Snapping steps
        value = this.getValueFromPosition(this.cap(pos, 0, this.maxHandlePos));
        newPos = this.getPositionFromValue(value);

        // Update ui
        this.$fill[0].style[this.DIMENSION] = (newPos + this.grabPos) + 'px';
        this.$handle[0].style[this.DIRECTION_STYLE] = newPos + 'px';
        this.setValue(value);

        // Update globals
        this.position = newPos;
        this.value = value;

        if (triggerSlide && this.onSlide && typeof this.onSlide === 'function') {
            this.onSlide(newPos, value);
        }
    };

    // Returns element position relative to the parent
    Plugin.prototype.getPositionFromNode = function(node) {
        var i = 0;
        while (node !== null) {
            i += node.offsetLeft;
            node = node.offsetParent;
        }
        return i;
    };

    Plugin.prototype.getRelativePosition = function(e) {
        // Get the offset DIRECTION relative to the viewport
        var ucCoordinate = ucfirst(this.COORDINATE),
            rangePos = this.$range[0].getBoundingClientRect()[this.DIRECTION],
            pageCoordinate = 0;

        if (typeof e.originalEvent['client' + ucCoordinate] !== 'undefined') {
            pageCoordinate = e.originalEvent['client' + ucCoordinate];
        }
        else if (
          e.originalEvent.touches &&
          e.originalEvent.touches[0] &&
          typeof e.originalEvent.touches[0]['client' + ucCoordinate] !== 'undefined'
        ) {
            pageCoordinate = e.originalEvent.touches[0]['client' + ucCoordinate];
        }
        else if(e.currentPoint && typeof e.currentPoint[this.COORDINATE] !== 'undefined') {
            pageCoordinate = e.currentPoint[this.COORDINATE];
        }

        return pageCoordinate - rangePos;
    };

    Plugin.prototype.getPositionFromValue = function(value) {
        var percentage, pos;
        percentage = (value - this.min)/(this.max - this.min);
        pos = (!Number.isNaN(percentage)) ? percentage * this.maxHandlePos : 0;
        return pos;
    };

    Plugin.prototype.getValueFromPosition = function(pos) {
        var percentage, value;
        percentage = ((pos) / (this.maxHandlePos || 1));
        value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;
        return Number((value).toFixed(this.toFixed));
    };

    Plugin.prototype.setValue = function(value) {
        if (value === this.value && this.$element[0].value !== '') {
            return;
        }

        // Set the new value and fire the `input` event
        this.$element
            .val(value)
            .trigger('input', { origin: this.identifier });
    };

    Plugin.prototype.destroy = function() {
        this.$document.off('.' + this.identifier);
        this.$window.off('.' + this.identifier);

        this.$element
            .off('.' + this.identifier)
            .removeAttr('style')
            .removeData('plugin_' + pluginName);

        // Remove the generated markup
        if (this.$range && this.$range.length) {
            this.$range[0].parentNode.removeChild(this.$range[0]);
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var $this = $(this),
                data  = $this.data('plugin_' + pluginName);

            // Create a new instance.
            if (!data) {
                $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
            }

            // Make it possible to access methods from public.
            // e.g `$element.rangeslider('method');`
            if (typeof options === 'string') {
                data[options].apply(data, args);
            }
        });
    };

    return 'rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);';

}));


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ngoviet/Documents/fomobank/fomo2moon-core/frontEndFOM/frontEndFOM/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /home/ngoviet/Documents/fomobank/fomo2moon-core/frontEndFOM/frontEndFOM/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map