webpackJsonp([1],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageModule", function() { return GamesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_game_thumbnail_game_thumbnail_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_pipes_pipes_module__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GamesPageModule = /** @class */ (function () {
    function GamesPageModule() {
    }
    GamesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_components_game_thumbnail_game_thumbnail_component__["a" /* GameThumbnailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */]),
                __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__["a" /* ComponentModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_pipes_pipes_module__["a" /* PipesModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */]
            ]
        })
    ], GamesPageModule);
    return GamesPageModule;
}());

//# sourceMappingURL=games.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_games_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_loader_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_auth_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Core */


/* Services */




var GamesPage = /** @class */ (function () {
    function GamesPage(navCtrl, ngZone, 
        /* Services */
        authService, gamesService, loaderService, toastService) {
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.authService = authService;
        this.gamesService = gamesService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.gameWrappers = [];
    }
    GamesPage.prototype.ngOnInit = function () {
        this.getTopGames();
    };
    GamesPage.prototype.getTopGames = function () {
        var that = this;
        var promise;
        promise = this.gamesService.getTop().then(function (gameWrappers) {
            that.ngZone.run(function () {
                gameWrappers.forEach(function (gameWrapper) {
                    that.gameWrappers.push(gameWrapper);
                });
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    GamesPage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\games\games.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">Games</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only *ngIf="!authService.isAuthenticated()" (click)="authService.login()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <div *ngFor="let gameWrapper of gameWrappers">\n\n      <game-thumbnail-component [gameWrapper]="gameWrapper"></game-thumbnail-component>\n\n    </div>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n  <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n\n  <ion-fab-list side="top">\n\n    <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n    <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n    <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n    <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n  </ion-fab-list>\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\games\games.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_games_service__["a" /* GamesService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_game_wrapper_model__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameThumbnailComponent = /** @class */ (function () {
    function GameThumbnailComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GameThumbnailComponent.prototype.goToGame = function (game) {
        this.navCtrl.push('trending-game', { game: game });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_game_wrapper_model__["a" /* GameWrapper */])
    ], GameThumbnailComponent.prototype, "gameWrapper", void 0);
    GameThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\game-thumbnail\game-thumbnail.component.html"*/'<ion-item style="cursor: pointer;" (click)="goToGame(gameWrapper.game.name)">\n\n  <ion-thumbnail item-start>\n\n    <img style="height: 100%;" src="{{gameWrapper.game.box.medium}}">\n\n  </ion-thumbnail>\n\n  <p class="title">{{gameWrapper.game.name}}</p>\n\n  <p>{{gameWrapper.viewers | views}} viewers</p>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\game-thumbnail\game-thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], GameThumbnailComponent);
    return GameThumbnailComponent;
}());

//# sourceMappingURL=game-thumbnail.component.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameWrapper; });
var GameWrapper = /** @class */ (function () {
    function GameWrapper() {
    }
    return GameWrapper;
}());

//# sourceMappingURL=game-wrapper.model.js.map

/***/ })

});
//# sourceMappingURL=1.js.map