webpackJsonp([10],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnail_thumbnail_component__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__channel_thumbnail_channel_thumbnail_component__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_stream_thumbnail_live_stream_thumbnail_component__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule_1 = ComponentModule;
    ComponentModule.forRoot = function () {
        return {
            ngModule: ComponentModule_1,
            providers: [],
        };
    };
    ComponentModule = ComponentModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__channel_thumbnail_channel_thumbnail_component__["a" /* ChannelThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__["a" /* FollowingChannelThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__live_stream_thumbnail_live_stream_thumbnail_component__["a" /* LiveStreamThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_2__thumbnail_thumbnail_component__["a" /* ThumbnailComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__channel_thumbnail_channel_thumbnail_component__["a" /* ChannelThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__["a" /* FollowingChannelThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__live_stream_thumbnail_live_stream_thumbnail_component__["a" /* LiveStreamThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_2__thumbnail_thumbnail_component__["a" /* ThumbnailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            providers: [],
        })
    ], ComponentModule);
    return ComponentModule;
    var ComponentModule_1;
}());

//# sourceMappingURL=component.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_highlight_model__ = __webpack_require__(768);
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





var HighlightsService = /** @class */ (function () {
    function HighlightsService(authService, restService) {
        this.authService = authService;
        this.restService = restService;
    }
    HighlightsService.prototype.addHighlightClip = function (uuid, highlightClip) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + uuid + "/clips");
                        highlightClip.highlightUuid = undefined;
                        return [2 /*return*/, this.restService.postProtected(url, authorization, JSON.stringify(highlightClip))];
                }
            });
        });
    };
    HighlightsService.prototype.create = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url, highlight;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/highlights";
                        highlight = new __WEBPACK_IMPORTED_MODULE_4__models_highlight_model__["a" /* HighlightModel */]();
                        highlight.name = name;
                        return [2 /*return*/, this.restService.postProtected(url, authorization, JSON.stringify(highlight))];
                }
            });
        });
    };
    /**
     * Generates the given highlight.
     *
     * @param uuid The highlight uuid.
     * @return A promise that the highlight is being generated.
     */
    HighlightsService.prototype.generate = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + uuid + "/generate");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    HighlightsService.prototype.getByUuid = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + uuid);
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    /**
     *
     * @param uuid
     */
    HighlightsService.prototype.getHighlightLinks = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + uuid + "/links");
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    HighlightsService.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/highlights";
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    /**
     *
     * @param uuid
     * @param highlightClip
     */
    HighlightsService.prototype.removeClipHighlight = function (uuid, highlightClipUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + uuid + "/clips/" + highlightClipUuid);
                        console.log(url);
                        return [2 /*return*/, this.restService.delete(url, authorization)];
                }
            });
        });
    };
    HighlightsService.prototype.updateHighlightClip = function (uuid, highlightClip) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + uuid + "/clips/" + highlightClip.uuid);
                        return [2 /*return*/, this.restService.postProtected(url, authorization, JSON.stringify(highlightClip))];
                }
            });
        });
    };
    HighlightsService.prototype.update = function (highlight) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/highlights/" + highlight.uuid);
                        return [2 /*return*/, this.restService.putProtected(url, authorization, JSON.stringify(highlight))];
                }
            });
        });
    };
    HighlightsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], HighlightsService);
    return HighlightsService;
}());

//# sourceMappingURL=highlights.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateHighlightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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


var CreateHighlightPage = /** @class */ (function () {
    function CreateHighlightPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    CreateHighlightPage.prototype.ngOnInit = function () {
    };
    CreateHighlightPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateHighlightPage.prototype.add = function () {
        this.viewCtrl.dismiss(this.highlightName);
    };
    CreateHighlightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createhighlight',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\createhighlight\createhighlight.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <ion-title align-title="left">New highlight</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Name</ion-label>\n\n      <ion-input [(ngModel)]="highlightName" placeholder="Name"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons end>\n\n    <button ion-button clear (click)="dismiss()">\n\n      CANCEL\n\n    </button>\n\n    <button ion-button clear [disabled]="!highlightName" (click)="add()">\n\n      ADD\n\n    </button>\n\n  </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\createhighlight\createhighlight.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CreateHighlightPage);
    return CreateHighlightPage;
}());

//# sourceMappingURL=createhighlight.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__ = __webpack_require__(29);
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




var ClipsService = /** @class */ (function () {
    function ClipsService(authService, restService) {
        this.authService = authService;
        this.restService = restService;
    }
    ClipsService.prototype.addComment = function (slug, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/" + slug + "/comments");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, JSON.stringify({ "comment": comment }))];
                }
            });
        });
    };
    ClipsService.prototype.getComments = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/" + slug + "/comments");
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ClipsService.prototype.getPublicInfo = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/" + slug + "/info");
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ClipsService.prototype.getBySlug = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + '/api/v1/clips/slug/' + slug;
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ClipsService.prototype.getFavorites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + '/api/v1/protected/clips/favorites';
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    ClipsService.prototype.getUserInfo = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/slug/" + slug + "/userinfo");
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    ClipsService.prototype.addFavorite = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/slug/" + slug + "/favorite");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    ClipsService.prototype.removeFavorite = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/slug/" + slug + "/unfavorite");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    ClipsService.prototype.like = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/" + slug + "/like");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    ClipsService.prototype.unlike = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/" + slug + "/unlike");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    ClipsService.prototype.getTrendingInitial = function (period, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getTrending(undefined, period, language)];
            });
        });
    };
    ClipsService.prototype.getTrending = function (cursor, period, language) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/trending?period=" + period + "&language=" + language);
                if (cursor) {
                    url += "&cursor=" + cursor;
                }
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ClipsService.prototype.getTrendingByChannel = function (channel, cursor, period) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/trending/channel/" + channel + "?period=" + period);
                if (cursor) {
                    url += "&cursor=" + cursor;
                }
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ClipsService.prototype.getTrendingByGame = function (game, cursor, period, language) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/trending/game/" + game + "?period=" + period + "&language=" + language);
                if (cursor) {
                    url += "&cursor=" + cursor;
                }
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ClipsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], ClipsService);
    return ClipsService;
}());

//# sourceMappingURL=clips.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthoritiesModelService; });
var AuthoritiesModelService = /** @class */ (function () {
    function AuthoritiesModelService() {
    }
    /**
    * Whether or not the user has the given authority.
    *
    * @param nane The authority name.
    */
    AuthoritiesModelService.prototype.hasAuthority = function (name) {
        return this.authorityList && this.authorityList.filter(function (authority) { return authority.name === name; }).length > 0;
    };
    AuthoritiesModelService.prototype.getAuthorityList = function () {
        return this.authorityList;
    };
    AuthoritiesModelService.prototype.setAuthorityList = function (authorityList) {
        this.authorityList = authorityList;
    };
    return AuthoritiesModelService;
}());

//# sourceMappingURL=authorities.model.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsersService = /** @class */ (function () {
    function UsersService() {
    }
    UsersService.prototype.getFollowingChannelsById = function (id) {
        var that = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/users/" + id + "/following");
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json' })
                .send()
                .end(function (resp) {
                if (resp && resp.body) {
                    if (typeof resp.body === 'string') {
                        resolve(JSON.parse(resp.body));
                    }
                    else {
                        resolve(resp.body);
                    }
                }
                else {
                    reject('no response');
                }
            });
        });
    };
    UsersService.prototype.getUsers = function (login) {
        var that = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/users?login=" + login);
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json' })
                .send()
                .end(function (resp) {
                if (resp && resp.body) {
                    if (typeof resp.body === 'string') {
                        resolve(JSON.parse(resp.body));
                    }
                    else {
                        resolve(resp.body);
                    }
                }
                else {
                    reject('no response');
                }
            });
        });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])()
    ], UsersService);
    return UsersService;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (new UsersService());
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addhighlightclip/addhighlightclip.module": [
		257
	],
	"../pages/channels/channels.module": [
		325
	],
	"../pages/clip-popover/clip-popover.module": [
		828,
		1
	],
	"../pages/clip/clip.module": [
		829,
		0
	],
	"../pages/createhighlight/createhighlight.module": [
		461
	],
	"../pages/favorite-clips/favorite-clips.module": [
		830,
		9
	],
	"../pages/feed/feed.module": [
		462
	],
	"../pages/filter-popover/filter-popover.module": [
		833,
		8
	],
	"../pages/following/following.module": [
		831,
		4
	],
	"../pages/games/games.module": [
		832,
		2
	],
	"../pages/highlightclips/highlightclips.module": [
		834,
		7
	],
	"../pages/highlights/highlights.module": [
		464
	],
	"../pages/profile/profile.module": [
		835,
		3
	],
	"../pages/trending-channel/trending-channel.module": [
		836,
		6
	],
	"../pages/trending-game/trending-game.module": [
		837,
		5
	],
	"../pages/trending/trending.module": [
		465
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHighlightClipPageModule", function() { return AddHighlightClipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addhighlightclip__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddHighlightClipPageModule = /** @class */ (function () {
    function AddHighlightClipPageModule() {
    }
    AddHighlightClipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addhighlightclip__["a" /* AddHighlightClipPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addhighlightclip__["a" /* AddHighlightClipPage */])
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__addhighlightclip__["a" /* AddHighlightClipPage */]
            ]
        })
    ], AddHighlightClipPageModule);
    return AddHighlightClipPageModule;
}());

//# sourceMappingURL=addhighlightclip.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiAddress: 'https://api.cliperino.com',
    authCallback: 'https://www.cliperino.com/#/authCallback',
    mobile: false,
    parent: 'www.cliperino.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractAuthenticationService; });
