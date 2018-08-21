webpackJsonp([9],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
    function ToastService(toastCtrl) {
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
        promise.then(function (err) {
            var toastOptions = {};
            toastOptions.message = message;
            toastOptions.duration = 3000;
            var toast = this.toastCtrl.create(toastOptions);
            toast.present();
        });
    };
    ToastService.prototype.onFailure = function (promise, message) {
        var that = this;
        message = message || DEFAULT_ERROR_MESSAGE;
        promise.catch(function (err) {
            console.error(err);
            var toastOptions = {};
            toastOptions.message = message;
            toastOptions.duration = 3000;
            var toast = that.toastCtrl.create(toastOptions);
            toast.present();
        });
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_js__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unirest__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bluebird__);
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
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_1_auth0_js__["a" /* WebAuth */]({
            clientID: 'V5nVHV0bHZVyF2j6GFnONiBw2e5x6Amj',
            domain: 'newblt123.auth0.com',
            responseType: 'token id_token',
            audience: 'https://newblt123.auth0.com/userinfo',
            redirectUri: "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].authCallback,
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        var that = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                that.auth(authResult.idToken).then(function (user) {
                    console.log(user);
                });
            }
            else if (err) {
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.auth = function (token) {
        var that = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiAddress + "/api/v1/protected/auth";
        var authorization = "Bearer " + token;
        return new __WEBPACK_IMPORTED_MODULE_4_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_unirest__["get"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
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
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorite_clips_sort_pipe__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_time_ago_pipe__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_pipe__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__capitalize_pipe__ = __webpack_require__(526);
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
                __WEBPACK_IMPORTED_MODULE_3__views_pipe__["a" /* ViewsPipe */],
                __WEBPACK_IMPORTED_MODULE_2_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_1__favorite_clips_sort_pipe__["a" /* FavoriteClipsPipe */],
                __WEBPACK_IMPORTED_MODULE_3__views_pipe__["a" /* ViewsPipe */],
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

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localStorage_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rest_service__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClipsService = /** @class */ (function () {
    function ClipsService(localStorageService, restService) {
        this.localStorageService = localStorageService;
        this.restService = restService;
    }
    ClipsService.prototype.getPublicInfo = function (slug) {
        var that = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/" + slug + "/info");
        return this.restService.get(url);
    };
    ClipsService.prototype.getBySlug = function (slug) {
        var that = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + '/api/v1/clips/slug/' + slug;
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
    ClipsService.prototype.getFavorites = function () {
        var that = this;
        var authorization = "Bearer " + this.localStorageService.getItem('id_token');
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + '/api/v1/protected/clips/favorites';
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    ClipsService.prototype.getUserInfo = function (slug) {
        var authorization = "Bearer " + this.localStorageService.getItem('id_token');
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/slug/" + slug + "/userinfo");
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    ClipsService.prototype.addFavorite = function (slug) {
        var authorization = "Bearer " + this.localStorageService.getItem('id_token');
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/slug/" + slug + "/favorite");
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["post"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    ClipsService.prototype.removeFavorite = function (slug) {
        var authorization = "Bearer " + this.localStorageService.getItem('id_token');
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/slug/" + slug + "/unfavorite");
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["post"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    ClipsService.prototype.like = function (slug) {
        var authorization = "Bearer " + this.localStorageService.getItem('id_token');
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/" + slug + "/like");
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["post"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    ClipsService.prototype.unlike = function (slug) {
        var authorization = "Bearer " + this.localStorageService.getItem('id_token');
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/protected/clips/" + slug + "/unlike");
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["post"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    ClipsService.prototype.getTrendingInitial = function (period, language) {
        return this.getTrending(undefined, period, language);
    };
    ClipsService.prototype.getTrending = function (cursor, period, language) {
        var clips = new Array();
        var that = this;
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/trending?period=" + period + "&language=" + language);
            if (cursor) {
                url += "&cursor=" + cursor;
            }
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
    ClipsService.prototype.getTrendingByChannel = function (channel, cursor, period) {
        var clips = new Array();
        var that = this;
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/trending/channel/" + channel + "?period=" + period);
            if (cursor) {
                url += "&cursor=" + cursor;
            }
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
    ClipsService.prototype.getTrendingByGame = function (game, cursor, period, language) {
        var clips = new Array();
        var that = this;
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiAddress + ("/api/v1/clips/trending/game/" + game + "?period=" + period + "&language=" + language);
            if (cursor) {
                url += "&cursor=" + cursor;
            }
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
    ClipsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__rest_service__["a" /* RestService */]])
    ], ClipsService);
    return ClipsService;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (new ClipsService(new __WEBPACK_IMPORTED_MODULE_4__localStorage_service__["a" /* LocalStorageService */](), new __WEBPACK_IMPORTED_MODULE_5__rest_service__["a" /* RestService */]()));
//# sourceMappingURL=clips.service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(75);
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

/***/ 198:
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
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/clip-popover/clip-popover.module": [
		734,
		0
	],
	"../pages/clip/clip.module": [
		736,
		8
	],
	"../pages/favorite-clips/favorite-clips.module": [
		735,
		7
	],
	"../pages/filter-popover/filter-popover.module": [
		737,
		6
	],
	"../pages/following/following.module": [
		738,
		5
	],
	"../pages/games/games.module": [
		739,
		1
	],
	"../pages/profile/profile.module": [
		740,
		4
	],
	"../pages/trending-channel/trending-channel.module": [
		741,
		3
	],
	"../pages/trending-game/trending-game.module": [
		742,
		2
	],
	"../pages/trending/trending.module": [
		425
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
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);


var RestService = /** @class */ (function () {
    function RestService() {
    }
    RestService.prototype.get = function (url) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json' })
                .send()
                .end(function (resp) {
                if (resp && resp.body) {
                    var body = void 0;
                    if (typeof resp.body === 'string') {
                        body = JSON.parse(resp.body);
                    }
                    else {
                        body = resp.body;
                    }
                    if (body.success !== undefined && body.success === true) {
                        body.response = body.response || {};
                        resolve(body.response);
                    }
                    else {
                        reject({
                            success: false,
                            message: body.message || 'The response contains no message.'
                        });
                    }
                }
                else {
                    reject({
                        success: false,
                        message: 'The response contains no body.'
                    });
                }
            });
        });
    };
    RestService.prototype.getProtected = function (url, authorization) {
        return new __WEBPACK_IMPORTED_MODULE_0_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_unirest__["get"](url)
                .headers({ 'Accept': 'application/json', 'Authorization': authorization })
                .send()
                .end(function (resp) {
                if (resp && resp.error) {
                    reject(resp.error);
                    return;
                }
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
    return RestService;
}());

//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function() { return TrendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trending__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(470);
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

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_equal__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_array_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_localStorage_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_loader_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_toast_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_auth_service__ = __webpack_require__(113);
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
        this.period = "day";
        this.languages = [];
        this.clips = [];
        this.sanitizer = _sanitizer;
        this.ngZone = _ngZone;
    }
    TrendingPage.prototype.ngOnInit = function () {
        this.period = this.localStorageService.getItem("trending-period") || "day";
        this.languages = JSON.parse(this.localStorageService.getItem("trending-languages")) || [];
        this.getTrendingClips(this.cursor, false);
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
            selector: 'page-trending',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending\trending.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Trending</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="presentPopover($event);">\n\n          <ion-icon ios="ios-funnel" md="ios-funnel"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button icon-only *ngIf="authService.isAuthenticated()" (click)="goToProfile()">\n\n          <ion-icon name="contact"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only *ngIf="!authService.isAuthenticated()" (click)="authService.login()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-grid>\n\n      <ion-row justify-content-center>\n\n         <div style="max-width: 100%" *ngFor="let clip of clips">\n\n            <thumbnail-component [clip]="clip"></thumbnail-component>\n\n         </div>\n\n         <!-- <div style="width: 280px; height: 260px;"></div>\n\n         <div style="width: 280px; height: 260px;"></div> -->\n\n      </ion-row>\n\n   </ion-grid>\n\n   <ion-row justify-content-center *ngIf="clips.length">\n\n     <button (click)="more()" ion-button clear>MORE</button>\n\n   </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\trending\trending.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__app_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_clips_service__["a" /* ClipsService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_7__app_services_toast_service__["a" /* ToastService */]])
    ], TrendingPage);
    return TrendingPage;
}());

//# sourceMappingURL=trending.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnail_thumbnail_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__following_channel_thumbnail_following_channel_thumbnail_component__ = __webpack_require__(529);
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

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unirest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unirest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(75);
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(75);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trending_trending_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clips_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_games_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_users_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_localStorage_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_loader_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toast_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_rest_service__ = __webpack_require__(424);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    iconMode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/clip-popover/clip-popover.module#ClipPopoverPageModule', name: 'clip-popover', segment: 'clip-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-clips/favorite-clips.module#FavoriteClipsPageModule', name: 'favorite-clips', segment: 'favorite-clips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clip/clip.module#ClipPageModule', name: 'clip', segment: 'clip/:slug', priority: 'low', defaultHistory: ['trending'] },
                        { loadChildren: '../pages/filter-popover/filter-popover.module#FilterPopoverPageModule', name: 'filter-popover', segment: 'filter-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'following', segment: 'following', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'games', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trending-channel/trending-channel.module#TrendingChannelPageModule', name: 'trending-channel', segment: 'trending/channel/:channel', priority: 'low', defaultHistory: ['following'] },
                        { loadChildren: '../pages/trending-game/trending-game.module#TrendingGamePageModule', name: 'trending-game', segment: 'trending/game/:game', priority: 'low', defaultHistory: ['games'] },
                        { loadChildren: '../pages/trending/trending.module#TrendingPageModule', name: 'trending', segment: 'trending', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_trending_trending_module__["TrendingPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__services_clips_service__["a" /* ClipsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_games_service__["a" /* GamesService */],
                __WEBPACK_IMPORTED_MODULE_12__services_loader_service__["a" /* LoaderService */],
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

/***/ 522:
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

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 240,
	"./af.js": 240,
	"./ar": 241,
	"./ar-dz": 242,
	"./ar-dz.js": 242,
	"./ar-kw": 243,
	"./ar-kw.js": 243,
	"./ar-ly": 244,
	"./ar-ly.js": 244,
	"./ar-ma": 245,
	"./ar-ma.js": 245,
	"./ar-sa": 246,
	"./ar-sa.js": 246,
	"./ar-tn": 247,
	"./ar-tn.js": 247,
	"./ar.js": 241,
	"./az": 248,
	"./az.js": 248,
	"./be": 249,
	"./be.js": 249,
	"./bg": 250,
	"./bg.js": 250,
	"./bm": 251,
	"./bm.js": 251,
	"./bn": 252,
	"./bn.js": 252,
	"./bo": 253,
	"./bo.js": 253,
	"./br": 254,
	"./br.js": 254,
	"./bs": 255,
	"./bs.js": 255,
	"./ca": 256,
	"./ca.js": 256,
	"./cs": 257,
	"./cs.js": 257,
	"./cv": 258,
	"./cv.js": 258,
	"./cy": 259,
	"./cy.js": 259,
	"./da": 260,
	"./da.js": 260,
	"./de": 261,
	"./de-at": 262,
	"./de-at.js": 262,
	"./de-ch": 263,
	"./de-ch.js": 263,
	"./de.js": 261,
	"./dv": 264,
	"./dv.js": 264,
	"./el": 265,
	"./el.js": 265,
	"./en-au": 266,
	"./en-au.js": 266,
	"./en-ca": 267,
	"./en-ca.js": 267,
	"./en-gb": 268,
	"./en-gb.js": 268,
	"./en-ie": 269,
	"./en-ie.js": 269,
	"./en-il": 270,
	"./en-il.js": 270,
	"./en-nz": 271,
	"./en-nz.js": 271,
	"./eo": 272,
	"./eo.js": 272,
	"./es": 273,
	"./es-do": 274,
	"./es-do.js": 274,
	"./es-us": 275,
	"./es-us.js": 275,
	"./es.js": 273,
	"./et": 276,
	"./et.js": 276,
	"./eu": 277,
	"./eu.js": 277,
	"./fa": 278,
	"./fa.js": 278,
	"./fi": 279,
	"./fi.js": 279,
	"./fo": 280,
	"./fo.js": 280,
	"./fr": 281,
	"./fr-ca": 282,
	"./fr-ca.js": 282,
	"./fr-ch": 283,
	"./fr-ch.js": 283,
	"./fr.js": 281,
	"./fy": 284,
	"./fy.js": 284,
	"./gd": 285,
	"./gd.js": 285,
	"./gl": 286,
	"./gl.js": 286,
	"./gom-latn": 287,
	"./gom-latn.js": 287,
	"./gu": 288,
	"./gu.js": 288,
	"./he": 289,
	"./he.js": 289,
	"./hi": 290,
	"./hi.js": 290,
	"./hr": 291,
	"./hr.js": 291,
	"./hu": 292,
	"./hu.js": 292,
	"./hy-am": 293,
	"./hy-am.js": 293,
	"./id": 294,
	"./id.js": 294,
	"./is": 295,
	"./is.js": 295,
	"./it": 296,
	"./it.js": 296,
	"./ja": 297,
	"./ja.js": 297,
	"./jv": 298,
	"./jv.js": 298,
	"./ka": 299,
	"./ka.js": 299,
	"./kk": 300,
	"./kk.js": 300,
	"./km": 301,
	"./km.js": 301,
	"./kn": 302,
	"./kn.js": 302,
	"./ko": 303,
	"./ko.js": 303,
	"./ky": 304,
	"./ky.js": 304,
	"./lb": 305,
	"./lb.js": 305,
	"./lo": 306,
	"./lo.js": 306,
	"./lt": 307,
	"./lt.js": 307,
	"./lv": 308,
	"./lv.js": 308,
	"./me": 309,
	"./me.js": 309,
	"./mi": 310,
	"./mi.js": 310,
	"./mk": 311,
	"./mk.js": 311,
	"./ml": 312,
	"./ml.js": 312,
	"./mn": 313,
	"./mn.js": 313,
	"./mr": 314,
	"./mr.js": 314,
	"./ms": 315,
	"./ms-my": 316,
	"./ms-my.js": 316,
	"./ms.js": 315,
	"./mt": 317,
	"./mt.js": 317,
	"./my": 318,
	"./my.js": 318,
	"./nb": 319,
	"./nb.js": 319,
	"./ne": 320,
	"./ne.js": 320,
	"./nl": 321,
	"./nl-be": 322,
	"./nl-be.js": 322,
	"./nl.js": 321,
	"./nn": 323,
	"./nn.js": 323,
	"./pa-in": 324,
	"./pa-in.js": 324,
	"./pl": 325,
	"./pl.js": 325,
	"./pt": 326,
	"./pt-br": 327,
	"./pt-br.js": 327,
	"./pt.js": 326,
	"./ro": 328,
	"./ro.js": 328,
	"./ru": 329,
	"./ru.js": 329,
	"./sd": 330,
	"./sd.js": 330,
	"./se": 331,
	"./se.js": 331,
	"./si": 332,
	"./si.js": 332,
	"./sk": 333,
	"./sk.js": 333,
	"./sl": 334,
	"./sl.js": 334,
	"./sq": 335,
	"./sq.js": 335,
	"./sr": 336,
	"./sr-cyrl": 337,
	"./sr-cyrl.js": 337,
	"./sr.js": 336,
	"./ss": 338,
	"./ss.js": 338,
	"./sv": 339,
	"./sv.js": 339,
	"./sw": 340,
	"./sw.js": 340,
	"./ta": 341,
	"./ta.js": 341,
	"./te": 342,
	"./te.js": 342,
	"./tet": 343,
	"./tet.js": 343,
	"./tg": 344,
	"./tg.js": 344,
	"./th": 345,
	"./th.js": 345,
	"./tl-ph": 346,
	"./tl-ph.js": 346,
	"./tlh": 347,
	"./tlh.js": 347,
	"./tr": 348,
	"./tr.js": 348,
	"./tzl": 349,
	"./tzl.js": 349,
	"./tzm": 350,
	"./tzm-latn": 351,
	"./tzm-latn.js": 351,
	"./tzm.js": 350,
	"./ug-cn": 352,
	"./ug-cn.js": 352,
	"./uk": 353,
	"./uk.js": 353,
	"./ur": 354,
	"./ur.js": 354,
	"./uz": 355,
	"./uz-latn": 356,
	"./uz-latn.js": 356,
	"./uz.js": 355,
	"./vi": 357,
	"./vi.js": 357,
	"./x-pseudo": 358,
	"./x-pseudo.js": 358,
	"./yo": 359,
	"./yo.js": 359,
	"./zh-cn": 360,
	"./zh-cn.js": 360,
	"./zh-hk": 361,
	"./zh-hk.js": 361,
	"./zh-tw": 362,
	"./zh-tw.js": 362
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
webpackContext.id = 523;

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
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

/***/ 526:
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

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_clip_model__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
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
            selector: 'thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\thumbnail\thumbnail.component.html"*/'<ion-card style="cursor: pointer; max-width: 480px;" (click)="goToClip(clip.slug)">\n\n   <img src="{{clip.thumbnails.medium}}" />\n\n   <ion-row>\n\n      <ion-col>\n\n         <ion-item style="padding-left: 3px;">\n\n            <ion-avatar style="margin-right: 10px;" item-start (click)="$event.stopPropagation(); goToChannel();">\n\n               <img src="{{clip.broadcaster.logo}}">\n\n            </ion-avatar>\n\n            <p ion-text color="light" style="font-weight:bold;">{{clip.title}}</p>\n\n            <p>{{clip.broadcaster.displayName}}</p>\n\n            <p>{{clip.views | views}} views &#183; {{clip.createdAt | timeAgo}}</p>\n\n         </ion-item>\n\n      </ion-col>\n\n   </ion-row>\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\thumbnail\thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());

//# sourceMappingURL=thumbnail.component.js.map

/***/ }),

/***/ 528:
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

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingChannelThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_channel_model__ = __webpack_require__(530);
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
            selector: 'following-channel-thumbnail-component',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\following-channel-thumbnail\following-channel-thumbnail.component.html"*/'<ion-item style="cursor: pointer;" (click)="goToChannel(channel.display_name)">\n\n  <ion-thumbnail item-start>\n\n    <img src="{{channel.logo}}">\n\n  </ion-thumbnail>\n\n  <h2>{{channel.display_name}}</h2>\n\n  <p>{{channel.followers | views}} followers</p>\n\n  <button ion-button clear item-end>View</button>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\components\following-channel-thumbnail\following-channel-thumbnail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FollowingChannelThumbnailComponent);
    return FollowingChannelThumbnailComponent;
}());

//# sourceMappingURL=following-channel-thumbnail.component.js.map

/***/ }),

/***/ 530:
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

/***/ 536:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trending_trending__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_localStorage_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_toast_service__ = __webpack_require__(112);
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
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var that = this;
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
    MyApp.prototype.isLoggedIn = function () {
        return this.authService.isAuthenticated();
    };
    MyApp.prototype.isLoggedOut = function () {
        return !this.authService.isAuthenticated();
    };
    MyApp.prototype.goToPage = function (page) {
        var navOptions = {};
        var that = this;
        navOptions.updateUrl = true;
        this.navCtrl.setRoot(page, null, navOptions)
            .catch(function (err) {
            console.log(err);
            that.toastService.show('You must log in to access this page.');
        });
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('menu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */])
    ], MyApp.prototype, "menuCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\app.html"*/'<ion-menu #menu [content]="content" [type]="reveal">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Browse clips</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngIf="isLoggedIn()" (click)="goToPage(\'favorite-clips\')">\n\n        Favorite clips\n\n      </button>\n\n      <button ion-item (click)="goToPage(\'trending\')">\n\n        Trending\n\n      </button>\n\n      <button ion-item (click)="goToPage(\'games\')">\n\n        Games\n\n      </button>\n\n      <button ion-item *ngIf="isLoggedIn()" (click)="goToPage(\'following\')">\n\n        Following\n\n      </button>\n\n      <button ion-item *ngIf="isLoggedIn()" (click)="logout()">\n\n        Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_8__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__services_users_service__["a" /* UsersService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiAddress: 'https://api.cliperino.com',
    authCallback: 'https://www.cliperino.com/#/authCallback'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getTwitchUsermame = function () {
        return localStorage.getItem("twitchUsername");
    };
    LocalStorageService.prototype.getTwitchUserId = function () {
        return localStorage.getItem("twitchUserId");
    };
    LocalStorageService.prototype.setTwitchUsername = function (twitchUsername) {
        localStorage.setItem("twitchUsername", twitchUsername);
    };
    LocalStorageService.prototype.setTwitchUserId = function (twichUserId) {
        localStorage.setItem("twitchUserId", twichUserId);
    };
    LocalStorageService.prototype.setItem = function (key, data) {
        localStorage.setItem(key, data);
    };
    LocalStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LocalStorageService);
    return LocalStorageService;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (new LocalStorageService());
//# sourceMappingURL=localStorage.service.js.map

/***/ })

},[473]);
//# sourceMappingURL=main.js.map