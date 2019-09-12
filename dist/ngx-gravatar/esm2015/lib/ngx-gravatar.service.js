/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { GRAVATAR_CONFIG_TOKEN } from './gravatar-config.token';
import { DEFAULT_CONFIG } from './ngx-gravatar.constants';
import { FALLBACK, RATING } from './ngx-gravatar.enums';
import * as i0 from "@angular/core";
import * as i1 from "./gravatar-config.token";
export class NgxGravatarService {
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
/** @nocollapse */ NgxGravatarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxGravatarService_Factory() { return new NgxGravatarService(i0.ɵɵinject(i1.GRAVATAR_CONFIG_TOKEN, 8)); }, token: NgxGravatarService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxGravatarService.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    NgxGravatarService.prototype.gravatarConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdyYXZhdGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3JhdmF0YXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWdyYXZhdGFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFrQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFnQixNQUFNLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBS2xGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFHN0IsWUFBK0QsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzNGLElBQUksQ0FBQyxhQUFhLHFCQUFRLGNBQWMsQ0FBRSxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQWMsQ0FBQztZQUM1RixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBZ0IsQ0FBQztZQUNwRyxJQUFJLENBQUMsYUFBYSxxQkFBUSxJQUFJLENBQUMsYUFBYSxFQUFLLElBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQztTQUN4RTtJQUNILENBQUM7Ozs7O0lBS0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7Ozs7SUFXRCxtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsT0FBZ0IsRUFBRSxJQUFhLEVBQUUsTUFBZSxFQUFFLFFBQWlCOztZQUNoRyxTQUE4QjtRQUNsQyxJQUFJLE9BQU8sRUFBRTtZQUNYLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUk7Z0JBQ0YsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEtBQUssNkRBQTZELENBQUMsQ0FBQztnQkFDN0csS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNaO1lBQ0QsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQzdDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekUsT0FBTyxtQ0FBbUMsU0FBUyxNQUFNLElBQUksTUFBTSxNQUFNLE1BQU0sUUFBUSxFQUFFLENBQUM7SUFDNUYsQ0FBQzs7Ozs7Ozs7SUFRTyxpQkFBaUIsQ0FBQyxRQUFnQixFQUFFLGtCQUEwQixjQUFjLENBQUMsUUFBUTtRQUMzRixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFlLENBQUM7U0FDeEI7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDcEMsNEJBQTRCO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQ1gscUJBQXFCLFFBQVEsdUNBQXVDLEdBQUcscUJBQXFCLGVBQWUsWUFBWSxDQUN4SCxDQUFDO1lBQ0YsT0FBTyxlQUFlLENBQUM7U0FDeEI7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7OztJQVFPLGVBQWUsQ0FBQyxNQUFjLEVBQUUsZ0JBQXdCLGNBQWMsQ0FBQyxNQUFNO1FBQ25GLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixNQUFNLHFDQUFxQyxHQUFHLG1CQUFtQixhQUFhLFlBQVksQ0FBQyxDQUFDO1lBQy9ILE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBMUZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FJYyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7Ozs7Ozs7SUFGckQsMkNBQXNDOzs7OztJQUUxQiw0Q0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcbmltcG9ydCB7IEdyYXZhdGFyQ29uZmlnIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcnO1xuaW1wb3J0IHsgR1JBVkFUQVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL25neC1ncmF2YXRhci5jb25zdGFudHMnO1xuaW1wb3J0IHsgRkFMTEJBQ0ssIEZhbGxiYWNrVHlwZSwgUkFUSU5HLCBSYXRpbmdUeXBlIH0gZnJvbSAnLi9uZ3gtZ3JhdmF0YXIuZW51bXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHcmF2YXRhclNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRDb25maWc6IEdyYXZhdGFyQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoR1JBVkFUQVJfQ09ORklHX1RPS0VOKSBwcml2YXRlIGdyYXZhdGFyQ29uZmlnOiBHcmF2YXRhckNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcgfTtcblxuICAgIGlmICh0aGlzLmdyYXZhdGFyQ29uZmlnKSB7XG4gICAgICB0aGlzLmdyYXZhdGFyQ29uZmlnLnJhdGluZyA9IHRoaXMuZGV0ZXJtaW5lUmF0aW5nKHRoaXMuZ3JhdmF0YXJDb25maWcucmF0aW5nKSBhcyBSYXRpbmdUeXBlO1xuICAgICAgdGhpcy5ncmF2YXRhckNvbmZpZy5mYWxsYmFjayA9IHRoaXMuZGV0ZXJtaW5lRmFsbGJhY2sodGhpcy5ncmF2YXRhckNvbmZpZy5mYWxsYmFjaykgYXMgRmFsbGJhY2tUeXBlO1xuICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnID0geyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLnRoaXMuZ3JhdmF0YXJDb25maWcgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGRlZmF1bHRDb25maWcgb2JqZWN0XG4gICAqL1xuICBnZXREZWZhdWx0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgZ3JhdmF0YXIgdXJsXG4gICAqIEBwYXJhbSBlbWFpbCBpcyBhIHN0cmluZy4gSWYgZW1haWwgaXMgbm90IGEgc3RyaW5nLCBlbWFpbCB3aWxsIGJlIHNldCB0byBlbXB0eSBzdHJpbmcgXCJcIiBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSBtZDVIYXNoIGlzIGEgc3RyaW5nLiBJZiB2YWx1ZSBpcyBnaXZlbiBpdCB3aWxsIHRha2UgcHJlY2VkZW5jZSBvdmVyIGVtYWlsLlxuICAgKiBAcGFyYW0gc2l6ZSBudW1iZXJcbiAgICogQHBhcmFtIHJhdGluZyBzdHJpbmdcbiAgICogQHBhcmFtIGZhbGxiYWNrIHN0cmluZ1xuICAgKiBAcmV0dXJuIGdyYXZhdGFyIHVybFxuICAgKi9cbiAgZ2VuZXJhdGVHcmF2YXRhclVybChlbWFpbDogc3RyaW5nLCBtZDVIYXNoPzogc3RyaW5nLCBzaXplPzogbnVtYmVyLCByYXRpbmc/OiBzdHJpbmcsIGZhbGxiYWNrPzogc3RyaW5nKSB7XG4gICAgbGV0IGVtYWlsSGFzaDogc3RyaW5nIHwgSW50MzJBcnJheTtcbiAgICBpZiAobWQ1SGFzaCkge1xuICAgICAgZW1haWxIYXNoID0gbWQ1SGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW1haWwgPSBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW25neC1ncmF2YXRhcl0gLSBFbWFpbCAoJHtlbWFpbH0pIGlzIG5vdCBhIHN0cmluZy4gRW1wdHkgc3RyaW5nIGlzIHVzZWQgYXMgYSBkZWZhdWx0IGVtYWlsLmApO1xuICAgICAgICBlbWFpbCA9ICcnO1xuICAgICAgfVxuICAgICAgZW1haWxIYXNoID0gTWQ1Lmhhc2hTdHIoZW1haWwpO1xuICAgIH1cbiAgICBzaXplID0gc2l6ZSA/IHNpemUgOiB0aGlzLmRlZmF1bHRDb25maWcuc2l6ZTtcbiAgICByYXRpbmcgPSB0aGlzLmRldGVybWluZVJhdGluZyhyYXRpbmcsIHRoaXMuZGVmYXVsdENvbmZpZy5yYXRpbmcpO1xuICAgIGZhbGxiYWNrID0gdGhpcy5kZXRlcm1pbmVGYWxsYmFjayhmYWxsYmFjaywgdGhpcy5kZWZhdWx0Q29uZmlnLmZhbGxiYWNrKTtcbiAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJHtlbWFpbEhhc2h9P3M9JHtzaXplfSZyPSR7cmF0aW5nfSZkPSR7ZmFsbGJhY2t9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgZ3JhdmF0YXIgZmFsbGJhY2sgc3RyaW5nXG4gICAqIEBwYXJhbSBmYWxsYmFjayBzdHJpbmdcbiAgICogQHBhcmFtIGRlZmF1bHRGYWxsYmFjayBzdHJpbmdcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgZGV0ZXJtaW5lRmFsbGJhY2soZmFsbGJhY2s6IHN0cmluZywgZGVmYXVsdEZhbGxiYWNrOiBzdHJpbmcgPSBERUZBVUxUX0NPTkZJRy5mYWxsYmFjayk6IHN0cmluZyB7XG4gICAgaWYgKGZhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0RmFsbGJhY2s7XG4gICAgfVxuXG4gICAgaWYgKEZBTExCQUNLW2ZhbGxiYWNrXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBDb21wbGFpbiBpbnZhbGlkIGZhbGxiYWNrXG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgW25neC1ncmF2YXRhcl0gLSBcIiR7ZmFsbGJhY2t9XCIgaXMgaW52YWxpZCBncmF2YXRhciBmYWxsYmFjayB0eXBlLiBgICsgYERlZmF1bHQgZmFsbGJhY2sgXCIke2RlZmF1bHRGYWxsYmFja31cIiBpcyB1c2VkLmBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGVmYXVsdEZhbGxiYWNrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgZ3JhdmF0YXIgcmF0aW5nIHN0cmluZ1xuICAgKiBAcGFyYW0gcmF0aW5nIHN0cmluZ1xuICAgKiBAcGFyYW0gZGVmYXVsdFJhdGluZyBzdHJpbmdcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgZGV0ZXJtaW5lUmF0aW5nKHJhdGluZzogc3RyaW5nLCBkZWZhdWx0UmF0aW5nOiBzdHJpbmcgPSBERUZBVUxUX0NPTkZJRy5yYXRpbmcpOiBzdHJpbmcge1xuICAgIGlmIChyYXRpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRSYXRpbmc7XG4gICAgfVxuXG4gICAgaWYgKFJBVElOR1tyYXRpbmddID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtuZ3gtZ3JhdmF0YXJdIC0gXCIke3JhdGluZ31cIiBpcyBpbnZhbGlkIGdyYXZhdGFyIHJhdGluZyB0eXBlLiBgICsgYERlZmF1bHQgcmF0aW5nIFwiJHtkZWZhdWx0UmF0aW5nfVwiIGlzIHVzZWQuYCk7XG4gICAgICByZXR1cm4gZGVmYXVsdFJhdGluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcmF0aW5nO1xuICB9XG59XG4iXX0=