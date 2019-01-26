webpackJsonp([10],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorite_clips_sort_pipe__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_time_ago_pipe__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_pipe__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__capitalize_pipe__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_comments_pipe__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__seconds_pipe__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__highlight_clips_sort_pipe__ = __webpack_require__(720);
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

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_highlight_model__ = __webpack_require__(709);
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
    HighlightsService.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, url, a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "Bearer ";
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        authorization = _a + (_b.sent());
                        url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/highlights";
                        a = this.restService.getProtected(url, authorization);
                        return [2 /*return*/, a];
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
    HighlightsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], HighlightsService);
    return HighlightsService;
}());

//# sourceMappingURL=highlights.service.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_service__ = __webpack_require__(70);
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(33);
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

/***/ 201:
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
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addhighlightclip/addhighlightclip.module": [
		243
	],
	"../pages/clip-popover/clip-popover.module": [
		765,
		1
	],
	"../pages/clip/clip.module": [
		766,
		0
	],
	"../pages/createhighlight/createhighlight.module": [
		430
	],
	"../pages/favorite-clips/favorite-clips.module": [
		767,
		9
	],
	"../pages/filter-popover/filter-popover.module": [
		768,
		8
	],
	"../pages/following/following.module": [
		769,
		4
	],
	"../pages/games/games.module": [
		770,
		2
	],
	"../pages/highlightclips/highlightclips.module": [
		771,
		7
	],
	"../pages/highlights/highlights.module": [
		432
	],
	"../pages/profile/profile.module": [
		772,
		3
	],
	"../pages/trending-channel/trending-channel.module": [
		773,
		6
	],
	"../pages/trending-game/trending-game.module": [
		774,
		5
	],
	"../pages/trending/trending.module": [
		433
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
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHighlightClipPageModule", function() { return AddHighlightClipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addhighlightclip__ = __webpack_require__(480);
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_service__ = __webpack_require__(65);
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
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiAddress + "/api/v1/logging/error";
                console.log(JSON.stringify({ message: error }));
                return [2 /*return*/, this.restService.post(url, JSON.stringify({ message: error }))];
            });
        });
    };
    LoggingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rest_service__["a" /* RestService */]])
    ], LoggingService);
    return LoggingService;
}());

//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiAddress: 'https://api.cliperino.com',
    authCallback: 'https://www.cliperino.com/#/authCallback',
    mobile: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHighlightPageModule", function() { return CreateHighlightPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createhighlight__ = __webpack_require__(431);
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateHighlightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
            selector: 'page-createhighlight',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\createhighlight\createhighlight.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          CLOSE\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title align-title="left">New highlight</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button [disabled]="!highlightName" (click)="add()">\n\n          ADD\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Name</ion-label>\n\n      <ion-input [(ngModel)]="highlightName" placeholder="Name"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\createhighlight\createhighlight.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CreateHighlightPage);
    return CreateHighlightPage;
}());