var AbstractAuthenticationService = /** @class */ (function () {
    function AbstractAuthenticationService() {
    }
    return AbstractAuthenticationService;
}());

//# sourceMappingURL=abstract-auth.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_service__ = __webpack_require__(38);
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


var LoggingService = /** @class */ (function () {
    function LoggingService(restService) {
        this.restService = restService;
    }
    LoggingService.prototype.logError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoggingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */]])
    ], LoggingService);
    return LoggingService;
}());

//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPageModule", function() { return ChannelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channels__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_pipes_pipes_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_channels_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_streams_service__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChannelsPageModule = /** @class */ (function () {
    function ChannelsPageModule() {
    }
    ChannelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_components_component_module__["a" /* ComponentModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_pipes_pipes_module__["a" /* PipesModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__app_services_channels_service__["a" /* ChannelsService */],
                __WEBPACK_IMPORTED_MODULE_6__app_services_streams_service__["a" /* StreamsService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */]
            ]
        })
    ], ChannelsPageModule);
    return ChannelsPageModule;
}());

//# sourceMappingURL=channels.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(38);
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



var StreamsService = /** @class */ (function () {
    function StreamsService(restService) {
        this.restService = restService;
    }
    /**
     * Gets live streams.
     */
    StreamsService.prototype.getLiveStreams = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + "/api/v1/streams";
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    StreamsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], StreamsService);
    return StreamsService;
}());

//# sourceMappingURL=streams.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);


var RestService = /** @class */ (function () {
    function RestService() {
    }
    RestService.prototype.delete = function (url, authorization) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["delete"](url)
                .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                _unwrapResponse(resp, resolve, reject);
            });
        });
    };
    RestService.prototype.get = function (url) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json' })
                .send()
                .end(function (resp) {
                _unwrapResponse(resp, resolve, reject);
            });
        });
    };
    RestService.prototype.getProtected = function (url, authorization) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                _unwrapResponse(resp, resolve, reject);
            });
        });
    };
    RestService.prototype.post = function (url, obj) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["post"](url)
                .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
                .send(obj)
                .end(function (resp) {
                _unwrapResponse(resp, resolve, reject);
            });
        });
    };
    RestService.prototype.postProtected = function (url, authorization, obj) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["post"](url)
                .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': authorization })
                .send(obj)
                .end(function (resp) {
                _unwrapResponse(resp, resolve, reject);
            });
        });
    };
    RestService.prototype.putProtected = function (url, authorization, obj) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["put"](url)
                .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': authorization })
                .send(obj)
                .end(function (resp) {
                _unwrapResponse(resp, resolve, reject);
            });
        });
    };
    return RestService;
}());

var _unwrapResponse = function (response, resolve, reject) {
    if (response.code === 404) {
        reject(new Error('HTTP URL not found.'));
    }
    else if (response.code === 401) {
        reject(new Error('User is not authorized.'));
    }
    else if (response && response.body) {
        var body = void 0;
        if (typeof response.body === 'string') {
            body = JSON.parse(response.body);
        }
        else {
            body = response.body;
        }
        if (body.success !== undefined && body.success === true) {
            if (typeof body.response === 'undefined') {
                body.response = {};
            }
            resolve(body.response);
        }
        else {
            reject(new Error(body.message || 'The response contains no message.'));
        }
    }
    else {
        reject(new Error('The response contains no body.'));
    }
};
//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Channel; });
var Channel = /** @class */ (function () {
    function Channel() {
    }
    return Channel;
}());

//# sourceMappingURL=channel.model.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHighlightPageModule", function() { return CreateHighlightPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createhighlight__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateHighlightPageModule = /** @class */ (function () {
    function CreateHighlightPageModule() {
    }
    CreateHighlightPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createhighlight__["a" /* CreateHighlightPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createhighlight__["a" /* CreateHighlightPage */])
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__createhighlight__["a" /* CreateHighlightPage */]
            ]
        })
    ], CreateHighlightPageModule);
    return CreateHighlightPageModule;
}());

//# sourceMappingURL=createhighlight.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_component_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_channels_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__feed__["a" /* FeedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__feed__["a" /* FeedPage */]),
                __WEBPACK_IMPORTED_MODULE_2__app_components_component_module__["a" /* ComponentModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_services_channels_service__["a" /* ChannelsService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__feed__["a" /* FeedPage */]
            ]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__ = __webpack_require__(29);
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




var FeedService = /** @class */ (function () {
    function FeedService(authService, restService) {
        this.authService = authService;
        this.restService = restService;
    }
    FeedService.prototype.getFeed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + '/api/v1/protected/feed';
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    FeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], FeedService);
    return FeedService;
}());

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightsPageModule", function() { return HighlightsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highlights__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HighlightsPageModule = /** @class */ (function () {
    function HighlightsPageModule() {
    }
    HighlightsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__highlights__["a" /* HighlightsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__highlights__["a" /* HighlightsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__highlights__["a" /* HighlightsPage */]
            ]
        })
    ], HighlightsPageModule);
    return HighlightsPageModule;
}());

//# sourceMappingURL=highlights.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function() { return TrendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trending__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrendingPageModule = /** @class */ (function () {
    function TrendingPageModule() {
    }
    TrendingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trending__["a" /* TrendingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trending__["a" /* TrendingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__["a" /* ComponentModule */].forRoot()
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__trending__["a" /* TrendingPage */]
            ]
        })
    ], TrendingPageModule);
    return TrendingPageModule;
}());

//# sourceMappingURL=trending.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_equal__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_array_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_localStorage_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_loader_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_toast_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_abstract_auth_service__ = __webpack_require__(29);
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





var TrendingPage = /** @class */ (function () {
    function TrendingPage(navCtrl, _sanitizer, _ngZone, navParams, popoverCtrl, 
        /* Services */
        authService, clipsService, loaderService, localStorageService, toastService) {
        this.navCtrl = navCtrl;
        this._sanitizer = _sanitizer;
        this._ngZone = _ngZone;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.clipsService = clipsService;
        this.loaderService = loaderService;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        this.showMore = true;
        this.period = "day";
        this.languages = [];
        this.filterCategories = true;
        this.nonGamingCategories = [
            'Just Chatting',
            'Music & Performing Arts',
            'Talk Shows & Podcasts',
            'ASMR',
            'VRChat',
            'Art'
        ];
        this.clips = [];
        this.sanitizer = _sanitizer;
        this.ngZone = _ngZone;
    }
    TrendingPage.prototype.ngOnInit = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.localStorageService.getItem("trending-period")];
                    case 1:
                        _a.period = (_e.sent()) || "day";
                        _b = this;
                        _d = (_c = JSON).parse;
                        return [4 /*yield*/, this.localStorageService.getItem("trending-languages")];
                    case 2:
                        _b.languages = _d.apply(_c, [_e.sent()]) || [];
                        this.getTrendingClips(this.cursor, false);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    TrendingPage.prototype.getTrendingClips = function (cursor, refresh) {
        var that = this;
        var promise;
        if (cursor) {
            promise = this.clipsService.getTrending(cursor, this.period, this.languages.join(','));
        }
        else {
            promise = this.clipsService.getTrendingInitial(this.period, this.languages.join(','));
        }
        promise.then(function (trendingClips) {
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
                    if (that.filterCategories) {
                        if (!that.nonGamingCategories.find(function (g) { return g === clip.game; })) {
                            that.clips.push(clip);
                        }
                    }
                    else {
                        that.clips.push(clip);
                    }
                });
                that.cursor = trendingClips.cursor;
                that.showMore = !!that.cursor;
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    TrendingPage.prototype.more = function () {
        this.getTrendingClips(this.cursor, false);
    };
    TrendingPage.prototype.goToClip = function (slug) {
        this.navCtrl.push('clip', { slug: slug });
    };
    TrendingPage.prototype.presentPopover = function (myEvent) {
        var that = this;
        var popoverOptions = {};
        popoverOptions.enableBackdropDismiss = true;
        var popover = this.popoverCtrl.create('filter-popover', {
            period: that.period,
            languages: that.languages,
            filterCategories: that.filterCategories
        }, popoverOptions);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(this.refreshData.bind(that));
    };
    TrendingPage.prototype.refreshData = function (data) {
        if (!data)
            return;
        var that = this;
        var oldPeriod = this.period;
        var oldLanguages = this.languages;
        var oldFilterCategories = this.filterCategories;
        this.period = data.period;
        this.languages = data.languages;
        this.filterCategories = data.filterCategories;
        localStorage.setItem("trending-period", data.period);
        localStorage.setItem("trending-languages", JSON.stringify(data.languages));
        localStorage.setItem("trending-filtercategories", data.filterCategories);
        if (!(oldPeriod === data.period && __WEBPACK_IMPORTED_MODULE_3_array_equal__(oldLanguages, data.languages) && oldFilterCategories === data.filterCategories)) {
            that.getTrendingClips(undefined, true);
        }
    };
    TrendingPage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    TrendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trending',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending\trending.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">Trending</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="presentPopover($event);">\n\n          <ion-icon ios="ios-funnel" md="ios-funnel"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-grid>\n\n      <ion-row justify-content-center>\n\n         <div style="max-width: 100%" *ngFor="let clip of clips">\n\n            <thumbnail-component [clip]="clip"></thumbnail-component>\n\n         </div>\n\n         <!-- <div style="width: 280px; height: 260px;"></div>\n\n         <div style="width: 280px; height: 260px;"></div> -->\n\n      </ion-row>\n\n   </ion-grid>\n\n   <ion-row justify-content-center *ngIf="clips.length && showMore">\n\n     <button (click)="more()" ion-button clear>MORE</button>\n\n   </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending\trending.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__app_services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__["a" /* ClipsService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_7__app_services_toast_service__["a" /* ToastService */]])
    ], TrendingPage);
    return TrendingPage;
}());

