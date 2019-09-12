/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxGravatarService } from './ngx-gravatar.service';
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
        return tslib_1.__assign({}, style, this.style);
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
export { NgxGravatarDirective };
if (false) {
    /** @type {?} */
    NgxGravatarDirective.prototype.src;
    /** @type {?} */
    NgxGravatarDirective.prototype.email;
    /** @type {?} */
    NgxGravatarDirective.prototype.md5Hash;
    /** @type {?} */
    NgxGravatarDirective.prototype.size;
    /** @type {?} */
    NgxGravatarDirective.prototype.fallback;
    /** @type {?} */
    NgxGravatarDirective.prototype.rating;
    /** @type {?} */
    NgxGravatarDirective.prototype.round;
    /** @type {?} */
    NgxGravatarDirective.prototype.cornerRadius;
    /** @type {?} */
    NgxGravatarDirective.prototype.borderColor;
    /** @type {?} */
    NgxGravatarDirective.prototype.borderWidth;
    /** @type {?} */
    NgxGravatarDirective.prototype.style;
    /** @type {?} */
    NgxGravatarDirective.prototype.preferGravatar;
    /** @type {?} */
    NgxGravatarDirective.prototype.backgroundColor;
    /** @type {?} */
    NgxGravatarDirective.prototype.ratio;
    /** @type {?} */
    NgxGravatarDirective.prototype.initialized;
    /** @type {?} */
    NgxGravatarDirective.prototype.defaultConfig;
    /** @type {?} */
    NgxGravatarDirective.prototype.requestedSize;
    /** @type {?} */
    NgxGravatarDirective.prototype.isGravatarUsed;
    /**
     * @type {?}
     * @private
     */
    NgxGravatarDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxGravatarDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NgxGravatarDirective.prototype.gravatarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdyYXZhdGFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ncmF2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ3JhdmF0YXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQ7SUF3QkUsOEJBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxlQUFtQztRQUFwSCxpQkFTQztRQVRtQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQVYzRyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBV3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELDRDQUE0QztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ2hFLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7YUFDckQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSywrQ0FBZ0I7Ozs7O0lBQXhCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDcEgsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNLLCtDQUFnQjs7Ozs7Ozs7SUFBeEIsVUFBeUIsY0FBd0I7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O1lBQ3BCLEdBQUcsR0FBRyxFQUFFO1FBQ1osSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsRUFBRTtZQUN6QyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6SCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjthQUFNO1lBQ0wsK0JBQStCO1lBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNoQjtpQkFBTTtnQkFDTCx1QkFBdUI7Z0JBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6SCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUM1QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ssMENBQVc7Ozs7O0lBQW5COztZQUNNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ3hFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJOztvQkFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzFCLHFCQUFxQjtvQkFDckIsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUNoQzthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSywwQ0FBVzs7Ozs7SUFBbkI7O1lBQ1EsS0FBSyxHQUFHO1lBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO1lBQ3JGLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7WUFDakYsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJO1lBQy9GLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWU7U0FDbEc7UUFDRCw0QkFBWSxLQUFLLEVBQUssSUFBSSxDQUFDLEtBQUssRUFBRztJQUNyQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0ssdUNBQVE7Ozs7OztJQUFoQixVQUFpQixNQUFXO1FBQTVCLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtpQkFDMUM7Ozs7Z0JBTm1CLFVBQVU7Z0JBQTRCLFNBQVM7Z0JBQzFELGtCQUFrQjs7O3NCQU94QixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7O0lBaUhSLDJCQUFDO0NBQUEsQUFsSUQsSUFrSUM7U0EvSFksb0JBQW9COzs7SUFDL0IsbUNBQXFCOztJQUNyQixxQ0FBdUI7O0lBQ3ZCLHVDQUF5Qjs7SUFDekIsb0NBQXNCOztJQUN0Qix3Q0FBMEI7O0lBQzFCLHNDQUF3Qjs7SUFDeEIscUNBQXdCOztJQUN4Qiw0Q0FBOEI7O0lBQzlCLDJDQUE2Qjs7SUFDN0IsMkNBQTZCOztJQUM3QixxQ0FBeUI7O0lBQ3pCLDhDQUFpQzs7SUFDakMsK0NBQWtDOztJQUNsQyxxQ0FBdUI7O0lBRXZCLDJDQUFxQjs7SUFDckIsNkNBQThCOztJQUM5Qiw2Q0FBc0I7O0lBQ3RCLDhDQUF3Qjs7Ozs7SUFFWiwwQ0FBOEI7Ozs7O0lBQUUsd0NBQTJCOzs7OztJQUFFLCtDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEdyYXZhdGFyU2VydmljZSB9IGZyb20gJy4vbmd4LWdyYXZhdGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JhdmF0YXJDb25maWcgfSBmcm9tICcuL2dyYXZhdGFyLWNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3gtZ3JhdmF0YXJdLCBbbmd4R3JhdmF0YXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHcmF2YXRhckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1kNUhhc2g6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBmYWxsYmFjazogc3RyaW5nOyAvLyBlbnVtOiBbJ2JsYW5rJywgJ2lkZW50aWNvbicsICdtbScsICdtb25zdGVyaWQnLCAncmV0cm8nLCAncm9ib2hhc2gnLCAnd2F2YXRhciddXG4gIEBJbnB1dCgpIHJhdGluZzogc3RyaW5nOyAvLyBlbnVtOiBbJ2cnLCAncGcnLCAncicsICd4J11cbiAgQElucHV0KCkgcm91bmQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvcm5lclJhZGl1czogbnVtYmVyO1xuICBASW5wdXQoKSBib3JkZXJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBib3JkZXJXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBzdHlsZTogYW55ID0ge307XG4gIEBJbnB1dCgpIHByZWZlckdyYXZhdGFyOiBib29sZWFuO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJhdGlvOiBudW1iZXI7XG5cbiAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gIGRlZmF1bHRDb25maWc6IEdyYXZhdGFyQ29uZmlnO1xuICByZXF1ZXN0ZWRTaXplOiBudW1iZXI7XG4gIGlzR3JhdmF0YXJVc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGdyYXZhdGFyU2VydmljZTogTmd4R3JhdmF0YXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHRoaXMuZ3JhdmF0YXJTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKTtcbiAgICAvLyBMaXN0ZW4gZm9yIGVycm9yIHdoZW4gZmV0Y2hpbmcgY3VzdG9tIHNyY1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZXJyb3InLCBldmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNHcmF2YXRhclVzZWQpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQXZhdGFyKHRydWUpOyAvLyBGb3JjZSB1c2luZyBncmF2YXRhclxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplQXZhdGFyKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc0dyYXZhdGFyVXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIHVzZXIgaW5wdXRzIGlmIHRoZXkgYXJlIG5vdCBwcm92aWRlZFxuICAgKi9cbiAgcHJpdmF0ZSBzZXREZWZhdWx0VmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuY29tcHV0ZVNpemUoKTtcbiAgICB0aGlzLnJhdGlvID0gdGhpcy5yYXRpbyA9PT0gdW5kZWZpbmVkID8gdGhpcy5kZWZhdWx0Q29uZmlnLnJhdGlvIDogdGhpcy5yYXRpbztcbiAgICB0aGlzLnJlcXVlc3RlZFNpemUgPSB0aGlzLnNpemUgKiB0aGlzLnJhdGlvO1xuICAgIHRoaXMucm91bmQgPSB0aGlzLnJvdW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmRlZmF1bHRDb25maWcucm91bmQgOiB0aGlzLnJvdW5kO1xuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gdGhpcy5jb3JuZXJSYWRpdXMgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5jb3JuZXJSYWRpdXMgOiB0aGlzLmNvcm5lclJhZGl1cztcbiAgICB0aGlzLnByZWZlckdyYXZhdGFyID0gdGhpcy5wcmVmZXJHcmF2YXRhciA9PT0gdW5kZWZpbmVkID8gdGhpcy5kZWZhdWx0Q29uZmlnLnByZWZlckdyYXZhdGFyIDogdGhpcy5wcmVmZXJHcmF2YXRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGF2YXRhci5cbiAgICogQ3VzdG9tIHNvdXJjZSBoYXMgaGlnaGVyIHByaW9yaXR5IGlmIHByZWZlckdyYXZhdGFyIGlzIG5vdCBzZXQgb24uXG4gICAqIEZpbmFsbHksIHNldCBzdHlsZXMgZm9yIHRoZSBhdmF0YXIuXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVBdmF0YXIoZm9yY2VkR3JhdmF0YXI/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVzKCk7XG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGlmICh0aGlzLnByZWZlckdyYXZhdGFyIHx8IGZvcmNlZEdyYXZhdGFyKSB7XG4gICAgICB1cmwgPSB0aGlzLmdyYXZhdGFyU2VydmljZS5nZW5lcmF0ZUdyYXZhdGFyVXJsKHRoaXMuZW1haWwsIHRoaXMubWQ1SGFzaCwgdGhpcy5yZXF1ZXN0ZWRTaXplLCB0aGlzLnJhdGluZywgdGhpcy5mYWxsYmFjayk7XG4gICAgICB0aGlzLmlzR3JhdmF0YXJVc2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5wcmVmZXJHcmF2YXRhciA9PSBmYWxzZVxuICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgIHVybCA9IHRoaXMuc3JjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gZ3JhdmF0YXJcbiAgICAgICAgdXJsID0gdGhpcy5ncmF2YXRhclNlcnZpY2UuZ2VuZXJhdGVHcmF2YXRhclVybCh0aGlzLmVtYWlsLCB0aGlzLm1kNUhhc2gsIHRoaXMucmVxdWVzdGVkU2l6ZSwgdGhpcy5yYXRpbmcsIHRoaXMuZmFsbGJhY2spO1xuICAgICAgICB0aGlzLmlzR3JhdmF0YXJVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NyYycsIHVybCk7XG4gICAgdGhpcy5zZXRTdHlsZSh0aGlzLmF2YXRhclN0eWxlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIHNpemUgb2YgdGhlIGF2YXRhclxuICAgKiBAcmV0dXJuIHNpemVcbiAgICovXG4gIHByaXZhdGUgY29tcHV0ZVNpemUoKTogbnVtYmVyIHtcbiAgICBsZXQgc2l6ZSA9IHRoaXMuc2l6ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5kZWZhdWx0Q29uZmlnLnNpemUgOiB0aGlzLnNpemU7XG4gICAgaWYgKHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS53aWR0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnN0eWxlLndpZHRoLnRyaW0oKTtcbiAgICAgICAgaWYgKHdpZHRoLm1hdGNoKC9eXFxkK3B4JC8pKSB7XG4gICAgICAgICAgLy8gd2lkdGggd2l0aCBweCB1bml0XG4gICAgICAgICAgc2l6ZSA9IHdpZHRoLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHN0eWxlIG9iamVjdFxuICAgKiBAcmV0dXJuIHN0eWxlIG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBhdmF0YXJTdHlsZSgpIHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnNpemUgKyAncHgnLFxuICAgICAgaGVpZ2h0OiB0aGlzLnNpemUgKyAncHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLnJvdW5kID8gdGhpcy5kZWZhdWx0Q29uZmlnLmJvcmRlclJhZGl1cyA6IHRoaXMuY29ybmVyUmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLmRlZmF1bHRDb25maWcuaGFzQm9yZGVyIHx8IHRoaXMuYm9yZGVyQ29sb3IgfHwgdGhpcy5ib3JkZXJXaWR0aCA/IHRoaXMuZGVmYXVsdENvbmZpZy5ib3JkZXJTdHlsZSA6ICdub25lJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yID8gdGhpcy5ib3JkZXJDb2xvciA6IHRoaXMuZGVmYXVsdENvbmZpZy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoID8gdGhpcy5ib3JkZXJXaWR0aCArICdweCcgOiB0aGlzLmRlZmF1bHRDb25maWcuYm9yZGVyV2lkdGggKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvciA/IHRoaXMuYmFja2dyb3VuZENvbG9yIDogdGhpcy5kZWZhdWx0Q29uZmlnLmJhY2tncm91bmRDb2xvclxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uc3R5bGUsIC4uLnRoaXMuc3R5bGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3R5bGUgZm9yIHRoZSBhdmF0YXJcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZSBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzOiBhbnkpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgc3R5bGVzW2tleV0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=