//# sourceMappingURL=createhighlight.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightsPageModule", function() { return HighlightsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highlights__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(114);
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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function() { return TrendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trending__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(479);
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_equal__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_array_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_localStorage_service__ = __webpack_require__(71);
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
                    that.clips.push(clip);
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
            languages: that.languages
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
        this.period = data.period;
        this.languages = data.languages;
        localStorage.setItem("trending-period", data.period);
        localStorage.setItem("trending-languages", JSON.stringify(data.languages));
        if (!(oldPeriod === data.period && __WEBPACK_IMPORTED_MODULE_3_array_equal__(oldLanguages, data.languages))) {
            that.getTrendingClips(undefined, true);
        }
    };
    TrendingPage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    TrendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trending',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending\trending.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">Trending</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="presentPopover($event);">\n\n          <ion-icon ios="ios-funnel" md="ios-funnel"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only *ngIf="!authService.loggedIn" (click)="authService.login()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-grid>\n\n      <ion-row justify-content-center>\n\n         <div style="max-width: 100%" *ngFor="let clip of clips">\n\n            <thumbnail-component [clip]="clip"></thumbnail-component>\n\n         </div>\n\n         <!-- <div style="width: 280px; height: 260px;"></div>\n\n         <div style="width: 280px; height: 260px;"></div> -->\n\n      </ion-row>\n\n   </ion-grid>\n\n   <ion-row justify-content-center *ngIf="clips.length && showMore">\n\n     <button (click)="more()" ion-button clear>MORE</button>\n\n   </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending\trending.html"*/
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

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnail_thumbnail_component__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__ = __webpack_require__(723);
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
                __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__["a" /* FollowingChannelThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_2__thumbnail_thumbnail_component__["a" /* ThumbnailComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__["a" /* FollowingChannelThumbnailComponent */],
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHighlightClipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_highlights_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_highlightclip_model__ = __webpack_require__(481);
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
    function AddHighlightClipPage(highlightsService, viewCtrl) {
        this.highlightsService = highlightsService;
        this.viewCtrl = viewCtrl;
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
                        return [2 /*return*/, this.highlights];
                }
            });
        });
    };
    AddHighlightClipPage.prototype.add = function () {
        var highlightClip = new __WEBPACK_IMPORTED_MODULE_3__app_models_highlightclip_model__["a" /* HighlightClipModel */]();
        highlightClip.duration = parseInt(this.duration);
        highlightClip.startTime = parseInt(this.startTime);
        highlightClip.highlightUuid = this.selectedHighlight.uuid;
        this.viewCtrl.dismiss(highlightClip);
    };
    AddHighlightClipPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddHighlightClipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addhighlightclip',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\addhighlightclip\addhighlightclip.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button (click)="dismiss()">\n\n          CLOSE\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title align-title="left">Add clip to highlight</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button [disabled]="!selectedHighlight || !startTime || !duration" (click)="add()">\n\n          ADD\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Highlight</ion-label>\n\n      <ion-select [selectOptions]="selectOptions" [(ngModel)]="selectedHighlight">\n\n        <ion-option *ngFor="let highlight of highlights" [value]="highlight">{{highlight.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Start time</ion-label>\n\n      <ion-input [(ngModel)]="startTime" placeholder="Start time"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Duration</ion-label>\n\n      <ion-input [(ngModel)]="duration" placeholder="Duration"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\addhighlightclip\addhighlightclip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_highlights_service__["a" /* HighlightsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AddHighlightClipPage);
    return AddHighlightClipPage;
}());

//# sourceMappingURL=addhighlightclip.js.map

/***/ }),

