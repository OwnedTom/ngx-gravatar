import { InjectionToken, Injectable, Optional, Inject, defineInjectable, inject, Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { Md5 } from 'ts-md5/dist/md5';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token for gravatar configuration
 * @type {?}
 */
var GRAVATAR_CONFIG_TOKEN = new InjectionToken('gravatarCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FALLBACK = {
    blank: 'blank',
    identicon: 'identicon',
    mm: 'mm',
    mp: 'mp',
    monsterid: 'monsterid',
    retro: 'retro',
    robohash: 'robohash',
    wavatar: 'wavatar',
};
/** @enum {string} */
var RATING = {
    g: 'g',
    pg: 'pg',
    r: 'r',
    x: 'x',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    fallback: FALLBACK.retro,
    size: 40,
    cornerRadius: 0,
    preferGravatar: false,
    hasBorder: false,
    borderColor: '#000000',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    round: true,
    backgroundColor: 'transparent',
    rating: RATING.g,
    ratio: 2
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGravatarService = /** @class */ (function () {
    function NgxGravatarService(gravatarConfig) {
        this.gravatarConfig = gravatarConfig;
        this.defaultConfig = __assign({}, DEFAULT_CONFIG);
        if (this.gravatarConfig) {
            this.gravatarConfig.rating = (/** @type {?} */ (this.determineRating(this.gravatarConfig.rating)));
            this.gravatarConfig.fallback = (/** @type {?} */ (this.determineFallback(this.gravatarConfig.fallback)));
            this.defaultConfig = __assign({}, this.defaultConfig, this.gravatarConfig);
        }
    }
    /**
     * Return defaultConfig object
     */
    /**
     * Return defaultConfig object
     * @return {?}
     */
    NgxGravatarService.prototype.getDefaultConfig = /**
     * Return defaultConfig object
     * @return {?}
     */
    function () {
        return this.defaultConfig;
    };
    /**
     * Generate gravatar url
     * @param email is a string. If email is not a string, email will be set to empty string "" by default
     * @param md5Hash is a string. If value is given it will take precedence over email.
     * @param size number
     * @param rating string
     * @param fallback string
     * @return gravatar url
     */
    /**
     * Generate gravatar url
     * @param {?} email is a string. If email is not a string, email will be set to empty string "" by default
     * @param {?=} md5Hash is a string. If value is given it will take precedence over email.
     * @param {?=} size number
     * @param {?=} rating string
     * @param {?=} fallback string
     * @return {?} gravatar url
     */
    NgxGravatarService.prototype.generateGravatarUrl = /**
     * Generate gravatar url
     * @param {?} email is a string. If email is not a string, email will be set to empty string "" by default
     * @param {?=} md5Hash is a string. If value is given it will take precedence over email.
     * @param {?=} size number
     * @param {?=} rating string
     * @param {?=} fallback string
     * @return {?} gravatar url
     */
    function (email, md5Hash, size, rating, fallback) {
        /** @type {?} */
        var emailHash;
        if (md5Hash) {
            emailHash = md5Hash;
        }
        else {
            try {
                email = email.trim().toLowerCase();
            }
            catch (e) {
                console.error("[ngx-gravatar] - Email (" + email + ") is not a string. Empty string is used as a default email.");
                email = '';
            }
            emailHash = Md5.hashStr(email);
        }
        size = size ? size : this.defaultConfig.size;
        rating = this.determineRating(rating, this.defaultConfig.rating);
        fallback = this.determineFallback(fallback, this.defaultConfig.fallback);
        return "https://www.gravatar.com/avatar/" + emailHash + "?s=" + size + "&r=" + rating + "&d=" + fallback;
    };
    /**
     * Determine gravatar fallback string
     * @param fallback string
     * @param defaultFallback string
     * @return string
     */
    /**
     * Determine gravatar fallback string
     * @private
     * @param {?} fallback string
     * @param {?=} defaultFallback string
     * @return {?} string
     */
    NgxGravatarService.prototype.determineFallback = /**
     * Determine gravatar fallback string
     * @private
     * @param {?} fallback string
     * @param {?=} defaultFallback string
     * @return {?} string
     */
    function (fallback, defaultFallback) {
        if (defaultFallback === void 0) { defaultFallback = DEFAULT_CONFIG.fallback; }
        if (fallback === undefined) {
            return defaultFallback;
        }
        if (FALLBACK[fallback] === undefined) {
            // Complain invalid fallback
            console.error("[ngx-gravatar] - \"" + fallback + "\" is invalid gravatar fallback type. " + ("Default fallback \"" + defaultFallback + "\" is used."));
            return defaultFallback;
        }
        return fallback;
    };
    /**
     * Determine gravatar rating string
     * @param rating string
     * @param defaultRating string
     * @return string
     */
    /**
     * Determine gravatar rating string
     * @private
     * @param {?} rating string
     * @param {?=} defaultRating string
     * @return {?} string
     */
    NgxGravatarService.prototype.determineRating = /**
     * Determine gravatar rating string
     * @private
     * @param {?} rating string
     * @param {?=} defaultRating string
     * @return {?} string
     */
    function (rating, defaultRating) {
        if (defaultRating === void 0) { defaultRating = DEFAULT_CONFIG.rating; }
        if (rating === undefined) {
            return defaultRating;
        }
        if (RATING[rating] === undefined) {
            console.error("[ngx-gravatar] - \"" + rating + "\" is invalid gravatar rating type. " + ("Default rating \"" + defaultRating + "\" is used."));
            return defaultRating;
        }
        return rating;
    };
    NgxGravatarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxGravatarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRAVATAR_CONFIG_TOKEN,] }] }
    ]; };
    /** @nocollapse */ NgxGravatarService.ngInjectableDef = defineInjectable({ factory: function NgxGravatarService_Factory() { return new NgxGravatarService(inject(GRAVATAR_CONFIG_TOKEN, 8)); }, token: NgxGravatarService, providedIn: "root" });
    return NgxGravatarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGravatarDirective = /** @class */ (function () {
    function NgxGravatarDirective(elementRef, renderer, gravatarService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.gravatarService = gravatarService;
        this.style = {};
        this.initialized = false;
        this.defaultConfig = this.gravatarService.getDefaultConfig();
        // Listen for error when fetching custom src
        this.renderer.listen(this.elementRef.nativeElement, 'error', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.isGravatarUsed) {
                _this.initializeAvatar(true); // Force using gravatar
            }
        }));
    }
    /**
     * @return {?}
     */
    NgxGravatarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeAvatar();
        this.initialized = true;
        this.isGravatarUsed = false;
    };
    /**
     * @return {?}
     */
    NgxGravatarDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.initializeAvatar();
        }
    };
    /**
     * Set default values for user inputs if they are not provided
     */
    /**
     * Set default values for user inputs if they are not provided
     * @private
     * @return {?}
     */
    NgxGravatarDirective.prototype.setDefaultValues = /**
     * Set default values for user inputs if they are not provided
     * @private
     * @return {?}
     */
    function () {
        this.size = this.computeSize();
        this.ratio = this.ratio === undefined ? this.defaultConfig.ratio : this.ratio;
        this.requestedSize = this.size * this.ratio;
        this.round = this.round === undefined ? this.defaultConfig.round : this.round;
        this.cornerRadius = this.cornerRadius === undefined ? this.defaultConfig.cornerRadius : this.cornerRadius;
        this.preferGravatar = this.preferGravatar === undefined ? this.defaultConfig.preferGravatar : this.preferGravatar;
    };
    /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     */
    /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     * @private
     * @param {?=} forcedGravatar
     * @return {?}
     */
    NgxGravatarDirective.prototype.initializeAvatar = /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     * @private
     * @param {?=} forcedGravatar
     * @return {?}
     */
    function (forcedGravatar) {
        this.setDefaultValues();
        /** @type {?} */
        var url = '';
        if (this.preferGravatar || forcedGravatar) {
            url = this.gravatarService.generateGravatarUrl(this.email, this.md5Hash, this.requestedSize, this.rating, this.fallback);
            this.isGravatarUsed = true;
        }
        else {
            // this.preferGravatar == false
            if (this.src) {
                url = this.src;
            }
            else {
                // fallback to gravatar
                url = this.gravatarService.generateGravatarUrl(this.email, this.md5Hash, this.requestedSize, this.rating, this.fallback);
                this.isGravatarUsed = true;
            }
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'src', url);
        this.setStyle(this.avatarStyle());
    };
    /**
     * Compute the size of the avatar
     * @return size
     */
    /**
     * Compute the size of the avatar
     * @private
     * @return {?} size
     */
    NgxGravatarDirective.prototype.computeSize = /**
     * Compute the size of the avatar
     * @private
     * @return {?} size
     */
    function () {
        /** @type {?} */
        var size = this.size === undefined ? this.defaultConfig.size : this.size;
        if (this.style && this.style.width) {
            try {
                /** @type {?} */
                var width = this.style.width.trim();
                if (width.match(/^\d+px$/)) {
                    // width with px unit
                    size = width.replace('px', '');
                }
            }
            catch (e) {
                return size;
            }
        }
        return size;
    };
    /**
     * Compute style object
     * @return style object
     */
    /**
     * Compute style object
     * @private
     * @return {?} style object
     */
    NgxGravatarDirective.prototype.avatarStyle = /**
     * Compute style object
     * @private
     * @return {?} style object
     */
    function () {
        /** @type {?} */
        var style = {
            width: this.size + 'px',
            height: this.size + 'px',
            borderRadius: this.round ? this.defaultConfig.borderRadius : this.cornerRadius + 'px',
            borderStyle: this.defaultConfig.hasBorder || this.borderColor || this.borderWidth ? this.defaultConfig.borderStyle : 'none',
            borderColor: this.borderColor ? this.borderColor : this.defaultConfig.borderColor,
            borderWidth: this.borderWidth ? this.borderWidth + 'px' : this.defaultConfig.borderWidth + 'px',
            backgroundColor: this.backgroundColor ? this.backgroundColor : this.defaultConfig.backgroundColor
        };
        return __assign({}, style, this.style);
    };
    /**
     * Set style for the avatar
     * @param styles style object
     */
    /**
     * Set style for the avatar
     * @private
     * @param {?} styles style object
     * @return {?}
     */
    NgxGravatarDirective.prototype.setStyle = /**
     * Set style for the avatar
     * @private
     * @param {?} styles style object
     * @return {?}
     */
    function (styles) {
        var _this = this;
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.renderer.setStyle(_this.elementRef.nativeElement, key, styles[key]);
        }));
    };
    NgxGravatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngx-gravatar], [ngxGravatar]'
                },] }
    ];
    /** @nocollapse */
    NgxGravatarDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgxGravatarService }
    ]; };
    NgxGravatarDirective.propDecorators = {
        src: [{ type: Input }],
        email: [{ type: Input }],
        md5Hash: [{ type: Input }],
        size: [{ type: Input }],
        fallback: [{ type: Input }],
        rating: [{ type: Input }],
        round: [{ type: Input }],
        cornerRadius: [{ type: Input }],
        borderColor: [{ type: Input }],
        borderWidth: [{ type: Input }],
        style: [{ type: Input }],
        preferGravatar: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        ratio: [{ type: Input }]
    };
    return NgxGravatarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GravatarModule = /** @class */ (function () {
    function GravatarModule() {
    }
    /**
     * @param {?} gravatarConfig
     * @return {?}
     */
    GravatarModule.forRoot = /**
     * @param {?} gravatarConfig
     * @return {?}
     */
    function (gravatarConfig) {
        return {
            ngModule: GravatarModule,
            providers: [
                {
                    provide: GRAVATAR_CONFIG_TOKEN,
                    useValue: gravatarConfig
                }
            ]
        };
    };
    GravatarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxGravatarDirective],
                    exports: [NgxGravatarDirective]
                },] }
    ];
    return GravatarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FALLBACK, GravatarModule, RATING, NgxGravatarDirective as ɵa, NgxGravatarService as ɵb, GRAVATAR_CONFIG_TOKEN as ɵc };
//# sourceMappingURL=ngx-gravatar.js.map