//# sourceMappingURL=trending.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthoritiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__ = __webpack_require__(29);
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




var AuthoritiesService = /** @class */ (function () {
    function AuthoritiesService(authService, restService) {
        this.authService = authService;
        this.restService = restService;
    }
    /**
     * Gets the authorities list.
     */
    AuthoritiesService.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/authorities";
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    AuthoritiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], AuthoritiesService);
    return AuthoritiesService;
}());

//# sourceMappingURL=authorities.service.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHighlightClipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_highlights_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_highlightclip_model__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createhighlight_createhighlight__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__ = __webpack_require__(56);
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






var AddHighlightClipPage = /** @class */ (function () {
    function AddHighlightClipPage(highlightsService, viewCtrl, modalCtrl, toastService) {
        this.highlightsService = highlightsService;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
    }
    AddHighlightClipPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.selectOptions = {
                            title: 'Select the highlight',
                            subTitle: undefined,
                            mode: 'md'
                        };
                        this.startTime = "00";
                        if (this.viewCtrl.data.duration) {
                            this.duration = Math.floor(this.viewCtrl.data.duration).toString();
                        }
                        _a = this;
                        return [4 /*yield*/, this.highlightsService.getList()];
                    case 1:
                        _a.highlights = _b.sent();
                        this.highlights = this.highlights.sort(function (a, b) {
                            if (a.createdAt < b.createdAt) {
                                return 1;
                            }
                            else if (a.createdAt === b.createdAt) {
                                return 0;
                            }
                            else {
                                return -1;
                            }
                        });
                        /* Most recent highlight is selected by default */
                        this.selectedHighlight = this.highlights[0];
                        /* Set clip title as default description */
                        this.description = this.viewCtrl.data.title;
                        return [2 /*return*/, this.highlights];
                }
            });
        });
    };
    AddHighlightClipPage.prototype.add = function () {
        var highlightClip = new __WEBPACK_IMPORTED_MODULE_3__app_models_highlightclip_model__["a" /* HighlightClipModel */]();
        highlightClip.description = this.description;
        highlightClip.duration = parseInt(this.duration);
        highlightClip.startTime = parseInt(this.startTime);
        highlightClip.highlightUuid = this.selectedHighlight.uuid;
        this.viewCtrl.dismiss(highlightClip);
    };
    AddHighlightClipPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddHighlightClipPage.prototype.createHighlight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myModal;
            return __generator(this, function (_a) {
                myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__createhighlight_createhighlight__["a" /* CreateHighlightPage */]);
                myModal.onDidDismiss(this.onCreateHighlightDismiss.bind(this));
                myModal.present();
                return [2 /*return*/];
            });
        });
    };
    AddHighlightClipPage.prototype.onCreateHighlightDismiss = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var promise, highlight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data) return [3 /*break*/, 2];
                        promise = this.highlightsService.create(data);
                        this.toastService.onFailure(promise);
                        return [4 /*yield*/, promise];
                    case 1:
                        highlight = _a.sent();
                        this.toastService.show('Highlight created.');
                        this.highlights.push(highlight);
                        this.selectedHighlight = highlight;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddHighlightClipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addhighlightclip',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\addhighlightclip\addhighlightclip.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <ion-title align-title="left">Add clip to highlight</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Highlight</ion-label>\n\n      <ion-select [selectOptions]="selectOptions" [(ngModel)]="selectedHighlight">\n\n        <ion-option *ngFor="let highlight of highlights" [value]="highlight">{{highlight.name}}</ion-option>\n\n      </ion-select>\n\n\n\n\n\n    </ion-item>\n\n    <button ion-button clear icon-only (click)="createHighlight()">\n\n      <ion-icon name=\'add\' is-active="false"></ion-icon>\n\n      NEW HIGHLIGHT\n\n    </button>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Start time</ion-label>\n\n      <ion-input [(ngModel)]="startTime" placeholder="Start time"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Duration</ion-label>\n\n      <ion-input [(ngModel)]="duration" placeholder="Duration"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Description</ion-label>\n\n      <ion-textarea style="resize: none;" rows="4" [(ngModel)]="description" placeholder="Description"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons end>\n\n    <button ion-button clear (click)="dismiss()">\n\n      CANCEL\n\n    </button>\n\n  \n\n    <button ion-button clear [disabled]="!selectedHighlight || !startTime || !duration" (click)="add()">\n\n      ADD\n\n    </button>\n\n  </ion-buttons>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\addhighlightclip\addhighlightclip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_highlights_service__["a" /* HighlightsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__["a" /* ToastService */]])
    ], AddHighlightClipPage);
    return AddHighlightClipPage;
}());

//# sourceMappingURL=addhighlightclip.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightClipModel; });
var HighlightClipModel = /** @class */ (function () {
    function HighlightClipModel() {
    }
    return HighlightClipModel;
}());

//# sourceMappingURL=highlightclip.model.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GamesService = /** @class */ (function () {
    function GamesService() {
    }
    GamesService.prototype.getTop = function () {
        var that = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + '/api/v1/games/top';
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json' })
                .send()
                .end(function (resp) {
                if (resp && resp.body) {
                    if (typeof resp.body === 'string') {
                        var body = JSON.parse(resp.body);
                        resolve(body.top);
                    }
                    else {
                        resolve(resp.body.top);
                    }
                }
                else {
                    reject('no response');
                }
            });
        });
    };
    GamesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])()
    ], GamesService);
    return GamesService;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (new GamesService());