/***/ 481:
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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(33);
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(33);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trending_trending_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clips_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_games_service__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_users_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mobile_auth_service__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_localStorage_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_loader_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toast_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_rest_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_abstract_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_web_auth_service__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_highlights_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_highlights_highlights_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_createhighlight_createhighlight_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_addhighlightclip_addhighlightclip_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_logging_service__ = __webpack_require__(305);
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
                        { loadChildren: '../pages/clip-popover/clip-popover.module#ClipPopoverPageModule', name: 'clip-popover', segment: 'clip-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clip/clip.module#ClipPageModule', name: 'clip', segment: 'clip/:slug', priority: 'low', defaultHistory: ['trending'] },
                        { loadChildren: '../pages/createhighlight/createhighlight.module#CreateHighlightPageModule', name: 'createhighlight', segment: 'createhighlight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-clips/favorite-clips.module#FavoriteClipsPageModule', name: 'favorite-clips', segment: 'favorite-clips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-popover/filter-popover.module#FilterPopoverPageModule', name: 'filter-popover', segment: 'filter-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'following', segment: 'following', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'games', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/highlights/highlights.module#HighlightsPageModule', name: 'highlights', segment: 'highlights', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/highlightclips/highlightclips.module#HighlightClipsPageModule', name: 'highlightclips', segment: 'highlightclips/:highlight', priority: 'low', defaultHistory: ['highlights'] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trending-channel/trending-channel.module#TrendingChannelPageModule', name: 'trending-channel', segment: 'trending/channel/:channel', priority: 'low', defaultHistory: ['following'] },
                        { loadChildren: '../pages/trending-game/trending-game.module#TrendingGamePageModule', name: 'trending-game', segment: 'trending/game/:game', priority: 'low', defaultHistory: ['games'] },
                        { loadChildren: '../pages/trending/trending.module#TrendingPageModule', name: 'trending', segment: 'trending', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__pages_addhighlightclip_addhighlightclip_module__["AddHighlightClipPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_trending_trending_module__["TrendingPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_highlights_highlights_module__["HighlightsPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_createhighlight_createhighlight_module__["CreateHighlightPageModule"]
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
                __WEBPACK_IMPORTED_MODULE_7__services_clips_service__["a" /* ClipsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_games_service__["a" /* GamesService */],
                __WEBPACK_IMPORTED_MODULE_20__services_highlights_service__["a" /* HighlightsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_24__services_logging_service__["a" /* LoggingService */],
                __WEBPACK_IMPORTED_MODULE_11__services_localStorage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_14__services_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_13__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_9__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(144);
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
    return RestService;
}());

var _unwrapResponse = function (response, resolve, reject) {
    if (response && response.body) {
        var body = void 0;
        if (typeof response.body === 'string') {
            body = JSON.parse(response.body);
        }
        else {
            body = response.body;
        }
        if (body.success !== undefined && body.success === true) {
            body.response = body.response || {};
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

/***/ 70:
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

/***/ 709:
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(306);
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

/***/ 713:
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

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 307,
	"./af.js": 307,
	"./ar": 308,
	"./ar-dz": 309,
	"./ar-dz.js": 309,
	"./ar-kw": 310,
	"./ar-kw.js": 310,
	"./ar-ly": 311,
	"./ar-ly.js": 311,
	"./ar-ma": 312,
	"./ar-ma.js": 312,
	"./ar-sa": 313,
	"./ar-sa.js": 313,
	"./ar-tn": 314,
	"./ar-tn.js": 314,
	"./ar.js": 308,
	"./az": 315,
	"./az.js": 315,
	"./be": 316,
	"./be.js": 316,
	"./bg": 317,
	"./bg.js": 317,
	"./bm": 318,
	"./bm.js": 318,
	"./bn": 319,
	"./bn.js": 319,
	"./bo": 320,
	"./bo.js": 320,
	"./br": 321,
	"./br.js": 321,
	"./bs": 322,
	"./bs.js": 322,
	"./ca": 323,
	"./ca.js": 323,
	"./cs": 324,
	"./cs.js": 324,
	"./cv": 325,
	"./cv.js": 325,
	"./cy": 326,
	"./cy.js": 326,
	"./da": 327,
	"./da.js": 327,
	"./de": 328,
	"./de-at": 329,
	"./de-at.js": 329,
	"./de-ch": 330,
	"./de-ch.js": 330,
	"./de.js": 328,
	"./dv": 331,
	"./dv.js": 331,
	"./el": 332,
	"./el.js": 332,
	"./en-au": 333,
	"./en-au.js": 333,
	"./en-ca": 334,
	"./en-ca.js": 334,
	"./en-gb": 335,
	"./en-gb.js": 335,
	"./en-ie": 336,
	"./en-ie.js": 336,
	"./en-il": 337,
	"./en-il.js": 337,
	"./en-nz": 338,
	"./en-nz.js": 338,
	"./eo": 339,
	"./eo.js": 339,
	"./es": 340,
	"./es-do": 341,
	"./es-do.js": 341,
	"./es-us": 342,
	"./es-us.js": 342,
	"./es.js": 340,
	"./et": 343,
	"./et.js": 343,
	"./eu": 344,
	"./eu.js": 344,
	"./fa": 345,
	"./fa.js": 345,
	"./fi": 346,
	"./fi.js": 346,
	"./fo": 347,
	"./fo.js": 347,
	"./fr": 348,
	"./fr-ca": 349,
	"./fr-ca.js": 349,
	"./fr-ch": 350,
	"./fr-ch.js": 350,
	"./fr.js": 348,
	"./fy": 351,
	"./fy.js": 351,
	"./gd": 352,
	"./gd.js": 352,
	"./gl": 353,
	"./gl.js": 353,
	"./gom-latn": 354,
	"./gom-latn.js": 354,
	"./gu": 355,
	"./gu.js": 355,
	"./he": 356,
	"./he.js": 356,
	"./hi": 357,
	"./hi.js": 357,
	"./hr": 358,
	"./hr.js": 358,
	"./hu": 359,
	"./hu.js": 359,
	"./hy-am": 360,
	"./hy-am.js": 360,
	"./id": 361,
	"./id.js": 361,
	"./is": 362,
	"./is.js": 362,
	"./it": 363,
	"./it.js": 363,
	"./ja": 364,
	"./ja.js": 364,
	"./jv": 365,
	"./jv.js": 365,
	"./ka": 366,
	"./ka.js": 366,
	"./kk": 367,
	"./kk.js": 367,
	"./km": 368,
	"./km.js": 368,
	"./kn": 369,
	"./kn.js": 369,
	"./ko": 370,
	"./ko.js": 370,
	"./ky": 371,
	"./ky.js": 371,
	"./lb": 372,
	"./lb.js": 372,
	"./lo": 373,
	"./lo.js": 373,
	"./lt": 374,
	"./lt.js": 374,
	"./lv": 375,
	"./lv.js": 375,
	"./me": 376,
	"./me.js": 376,
	"./mi": 377,
	"./mi.js": 377,
	"./mk": 378,
	"./mk.js": 378,
	"./ml": 379,
	"./ml.js": 379,
	"./mn": 380,
	"./mn.js": 380,
	"./mr": 381,
	"./mr.js": 381,
	"./ms": 382,
	"./ms-my": 383,
	"./ms-my.js": 383,
	"./ms.js": 382,
	"./mt": 384,
	"./mt.js": 384,
	"./my": 385,
	"./my.js": 385,
	"./nb": 386,
	"./nb.js": 386,
	"./ne": 387,
	"./ne.js": 387,
	"./nl": 388,
	"./nl-be": 389,
	"./nl-be.js": 389,
	"./nl.js": 388,
	"./nn": 390,
	"./nn.js": 390,
	"./pa-in": 391,
	"./pa-in.js": 391,
	"./pl": 392,
	"./pl.js": 392,
	"./pt": 393,
	"./pt-br": 394,
	"./pt-br.js": 394,
	"./pt.js": 393,
	"./ro": 395,
	"./ro.js": 395,
	"./ru": 396,
	"./ru.js": 396,
	"./sd": 397,
	"./sd.js": 397,
	"./se": 398,
	"./se.js": 398,
	"./si": 399,
	"./si.js": 399,
	"./sk": 400,
	"./sk.js": 400,
	"./sl": 401,
	"./sl.js": 401,
	"./sq": 402,
	"./sq.js": 402,
	"./sr": 403,
	"./sr-cyrl": 404,
	"./sr-cyrl.js": 404,
	"./sr.js": 403,
	"./ss": 405,
	"./ss.js": 405,
	"./sv": 406,
	"./sv.js": 406,
	"./sw": 407,
	"./sw.js": 407,
	"./ta": 408,
	"./ta.js": 408,
	"./te": 409,
	"./te.js": 409,
	"./tet": 410,
	"./tet.js": 410,
	"./tg": 411,
	"./tg.js": 411,
	"./th": 412,
	"./th.js": 412,
	"./tl-ph": 413,
	"./tl-ph.js": 413,
	"./tlh": 414,
	"./tlh.js": 414,
	"./tr": 415,
	"./tr.js": 415,
	"./tzl": 416,
	"./tzl.js": 416,
	"./tzm": 417,
	"./tzm-latn": 418,
	"./tzm-latn.js": 418,
	"./tzm.js": 417,
	"./ug-cn": 419,
	"./ug-cn.js": 419,
	"./uk": 420,
	"./uk.js": 420,
	"./ur": 421,
	"./ur.js": 421,
	"./uz": 422,
	"./uz-latn": 423,
	"./uz-latn.js": 423,
	"./uz.js": 422,
	"./vi": 424,
	"./vi.js": 424,
	"./x-pseudo": 425,
	"./x-pseudo.js": 425,
	"./yo": 426,
	"./yo.js": 426,
	"./zh-cn": 427,
	"./zh-cn.js": 427,
	"./zh-hk": 428,
	"./zh-hk.js": 428,
	"./zh-tw": 429,
	"./zh-tw.js": 429
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
webpackContext.id = 714;

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(60);
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

/***/ 717:
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

/***/ 718:
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

/***/ 719:
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

/***/ 720:
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

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_clip_model__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ThumbnailComponent.prototype.goToClip = function (slug) {
        this.navCtrl.push('clip', { slug: slug });
    };
    ThumbnailComponent.prototype.goToChannel = function () {
        var that = this;
        that.navCtrl.push('trending-channel', { channel: that.clip.broadcaster.displayName });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_clip_model__["a" /* Clip */])
    ], ThumbnailComponent.prototype, "clip", void 0);
    ThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\thumbnail\thumbnail.component.html"*/'<ion-card class="max-width no-margin-xs" style="cursor: pointer; max-width: 480px;" (click)="goToClip(clip.slug)">\n\n   <img src="{{clip.thumbnails.medium}}" />\n\n   <ion-row>\n\n      <ion-col>\n\n         <ion-item style="padding-left: 3px;">\n\n            <ion-avatar style="margin-right: 10px;" item-start (click)="$event.stopPropagation(); goToChannel();">\n\n               <img src="{{clip.broadcaster.logo}}">\n\n            </ion-avatar>\n\n            <p ion-text color="light" style="font-weight:bold;">{{clip.title}}</p>\n\n            <p>{{clip.broadcaster.displayName}}</p>\n\n            <p>{{clip.views | views}} views &#183; {{clip.createdAt | timeAgo}}</p>\n\n         </ion-item>\n\n      </ion-col>\n\n   </ion-row>\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\thumbnail\thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());

//# sourceMappingURL=thumbnail.component.js.map

/***/ }),

/***/ 722:
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingChannelThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_channel_model__ = __webpack_require__(724);
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
    function FollowingChannelThumbnailComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FollowingChannelThumbnailComponent.prototype.goToChannel = function (channel) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FollowingChannelThumbnailComponent);
    return FollowingChannelThumbnailComponent;
}());

