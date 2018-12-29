webpackJsonp([6],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowingPageModule = /** @class */ (function () {
    function FollowingPageModule() {
    }
    FollowingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__["a" /* ComponentModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */]
            ]
        })
    ], FollowingPageModule);
    return FollowingPageModule;
}());

//# sourceMappingURL=following.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_localStorage_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_loader_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_auth_service__ = __webpack_require__(113);
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





var FollowingPage = /** @class */ (function () {
    function FollowingPage(navCtrl, usersService, ngZone, 
        /* Services */
        authService, loaderService, localStorageService, toastService) {
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.ngZone = ngZone;
        this.authService = authService;
        this.loaderService = loaderService;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        this.followedChannels = [];
    }
    FollowingPage.prototype.ngOnInit = function () {
        this.twitchUserId = this.localStorageService.getTwitchUserId();
        if (this.twitchUserId) {
            this.getFollowingChannels();
        }
    };
    FollowingPage.prototype.getFollowingChannels = function () {
        var that = this;
        var promise;
        promise = this.usersService.getFollowingChannelsById(that.twitchUserId).then(function (channelWrapper) {
            that.ngZone.run(function () {
                that.followedChannels = channelWrapper.follows;
                that.followedChannels.sort(function (a, b) {
                    return (b.channel.followers - a.channel.followers);
                });
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    FollowingPage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    FollowingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-following',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\following\following.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">Following</ion-title>\n\n      <ion-buttons end>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="!twitchUserId">\n\n    Set your twitch username in your profile.\n\n  </div>\n\n  <ion-list *ngIf="twitchUserId">\n\n    <div *ngFor="let followedChannel of followedChannels">\n\n      <following-channel-thumbnail-component [channel]="followedChannel.channel"></following-channel-thumbnail-component>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\following\following.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__["a" /* ToastService */]])
    ], FollowingPage);
    return FollowingPage;
}());

//# sourceMappingURL=following.js.map

/***/ })

});
//# sourceMappingURL=6.js.map