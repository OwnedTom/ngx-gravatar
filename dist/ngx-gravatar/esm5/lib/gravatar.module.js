/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GRAVATAR_CONFIG_TOKEN } from './gravatar-config.token';
import { NgxGravatarDirective } from './ngx-gravatar.directive';
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
export { GravatarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmF0YXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWdyYXZhdGFyLyIsInNvdXJjZXMiOlsibGliL2dyYXZhdGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFHOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFBQTtJQWdCQSxDQUFDOzs7OztJQVhRLHNCQUFPOzs7O0lBQWQsVUFBZSxjQUE4QjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDOztJQWFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FaWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JhdmF0YXJDb25maWcgfSBmcm9tICcuL2dyYXZhdGFyLWNvbmZpZyc7XG5pbXBvcnQgeyBHUkFWQVRBUl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL2dyYXZhdGFyLWNvbmZpZy50b2tlbic7XG5pbXBvcnQgeyBOZ3hHcmF2YXRhckRpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWdyYXZhdGFyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neEdyYXZhdGFyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05neEdyYXZhdGFyRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBHcmF2YXRhck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGdyYXZhdGFyQ29uZmlnOiBHcmF2YXRhckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR3JhdmF0YXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEdSQVZBVEFSX0NPTkZJR19UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogZ3JhdmF0YXJDb25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==