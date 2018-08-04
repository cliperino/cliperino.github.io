webpackJsonp([4],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__ = __webpack_require__(340);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */]),
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

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(341);
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
    function FollowingPage(navCtrl, usersService, ngZone) {
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.ngZone = ngZone;
        this.followedChannels = [];
    }
    FollowingPage.prototype.ngOnInit = function () {
        this.getFollowingChannels();
    };
    FollowingPage.prototype.getFollowingChannels = function () {
        var that = this;
        var promise;
        this.usersService.getFollowingChannelsById(26861831).then(function (channelWrapper) {
            that.ngZone.run(function () {
                that.followedChannels = channelWrapper.follows;
                that.followedChannels.sort(function (a, b) {
                    return (b.channel.followers - a.channel.followers);
                });
            });
        });
    };
    FollowingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-following',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\following\following.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Following</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <div *ngFor="let followedChannel of followedChannels">\n\n      <following-channel-thumbnail-component [channel]="followedChannel.channel"></following-channel-thumbnail-component>\n\n    </div>\n\n  </ion-list>\n\n\n\n\n\n\n\n  <!-- <ion-grid>\n\n     <ion-row justify-content-center>\n\n        <div class="following-channel-wrapper" *ngFor="let followedChannel of followedChannels">\n\n           <following-channel-thumbnail-component [channel]="followedChannel.channel"></following-channel-thumbnail-component>\n\n        </div>\n\n     </ion-row>\n\n  </ion-grid> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\following\following.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], FollowingPage);
    return FollowingPage;
}());

//# sourceMappingURL=following.js.map

/***/ })

});
//# sourceMappingURL=4.js.map