//# sourceMappingURL=following-channel-thumbnail.component.js.map

/***/ }),

/***/ 724:
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

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_loader_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_toast_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_highlights_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createhighlight_createhighlight__ = __webpack_require__(431);
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
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
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
    HighlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-highlights',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\highlights\highlights.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title align-title="left">Highlights</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item (click)="goToHighlight(highlight.uuid)" *ngFor="let highlight of highlights">\n\n      {{highlight.name}} ({{highlight.createdAt | timeAgo}})\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="primary" (click)="create()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\highlights\highlights.html"*/
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

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trending_trending__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth0_cordova__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_abstract_auth_service__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










window.global = window;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, 
        /* Services */
        authService, localStorageService, toastService, usersService) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_trending_trending__["a" /* TrendingPage */];
        this.authService = authService;
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
    MyApp.prototype.ngOnInit = function () {
        if (window.location.href.indexOf('#access_token') > -1) {
            this.authService.handleAuthentication();
        }
    };
    MyApp.prototype.login = function () {
        this.authService.login();
    };
    MyApp.prototype.logout = function () {
        this.authService.logout();
    };
    MyApp.prototype.goToPage = function (page) {
        var navOptions = {};
        var that = this;
        navOptions.updateUrl = true;
        this.navCtrl.setRoot(page, null, navOptions)
            .catch(function (err) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\app.html"*/'<ion-menu #menu [content]="content" [type]="reveal">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Browse clips</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngIf="authService.loggedIn" (click)="goToPage(\'favorite-clips\')">\n\n        Favorite clips\n\n      </button>\n\n      <button ion-item (click)="goToPage(\'trending\')">\n\n        Trending\n\n      </button>\n\n      <button ion-item (click)="goToPage(\'games\')">\n\n        Games\n\n      </button>\n\n      <!-- <button ion-item *ngIf="authService.loggedIn" (click)="goToPage(\'following\')">\n\n        Following\n\n      </button>\n\n      <button ion-item *ngIf="authService.loggedIn" (click)="goToPage(\'profile\')">\n\n        Profile\n\n      </button> -->\n\n\n\n      <button ion-item *ngIf="authService.loggedIn" (click)="goToPage(\'highlights\')">\n\n        Highlights\n\n      </button>\n\n      <button ion-item *ngIf="authService.loggedIn" (click)="logout()">\n\n        Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__services_users_service__["a" /* UsersService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_config__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_cordova__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localStorage_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_service__ = __webpack_require__(65);
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
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        }); })();
    }
    MobileAuthenticationService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.idToken];
            });
        });
    };
    MobileAuthenticationService.prototype.handleAuthentication = function () {
        throw new Error("Method not implemented.");
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

/***/ 763:
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

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_js__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localStorage_service__ = __webpack_require__(71);
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
                        return [2 /*return*/];
                }
            });
        }); })();
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
        var _this = this;
        var that = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.loggedIn = true;
                // This is asynchronous but should be fine for now.
                that.getUser(authResult.idToken);
            }
            else if (err) {
                // Handle error ?
            }
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_service__ = __webpack_require__(305);
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

/***/ })

},[484]);
//# sourceMappingURL=main.js.map