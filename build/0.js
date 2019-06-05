webpackJsonp([0],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPageModule", function() { return ClipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__ = __webpack_require__(788);
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
                __WEBPACK_IMPORTED_MODULE_4__app_components_component_module__["a" /* ComponentModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__["a" /* ClipboardModule */]
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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClipboardService; });
/* unused harmony export CLIPBOARD_SERVICE_PROVIDER_FACTORY */
/* unused harmony export CLIPBOARD_SERVICE_PROVIDER */
/* unused harmony export ClipboardDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_window_token__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(63);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
    }
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!this.document.queryCommandSupported &&
                !!this.document.queryCommandSupported('copy'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                // tslint:disable-next-line:max-line-length
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            var /** @type {?} */ re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re;
        }
        catch (/** @type {?} */ error) {
            return false;
        }
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @return {?}
     */
    function (content) {
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            this.document.body.appendChild(this.tempTextArea);
        }
        this.tempTextArea.value = content;
        return this.copyFromInputElement(this.tempTextArea);
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.tempTextArea) {
            this.document.body.removeChild(this.tempTextArea);
            this.tempTextArea = undefined;
        }
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.blur();
        window.getSelection().removeAllRanges();
    };
    /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        var /** @type {?} */ isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        var /** @type {?} */ ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        var /** @type {?} */ yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    ClipboardService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2_ngx_window_token__["b" /* WINDOW */],] },] },
    ]; };
    return ClipboardService;
}());
/**
 * @param {?} doc
 * @param {?} win
 * @param {?} parentDispatcher
 * @return {?}
 */
