webpackJsonp([6],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPopoverPageModule", function() { return FilterPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_popover__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPopoverPageModule = /** @class */ (function () {
    function FilterPopoverPageModule() {
    }
    FilterPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_popover__["a" /* FilterPopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_popover__["a" /* FilterPopoverPage */])
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__filter_popover__["a" /* FilterPopoverPage */]
            ]
        })
    ], FilterPopoverPageModule);
    return FilterPopoverPageModule;
}());

//# sourceMappingURL=filter-popover.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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


var FilterPopoverPage = /** @class */ (function () {
    function FilterPopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.displayLanguages = true;
    }
    FilterPopoverPage.prototype.ngOnInit = function () {
        var that = this;
        this.period = this.viewCtrl.data.period;
        this.languages = this.viewCtrl.data.languages || [];
        if (this.viewCtrl.data.displayLanguages !== undefined) {
            this.displayLanguages = this.viewCtrl.data.displayLanguages;
        }
        this.langEn = this.contains('en');
        this.langFr = this.contains('fr');
    };
    FilterPopoverPage.prototype.onSave = function () {
        var that = this;
        that.languages = [];
        if (that.langEn) {
            that.languages.push('en');
        }
        if (that.langFr) {
            that.languages.push('fr');
        }
        this.viewCtrl.dismiss({
            period: that.period,
            languages: that.languages
        });
    };
    FilterPopoverPage.prototype.contains = function (lang) {
        var contained = false;
        this.languages.forEach(function (language) {
            if (language === lang) {
                contained = true;
                return;
            }
        });
        return contained;
    };
    FilterPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\filter-popover\filter-popover.html"*/'<ion-list radio-group style="margin-bottom: 0px;" [(ngModel)]="period">\n\n	<ion-item-divider color="light">Period</ion-item-divider>\n\n	<ion-item>\n\n	  <ion-label>24 hours</ion-label>\n\n	  <ion-radio checked="true" value="day"></ion-radio>\n\n	</ion-item>\n\n		<ion-item>\n\n		  <ion-label>7 days</ion-label>\n\n		  <ion-radio value="week"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>30 days</ion-label>\n\n		  <ion-radio value="month"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>All</ion-label>\n\n		  <ion-radio value="all"></ion-radio>\n\n		</ion-item>\n\n	<ion-item-divider *ngIf="displayLanguages" color="light">Languages</ion-item-divider>\n\n	<ion-item *ngIf="displayLanguages">\n\n	  <ion-label>English</ion-label>\n\n	  <ion-checkbox [(ngModel)]="langEn"></ion-checkbox>\n\n	</ion-item>\n\n	<ion-item *ngIf="displayLanguages">\n\n	  <ion-label>French</ion-label>\n\n	  <ion-checkbox [(ngModel)]="langFr"></ion-checkbox>\n\n	</ion-item>\n\n</ion-list>\n\n<button (click)="onSave()" ion-button clear>Save</button>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\filter-popover\filter-popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], FilterPopoverPage);
    return FilterPopoverPage;
}());

//# sourceMappingURL=filter-popover.js.map

/***/ })

});
//# sourceMappingURL=6.js.map