//# sourceMappingURL=games.service.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(28);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trending_trending_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clips_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_games_service__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_users_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mobile_auth_service__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_localStorage_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_loader_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toast_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_abstract_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_web_auth_service__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_highlights_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_highlights_highlights_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_createhighlight_createhighlight_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_addhighlightclip_addhighlightclip_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_logging_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_authorities_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_authorities_model_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_channels_channels_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_channels_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_current_channel_store_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_feed_feed_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_feed_service__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    iconMode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/addhighlightclip/addhighlightclip.module#AddHighlightClipPageModule', name: 'addhighlightclip', segment: 'addhighlightclip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/channels/channels.module#ChannelsPageModule', name: 'channels', segment: 'channels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clip-popover/clip-popover.module#ClipPopoverPageModule', name: 'clip-popover', segment: 'clip-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clip/clip.module#ClipPageModule', name: 'clip', segment: 'clip/:slug', priority: 'low', defaultHistory: ['trending'] },
                        { loadChildren: '../pages/createhighlight/createhighlight.module#CreateHighlightPageModule', name: 'createhighlight', segment: 'createhighlight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-clips/favorite-clips.module#FavoriteClipsPageModule', name: 'favorite-clips', segment: 'favorite-clips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'feed', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'following', segment: 'following', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'games', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-popover/filter-popover.module#FilterPopoverPageModule', name: 'filter-popover', segment: 'filter-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/highlightclips/highlightclips.module#HighlightClipsPageModule', name: 'highlightclips', segment: 'highlightclips/:highlight', priority: 'low', defaultHistory: ['highlights'] },
                        { loadChildren: '../pages/highlights/highlights.module#HighlightsPageModule', name: 'highlights', segment: 'highlights', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trending-channel/trending-channel.module#TrendingChannelPageModule', name: 'trending-channel', segment: 'trending/channel/:channel', priority: 'low', defaultHistory: ['channels'] },
                        { loadChildren: '../pages/trending-game/trending-game.module#TrendingGamePageModule', name: 'trending-game', segment: 'trending/game/:game', priority: 'low', defaultHistory: ['games'] },
                        { loadChildren: '../pages/trending/trending.module#TrendingPageModule', name: 'trending', segment: 'trending', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__pages_addhighlightclip_addhighlightclip_module__["AddHighlightClipPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_trending_trending_module__["TrendingPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_highlights_highlights_module__["HighlightsPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_createhighlight_createhighlight_module__["CreateHighlightPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_channels_channels_module__["ChannelsPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_feed_feed_module__["FeedPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_16__services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].mobile ? __WEBPACK_IMPORTED_MODULE_10__services_mobile_auth_service__["a" /* MobileAuthenticationService */] : __WEBPACK_IMPORTED_MODULE_18__services_web_auth_service__["a" /* WebAuthenticationService */]
                },
                __WEBPACK_IMPORTED_MODULE_26__services_authorities_model_service__["a" /* AuthoritiesModelService */],
                __WEBPACK_IMPORTED_MODULE_25__services_authorities_service__["a" /* AuthoritiesService */],
                __WEBPACK_IMPORTED_MODULE_28__services_channels_service__["a" /* ChannelsService */],
                __WEBPACK_IMPORTED_MODULE_7__services_clips_service__["a" /* ClipsService */],
                __WEBPACK_IMPORTED_MODULE_31__services_feed_service__["a" /* FeedService */],
                __WEBPACK_IMPORTED_MODULE_8__services_games_service__["a" /* GamesService */],
                __WEBPACK_IMPORTED_MODULE_20__services_highlights_service__["a" /* HighlightsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_24__services_logging_service__["a" /* LoggingService */],
                __WEBPACK_IMPORTED_MODULE_11__services_localStorage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_14__services_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_13__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_9__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                /* Stores */
                __WEBPACK_IMPORTED_MODULE_29__services_current_channel_store_service__["a" /* CurrentChannelStoreService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_service__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_ERROR_MESSAGE = 'An error occurred.';
var ToastService = /** @class */ (function () {
    function ToastService(loggingService, toastCtrl) {
        this.loggingService = loggingService;
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.show = function (message) {
        var toastOptions = {};
        toastOptions.message = message;
        toastOptions.duration = 3000;
        var toast = this.toastCtrl.create(toastOptions);
        toast.present();
    };
    ToastService.prototype.onSuccess = function (promise, message) {
        var that = this;
        promise.then(function () {
            var toastOptions = {};
            toastOptions.message = message;
            toastOptions.duration = 3000;
            var toast = that.toastCtrl.create(toastOptions);
            toast.present();
        });
    };
    ToastService.prototype.onFailure = function (promise, message) {
        var that = this;
        message = message || DEFAULT_ERROR_MESSAGE;
        promise.catch(function (err) {
            console.error(err.message);
            that.loggingService.logError(err.message);
            var toastOptions = {};
            toastOptions.message = message;
            toastOptions.duration = 3000;
            var toast = that.toastCtrl.create(toastOptions);
            toast.present();
        });
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__logging_service__["a" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoaderService.prototype.show = function (promise) {
        var that = this;
        var loadingOptions = {};
        loadingOptions.showBackdrop = false;
        var loader = this.loadingCtrl.create(loadingOptions);
        loader.present();
        promise.then(function () {
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], LoaderService);
    return LoaderService;
}());

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorite_clips_sort_pipe__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_time_ago_pipe__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_pipe__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__capitalize_pipe__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_comments_pipe__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__seconds_pipe__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__highlight_clips_sort_pipe__ = __webpack_require__(779);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    PipesModule = PipesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_1__favorite_clips_sort_pipe__["a" /* FavoriteClipsPipe */],
                __WEBPACK_IMPORTED_MODULE_7__highlight_clips_sort_pipe__["a" /* HighlightClipsSortPipe */],
                __WEBPACK_IMPORTED_MODULE_5__user_comments_pipe__["a" /* UserCommentsPipe */],
                __WEBPACK_IMPORTED_MODULE_3__views_pipe__["a" /* ViewsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__seconds_pipe__["a" /* SecondsPipe */],
                __WEBPACK_IMPORTED_MODULE_2_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_1__favorite_clips_sort_pipe__["a" /* FavoriteClipsPipe */],
                __WEBPACK_IMPORTED_MODULE_7__highlight_clips_sort_pipe__["a" /* HighlightClipsSortPipe */],
                __WEBPACK_IMPORTED_MODULE_5__user_comments_pipe__["a" /* UserCommentsPipe */],
                __WEBPACK_IMPORTED_MODULE_3__views_pipe__["a" /* ViewsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__seconds_pipe__["a" /* SecondsPipe */],
                __WEBPACK_IMPORTED_MODULE_2_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            imports: [],
            providers: [],
        })
    ], PipesModule);
    return PipesModule;
    var PipesModule_1;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(460);
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



/**
 * Local storage service. Uses ionic storage or local storage depending on environment.
 */
var LocalStorageService = /** @class */ (function () {
    /**
     * The constructor.
     *
     * @param storage Ionic storage.
     */
    function LocalStorageService(storage) {
        this.storage = storage;
    }
    /**
     * Gets an item in ionic storage or local storage depending on environment.
     *
     * @param key The key.
     * @return The promise of the stored value.
     */
    LocalStorageService.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].mobile) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.get(key)];
                    case 1:
                        value = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        value = localStorage.getItem(key);
                        _a.label = 3;
                    case 3: return [2 /*return*/, value];
                }
            });
        });
    };
    /**
     * Sets an item in ionic storage or local storage depending on environment.
     *
     * @param key The key.
     * @param data The data.
     */
    LocalStorageService.prototype.setItem = function (key, data) {
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].mobile) {
            this.storage.set(key, data);
        }
        else {
            localStorage.setItem(key, data);
        }
    };
    LocalStorageService.prototype.removeItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].mobile) {
                    this.storage.remove(key);
                }
                else {
                    localStorage.removeItem(key);
                }
                return [2 /*return*/, true];
            });
        });
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=localStorage.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentChannelStoreService; });
var CurrentChannelStoreService = /** @class */ (function () {
    function CurrentChannelStoreService() {
    }
    CurrentChannelStoreService.prototype.setId = function (id) {
        this.id = id;
    };
    CurrentChannelStoreService.prototype.getId = function () {
        return this.id;
    };
    CurrentChannelStoreService.prototype.setName = function (name) {
        this.name = name;
    };
    CurrentChannelStoreService.prototype.getName = function () {
        return this.name;
    };
    return CurrentChannelStoreService;
}());

//# sourceMappingURL=current-channel.store.service.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModel; });
var HighlightModel = /** @class */ (function () {
    function HighlightModel() {
    }
    return HighlightModel;
}());

//# sourceMappingURL=highlight.model.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_channels_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_abstract_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_loader_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_streams_service__ = __webpack_require__(326);
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
var ChannelsPage = /** @class */ (function () {
    function ChannelsPage(channelsService, loaderService, authService, streamsService, toastService) {
        this.channelsService = channelsService;
        this.loaderService = loaderService;
        this.authService = authService;
        this.streamsService = streamsService;
        this.toastService = toastService;
        this.channels = [];
        this.favoriteChannels = [];
        this.favoriteChannelsLoading = true;
        this.liveStreams = [];
    }
    ChannelsPage.prototype.ngOnInit = function () {
        this.getFavorites();
        this.getLiveStreams();
    };
    ChannelsPage.prototype.getLiveStreams = function () {
        return __awaiter(this, void 0, void 0, function () {
            var liveStreams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.streamsService.getLiveStreams()];
                    case 1:
                        liveStreams = _a.sent();
                        this.liveStreams = liveStreams.streams;
                        return [2 /*return*/];
                }
            });
        });
    };
    ChannelsPage.prototype.getFavorites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promise, channels, promises_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = null;
                        this.favoriteChannelsLoading = true;
                        if (!this.authService.loggedIn) return [3 /*break*/, 2];
                        promise = this.channelsService.getFavorites();
                        return [4 /*yield*/, promise];
                    case 1:
                        channels = _a.sent();
                        promises_1 = [];
                        channels.forEach(function (channel) {
                            promises_1.push(_this.getChannel(channel));
                        });
                        Promise.all(promises_1).then(function () {
                            _this.favoriteChannelsLoading = false;
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        promise = Promise.resolve();
                        _a.label = 3;
                    case 3:
                        this.toastService.onFailure(promise);
                        this.loaderService.show(promise);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChannelsPage.prototype.getChannel = function (channel) {
        return __awaiter(this, void 0, void 0, function () {
            var promise, twitchChannel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = this.channelsService.getById(channel.channelId);
                        return [4 /*yield*/, promise];
                    case 1:
                        twitchChannel = _a.sent();
                        this.favoriteChannels.push(twitchChannel);
                        return [2 /*return*/, twitchChannel];
                }
            });
        });
    };
    ChannelsPage.prototype.favorite = function (channel) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = this.channelsService.addFavorite(channel._id);
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        this.toastService.onFailure(promise);
                        this.toastService.show("Added channel to favorites.");
                        this.favoriteChannels.push(channel);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    ChannelsPage.prototype.unfavorite = function (channel) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var promise, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = this.channelsService.removeFavorite(channel._id);
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        this.toastService.onFailure(promise);
                        this.toastService.show("Removed channel from favorites.");
                        index = this.favoriteChannels.findIndex(function (el) { return el._id === channel._id; });
                        this.favoriteChannels.splice(index, 1);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    ChannelsPage.prototype.onInput = function () {
        var _this = this;
        if (this.searchValue) {
            var promise = this.channelsService.search(this.searchValue);
            this.toastService.onFailure(promise);
            promise.then(function (channels) {
                _this.channels = channels.channels;
            });
        }
        else {
            this.channels = [];
        }
    };
    ChannelsPage.prototype.onCancel = function () {
    };
    ChannelsPage.prototype.isInFavorites = function (channel) {
        return !!this.favoriteChannels.find(function (favoriteChannel) {
            return channel._id == favoriteChannel._id;
        });
    };
    ChannelsPage.prototype.refresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.favoriteChannels = [];
                        this.liveStreams = [];
                        return [4 /*yield*/, this.getFavorites()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getLiveStreams()];
                    case 2:
                        _a.sent();
                        refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChannelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-channels',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\channels\channels.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align-title="left">Channels</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n  </ion-refresher>\n\n  <h5>Search</h5>\n\n  <ion-searchbar [(ngModel)]="searchValue" [debounce]="250" [showCancelButton]="true" (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  <ion-list>\n\n    <div *ngFor="let channel of channels">\n\n      <channel-thumbnail-component [isFavorite]="isInFavorites(channel)" (unfavorite)="unfavorite(channel)"\n\n        (favorite)="favorite(channel)" [channel]="channel">\n\n      </channel-thumbnail-component>\n\n    </div>\n\n  </ion-list>\n\n\n\n  <h5>Favorites</h5>\n\n  <p *ngIf="!authService.loggedIn">You must log in to be able to add channels to your favorites.</p>\n\n  <div *ngIf="authService.loggedIn">\n\n    <p *ngIf="favoriteChannelsLoading === false && !favoriteChannels.length">There are no channels in your favorites.\n\n      Swipe left on any channel to add or remove it from the favorites. You can also search for channels with the search\n\n      bar.</p>\n\n    <ion-list>\n\n      <div *ngFor="let channel of favoriteChannels">\n\n        <channel-thumbnail-component [isFavorite]="true" (unfavorite)="unfavorite(channel)" [channel]="channel">\n\n        </channel-thumbnail-component>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n  <h5>Discover</h5>\n\n  <ion-list>\n\n    <div *ngFor="let stream of liveStreams">\n\n      <live-stream-thumbnail-component [isFavorite]="isInFavorites(stream.channel)"\n\n        (unfavorite)="unfavorite(stream.channel)" (favorite)="favorite(stream.channel)" [stream]="stream">\n\n      </live-stream-thumbnail-component>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\channels\channels.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_channels_service__["a" /* ChannelsService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_streams_service__["a" /* StreamsService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */]])
    ], ChannelsPage);
    return ChannelsPage;
}());

