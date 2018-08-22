webpackJsonp([7],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteClipsPageModule", function() { return FavoriteClipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pipes_pipes_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorite_clips__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FavoriteClipsPageModule = /** @class */ (function () {
    function FavoriteClipsPageModule() {
    }
    FavoriteClipsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__favorite_clips__["a" /* FavoriteClipsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__favorite_clips__["a" /* FavoriteClipsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__app_pipes_pipes_module__["a" /* PipesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__["a" /* ComponentModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__favorite_clips__["a" /* FavoriteClipsPage */]
            ]
        })
    ], FavoriteClipsPageModule);
    return FavoriteClipsPageModule;
}());

//# sourceMappingURL=favorite-clips.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteClipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_loader_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__ = __webpack_require__(112);
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




var FavoriteClipsPage = /** @class */ (function () {
    function FavoriteClipsPage(navCtrl, _sanitizer, _ngZone, 
        /* Services */
        authService, clipsService, loaderService, toastService) {
        this.navCtrl = navCtrl;
        this._sanitizer = _sanitizer;
        this._ngZone = _ngZone;
        this.authService = authService;
        this.clipsService = clipsService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.favoriteClips = [];
        this.sanitizer = _sanitizer;
        this.ngZone = _ngZone;
    }
    FavoriteClipsPage.prototype.ionViewCanEnter = function () {
        var that = this;
        var isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            that.toastService.show('Must be logged in to access this page.');
        }
        return isAuthenticated;
    };
    FavoriteClipsPage.prototype.ngOnInit = function () {
        this.getFavorites();
    };
    FavoriteClipsPage.prototype.getFavorites = function () {
        var that = this;
        var promise = this.clipsService.getFavorites();
        promise.then(function (favoriteClips) {
            favoriteClips.forEach(function (favoriteClip) {
                that.clipsService.getBySlug(favoriteClip.slug).then(function (clip) {
                    favoriteClip.clip = clip;
                    that.ngZone.run(function () {
                        that.favoriteClips.push(favoriteClip);
                    });
                });
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    FavoriteClipsPage.prototype.goToClip = function (slug) {
        this.navCtrl.push('clip', { slug: slug });
    };
    FavoriteClipsPage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    FavoriteClipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-clips',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\favorite-clips\favorite-clips.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Favorite clips</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only *ngIf="authService.isAuthenticated()" (click)="goToProfile()">\n\n          <ion-icon name="contact"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-grid>\n\n      <ion-row justify-content-center>\n\n         <div style="max-width: 100%" *ngFor="let favoriteClip of favoriteClips | favoriteClipsSort">\n\n            <thumbnail-component [clip]="favoriteClip.clip"></thumbnail-component>\n\n         </div>\n\n         <!-- <div style="width: 280px; height: 260px;"></div>\n\n         <div style="width: 280px; height: 260px;"></div> -->\n\n      </ion-row>\n\n   </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\favorite-clips\favorite-clips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__["a" /* ClipsService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__["a" /* ToastService */]])
    ], FavoriteClipsPage);
    return FavoriteClipsPage;
}());

//# sourceMappingURL=favorite-clips.js.map

/***/ })

});
//# sourceMappingURL=7.js.map