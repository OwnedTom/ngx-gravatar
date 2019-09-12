import { GravatarConfig } from './gravatar-config';
export declare class NgxGravatarService {
    private gravatarConfig;
    private defaultConfig;
    constructor(gravatarConfig: GravatarConfig);
    /**
     * Return defaultConfig object
     */
    getDefaultConfig(): GravatarConfig;
    /**
     * Generate gravatar url
     * @param email is a string. If email is not a string, email will be set to empty string "" by default
     * @param md5Hash is a string. If value is given it will take precedence over email.
     * @param size number
     * @param rating string
     * @param fallback string
     * @return gravatar url
     */
    generateGravatarUrl(email: string, md5Hash?: string, size?: number, rating?: string, fallback?: string): string;
    /**
     * Determine gravatar fallback string
     * @param fallback string
     * @param defaultFallback string
     * @return string
     */
    private determineFallback;
    /**
     * Determine gravatar rating string
     * @param rating string
     * @param defaultRating string
     * @return string
     */
    private determineRating;
}