function CLIPBOARD_SERVICE_PROVIDER_FACTORY(doc, win, parentDispatcher) {
    return parentDispatcher || new ClipboardService(doc, win);
}
var /** @type {?} */ CLIPBOARD_SERVICE_PROVIDER = {
    deps: [/** @type {?} */ (__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */]), /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_2_ngx_window_token__["b" /* WINDOW */]), [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */](), ClipboardService]
    ],
    provide: ClipboardService,
    useFactory: CLIPBOARD_SERVICE_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cbOnError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined);
        }
        else if (this.targetElm &&
            this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent), this.cbContent);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @return {?}
     */
    function (succeeded, copiedContent) {
        if (succeeded) {
            this.cbOnSuccess.emit({ isSuccess: true, content: copiedContent });
        }
        else {
            this.cbOnError.emit({ isSuccess: false });
        }
    };
    ClipboardDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxClipboard]'
                },] },
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService, },
    ]; };
    ClipboardDirective.propDecorators = {
        "targetElm": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['ngxClipboard',] },],
        "cbContent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "cbOnSuccess": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "cbOnError": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['click', ['$event.target'],] },],
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2_ngx_window_token__["a" /* NgxWindowTokenModule */]],
                    // tslint:disable-next-line:object-literal-sort-keys
                    declarations: [ClipboardDirective],
                    exports: [ClipboardDirective],
                    providers: [CLIPBOARD_SERVICE_PROVIDER]
                },] },
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNsaXBib2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2xpcGJvYXJkL2xpYi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ25neC13aW5kb3ctdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XG4gIHByaXZhdGUgdGVtcFRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luZG93OiBhbnlcbiAgKSB7fVxuICBwdWJsaWMgZ2V0IGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhIXRoaXMuZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkICYmXG4gICAgICAhIXRoaXMuZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKCdjb3B5JylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzVGFyZ2V0VmFsaWQoXG4gICAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgKSB7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhcmdldCBzaG91bGQgYmUgaW5wdXQgb3IgdGV4dGFyZWEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb3B5RnJvbUlucHV0RWxlbWVudFxuICAgKi9cbiAgcHVibGljIGNvcHlGcm9tSW5wdXRFbGVtZW50KFxuICAgIHRhcmdldEVsbTogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KHRhcmdldEVsbSk7XG4gICAgICBjb25zdCByZSA9IHRoaXMuY29weVRleHQoKTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24odGFyZ2V0RWxtLCB0aGlzLndpbmRvdyk7XG4gICAgICByZXR1cm4gcmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZha2UgdGV4dGFyZWEgZWxlbWVudCwgc2V0cyBpdHMgdmFsdWUgZnJvbSBgdGV4dGAgcHJvcGVydHksXG4gICAqIGFuZCBtYWtlcyBhIHNlbGVjdGlvbiBvbiBpdC5cbiAgICovXG4gIHB1YmxpYyBjb3B5RnJvbUNvbnRlbnQoY29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBUZXh0QXJlYSkge1xuICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB0aGlzLmNyZWF0ZVRlbXBUZXh0QXJlYSh0aGlzLmRvY3VtZW50LCB0aGlzLndpbmRvdyk7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xuICAgIH1cbiAgICB0aGlzLnRlbXBUZXh0QXJlYS52YWx1ZSA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIHRoaXMuY29weUZyb21JbnB1dEVsZW1lbnQodGhpcy50ZW1wVGV4dEFyZWEpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHRlbXBvcmFyeSB0ZXh0YXJlYSBpZiBhbnlcbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGVtcFRleHRBcmVhKSB7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xuICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VsZWN0IHRoZSB0YXJnZXQgaHRtbCBpbnB1dCBlbGVtZW50XG4gIHByaXZhdGUgc2VsZWN0VGFyZ2V0KFxuICAgIGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgaW5wdXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3B5VGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICB9XG4gIC8vIFJlbW92ZXMgY3VycmVudCBzZWxlY3Rpb24gYW5kIGZvY3VzIGZyb20gYHRhcmdldGAgZWxlbWVudC5cbiAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbihcbiAgICBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICAgIHdpbmRvdzogV2luZG93XG4gICkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIGlucHV0RWxlbWVudCAmJiBpbnB1dEVsZW1lbnQuYmx1cigpO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBhIGZha2UgdGV4dGFyZWEgZm9yIGNvcHkgY29tbWFuZFxuICBwcml2YXRlIGNyZWF0ZVRlbXBUZXh0QXJlYShcbiAgICBkb2M6IERvY3VtZW50LFxuICAgIHdpbmRvdzogV2luZG93XG4gICk6IEhUTUxUZXh0QXJlYUVsZW1lbnQge1xuICAgIGNvbnN0IGlzUlRMID0gZG9jLmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJztcbiAgICBsZXQgdGE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdGEgPSBkb2MuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG4gICAgdGEuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7XG4gICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgdGEuc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgIHRhLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgdGEuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgIHRhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0YS5zdHlsZVtpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCddID0gJy05OTk5cHgnO1xuICAgIC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgY29uc3QgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRhLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XG4gICAgdGEuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICByZXR1cm4gdGE7XG4gIH1cbn1cbi8vIHRoaXMgcGF0dGVybiBpcyBtZW50aW9uZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTM4NTQgaW4gIzQzXG5leHBvcnQgZnVuY3Rpb24gQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShcbiAgZG9jOiBEb2N1bWVudCxcbiAgd2luOiBXaW5kb3csXG4gIHBhcmVudERpc3BhdGNoZXI6IENsaXBib2FyZFNlcnZpY2Vcbikge1xuICByZXR1cm4gcGFyZW50RGlzcGF0Y2hlciB8fCBuZXcgQ2xpcGJvYXJkU2VydmljZShkb2MsIHdpbik7XG59XG5cbmV4cG9ydCBjb25zdCBDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUiA9IHtcbiAgZGVwczogW1xuICAgIERPQ1VNRU5UIGFzIEluamVjdGlvblRva2VuPERvY3VtZW50PixcbiAgICBXSU5ET1cgYXMgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+LFxuICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIENsaXBib2FyZFNlcnZpY2VdXG4gIF0sXG4gIHByb3ZpZGU6IENsaXBib2FyZFNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IENMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUllcbn07XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xpcGJvYXJkU2VydmljZSB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd4Q2xpcGJvYXJkXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbmd4Q2xpcGJvYXJkJykgcHVibGljIHRhcmdldEVsbTogSFRNTElucHV0RWxlbWVudDtcblxuICBASW5wdXQoKSBwdWJsaWMgY2JDb250ZW50OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjYk9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNiT25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGlwYm9hcmRTcnY6IENsaXBib2FyZFNlcnZpY2UpIHt9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xpcGJvYXJkU3J2LmRlc3Ryb3koKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5jbGlwYm9hcmRTcnYuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KGZhbHNlLCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnRhcmdldEVsbSAmJlxuICAgICAgdGhpcy5jbGlwYm9hcmRTcnYuaXNUYXJnZXRWYWxpZCh0aGlzLnRhcmdldEVsbSlcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KFxuICAgICAgICB0aGlzLmNsaXBib2FyZFNydi5jb3B5RnJvbUlucHV0RWxlbWVudCh0aGlzLnRhcmdldEVsbSksXG4gICAgICAgIHRoaXMudGFyZ2V0RWxtLnZhbHVlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jYkNvbnRlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KFxuICAgICAgICB0aGlzLmNsaXBib2FyZFNydi5jb3B5RnJvbUNvbnRlbnQodGhpcy5jYkNvbnRlbnQpLFxuICAgICAgICB0aGlzLmNiQ29udGVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYW4gZXZlbnQgYmFzZWQgb24gdGhlIGNvcHkgb3BlcmF0aW9uIHJlc3VsdC5cbiAgICogQHBhcmFtIHN1Y2NlZWRlZFxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVSZXN1bHQoc3VjY2VlZGVkOiBib29sZWFuLCBjb3BpZWRDb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoc3VjY2VlZGVkKSB7XG4gICAgICB0aGlzLmNiT25TdWNjZXNzLmVtaXQoeyBpc1N1Y2Nlc3M6IHRydWUsIGNvbnRlbnQ6IGNvcGllZENvbnRlbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2JPbkVycm9yLmVtaXQoeyBpc1N1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpcGJvYXJkRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4V2luZG93VG9rZW5Nb2R1bGUgfSBmcm9tICduZ3gtd2luZG93LXRva2VuJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWNsaXBib2FyZC5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZ3gtY2xpcGJvYXJkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ3hXaW5kb3dUb2tlbk1vZHVsZV0sXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgZGVjbGFyYXRpb25zOiBbQ2xpcGJvYXJkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0NsaXBib2FyZERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW0NMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSXVxufSlcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmRNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWFFLDBCQUM0QixVQUNGO1FBREUsYUFBUSxHQUFSLFFBQVE7UUFDVixXQUFNLEdBQU4sTUFBTTtLQUM1QjswQkFDTyx5Q0FBVzs7Ozs7WUFDcEIsUUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUI7Z0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUM3Qzs7Ozs7Ozs7O0lBR0csd0NBQWE7Ozs7Y0FDbEIsT0FBK0M7UUFFL0MsSUFDRSxPQUFPLFlBQVksZ0JBQWdC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

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WINDOW; });
/* unused harmony export _window */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxWindowTokenModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WINDOW = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('WindowToken');
/**
 * @return {?}
 */
