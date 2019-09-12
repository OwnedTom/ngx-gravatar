import { InjectionToken, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token for gravatar configuration
 * @type {?}
 */
const GRAVATAR_CONFIG_TOKEN = new InjectionToken('gravatarCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FALLBACK = {
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
const RATING = {
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
const DEFAULT_CONFIG = {
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
class NgxGravatarService {
    /**
     * @param {?} gravatarConfig
     */
    constructor(gravatarConfig) {
        this.gravatarConfig = gravatarConfig;
        this.defaultConfig = Object.assign({}, DEFAULT_CONFIG);
        if (this.gravatarConfig) {
            this.gravatarConfig.rating = (/** @type {?} */ (this.determineRating(this.gravatarConfig.rating)));
            this.gravatarConfig.fallback = (/** @type {?} */ (this.determineFallback(this.gravatarConfig.fallback)));
            this.defaultConfig = Object.assign({}, this.defaultConfig, this.gravatarConfig);
        }
    }
    /**
     * Return defaultConfig object
     * @return {?}
     */
    getDefaultConfig() {
        return this.defaultConfig;
    }
    /**
     * Generate gravatar url
     * @param {?} email is a string. If email is not a string, email will be set to empty string "" by default
     * @param {?=} md5Hash is a string. If value is given it will take precedence over email.
     * @param {?=} size number
     * @param {?=} rating string
     * @param {?=} fallback string
     * @return {?} gravatar url
     */
    generateGravatarUrl(email, md5Hash, size, rating, fallback) {
        /** @type {?} */
        let emailHash;
        if (md5Hash) {
            emailHash = md5Hash;
        }
        else {
            try {
                email = email.trim().toLowerCase();
            }
            catch (e) {
                console.error(`[ngx-gravatar] - Email (${email}) is not a string. Empty string is used as a default email.`);
                email = '';
            }
            emailHash = Md5.hashStr(email);
        }
        size = size ? size : this.defaultConfig.size;
        rating = this.determineRating(rating, this.defaultConfig.rating);
        fallback = this.determineFallback(fallback, this.defaultConfig.fallback);
        return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&r=${rating}&d=${fallback}`;
    }
    /**
     * Determine gravatar fallback string
     * @private
     * @param {?} fallback string
     * @param {?=} defaultFallback string
     * @return {?} string
     */
    determineFallback(fallback, defaultFallback = DEFAULT_CONFIG.fallback) {
        if (fallback === undefined) {
            return defaultFallback;
        }
        if (FALLBACK[fallback] === undefined) {
            // Complain invalid fallback
            console.error(`[ngx-gravatar] - "${fallback}" is invalid gravatar fallback type. ` + `Default fallback "${defaultFallback}" is used.`);
            return defaultFallback;
        }
        return fallback;
    }
    /**
     * Determine gravatar rating string
     * @private
     * @param {?} rating string
     * @param {?=} defaultRating string
     * @return {?} string
     */
    determineRating(rating, defaultRating = DEFAULT_CONFIG.rating) {
        if (rating === undefined) {
            return defaultRating;
        }
        if (RATING[rating] === undefined) {
            console.error(`[ngx-gravatar] - "${rating}" is invalid gravatar rating type. ` + `Default rating "${defaultRating}" is used.`);
            return defaultRating;
        }
        return rating;
    }
}
NgxGravatarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxGravatarService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRAVATAR_CONFIG_TOKEN,] }] }
];
/** @nocollapse */ NgxGravatarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxGravatarService_Factory() { return new NgxGravatarService(ɵɵinject(GRAVATAR_CONFIG_TOKEN, 8)); }, token: NgxGravatarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxGravatarDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} gravatarService
     */
    constructor(elementRef, renderer, gravatarService) {
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
        event => {
            if (!this.isGravatarUsed) {
                this.initializeAvatar(true); // Force using gravatar
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeAvatar();
        this.initialized = true;
        this.isGravatarUsed = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initialized) {
            this.initializeAvatar();
        }
    }
    /**
     * Set default values for user inputs if they are not provided
     * @private
     * @return {?}
     */
    setDefaultValues() {
        this.size = this.computeSize();
        this.ratio = this.ratio === undefined ? this.defaultConfig.ratio : this.ratio;
        this.requestedSize = this.size * this.ratio;
        this.round = this.round === undefined ? this.defaultConfig.round : this.round;
        this.cornerRadius = this.cornerRadius === undefined ? this.defaultConfig.cornerRadius : this.cornerRadius;
        this.preferGravatar = this.preferGravatar === undefined ? this.defaultConfig.preferGravatar : this.preferGravatar;
    }
    /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     * @private
     * @param {?=} forcedGravatar
     * @return {?}
     */
    initializeAvatar(forcedGravatar) {
        this.setDefaultValues();
        /** @type {?} */
        let url = '';
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
    }
    /**
     * Compute the size of the avatar
     * @private
     * @return {?} size
     */
    computeSize() {
        /** @type {?} */
        let size = this.size === undefined ? this.defaultConfig.size : this.size;
        if (this.style && this.style.width) {
            try {
                /** @type {?} */
                const width = this.style.width.trim();
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
    }
    /**
     * Compute style object
     * @private
     * @return {?} style object
     */
    avatarStyle() {
        /** @type {?} */
        const style = {
            width: this.size + 'px',
            height: this.size + 'px',
            borderRadius: this.round ? this.defaultConfig.borderRadius : this.cornerRadius + 'px',
            borderStyle: this.defaultConfig.hasBorder || this.borderColor || this.borderWidth ? this.defaultConfig.borderStyle : 'none',
            borderColor: this.borderColor ? this.borderColor : this.defaultConfig.borderColor,
            borderWidth: this.borderWidth ? this.borderWidth + 'px' : this.defaultConfig.borderWidth + 'px',
            backgroundColor: this.backgroundColor ? this.backgroundColor : this.defaultConfig.backgroundColor
        };
        return Object.assign({}, style, this.style);
    }
    /**
     * Set style for the avatar
     * @private
     * @param {?} styles style object
     * @return {?}
     */
    setStyle(styles) {
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.renderer.setStyle(this.elementRef.nativeElement, key, styles[key]);
        }));
    }
}
NgxGravatarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngx-gravatar], [ngxGravatar]'
            },] }
];
/** @nocollapse */
NgxGravatarDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgxGravatarService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GravatarModule {
    /**
     * @param {?} gravatarConfig
     * @return {?}
     */
    static forRoot(gravatarConfig) {
        return {
            ngModule: GravatarModule,
            providers: [
                {
                    provide: GRAVATAR_CONFIG_TOKEN,
                    useValue: gravatarConfig
                }
            ]
        };
    }
}
GravatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxGravatarDirective],
                exports: [NgxGravatarDirective]
            },] }
];

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