//# sourceMappingURL=channels.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_clip_model__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_current_channel_store_service__ = __webpack_require__(75);
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




var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(navCtrl, 
        /* Stores*/
        currentChannelStoreService) {
        this.navCtrl = navCtrl;
        this.currentChannelStoreService = currentChannelStoreService;
        this.onFavoriteRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ThumbnailComponent.prototype.goToClip = function (slug) {
        this.navCtrl.push('clip', { slug: slug });
    };
    ThumbnailComponent.prototype.goToChannel = function () {
        var that = this;
        this.currentChannelStoreService.setId(that.clip.broadcaster.id);
        this.currentChannelStoreService.setName(that.clip.broadcaster.displayName);
        that.navCtrl.push('trending-channel', { channel: that.clip.broadcaster.displayName });
    };
    ThumbnailComponent.prototype.removeFavorite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.onFavoriteRemoved.emit(this.clip);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_clip_model__["a" /* Clip */])
    ], ThumbnailComponent.prototype, "clip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ThumbnailComponent.prototype, "allowRemoveFavorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "onFavoriteRemoved", void 0);
    ThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\thumbnail\thumbnail.component.html"*/'<ion-card class="max-width no-margin-xs" style="cursor: pointer; max-width: 480px;" (click)="goToClip(clip.slug)">\n\n   <img src="{{clip.thumbnails.medium}}" />\n\n   <ion-row>\n\n      <ion-col col-9>\n\n         <ion-item style="padding-left: 3px;">\n\n            <ion-avatar style="margin-right: 10px;" item-start (click)="$event.stopPropagation(); goToChannel();">\n\n               <img src="{{clip.broadcaster.logo}}">\n\n            </ion-avatar>\n\n            <p ion-text color="light" style="font-weight:bold;">{{clip.title}}</p>\n\n            <p>{{clip.broadcaster.displayName}}</p>\n\n            <p>{{clip.views | views}} views &#183; {{clip.createdAt | timeAgo}}</p>\n\n         </ion-item>\n\n      </ion-col>\n\n      <ion-col *ngIf="allowRemoveFavorite">\n\n         <ion-item>\n\n            <button ion-button clear icon-only (click)="removeFavorite(); $event.stopPropagation();">\n\n               <ion-icon name=\'star\' is-active="false"></ion-icon>\n\n            </button>\n\n         </ion-item>\n\n      </ion-col>\n\n   </ion-row>\n\n</ion-card>'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\thumbnail\thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_current_channel_store_service__["a" /* CurrentChannelStoreService */]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());

//# sourceMappingURL=thumbnail.component.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clip; });
var Clip = /** @class */ (function () {
    function Clip() {
    }
    return Clip;
}());

//# sourceMappingURL=clip.model.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteClipsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FavoriteClipsPipe = /** @class */ (function () {
    function FavoriteClipsPipe() {
    }
    FavoriteClipsPipe.prototype.transform = function (array) {
        array.sort(function (a, b) {
            var aMoment = __WEBPACK_IMPORTED_MODULE_1_moment__(a.createdAt, 'YYYY-MM-DD HH:mm:ss');
            var bMoment = __WEBPACK_IMPORTED_MODULE_1_moment__(b.createdAt, 'YYYY-MM-DD HH:mm:ss');
            return bMoment.diff(aMoment);
        });
        return array;
    };
    FavoriteClipsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'favoriteClipsSort'
        })
    ], FavoriteClipsPipe);
    return FavoriteClipsPipe;
}());

//# sourceMappingURL=favorite-clips-sort.pipe.js.map

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 327,
	"./af.js": 327,
	"./ar": 328,
	"./ar-dz": 329,
	"./ar-dz.js": 329,
	"./ar-kw": 330,
	"./ar-kw.js": 330,
	"./ar-ly": 331,
	"./ar-ly.js": 331,
	"./ar-ma": 332,
	"./ar-ma.js": 332,
	"./ar-sa": 333,
	"./ar-sa.js": 333,
	"./ar-tn": 334,
	"./ar-tn.js": 334,
	"./ar.js": 328,
	"./az": 335,
	"./az.js": 335,
	"./be": 336,
	"./be.js": 336,
	"./bg": 337,
	"./bg.js": 337,
	"./bm": 338,
	"./bm.js": 338,
	"./bn": 339,
	"./bn.js": 339,
	"./bo": 340,
	"./bo.js": 340,
	"./br": 341,
	"./br.js": 341,
	"./bs": 342,
	"./bs.js": 342,
	"./ca": 343,
	"./ca.js": 343,
	"./cs": 344,
	"./cs.js": 344,
	"./cv": 345,
	"./cv.js": 345,
	"./cy": 346,
	"./cy.js": 346,
	"./da": 347,
	"./da.js": 347,
	"./de": 348,
	"./de-at": 349,
	"./de-at.js": 349,
	"./de-ch": 350,
	"./de-ch.js": 350,
	"./de.js": 348,
	"./dv": 351,
	"./dv.js": 351,
	"./el": 352,
	"./el.js": 352,
	"./en-au": 353,
	"./en-au.js": 353,
	"./en-ca": 354,
	"./en-ca.js": 354,
	"./en-gb": 355,
	"./en-gb.js": 355,
	"./en-ie": 356,
	"./en-ie.js": 356,
	"./en-il": 357,
	"./en-il.js": 357,
	"./en-in": 358,
	"./en-in.js": 358,
	"./en-nz": 359,
	"./en-nz.js": 359,
	"./en-sg": 360,
	"./en-sg.js": 360,
	"./eo": 361,
	"./eo.js": 361,
	"./es": 362,
	"./es-do": 363,
	"./es-do.js": 363,
	"./es-us": 364,
	"./es-us.js": 364,
	"./es.js": 362,
	"./et": 365,
	"./et.js": 365,
	"./eu": 366,
	"./eu.js": 366,
	"./fa": 367,
	"./fa.js": 367,
	"./fi": 368,
	"./fi.js": 368,
	"./fil": 369,
	"./fil.js": 369,
	"./fo": 370,
	"./fo.js": 370,
	"./fr": 371,
	"./fr-ca": 372,
	"./fr-ca.js": 372,
	"./fr-ch": 373,
	"./fr-ch.js": 373,
	"./fr.js": 371,
	"./fy": 374,
	"./fy.js": 374,
	"./ga": 375,
	"./ga.js": 375,
	"./gd": 376,
	"./gd.js": 376,
	"./gl": 377,
	"./gl.js": 377,
	"./gom-deva": 378,
	"./gom-deva.js": 378,
	"./gom-latn": 379,
	"./gom-latn.js": 379,
	"./gu": 380,
	"./gu.js": 380,
	"./he": 381,
	"./he.js": 381,
	"./hi": 382,
	"./hi.js": 382,
	"./hr": 383,
	"./hr.js": 383,
	"./hu": 384,
	"./hu.js": 384,
	"./hy-am": 385,
	"./hy-am.js": 385,
	"./id": 386,
	"./id.js": 386,
	"./is": 387,
	"./is.js": 387,
	"./it": 388,
	"./it-ch": 389,
	"./it-ch.js": 389,
	"./it.js": 388,
	"./ja": 390,
	"./ja.js": 390,
	"./jv": 391,
	"./jv.js": 391,
	"./ka": 392,
	"./ka.js": 392,
	"./kk": 393,
	"./kk.js": 393,
	"./km": 394,
	"./km.js": 394,
	"./kn": 395,
	"./kn.js": 395,
	"./ko": 396,
	"./ko.js": 396,
	"./ku": 397,
	"./ku.js": 397,
	"./ky": 398,
	"./ky.js": 398,
	"./lb": 399,
	"./lb.js": 399,
	"./lo": 400,
	"./lo.js": 400,
	"./lt": 401,
	"./lt.js": 401,
	"./lv": 402,
	"./lv.js": 402,
	"./me": 403,
	"./me.js": 403,
	"./mi": 404,
	"./mi.js": 404,
	"./mk": 405,
	"./mk.js": 405,
	"./ml": 406,
	"./ml.js": 406,
	"./mn": 407,
	"./mn.js": 407,
	"./mr": 408,
	"./mr.js": 408,
	"./ms": 409,
	"./ms-my": 410,
	"./ms-my.js": 410,
	"./ms.js": 409,
	"./mt": 411,
	"./mt.js": 411,
	"./my": 412,
	"./my.js": 412,
	"./nb": 413,
	"./nb.js": 413,
	"./ne": 414,
	"./ne.js": 414,
	"./nl": 415,
	"./nl-be": 416,
	"./nl-be.js": 416,
	"./nl.js": 415,
	"./nn": 417,
	"./nn.js": 417,
	"./oc-lnc": 418,
	"./oc-lnc.js": 418,
	"./pa-in": 419,
	"./pa-in.js": 419,
	"./pl": 420,
	"./pl.js": 420,
	"./pt": 421,
	"./pt-br": 422,
	"./pt-br.js": 422,
	"./pt.js": 421,
	"./ro": 423,
	"./ro.js": 423,
	"./ru": 424,
	"./ru.js": 424,
	"./sd": 425,
	"./sd.js": 425,
	"./se": 426,
	"./se.js": 426,
	"./si": 427,
	"./si.js": 427,
	"./sk": 428,
	"./sk.js": 428,
	"./sl": 429,
	"./sl.js": 429,
	"./sq": 430,
	"./sq.js": 430,
	"./sr": 431,
	"./sr-cyrl": 432,
	"./sr-cyrl.js": 432,
	"./sr.js": 431,
	"./ss": 433,
	"./ss.js": 433,
	"./sv": 434,
	"./sv.js": 434,
	"./sw": 435,
	"./sw.js": 435,
	"./ta": 436,
	"./ta.js": 436,
	"./te": 437,
	"./te.js": 437,
	"./tet": 438,
	"./tet.js": 438,
	"./tg": 439,
	"./tg.js": 439,
	"./th": 440,
	"./th.js": 440,
	"./tl-ph": 441,
	"./tl-ph.js": 441,
	"./tlh": 442,
	"./tlh.js": 442,
	"./tr": 443,
	"./tr.js": 443,
	"./tzl": 444,
	"./tzl.js": 444,
	"./tzm": 445,
	"./tzm-latn": 446,
	"./tzm-latn.js": 446,
	"./tzm.js": 445,
	"./ug-cn": 447,
	"./ug-cn.js": 447,
	"./uk": 448,
	"./uk.js": 448,
	"./ur": 449,
	"./ur.js": 449,
	"./uz": 450,
	"./uz-latn": 451,
	"./uz-latn.js": 451,
	"./uz.js": 450,
	"./vi": 452,
	"./vi.js": 452,
	"./x-pseudo": 453,
	"./x-pseudo.js": 453,
	"./yo": 454,
	"./yo.js": 454,
	"./zh-cn": 455,
	"./zh-cn.js": 455,
	"./zh-hk": 456,
	"./zh-hk.js": 456,
	"./zh-mo": 457,
	"./zh-mo.js": 457,
	"./zh-tw": 458,
	"./zh-tw.js": 458
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 773;

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(63);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ViewsPipe = /** @class */ (function (_super) {
    __extends(ViewsPipe, _super);
    function ViewsPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewsPipe.prototype.transform = function (value) {
        var divider = 1;
        var format = "1.0-0";
        var letter = '';
        value = value || 0;
        if (value > 1000000) {
            divider = 1000000;
            letter = 'M';
            format = '1.0-2';
        }
        else if (value > 1000) {
            divider = 1000;
            letter = 'K';
        }
        return _super.prototype.transform.call(this, (value / divider), format) + letter;
    };
    ViewsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'views'
        })
    ], ViewsPipe);
    return ViewsPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */]));

