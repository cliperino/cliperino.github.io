webpackJsonp([5],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingGamePageModule", function() { return TrendingGamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trending_game__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrendingGamePageModule = /** @class */ (function () {
    function TrendingGamePageModule() {
    }
    TrendingGamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trending_game__["a" /* TrendingGamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trending_game__["a" /* TrendingGamePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__["a" /* ComponentModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__trending_game__["a" /* TrendingGamePage */]
            ]
        })
    ], TrendingGamePageModule);
    return TrendingGamePageModule;
}());

//# sourceMappingURL=trending-game.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_clips_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_localStorage_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_array_equal__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_array_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_array_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_loader_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_toast_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_abstract_auth_service__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* Core */



/* Services */






var TrendingGamePage = /** @class */ (function () {
    function TrendingGamePage(navCtrl, clipsService, _sanitizer, _ngZone, navParams, 
        /* Services */
        authService, localStorageService, popoverCtrl, loaderService, toastService) {
        this.navCtrl = navCtrl;
        this.clipsService = clipsService;
        this._sanitizer = _sanitizer;
        this._ngZone = _ngZone;
        this.navParams = navParams;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.popoverCtrl = popoverCtrl;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.showMore = true;
        this.clips = [];
        this.period = "day";
        this.languages = [];
        this.game = navParams.get('game');
        this.sanitizer = _sanitizer;
        this.ngZone = _ngZone;
    }
    TrendingGamePage.prototype.ngOnInit = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.localStorageService.getItem("trending-game-period")];
                    case 1:
                        _a.period = (_e.sent()) || "day";
                        _b = this;
                        _d = (_c = JSON).parse;
                        return [4 /*yield*/, this.localStorageService.getItem("trending-game-languages")];
                    case 2:
                        _b.languages = _d.apply(_c, [_e.sent()]) || [];
                        this.getTrendingByGame(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    TrendingGamePage.prototype.getTrendingByGame = function (refresh) {
        var that = this;
        var promise;
        promise = this.clipsService.getTrendingByGame(that.game, that.gameCursor, this.period, this.languages.join(',')).then(function (trendingClips) {
            var clips = trendingClips.clips;
            clips.forEach(function (clip) {
                var src = 'https://clips.twitch.tv/embed?clip=' + clip.slug + '&tt_medium=clips_api&tt_content=embed&autoplay=false';
                clip.embedHtml = that.sanitizer.bypassSecurityTrustHtml("<div style='overflow: hidden; padding-bottom: 56.25%; position: relative; height: 0;' class='video-responsive'><iframe style='left: 0; top: 0; height: 100%; width: 100%; position: absolute;' src='" + src + "' width='100%' height='100%' frameborder='0' scrolling='no' allowfullscreen='true' preload='metadata'></iframe></div>");
            });
            that.ngZone.run(function () {
                if (refresh) {
                    that.clips.splice(0, that.clips.length);
                }
                clips.forEach(function (clip) {
                    that.clips.push(clip);
                });
                that.gameCursor = trendingClips.cursor;
                that.showMore = !!that.gameCursor;
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    TrendingGamePage.prototype.goToPage = function (page) {
        var navOptions = {};
        navOptions.updateUrl = true;
        this.navCtrl.setRoot(page, null, navOptions);
    };
    TrendingGamePage.prototype.presentPopover = function (myEvent) {
        var that = this;
        var popoverOptions = {};
        popoverOptions.enableBackdropDismiss = true;
        var popover = this.popoverCtrl.create('filter-popover', {
            period: that.period,
            languages: that.languages
        }, popoverOptions);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(this.refreshData.bind(that));
    };
    TrendingGamePage.prototype.refreshData = function (data) {
        if (!data)
            return;
        var that = this;
        var oldPeriod = this.period;
        var oldLanguages = this.languages;
        this.period = data.period;
        this.languages = data.languages;
        localStorage.setItem("trending-game-period", data.period);
        localStorage.setItem("trending-game-languages", JSON.stringify(data.languages));
        if (!(oldPeriod === data.period && __WEBPACK_IMPORTED_MODULE_5_array_equal__(oldLanguages, data.languages))) {
            that.gameCursor = undefined;
            that.getTrendingByGame(true);
        }
    };
    TrendingGamePage.prototype.more = function () {
        this.getTrendingByGame(false);
    };
    TrendingGamePage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    TrendingGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trending-game',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending-game\trending-game.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">{{game}}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="presentPopover($event);">\n\n          <ion-icon ios="ios-funnel" md="ios-funnel"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only *ngIf="!authService.loggedIn" (click)="authService.login()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-grid>\n\n      <ion-row justify-content-center>\n\n         <div style="max-width: 100%" *ngFor="let clip of clips">\n\n            <thumbnail-component [clip]="clip"></thumbnail-component>\n\n         </div>\n\n         <!-- <div style="width: 280px; height: 260px;"></div>\n\n         <div style="width: 280px; height: 260px;"></div> -->\n\n      </ion-row>\n\n   </ion-grid>\n\n   <ion-row justify-content-center *ngIf="clips.length && showMore">\n\n     <button (click)="more()" ion-button clear>MORE</button>\n\n   </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending-game\trending-game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_clips_service__["a" /* ClipsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__app_services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__app_services_toast_service__["a" /* ToastService */]])
    ], TrendingGamePage);
    return TrendingGamePage;
}());

//# sourceMappingURL=trending-game.js.map

/***/ })

});
//# sourceMappingURL=5.js.map