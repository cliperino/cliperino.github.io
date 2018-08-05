webpackJsonp([6],{

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPageModule", function() { return ClipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ClipPageModule = /** @class */ (function () {
    function ClipPageModule() {
    }
    ClipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clip__["a" /* ClipPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clip__["a" /* ClipPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__["a" /* ComponentModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__clip__["a" /* ClipPage */]
            ]
        })
    ], ClipPageModule);
    return ClipPageModule;
}());

//# sourceMappingURL=clip.module.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_clips_service__ = __webpack_require__(182);
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

var ClipPage = /** @class */ (function () {
    function ClipPage(navCtrl, navParams, clipsService, _ngZone, _sanitizer, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clipsService = clipsService;
        this._ngZone = _ngZone;
        this._sanitizer = _sanitizer;
        this.popoverCtrl = popoverCtrl;
        var slug = navParams.get('slug');
        this.slug = slug;
    }
    ClipPage.prototype.ngOnInit = function () {
        var that = this;
        this.clipsService.getBySlug(this.slug).then(function (clip) {
            var src = 'https://clips.twitch.tv/embed?clip=' + clip.slug + '&tt_medium=clips_api&tt_content=embed&autoplay=true';
            clip.embedHtml = that._sanitizer.bypassSecurityTrustHtml("<div style='overflow: hidden; padding-bottom: 56.25%; position: relative; height: 0;' class='video-responsive'><iframe style='left: 0; top: 0; height: 100%; width: 100%; position: absolute;' src='" + src + "' width='100%' height='100%' muted='false' frameborder='0' scrolling='no' allowfullscreen='true' preload='metadata'></iframe></div>");
            that._ngZone.run(function () {
                that.clip = clip;
            });
        });
    };
    ClipPage.prototype.presentPopover = function (myEvent) {
        var that = this;
        var popover = this.popoverCtrl.create('clip-popover', { slug: that.slug });
        popover.present({
            ev: myEvent
        });
    };
    ClipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clip',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\clip\clip.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <ion-title>Clip</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-padding-xs" padding *ngIf="clip" >\n\n	<ion-grid class="no-padding-xs">\n\n		<ion-row justify-content-center>\n\n			<ion-col class="display-none-xs"></ion-col>\n\n			<ion-col class="no-padding-xs" col-12 col-xl-9>\n\n				<ion-card class="max-width no-margin-xs">\n\n				  <ion-row>\n\n				    <ion-col>\n\n						<ion-item>\n\n				    <ion-avatar item-start>\n\n				      <img src="{{clip.broadcaster.logo}}">\n\n				    </ion-avatar>\n\n				    <h2>{{clip.broadcaster.displayName}}</h2>\n\n				    <p>{{clip.createdAt | timeAgo}}</p>\n\n				  </ion-item>\n\n				    </ion-col>\n\n				    <ion-col>\n\n\n\n				    </ion-col>\n\n				    <ion-col col-sm-3 col-md-1 center text-center align-self-center>\n\n							<div style="cursor: pointer;" (click)="presentPopover($event);">\n\n								<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n\n							</div>\n\n				    </ion-col>\n\n				  </ion-row>\n\n\n\n				  <span [innerHTML]="clip.embedHtml"></span>\n\n\n\n				  <ion-card-content>\n\n				  	<ion-row>\n\n				  	<ion-col>\n\n				  		<p>{{clip.title}}</p>\n\n				    	<ion-note>{{clip.views | views}} views</ion-note>\n\n				  	</ion-col>\n\n				  	<!-- <div>\n\n				  		<button ion-button icon-start clear small>\n\n				        	<ion-icon name="thumbs-up"></ion-icon>\n\n				        	<div>{{0 | views}} Likes</div>\n\n				      	</button>\n\n				  	</div> -->\n\n				  	</ion-row>\n\n\n\n				  </ion-card-content>\n\n\n\n				 <!--<ion-row>\n\n				    <ion-col>\n\n				      <button ion-button icon-start clear small>\n\n				        <ion-icon name="thumbs-up"></ion-icon>\n\n				        <div>12 Likes</div>\n\n				      </button>\n\n				    </ion-col>\n\n				    <ion-col>\n\n				      <button ion-button icon-start clear small>\n\n				        <ion-icon name="text"></ion-icon>\n\n				        <div>4 Comments</div>\n\n				      </button>\n\n				    </ion-col>\n\n				    <ion-col center text-center>\n\n				      <ion-note>\n\n\n\n				      </ion-note>\n\n				    </ion-col>\n\n				  </ion-row>-->\n\n\n\n				</ion-card>\n\n			</ion-col>\n\n			<ion-col>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\clip\clip.html"*/,
            styles: ['.no-padding {padding: 0;} .no-margin {margin: 0;}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_clips_service__["a" /* ClipsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], ClipPage);
    return ClipPage;
}());

//# sourceMappingURL=clip.js.map

/***/ })

});
//# sourceMappingURL=6.js.map