//# sourceMappingURL=views.pipe.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCommentsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserCommentsPipe = /** @class */ (function () {
    function UserCommentsPipe() {
    }
    UserCommentsPipe.prototype.transform = function (array) {
        array.sort(function (a, b) {
            var aMoment = __WEBPACK_IMPORTED_MODULE_1_moment__(a.createdAt, 'YYYY-MM-DD HH:mm:ss');
            var bMoment = __WEBPACK_IMPORTED_MODULE_1_moment__(b.createdAt, 'YYYY-MM-DD HH:mm:ss');
            return bMoment.diff(aMoment);
        });
        return array;
    };
    UserCommentsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'userCommentsSort'
        })
    ], UserCommentsPipe);
    return UserCommentsPipe;
}());

//# sourceMappingURL=user-comments.pipe.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondsPipe = /** @class */ (function () {
    function SecondsPipe() {
    }
    SecondsPipe.prototype.transform = function (value) {
        if (value >= 3600) {
            throw new Error("We don't do hours here, boy!");
        }
        var minutes = Math.floor(value / 60);
        var pad = '00';
        var seconds = value % 60;
        return "" + pad.substring(0, pad.length - minutes.toString().length) + minutes + ":" + pad.substring(0, pad.length - seconds.toString().length) + seconds;
    };
    SecondsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'seconds'
        })
    ], SecondsPipe);
    return SecondsPipe;
}());

//# sourceMappingURL=seconds.pipe.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightClipsSortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighlightClipsSortPipe = /** @class */ (function () {
    function HighlightClipsSortPipe() {
    }
    HighlightClipsSortPipe.prototype.transform = function (array) {
        if (!array)
            return [];
        array.sort(function (a, b) {
            var clipOrder1 = a.clipOrder || 0;
            var clipOrder2 = b.clipOrder || 0;
            return clipOrder1 - clipOrder2;
        });
        return array;
    };
    HighlightClipsSortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'highlightClipsSort'
        })
    ], HighlightClipsSortPipe);
    return HighlightClipsSortPipe;
}());

//# sourceMappingURL=highlight-clips-sort.pipe.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingChannelThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_channel_model__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_current_channel_store_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowingChannelThumbnailComponent = /** @class */ (function () {
    function FollowingChannelThumbnailComponent(currentChannelStoreService, navCtrl) {
        this.currentChannelStoreService = currentChannelStoreService;
        this.navCtrl = navCtrl;
    }
    FollowingChannelThumbnailComponent.prototype.goToChannel = function (channel) {
        this.currentChannelStoreService.setId(channel._id);
        this.currentChannelStoreService.setName(channel.channel);
        this.navCtrl.push('trending-channel', { channel: channel });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_channel_model__["a" /* Channel */])
    ], FollowingChannelThumbnailComponent.prototype, "channel", void 0);
    FollowingChannelThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'following-channel-thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\following-channel-thumbnail\following-channel-thumbnail.component.html"*/'<ion-item style="cursor: pointer;" (click)="goToChannel(channel.display_name)">\n\n  <ion-thumbnail item-start>\n\n    <img src="{{channel.logo}}">\n\n  </ion-thumbnail>\n\n  <h2>{{channel.display_name}}</h2>\n\n  <p>{{channel.followers | views}} followers</p>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\following-channel-thumbnail\following-channel-thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_current_channel_store_service__["a" /* CurrentChannelStoreService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FollowingChannelThumbnailComponent);
    return FollowingChannelThumbnailComponent;
}());

//# sourceMappingURL=following-channel-thumbnail.component.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_channel_model__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_current_channel_store_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_abstract_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelThumbnailComponent = /** @class */ (function () {
    function ChannelThumbnailComponent(authService, currentChannelStoreService, navCtrl) {
        this.authService = authService;
        this.currentChannelStoreService = currentChannelStoreService;
        this.navCtrl = navCtrl;
        this.favorite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.unfavorite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ChannelThumbnailComponent.prototype.favoriteItem = function (slidingItem) {
        this.favorite.emit(null);
        slidingItem.close();
    };
    ChannelThumbnailComponent.prototype.unfavoriteItem = function (slidingItem) {
        this.unfavorite.emit(null);
        slidingItem.close();
    };
    ChannelThumbnailComponent.prototype.goToChannel = function (channel) {
        this.currentChannelStoreService.setId(channel._id);
        this.currentChannelStoreService.setName(channel.channel);
        this.navCtrl.push('trending-channel', { channel: channel });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_channel_model__["a" /* Channel */])
    ], ChannelThumbnailComponent.prototype, "channel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ChannelThumbnailComponent.prototype, "isFavorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ChannelThumbnailComponent.prototype, "favorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ChannelThumbnailComponent.prototype, "unfavorite", void 0);
    ChannelThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'channel-thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\channel-thumbnail\channel-thumbnail.component.html"*/'<ion-item-sliding #slidingItem>\n\n  <ion-item style="cursor: pointer;" (click)="goToChannel(channel.display_name)">\n\n    <ion-thumbnail item-start>\n\n      <img src="{{channel.logo}}">\n\n    </ion-thumbnail>\n\n    <h2>{{channel.display_name}}</h2>\n\n    <p>{{channel.followers | views}} followers</p>\n\n  </ion-item>\n\n  <ion-item-options *ngIf="authService.loggedIn" side="right">\n\n    <button *ngIf="!isFavorite" (click)="favoriteItem(slidingItem)" style="width: 48px;" ion-button color="primary">\n\n      <ion-icon style="font-size: 24px;" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n    </button>\n\n    <button *ngIf="isFavorite" (click)="unfavoriteItem(slidingItem)" style="width: 48px;" ion-button color="primary">\n\n        <ion-icon style="font-size: 24px;" ios="ios-star" md="md-star"></ion-icon>\n\n      </button>\n\n  </ion-item-options>\n\n</ion-item-sliding>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\channel-thumbnail\channel-thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_abstract_auth_service__["a" /* AbstractAuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_current_channel_store_service__["a" /* CurrentChannelStoreService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ChannelThumbnailComponent);
    return ChannelThumbnailComponent;
}());

//# sourceMappingURL=channel-thumbnail.component.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStreamThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_channel_store_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_live_stream_model__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_abstract_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiveStreamThumbnailComponent = /** @class */ (function () {
    function LiveStreamThumbnailComponent(authService, currentChannelStoreService, navCtrl) {
        this.authService = authService;
        this.currentChannelStoreService = currentChannelStoreService;
        this.navCtrl = navCtrl;
        this.favorite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.unfavorite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LiveStreamThumbnailComponent.prototype.favoriteItem = function (slidingItem) {
        this.favorite.emit(null);
        slidingItem.close();
    };
    LiveStreamThumbnailComponent.prototype.unfavoriteItem = function (slidingItem) {
        this.unfavorite.emit(null);
        slidingItem.close();
    };
    LiveStreamThumbnailComponent.prototype.goToChannel = function (channel) {
        this.currentChannelStoreService.setId(channel._id);
        this.currentChannelStoreService.setName(channel.channel);
        this.navCtrl.push('trending-channel', { channel: channel });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_live_stream_model__["a" /* StreamModel */])
    ], LiveStreamThumbnailComponent.prototype, "stream", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LiveStreamThumbnailComponent.prototype, "isFavorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LiveStreamThumbnailComponent.prototype, "favorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LiveStreamThumbnailComponent.prototype, "unfavorite", void 0);
    LiveStreamThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'live-stream-thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\live-stream-thumbnail\live-stream-thumbnail.component.html"*/'<ion-item-sliding #slidingItem>\n\n  <ion-item style="cursor: pointer;" (click)="goToChannel(stream.channel.display_name)">\n\n    <ion-thumbnail item-start>\n\n      <img src="{{stream.channel.logo}}">\n\n    </ion-thumbnail>\n\n    <h2>{{stream.channel.display_name}}</h2>\n\n    <p>{{stream.game}}</p>\n\n    <p>{{stream.viewers | views}} viewers</p>\n\n  </ion-item>\n\n  <ion-item-options *ngIf="authService.loggedIn" side="right">\n\n    <button *ngIf="!isFavorite" (click)="favoriteItem(slidingItem)" style="width: 48px;" ion-button color="primary">\n\n      <ion-icon style="font-size: 24px;" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n    </button>\n\n    <button *ngIf="isFavorite" (click)="unfavoriteItem(slidingItem)" style="width: 48px;" ion-button color="primary">\n\n        <ion-icon style="font-size: 24px;" ios="ios-star" md="md-star"></ion-icon>\n\n      </button>\n\n  </ion-item-options>\n\n</ion-item-sliding>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\live-stream-thumbnail\live-stream-thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_abstract_auth_service__["a" /* AbstractAuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_current_channel_store_service__["a" /* CurrentChannelStoreService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LiveStreamThumbnailComponent);
    return LiveStreamThumbnailComponent;
}());

