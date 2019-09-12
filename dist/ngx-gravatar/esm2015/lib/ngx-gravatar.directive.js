/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxGravatarService } from './ngx-gravatar.service';
export class NgxGravatarDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdyYXZhdGFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ncmF2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ3JhdmF0YXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU01RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFxQi9CLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxlQUFtQztRQUFoRyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQVYzRyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBV3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELDRDQUE0QztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjthQUNyRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixD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Q0QseUJBQVksS0FBSyxFQUFLLElBQUksQ0FBQyxLQUFLLEVBQUc7SUFDckMsQ0FBQzs7Ozs7OztJQU1PLFFBQVEsQ0FBQyxNQUFXO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjthQUMxQzs7OztZQU5tQixVQUFVO1lBQTRCLFNBQVM7WUFDMUQsa0JBQWtCOzs7a0JBT3hCLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQWJOLG1DQUFxQjs7SUFDckIscUNBQXVCOztJQUN2Qix1Q0FBeUI7O0lBQ3pCLG9DQUFzQjs7SUFDdEIsd0NBQTBCOztJQUMxQixzQ0FBd0I7O0lBQ3hCLHFDQUF3Qjs7SUFDeEIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLDJDQUE2Qjs7SUFDN0IscUNBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLCtDQUFrQzs7SUFDbEMscUNBQXVCOztJQUV2QiwyQ0FBcUI7O0lBQ3JCLDZDQUE4Qjs7SUFDOUIsNkNBQXNCOztJQUN0Qiw4Q0FBd0I7Ozs7O0lBRVosMENBQThCOzs7OztJQUFFLHdDQUEyQjs7Ozs7SUFBRSwrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hHcmF2YXRhclNlcnZpY2UgfSBmcm9tICcuL25neC1ncmF2YXRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEdyYXZhdGFyQ29uZmlnIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4LWdyYXZhdGFyXSwgW25neEdyYXZhdGFyXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4R3JhdmF0YXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBtZDVIYXNoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgZmFsbGJhY2s6IHN0cmluZzsgLy8gZW51bTogWydibGFuaycsICdpZGVudGljb24nLCAnbW0nLCAnbW9uc3RlcmlkJywgJ3JldHJvJywgJ3JvYm9oYXNoJywgJ3dhdmF0YXInXVxuICBASW5wdXQoKSByYXRpbmc6IHN0cmluZzsgLy8gZW51bTogWydnJywgJ3BnJywgJ3InLCAneCddXG4gIEBJbnB1dCgpIHJvdW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBjb3JuZXJSYWRpdXM6IG51bWJlcjtcbiAgQElucHV0KCkgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYm9yZGVyV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwcmVmZXJHcmF2YXRhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBib29sZWFuO1xuICBASW5wdXQoKSByYXRpbzogbnVtYmVyO1xuXG4gIGluaXRpYWxpemVkOiBib29sZWFuO1xuICBkZWZhdWx0Q29uZmlnOiBHcmF2YXRhckNvbmZpZztcbiAgcmVxdWVzdGVkU2l6ZTogbnVtYmVyO1xuICBpc0dyYXZhdGFyVXNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBncmF2YXRhclNlcnZpY2U6IE5neEdyYXZhdGFyU2VydmljZSkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlZmF1bHRDb25maWcgPSB0aGlzLmdyYXZhdGFyU2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCk7XG4gICAgLy8gTGlzdGVuIGZvciBlcnJvciB3aGVuIGZldGNoaW5nIGN1c3RvbSBzcmNcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Vycm9yJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzR3JhdmF0YXJVc2VkKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcih0cnVlKTsgLy8gRm9yY2UgdXNpbmcgZ3JhdmF0YXJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNHcmF2YXRhclVzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVBdmF0YXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgdmFsdWVzIGZvciB1c2VyIGlucHV0cyBpZiB0aGV5IGFyZSBub3QgcHJvdmlkZWRcbiAgICovXG4gIHByaXZhdGUgc2V0RGVmYXVsdFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLmNvbXB1dGVTaXplKCk7XG4gICAgdGhpcy5yYXRpbyA9IHRoaXMucmF0aW8gPT09IHVuZGVmaW5lZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5yYXRpbyA6IHRoaXMucmF0aW87XG4gICAgdGhpcy5yZXF1ZXN0ZWRTaXplID0gdGhpcy5zaXplICogdGhpcy5yYXRpbztcbiAgICB0aGlzLnJvdW5kID0gdGhpcy5yb3VuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5kZWZhdWx0Q29uZmlnLnJvdW5kIDogdGhpcy5yb3VuZDtcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IHRoaXMuY29ybmVyUmFkaXVzID09PSB1bmRlZmluZWQgPyB0aGlzLmRlZmF1bHRDb25maWcuY29ybmVyUmFkaXVzIDogdGhpcy5jb3JuZXJSYWRpdXM7XG4gICAgdGhpcy5wcmVmZXJHcmF2YXRhciA9IHRoaXMucHJlZmVyR3JhdmF0YXIgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5wcmVmZXJHcmF2YXRhciA6IHRoaXMucHJlZmVyR3JhdmF0YXI7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhdmF0YXIuXG4gICAqIEN1c3RvbSBzb3VyY2UgaGFzIGhpZ2hlciBwcmlvcml0eSBpZiBwcmVmZXJHcmF2YXRhciBpcyBub3Qgc2V0IG9uLlxuICAgKiBGaW5hbGx5LCBzZXQgc3R5bGVzIGZvciB0aGUgYXZhdGFyLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0aWFsaXplQXZhdGFyKGZvcmNlZEdyYXZhdGFyPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlcygpO1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBpZiAodGhpcy5wcmVmZXJHcmF2YXRhciB8fCBmb3JjZWRHcmF2YXRhcikge1xuICAgICAgdXJsID0gdGhpcy5ncmF2YXRhclNlcnZpY2UuZ2VuZXJhdGVHcmF2YXRhclVybCh0aGlzLmVtYWlsLCB0aGlzLm1kNUhhc2gsIHRoaXMucmVxdWVzdGVkU2l6ZSwgdGhpcy5yYXRpbmcsIHRoaXMuZmFsbGJhY2spO1xuICAgICAgdGhpcy5pc0dyYXZhdGFyVXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMucHJlZmVyR3JhdmF0YXIgPT0gZmFsc2VcbiAgICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgICB1cmwgPSB0aGlzLnNyYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIGdyYXZhdGFyXG4gICAgICAgIHVybCA9IHRoaXMuZ3JhdmF0YXJTZXJ2aWNlLmdlbmVyYXRlR3JhdmF0YXJVcmwodGhpcy5lbWFpbCwgdGhpcy5tZDVIYXNoLCB0aGlzLnJlcXVlc3RlZFNpemUsIHRoaXMucmF0aW5nLCB0aGlzLmZhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5pc0dyYXZhdGFyVXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB1cmwpO1xuICAgIHRoaXMuc2V0U3R5bGUodGhpcy5hdmF0YXJTdHlsZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBzaXplIG9mIHRoZSBhdmF0YXJcbiAgICogQHJldHVybiBzaXplXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVTaXplKCk6IG51bWJlciB7XG4gICAgbGV0IHNpemUgPSB0aGlzLnNpemUgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5zaXplIDogdGhpcy5zaXplO1xuICAgIGlmICh0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUud2lkdGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zdHlsZS53aWR0aC50cmltKCk7XG4gICAgICAgIGlmICh3aWR0aC5tYXRjaCgvXlxcZCtweCQvKSkge1xuICAgICAgICAgIC8vIHdpZHRoIHdpdGggcHggdW5pdFxuICAgICAgICAgIHNpemUgPSB3aWR0aC5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSBzdHlsZSBvYmplY3RcbiAgICogQHJldHVybiBzdHlsZSBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgYXZhdGFyU3R5bGUoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5zaXplICsgJ3B4JyxcbiAgICAgIGhlaWdodDogdGhpcy5zaXplICsgJ3B4JyxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5yb3VuZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5ib3JkZXJSYWRpdXMgOiB0aGlzLmNvcm5lclJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5kZWZhdWx0Q29uZmlnLmhhc0JvcmRlciB8fCB0aGlzLmJvcmRlckNvbG9yIHx8IHRoaXMuYm9yZGVyV2lkdGggPyB0aGlzLmRlZmF1bHRDb25maWcuYm9yZGVyU3R5bGUgOiAnbm9uZScsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvciA/IHRoaXMuYm9yZGVyQ29sb3IgOiB0aGlzLmRlZmF1bHRDb25maWcuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCA/IHRoaXMuYm9yZGVyV2lkdGggKyAncHgnIDogdGhpcy5kZWZhdWx0Q29uZmlnLmJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPyB0aGlzLmJhY2tncm91bmRDb2xvciA6IHRoaXMuZGVmYXVsdENvbmZpZy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLnN0eWxlLCAuLi50aGlzLnN0eWxlIH07XG4gIH1cblxuICAvKipcbiAgICogU2V0IHN0eWxlIGZvciB0aGUgYXZhdGFyXG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGUgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIHNldFN0eWxlKHN0eWxlczogYW55KSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrZXksIHN0eWxlc1trZXldKTtcbiAgICB9KTtcbiAgfVxufVxuIl19