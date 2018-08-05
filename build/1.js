webpackJsonp([1],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageModule", function() { return GamesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_game_thumbnail_game_thumbnail_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_pipes_pipes_module__ = __webpack_require__(181);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */]),
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

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_games_service__ = __webpack_require__(344);
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
    function GamesPage(navCtrl, gamesService, ngZone) {
        this.navCtrl = navCtrl;
        this.gamesService = gamesService;
        this.ngZone = ngZone;
        this.gameWrappers = [];
    }
    GamesPage.prototype.ngOnInit = function () {
        this.getTopGames();
    };
    GamesPage.prototype.getTopGames = function () {
        var that = this;
        var promise;
        this.gamesService.getTop().then(function (gameWrappers) {
            that.ngZone.run(function () {
                gameWrappers.forEach(function (gameWrapper) {
                    that.gameWrappers.push(gameWrapper);
                });
            });
        });
    };
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\games\games.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Categories</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <div *ngFor="let gameWrapper of gameWrappers">\n\n      <game-thumbnail-component [gameWrapper]="gameWrapper"></game-thumbnail-component>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\games\games.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_games_service__["a" /* GamesService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_game_wrapper_model__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
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
            selector: 'game-thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\game-thumbnail\game-thumbnail.component.html"*/'<ion-item style="cursor: pointer;" (click)="goToGame(gameWrapper.game.name)">\n\n  <ion-thumbnail item-start>\n\n    <img style="height: 100%;" src="{{gameWrapper.game.box.medium}}">\n\n  </ion-thumbnail>\n\n  <h2>{{gameWrapper.game.name}}</h2>\n\n  <p>{{gameWrapper.viewers | views}} viewers</p>\n\n  <button ion-button clear item-end>View</button>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\game-thumbnail\game-thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], GameThumbnailComponent);
    return GameThumbnailComponent;
}());

//# sourceMappingURL=game-thumbnail.component.js.map

/***/ }),

/***/ 617:
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