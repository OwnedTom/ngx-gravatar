import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { NgxGravatarService } from './ngx-gravatar.service';
import { GravatarConfig } from './gravatar-config';
export declare class NgxGravatarDirective implements OnChanges, OnInit {
    private elementRef;
    private renderer;
    private gravatarService;
    src: string;
    email: string;
    md5Hash: string;
    size: number;
    fallback: string;
    rating: string;
    round: boolean;
    cornerRadius: number;
    borderColor: string;
    borderWidth: number;
    style: any;
    preferGravatar: boolean;
    backgroundColor: boolean;
    ratio: number;
    initialized: boolean;
    defaultConfig: GravatarConfig;
    requestedSize: number;
    isGravatarUsed: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, gravatarService: NgxGravatarService);
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     * Set default values for user inputs if they are not provided
     */
    private setDefaultValues;
    /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     */
    private initializeAvatar;
    /**
     * Compute the size of the avatar
     * @return size
     */
    private computeSize;
    /**
     * Compute style object
     * @return style object
     */
    private avatarStyle;
    /**
     * Set style for the avatar
     * @param styles style object
     */
    private setStyle;
}