//# sourceMappingURL=live-stream-thumbnail.component.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamModel; });
var StreamModel = /** @class */ (function () {
    function StreamModel() {
    }
    return StreamModel;
}());

//# sourceMappingURL=live-stream.model.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_abstract_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_feed_service__ = __webpack_require__(463);
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
var FeedPage = /** @class */ (function () {
    function FeedPage(feedService, loaderService, authService, toastService) {
        this.feedService = feedService;
        this.loaderService = loaderService;
        this.authService = authService;
        this.toastService = toastService;
        this.clips = [];
    }
    FeedPage.prototype.ngOnInit = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFeed()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    FeedPage.prototype.getFeed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promise, feed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = this.feedService.getFeed();
                        this.loaderService.show(promise);
                        return [4 /*yield*/, promise];
                    case 1:
                        feed = _a.sent();
                        this.clips = feed.clips;
                        this.toastService.onFailure(promise);
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\feed\feed.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align-title="left">My feed</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only (click)="presentPopover($event);">\n\n               <ion-icon ios="ios-funnel" md="ios-funnel"></ion-icon>\n\n             </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="!clips.length">\n\n    No clips to display\n\n  </div>\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <div style="max-width: 100%" *ngFor="let clip of clips">\n\n        <thumbnail-component [clip]="clip"></thumbnail-component>\n\n      </div>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\feed\feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__app_services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__["a" /* ToastService */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_highlights_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createhighlight_createhighlight__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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





var HighlightsPage = /** @class */ (function () {
    function HighlightsPage(navCtrl, ngZone, modalCtrl, 
        /* Services */
        highlightsService, loaderService, toastService) {
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.highlightsService = highlightsService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.highlights = [];
        this.highlightsMap = new Map();
    }
    HighlightsPage.prototype.ngOnInit = function () {
        this.getHighlights();
    };
    HighlightsPage.prototype.getHighlights = function () {
        var that = this;
        var promise;
        promise = this.highlightsService.getList().then(function (highlights) {
            that.ngZone.run(function () {
                highlights.forEach(function (highlight) {
                    that.highlights.push(highlight);
                });
                that.sort();
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    HighlightsPage.prototype.onDismiss = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var that, promise, highlight_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        if (!data) return [3 /*break*/, 2];
                        promise = this.highlightsService.create(data);
                        this.loaderService.show(promise);
                        this.toastService.onFailure(promise);
                        return [4 /*yield*/, promise];
                    case 1:
                        highlight_1 = _a.sent();
                        this.ngZone.run(function () {
                            that.highlights.push(highlight_1);
                            that.sort();
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HighlightsPage.prototype.sort = function () {
        var _this = this;
        this.highlightsMap.clear();
        this.highlights = this.highlights.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        }).reverse();
        this.highlights.forEach(function (highlight) {
            var createdAtFromNow = __WEBPACK_IMPORTED_MODULE_6_moment__(highlight.createdAt).fromNow();
            var highlightsArr = _this.highlightsMap.get(createdAtFromNow);
            if (!highlightsArr) {
                highlightsArr = new Array();
                _this.highlightsMap.set(createdAtFromNow, highlightsArr);
            }
            highlightsArr.push(highlight);
        });
        console.log(this.highlightsMap.entries());
    };
    HighlightsPage.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myModal;
            return __generator(this, function (_a) {
                myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__createhighlight_createhighlight__["a" /* CreateHighlightPage */]);
                myModal.onDidDismiss(this.onDismiss.bind(this));
                myModal.present();
                return [2 /*return*/];
            });
        });
    };
    HighlightsPage.prototype.goToHighlight = function (uuid) {
        this.navCtrl.push('highlightclips', { highlight: uuid });
    };
    HighlightsPage.prototype.getHighlightsMapKeys = function () {
        return Array.from(this.highlightsMap.keys());
    };
    HighlightsPage.prototype.getHighlightsMapValue = function (key) {
        return this.highlightsMap.get(key);
    };
    HighlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-highlights',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\highlights\highlights.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">Highlights</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n<!--    <ion-list-header lines="inset">\n\n      <ion-label>Today</ion-label>\n\n    </ion-list-header>\n\n    <ion-list-header lines="inset">\n\n      <ion-label>This week</ion-label>\n\n    </ion-list-header>\n\n    <ion-list-header lines="inset">\n\n      <ion-label>This month</ion-label>\n\n    </ion-list-header>\n\n    <ion-list-header lines="inset">\n\n      <ion-label>Over a month ago</ion-label>\n\n    </ion-list-header>\n\n    <ion-item (click)="goToHighlight(highlight.uuid)" *ngFor="let highlight of highlights">\n\n      {{highlight.name}} ({{highlight.createdAt | timeAgo}})\n\n    </ion-item>\n\n  -->\n\n\n\n  <div *ngFor="let key of getHighlightsMapKeys()">\n\n    <ion-list-header lines="inset">\n\n      <ion-label>{{key}}</ion-label>\n\n    </ion-list-header>\n\n    <ion-item (click)="goToHighlight(highlight.uuid)" *ngFor="let highlight of getHighlightsMapValue(key)">\n\n      {{highlight.name}} ({{highlight.createdAt | timeAgo}})\n\n    </ion-item>\n\n  </div>\n\n\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="primary" (click)="create()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\highlights\highlights.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_highlights_service__["a" /* HighlightsService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__["a" /* ToastService */]])
    ], HighlightsPage);
    return HighlightsPage;
}());

//# sourceMappingURL=highlights.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trending_trending__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth0_cordova__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_abstract_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_authorities_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authorities_model_service__ = __webpack_require__(205);
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












window.global = window;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, 
        /* Model Services */
        authoritiesModelService, 
        /* Services */
        authoritiesService, authService, localStorageService, toastService, usersService) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_trending_trending__["a" /* TrendingPage */];
        this.authoritiesModelService = authoritiesModelService;
        this.authoritiesService = authoritiesService;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            window.handleOpenURL = function (url) {
                __WEBPACK_IMPORTED_MODULE_8__auth0_cordova___default.a.onRedirectUri(url);
            };
        });
    }
    /**
     * On init.
     */
    MyApp.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(window.location.href.indexOf('#access_token') > -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.handleAuthentication()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.authService.initialized];
                    case 3:
                        _c.sent();
                        if (!(this.authService.loggedIn && (!this.authoritiesModelService.getAuthorityList() || !this.authoritiesModelService.getAuthorityList().length))) return [3 /*break*/, 5];
                        _b = (_a = this.authoritiesModelService).setAuthorityList;
                        return [4 /*yield*/, this.authoritiesService.getList()];
                    case 4:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Logs out.
     */
    MyApp.prototype.login = function () {
        this.authService.login();
    };
    /**
     * Logs out.
     */
    MyApp.prototype.logout = function () {
        this.authService.logout();
    };
    /**
     * Goes to the given page.
     */
    MyApp.prototype.goToPage = function (page) {
        var navOptions = {};
        var that = this;
        navOptions.updateUrl = true;
        this.navCtrl.setRoot(page, null, navOptions)
            .catch(function (err) {
            console.error(err);
            that.toastService.show('You must log in to access this page.');
        });
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('menu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */])
    ], MyApp.prototype, "menuCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\app.html"*/'<ion-menu #menu [content]="content" [type]="reveal">\n\n  <ion-content>\n\n    <ion-row *ngIf="authService.loggedIn" (click)="goToPage(\'feed\')">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="list"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          My feed\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row (click)="goToPage(\'trending\')">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="trending-up"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Trending\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row (click)="goToPage(\'games\')">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="game-controller-a"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Games\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row (click)="goToPage(\'channels\')">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Channels\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="authService.loggedIn" (click)="goToPage(\'favorite-clips\')">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="star"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Favorite clips\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="authService.loggedIn && authoritiesModelService.hasAuthority(\'HIGHLIGHTS\')"\n\n      (click)="goToPage(\'highlights\')">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="videocam"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Highlights\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="authService.loggedIn" (click)="logout()">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="log-out"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Log out\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="!authService.loggedIn" (click)="authService.login()">\n\n      <ion-item class="no-border wide">\n\n        <ion-col col-3>\n\n          <ion-icon name="log-out"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          Log in\n\n        </ion-col>\n\n      </ion-item>\n\n    </ion-row>\n\n    <span class="version">Version 0.0.44</span>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__services_authorities_model_service__["a" /* AuthoritiesModelService */],
            __WEBPACK_IMPORTED_MODULE_10__services_authorities_service__["a" /* AuthoritiesService */],
            __WEBPACK_IMPORTED_MODULE_9__services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__services_users_service__["a" /* UsersService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_config__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_cordova__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localStorage_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_service__ = __webpack_require__(38);
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
// src/services/auth.service.ts

// Import AUTH_CONFIG, Auth0Cordova, and auth0.js






var restService = new __WEBPACK_IMPORTED_MODULE_6__rest_service__["a" /* RestService */]();
var MobileAuthenticationService = /** @class */ (function () {
    function MobileAuthenticationService(zone, localStorageService) {
        var _this = this;
        this.zone = zone;
        this.localStorageService = localStorageService;
        this.Auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"](__WEBPACK_IMPORTED_MODULE_1__auth_config__["a" /* AUTH_CONFIG */]);
        this.Client = new __WEBPACK_IMPORTED_MODULE_2__auth0_cordova___default.a(__WEBPACK_IMPORTED_MODULE_1__auth_config__["a" /* AUTH_CONFIG */]);
        this.loading = true;
        this.initialized = new Promise(function (resolve) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g;
                return __generator(this, function (_h) {
                    switch (_h.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.localStorageService.getItem('profile')];
                        case 1:
                            _a.user = _h.sent();
                            _b = this;
                            return [4 /*yield*/, this.localStorageService.getItem('access_token')];
                        case 2:
                            _b.accessToken = _h.sent();
                            _c = this;
                            return [4 /*yield*/, this.localStorageService.getItem('id_token')];
                        case 3:
                            _c.idToken = _h.sent();
                            _d = this;
                            _e = Date.now();
                            _g = (_f = JSON).parse;
                            return [4 /*yield*/, this.localStorageService.getItem('expires_at')];
                        case 4:
                            _d.loggedIn = _e < _g.apply(_f, [_h.sent()]);
                            resolve();
                            this.loading = false;
                            return [2 /*return*/];
                    }
                });
            }); })();
        });
    }
    MobileAuthenticationService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.idToken];
            });
        });
    };
    MobileAuthenticationService.prototype.handleAuthentication = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    MobileAuthenticationService.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var options = {
            scope: 'openid profile offline_access'
        };
        // Authorize login request with Auth0: open login page and get auth results
        this.Client.authorize(options, function (err, authResult) {
            if (err) {
                throw err;
            }
            // Set Access Token
            _this.localStorageService.setItem('access_token', authResult.accessToken);
            _this.localStorageService.setItem('id_token', authResult.idToken);
            _this.accessToken = authResult.accessToken;
            _this.idToken = authResult.idToken;
            // Set Access Token expiration
            var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            _this.localStorageService.setItem('expires_at', expiresAt);
            // This is asynchronous but should be fine for now.
            _this.getUser(_this.idToken);
            // Set logged in
            _this.loading = false;
            _this.loggedIn = true;
            // Fetch user's profile info
            _this.Auth0.client.userInfo(_this.accessToken, function (err, profile) {
                if (err) {
                    throw err;
                }
                _this.localStorageService.setItem('profile', profile);
                _this.zone.run(function () { return _this.user = profile; });
            });
        });
    };
    MobileAuthenticationService.prototype.logout = function () {
        this.localStorageService.removeItem('profile');
        this.localStorageService.removeItem('access_token');
        this.localStorageService.removeItem('id_token');
        this.localStorageService.removeItem('expires_at');
        this.accessToken = null;
        this.user = null;
        this.loggedIn = false;
    };
    MobileAuthenticationService.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expiresAt, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.localStorageService.getItem('expires_at')];
                    case 1:
                        expiresAt = _b.apply(_a, [(_c.sent()) || '{}']);
                        return [2 /*return*/, new Date().getTime() < expiresAt];
                }
            });
        });
    };
    MobileAuthenticationService.prototype.getUser = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var url, authorization, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/auth";
                        authorization = "Bearer " + token;
                        return [4 /*yield*/, restService.getProtected(url, authorization)];
                    case 1:
                        user = _a.sent();
                        this.localStorageService.setItem('username', user.twitchUsername);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    MobileAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__localStorage_service__["a" /* LocalStorageService */]])
    ], MobileAuthenticationService);
    return MobileAuthenticationService;
}());