function _window() {
    return window;
}
var NgxWindowTokenModule = /** @class */ (function () {
    function NgxWindowTokenModule() {
    }
    NgxWindowTokenModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    providers: [{
                            provide: WINDOW,
                            useFactory: _window
                        }]
                },] },
    ];
    return NgxWindowTokenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdpbmRvdy10b2tlbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXdpbmRvdy10b2tlbi9saWIvbmd4LXdpbmRvdy10b2tlbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2luZG93PignV2luZG93VG9rZW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF93aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogV0lORE9XLFxuICAgICAgICB1c2VGYWN0b3J5OiBfd2luZG93XG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4V2luZG93VG9rZW5Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBR2EsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFTLGFBQWEsQ0FBQyxDQUFDOzs7O0FBRWhFO0lBQ0ksT0FBTyxNQUFNLENBQUM7Q0FDakI7Ozs7O2dCQUVBLFFBQVEsU0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQzs0QkFDUixPQUFPLEVBQUUsTUFBTTs0QkFDZixVQUFVLEVBQUUsT0FBTzt5QkFDdEIsQ0FBQztpQkFDTDs7K0JBZEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_clips_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_loader_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_localStorage_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_clipboard__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_abstract_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addhighlightclip_addhighlightclip__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_services_highlights_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_services_authorities_model_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_services_current_channel_store_service__ = __webpack_require__(75);
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











