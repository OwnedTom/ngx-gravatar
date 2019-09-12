export declare enum FALLBACK {
    blank = "blank",
    identicon = "identicon",
    mm = "mm",
    mp = "mp",
    monsterid = "monsterid",
    retro = "retro",
    robohash = "robohash",
    wavatar = "wavatar"
}
export declare enum RATING {
    g = "g",
    pg = "pg",
    r = "r",
    x = "x"
}
export declare type FallbackType = keyof typeof FALLBACK;
export declare type RatingType = keyof typeof RATING;