//# sourceMappingURL=mobile-auth.service.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    // Needed for Auth0 (capitalization: ID):
    clientID: 'V5nVHV0bHZVyF2j6GFnONiBw2e5x6Amj',
    // Needed for Auth0Cordova (capitalization: Id):
    clientId: 'V5nVHV0bHZVyF2j6GFnONiBw2e5x6Amj',
    domain: 'newblt123.auth0.com',
    responseType: 'token id_token',
    packageIdentifier: 'io.ionic.cliperino' // config.xml widget ID, e.g., com.auth0.ionic
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localStorage_service__ = __webpack_require__(74);
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





window.global = window;
var restService = new __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]();
var WebAuthenticationService = /** @class */ (function () {
    function WebAuthenticationService(localStorageService) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_1_auth0_js__["WebAuth"]({
            clientID: 'V5nVHV0bHZVyF2j6GFnONiBw2e5x6Amj',
            domain: 'newblt123.auth0.com',
            responseType: 'token id_token',
            audience: 'https://newblt123.auth0.com/userinfo',
            redirectUri: "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].authCallback,
            scope: 'openid'
        });
        this.initialized = new Promise(function (resolve) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _a = this;
                            _b = Date.now();
                            _d = (_c = JSON).parse;
                            return [4 /*yield*/, this.localStorageService.getItem('expires_at')];
                        case 1:
                            _a.loggedIn = _b < _d.apply(_c, [_e.sent()]);
                            resolve();
                            return [2 /*return*/];
                    }
                });
            }); })();
        });
    }
    WebAuthenticationService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.localStorageService.getItem('id_token')];
            });
        });
    };
    WebAuthenticationService.prototype.login = function () {
        this.auth0.authorize();
    };
    WebAuthenticationService.prototype.handleAuthentication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var that;
            return __generator(this, function (_a) {
                that = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.auth0.parseHash(function (err, authResult) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(authResult && authResult.accessToken && authResult.idToken)) return [3 /*break*/, 2];
                                        window.location.hash = '';
                                        this.setSession(authResult);
                                        this.loggedIn = true;
                                        return [4 /*yield*/, that.getUser(authResult.idToken)];
                                    case 1:
                                        _a.sent();
                                        resolve();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        if (err) {
                                            reject(err);
                                        }
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    WebAuthenticationService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        this.localStorageService.setItem('access_token', authResult.accessToken);
        this.localStorageService.setItem('id_token', authResult.idToken);
        this.localStorageService.setItem('expires_at', expiresAt);
    };
    WebAuthenticationService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        this.localStorageService.removeItem('access_token');
        this.localStorageService.removeItem('id_token');
        this.localStorageService.removeItem('expires_at');
        this.loggedIn = false;
        // Go back to the home route
    };
    WebAuthenticationService.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expiresAt, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.localStorageService.getItem('expires_at')];
                    case 1:
                        expiresAt = _b.apply(_a, [(_c.sent()) || '{}']);
                        return [2 /*return*/, new Date().getTime() < expiresAt];
                }
            });
        });
    };
    WebAuthenticationService.prototype.getUser = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var url, authorization, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/auth";
                        authorization = "Bearer " + token;
                        return [4 /*yield*/, restService.getProtected(url, authorization)];
                    case 1:
                        user = _a.sent();
                        this.localStorageService.setItem('username', user.twitchUsername);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    WebAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__localStorage_service__["a" /* LocalStorageService */]])
    ], WebAuthenticationService);
    return WebAuthenticationService;
}());

//# sourceMappingURL=web-auth.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_auth_service__ = __webpack_require__(29);
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





var ChannelsService = /** @class */ (function () {
    function ChannelsService(authService, restService) {
        this.authService = authService;
        this.restService = restService;
    }
    /**
     * Adds the channel to favorites.
     *
     * @param channelId The channel identifier.
     */
    ChannelsService.prototype.addFavorite = function (channelId) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/channels/" + channelId + "/favorite");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    /**
     * Gets a channel by twitch identifier.
     *
     * @param id The twitch identifier.
     */
    ChannelsService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/channels/" + id);
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    /**
     * Gets the favorite channels.
     */
    ChannelsService.prototype.getFavorites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/channels/favorites";
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    /**
     * Gets whether or not the channel is favorited by the user.
     *
     * @param channelId The channel identifier.
     */
    ChannelsService.prototype.getIsFavorite = function (channelId) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/channels/" + channelId + "/isfavorite");
                        return [2 /*return*/, this.restService.getProtected(url, authorization)];
                }
            });
        });
    };
    /**
     * Removes the channel from favorites.
     *
     * @param channelId The channel identifier.
     */
    ChannelsService.prototype.removeFavorite = function (channelId) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/channels/" + channelId + "/unfavorite");
                        return [2 /*return*/, this.restService.postProtected(url, authorization, null)];
                }
            });
        });
    };
    /**
     * Searches for channels on Twitch.
     *
     * @param query The channel query.
     */
    ChannelsService.prototype.search = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                __WEBPACK_IMPORTED_MODULE_3_assert__(query, 'query required.');
                url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/channels?channel=" + encodeURIComponent(query));
                return [2 /*return*/, this.restService.get(url)];
            });
        });
    };
    ChannelsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], ChannelsService);
    return ChannelsService;
}());

//# sourceMappingURL=channels.service.js.map

/***/ })

},[516]);
//# sourceMappingURL=main.js.map