var ClipPage = /** @class */ (function () {
    function ClipPage(navCtrl, navParams, _ngZone, _sanitizer, popoverCtrl, clipboardService, modalCtrl, 
        /* Model Services */
        authoritiesModelService, 
        /* Services */
        authService, clipsService, highlightsService, loaderService, localStorageService, toastService, 
        /* Stores*/
        currentChannelStoreService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ngZone = _ngZone;
        this._sanitizer = _sanitizer;
        this.popoverCtrl = popoverCtrl;
        this.clipboardService = clipboardService;
        this.modalCtrl = modalCtrl;
        this.authoritiesModelService = authoritiesModelService;
        this.authService = authService;
        this.clipsService = clipsService;
        this.highlightsService = highlightsService;
        this.loaderService = loaderService;
        this.localStorageService = localStorageService;
        this.toastService = toastService;
        this.currentChannelStoreService = currentChannelStoreService;
        this.commentsCount = 0;
        this.isFavorite = false;
        this.isLiked = false;
        this.likesCount = 0;
        this.cropInfo = "";
        this.selectClipFeature = false;
        var slug = navParams.get('slug');
        this.slug = slug;
        if (!__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            this.selectClipFeature = true;
        }
    }
    ClipPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.getBySlug();
                        this.getClipPublicInfo();
                        this.getComments();
                        _a = this;
                        return [4 /*yield*/, this.localStorageService.getItem('username')];
                    case 1:
                        _a.username = _b.sent();
                        if (this.authService.loggedIn) {
                            this.getClipUserInfo();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ClipPage.prototype.addClipToHighlight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myModal;
            return __generator(this, function (_a) {
                myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__addhighlightclip_addhighlightclip__["a" /* AddHighlightClipPage */], this.clip);
                myModal.onDidDismiss(this.onAddClipToHighlightDismiss.bind(this));
                myModal.present();
                return [2 /*return*/];
            });
        });
    };
    ClipPage.prototype.onAddClipToHighlightDismiss = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                if (data) {
                    data.slug = this.slug;
                    promise = this.highlightsService.addHighlightClip(data.highlightUuid, data);
                    this.loaderService.show(promise);
                    this.toastService.onFailure(promise);
                    this.toastService.onSuccess(promise, 'Clip added to highlight.');
                }
                return [2 /*return*/];
            });
        });
    };
    ClipPage.prototype.addComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, promise, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        if (!this.authService.loggedIn) {
                            this.toastService.show('Must be logged in to comment on a clip.');
                            return [2 /*return*/];
                        }
                        promise = this.clipsService.addComment(this.slug, this.userComment);
                        this.toastService.onFailure(promise);
                        return [4 /*yield*/, promise];
                    case 1:
                        response = _a.sent();
                        this._ngZone.run(function () {
                            that.comments.push(response);
                            that.userComment = null;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClipPage.prototype.like = function () {
        var _this = this;
        var that = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                if (!this.authService.loggedIn) {
                    that.toastService.show('Must be logged in to like a clip.');
                    return [2 /*return*/];
                }
                promise = this.clipsService.like(this.slug).then(function () {
                    that._ngZone.run(function () {
                        that.isLiked = true;
                        that.likesCount++;
                    });
                });
                this.toastService.onFailure(promise);
                return [2 /*return*/];
            });
        }); })();
    };
    ClipPage.prototype.unlike = function () {
        var that = this;
        var promise = this.clipsService.unlike(this.slug).then(function () {
            that._ngZone.run(function () {
                that.isLiked = false;
                that.likesCount--;
            });
        });
        this.toastService.onFailure(promise);
    };
    ClipPage.prototype.getComments = function () {
        var promise;
        var that = this;
        promise = this.clipsService.getComments(this.slug).then(function (comments) {
            that._ngZone.run(function () {
                that.comments = comments;
            });
        });
        that.toastService.onFailure(promise);
    };
    ClipPage.prototype.getClipPublicInfo = function () {
        var promise;
        var that = this;
        promise = this.clipsService.getPublicInfo(this.slug).then(function (clipPublicInfo) {
            that._ngZone.run(function () {
                that.commentsCount = clipPublicInfo.commentsCount;
                that.likesCount = clipPublicInfo.likesCount;
            });
        });
        that.toastService.onFailure(promise);
    };
    ClipPage.prototype.getClipUserInfo = function () {
        var promise;
        var that = this;
        promise = this.clipsService.getUserInfo(this.slug).then(function (clipUserInfo) {
            that._ngZone.run(function () {
                that.isFavorite = clipUserInfo.isFavorite;
                that.isLiked = clipUserInfo.isLiked;
            });
        });
        that.toastService.onFailure(promise);
    };
    ClipPage.prototype.getBySlug = function () {
        var promise;
        var that = this;
        promise = this.clipsService.getBySlug(this.slug).then(function (clip) {
            var src = 'https://clips.twitch.tv/embed?clip=' + clip.slug + '&tt_medium=clips_api&tt_content=embed&autoplay=true';
            clip.embedHtml = that._sanitizer.bypassSecurityTrustHtml("<div style='overflow: hidden; padding-bottom: 56.25%; position: relative; height: 0;' class='video-responsive'><iframe style='left: 0; top: 0; height: 100%; width: 100%; position: absolute;' src='" + src + "' width='100%' height='100%' muted='false' frameborder='0' scrolling='no' allowfullscreen='true' preload='metadata'></iframe></div>");
            that._ngZone.run(function () {
                that.clip = clip;
            });
        });
        that.loaderService.show(promise);
        that.toastService.onFailure(promise);
    };
    ClipPage.prototype.addFavorite = function () {
        var that = this;
        var promise = this.clipsService.addFavorite(this.slug).then(function () {
            that._ngZone.run(function () {
                that.isFavorite = true;
                that.toastService.show('Added clip to favorites.');
            });
        });
        this.toastService.onFailure(promise);
    };
    ClipPage.prototype.removeFavorite = function () {
        var that = this;
        var promise = this.clipsService.removeFavorite(this.slug).then(function () {
            that._ngZone.run(function () {
                that.isFavorite = false;
                that.toastService.show('Removed clip from favorites.');
            });
        });
        this.toastService.onFailure(promise);
    };
    ClipPage.prototype.goToChannel = function () {
        var that = this;
        this.currentChannelStoreService.setId(that.clip.broadcaster.id);
        this.currentChannelStoreService.setName(that.clip.broadcaster.displayName);
        that.navCtrl.push('trending-channel', { channel: that.clip.broadcaster.displayName });
    };
    ClipPage.prototype.presentPopover = function (myEvent) {
        var that = this;
        var popover = this.popoverCtrl.create('clip-popover', { slug: that.slug });
        popover.present({
            ev: myEvent
        });
    };
    ClipPage.prototype.goToProfile = function () {
        this.navCtrl.push('profile');
    };
    ClipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clip',template:/*ion-inline-start:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\clip\clip.html"*/'<!-- <meta property="og:title" content="European Travel Destinations"> -->\n\n<!-- <meta property="og:description" content="Offering tour packages for individuals or groups."> -->\n\n<!-- <meta property="og:url" content="http://euro-travel-example.com/index.htm"> -->\n\n\n\n<ion-header>\n\n   <ion-navbar>\n\n      <ion-title align-title="left">Clip</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only *ngIf="!isFavorite && authService.loggedIn" (click)="addFavorite()">\n\n          <ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only *ngIf="isFavorite && authService.loggedIn" (click)="removeFavorite()">\n\n          <ion-icon ios="ios-star" md="md-star"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content class="no-padding-xs" padding *ngIf="clip">\n\n    <meta property="og:image" content="{{clip.thumbnails.medium}}">\n\n   <ion-grid class="no-padding-xs">\n\n      <ion-row justify-content-center>\n\n         <ion-col class="no-padding-xs" col-12 col-xl-9>\n\n            <ion-card class="max-width no-margin-xs">\n\n               <ion-row>\n\n                  <ion-col>\n\n                     <ion-item style="cursor: pointer;" (click)="goToChannel()">\n\n                        <ion-avatar item-start>\n\n                           <img src="{{clip.broadcaster.logo}}">\n\n                        </ion-avatar>\n\n                        <h2 ion-text color="light">{{clip.broadcaster.displayName}}</h2>\n\n                        <p>{{clip.views | views}} views &#183; {{clip.createdAt | timeAgo}}</p>\n\n                     </ion-item>\n\n                  </ion-col>\n\n               </ion-row>\n\n               <span [innerHTML]="clip.embedHtml"></span>\n\n               <ion-card-content>\n\n                  <ion-row>\n\n                    <button ion-button clear icon-only *ngIf="!isLiked" (click)="like()">\n\n                      <ion-icon name=\'heart-outline\' is-active="false"></ion-icon>\n\n                      {{likesCount}}\n\n                    </button>\n\n\n\n                    <button ion-button clear icon-only *ngIf="isLiked" (click)="unlike()">\n\n                      <ion-icon color="danger" name=\'heart\' is-active="false"></ion-icon>\n\n                      {{likesCount}}\n\n                    </button>\n\n\n\n                    <button ion-button clear icon-only>\n\n                      <ion-icon name=\'chatboxes\' is-active="false"></ion-icon>\n\n                      {{commentsCount}}\n\n                    </button>\n\n\n\n                    <ion-col style="padding: 0;" text-right>\n\n                      <button ion-button clear icon-only (click)="presentPopover($event)">\n\n                        <ion-icon name=\'share-alt\' is-active="false"></ion-icon>\n\n                        Share\n\n                      </button>\n\n\n\n                      <button *ngIf="authoritiesModelService.hasAuthority(\'HIGHLIGHTS\')" ion-button clear icon-only (click)="addClipToHighlight($event)">\n\n                        <ion-icon name=\'add\' is-active="false"></ion-icon>\n\n                        Add to highlight\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n\n\n                  <ion-row>\n\n                    <ion-col>\n\n                       <p ion-text color="light" style="font-weight: bold;">{{clip.title}}</p>\n\n                       <p ion-text color="lightdark">{{clip.game}}</p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n               </ion-card-content>\n\n            </ion-card>\n\n\n\n            <ion-col>\n\n              <ion-row>\n\n                <ion-col col-12 col-xl-9>\n\n                  <div style="padding-left: 16px;">\n\n                    <p ion-text color="lightdark">Comments</p>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row *ngIf="authService.loggedIn">\n\n                <ion-col col-12>\n\n                  <ion-item class="no-border" style="background-color: inherit; padding-right: 16px;">\n\n                     <ion-avatar item-start>\n\n                      <img src="https://ui-avatars.com/api/?name={{username}}">\n\n                     </ion-avatar>\n\n                     <ion-textarea [(ngModel)]="userComment" style="border-bottom: 1px;" placeholder="Add a public comment..."></ion-textarea>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                  <div>\n\n                    <button (click)="addComment()" *ngIf="userComment" ion-button clear>Add comment</button>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row *ngIf="comments.length">\n\n                <ion-col col-12>\n\n                  <ion-item *ngFor="let comment of comments | userCommentsSort" class="no-border" style="background-color: inherit;">\n\n                     <ion-avatar item-start>\n\n                        <img src="https://ui-avatars.com/api/?name={{comment.twitchUsername}}">\n\n                     </ion-avatar>\n\n                     <h2 ion-text color="light">{{comment.twitchUsername}} &nbsp;<p style="display: inline;" color="lightdark">{{comment.createdAt | timeAgo}}</p></h2>\n\n                     <p style="color: white;">{{comment.comment}}</p>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n         </ion-col>\n\n      </ion-row>\n\n   </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\clout\Documents\boilerplate\ionic3-angular5\src\pages\clip\clip.html"*/,
            styles: ['.no-padding {padding: 0;} .no-margin {margin: 0;}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_clipboard__["b" /* ClipboardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_12__app_services_authorities_model_service__["a" /* AuthoritiesModelService */],
            __WEBPACK_IMPORTED_MODULE_9__app_services_abstract_auth_service__["a" /* AbstractAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_clips_service__["a" /* ClipsService */],
            __WEBPACK_IMPORTED_MODULE_11__app_services_highlights_service__["a" /* HighlightsService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__app_services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_13__app_services_current_channel_store_service__["a" /* CurrentChannelStoreService */]])
    ], ClipPage);
    return ClipPage;
}());

//# sourceMappingURL=clip.js.map

/***/ })

});
//# sourceMappingURL=0.js.map