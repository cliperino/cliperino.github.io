webpackJsonp([7],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightClipsPageModule", function() { return HighlightClipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pipes_pipes_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlightclips__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HighlightClipsPageModule = /** @class */ (function () {
    function HighlightClipsPageModule() {
    }
    HighlightClipsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__highlightclips__["a" /* HighlightClipsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__highlightclips__["a" /* HighlightClipsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__app_pipes_pipes_module__["a" /* PipesModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__highlightclips__["a" /* HighlightClipsPage */]
            ]
        })
    ], HighlightClipsPageModule);
    return HighlightClipsPageModule;
}());

//# sourceMappingURL=highlightclips.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightClipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_highlights_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_clips_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_highlightclip_model__ = __webpack_require__(487);
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


/* Models */
/* Services */





var HighlightClipsPage = /** @class */ (function () {
    function HighlightClipsPage(navCtrl, ngZone, navParams, modalCtrl, 
        /* Services */
        highlightsService, clipsService, loaderService, toastService) {
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.highlightsService = highlightsService;
        this.clipsService = clipsService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.isEditing = false;
        this.removeList = [];
        this.highlightUuid = this.navParams.get('highlight');
    }
    HighlightClipsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHighlight()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getClips()];
                    case 2:
                        _a.sent();
                        this.highlight.clips.sort(this.sort);
                        return [2 /*return*/];
                }
            });
        });
    };
    HighlightClipsPage.prototype.edit = function () {
        this.isEditing = true;
    };
    HighlightClipsPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allPromise, deletePromise, updatePromise;
            return __generator(this, function (_a) {
                allPromise = null;
                deletePromise = null;
                updatePromise = null;
                this.isEditing = false;
                deletePromise = this.deleteClips();
                updatePromise = this.updateClipOrders();
                allPromise = Promise.all([deletePromise, updatePromise]);
                this.loaderService.show(allPromise);
                this.toastService.onFailure(allPromise);
                return [2 /*return*/];
            });
        });
    };
    HighlightClipsPage.prototype.getClips = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promiseList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseList = [];
                        this.highlight.clips.forEach(function (clip, index) { return __awaiter(_this, void 0, void 0, function () {
                            var promise, c;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        promise = this.clipsService.getBySlug(clip.slug);
                                        return [4 /*yield*/, promise];
                                    case 1:
                                        c = _a.sent();
                                        clip.clipOrder = index;
                                        clip.description = c.description;
                                        clip.thumbnail = c.thumbnails.medium;
                                        clip.broadcaster = c.broadcaster;
                                        clip.title = c.title;
                                        clip.originalDuration = c.duration;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.clipsReady = Promise.all(promiseList);
                        return [4 /*yield*/, this.clipsReady];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HighlightClipsPage.prototype.getHighlight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        promise = this.highlightsService.getByUuid(this.highlightUuid).then(function (highlight) {
                            that.ngZone.run(function () {
                                that.highlight = highlight;
                            });
                        });
                        that.loaderService.show(promise);
                        that.toastService.onFailure(promise);
                        return [4 /*yield*/, promise];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Moves bottom locally until the user saves the modifications
     *
     * @param clip
     */
    HighlightClipsPage.prototype.moveBottom = function (clip) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                while (clip.clipOrder < this.highlight.clips.length - 1) {
                    this.moveDown(clip);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Moves down locally until the user saves the modifications
     *
     * @param clip
     */
    HighlightClipsPage.prototype.moveDown = function (clip) {
        return __awaiter(this, void 0, void 0, function () {
            var currentIndex, nextIndex, nextClip;
            return __generator(this, function (_a) {
                currentIndex = clip.clipOrder;
                nextIndex = currentIndex + 1;
                nextClip = this.findClipWithIndex(nextIndex);
                clip.clipOrder += 1;
                nextClip.clipOrder -= 1;
                this.highlight.clips.sort(this.sort);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Moves top locally until the user saves the modifications
     *
     * @param clip
     */
    HighlightClipsPage.prototype.moveTop = function (clip) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                while (clip.clipOrder > 0) {
                    this.moveUp(clip);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Moves up locally until the user saves the modifications
     *
     * @param clip
     */
    HighlightClipsPage.prototype.moveUp = function (clip) {
        return __awaiter(this, void 0, void 0, function () {
            var currentIndex, lastIndex, lastClip;
            return __generator(this, function (_a) {
                currentIndex = clip.clipOrder;
                lastIndex = currentIndex - 1;
                lastClip = this.findClipWithIndex(lastIndex);
                clip.clipOrder -= 1;
                lastClip.clipOrder += 1;
                this.highlight.clips.sort(this.sort);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Removes locally until the user saves the modifications
     *
     * @param clip
     */
    HighlightClipsPage.prototype.remove = function (clip) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var index;
            return __generator(this, function (_a) {
                this.removeList.push(clip);
                index = this.findClipIndex(clip);
                this.highlight.clips.forEach(function (c, i) {
                    if (index === i) {
                        _this.highlight.clips.splice(index, 1);
                    }
                    else if (i > index) {
                        c.clipOrder -= 1;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    HighlightClipsPage.prototype.deleteClips = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promiseList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseList = [];
                        this.removeList.forEach(function (clip) {
                            promiseList.push(_this.highlightsService.removeClipHighlight(_this.highlightUuid, clip.uuid));
                        });
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    HighlightClipsPage.prototype.updateClipOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promiseList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseList = [];
                        this.highlight.clips.forEach(function (clip) {
                            var highlightClip = new __WEBPACK_IMPORTED_MODULE_6__app_models_highlightclip_model__["a" /* HighlightClipModel */]();
                            highlightClip.clipOrder = clip.clipOrder;
                            highlightClip.duration = clip.duration;
                            highlightClip.slug = clip.slug;
                            highlightClip.startTime = clip.startTime;
                            highlightClip.uuid = clip.uuid;
                            var promise = _this.highlightsService.updateHighlightClip(_this.highlightUuid, highlightClip);
                            promiseList.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HighlightClipsPage.prototype.findClipIndex = function (clip) {
        var index = null;
        this.highlight.clips.forEach(function (c, i) {
            if (c.uuid === clip.uuid) {
                index = i;
            }
        });
        return index;
    };
    HighlightClipsPage.prototype.findClipWithIndex = function (index) {
        var clip = null;
        this.highlight.clips.forEach(function (c) {
            if (c.clipOrder === index) {
                clip = c;
            }
        });
        return clip;
    };
    HighlightClipsPage.prototype.sort = function (a, b) {
        return a.clipOrder - b.clipOrder;
    };
    HighlightClipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-highlightclips',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\highlightclips\highlightclips.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <ion-title *ngIf="highlight" align-title="left">{{highlight.name}}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button *ngIf="!isEditing" (click)="edit()">\n\n          EDIT\n\n        </button>\n\n        <button ion-button *ngIf="isEditing" (click)="save()">\n\n          SAVE\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list *ngIf="clipsReady | async">\n\n    <ion-item *ngFor="let clip of highlight.clips">\n\n      <ion-row>\n\n        <ion-col col-12><ion-thumbnail item-start>\n\n              <img src="{{clip.thumbnail}}">\n\n          </ion-thumbnail>\n\n        </ion-col>\n\n        \n\n        <ion-col col-12>\n\n          <p *ngIf="clip.broadcaster" class="title">{{clip.broadcaster.displayName}}</p>\n\n          <p>{{clip.title}}</p>\n\n          <p>{{clip.startTime | seconds}} - {{clip.startTime + clip.duration | seconds}} ({{clip.duration || clip.originalDuration}} seconds)</p>\n\n          <p>Clip added {{clip.createdAt | timeAgo}}</p>\n\n          <p>{{clip.description}}</p>\n\n          <div *ngIf="isEditing">\n\n            <button ion-button clear icon-only (click)="moveTop(clip)" [disabled]="clip.clipOrder === 0">\n\n              <ion-icon name=\'arrow-dropleft-circle\' is-active="false"></ion-icon>\n\n            </button>\n\n            <button ion-button clear icon-only (click)="moveUp(clip)" [disabled]="clip.clipOrder === 0">\n\n              <ion-icon name=\'arrow-dropleft\' is-active="false"></ion-icon>\n\n            </button>\n\n            <button ion-button clear icon-only (click)="moveDown(clip)" [disabled]="clip.clipOrder === highlight.clips.length - 1">\n\n              <ion-icon name=\'arrow-dropright\' is-active="false"></ion-icon>\n\n            </button>\n\n            <button ion-button clear icon-only (click)="moveBottom(clip)" [disabled]="clip.clipOrder === highlight.clips.length - 1">\n\n                <ion-icon name=\'arrow-dropright-circle\' is-active="false"></ion-icon>\n\n              </button>\n\n            <button ion-button clear icon-only (click)="remove(clip)">\n\n              <ion-icon name=\'trash\' is-active="false"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\highlightclips\highlightclips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_highlights_service__["a" /* HighlightsService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_clips_service__["a" /* ClipsService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__["a" /* ToastService */]])
    ], HighlightClipsPage);
    return HighlightClipsPage;
}());

//# sourceMappingURL=highlightclips.js.map

/***/ })

});
//# sourceMappingURL=7.js.map