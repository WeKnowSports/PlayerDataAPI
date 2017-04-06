// UNDER DEVELOPMENT!

/**
 * path:    /config/{brand}/titles
 */
export interface Title{
    readonly id: number
    readonly name: string
}

/**
 * path:    /config/{brand}/registration-sources
 */
export interface RegistrationSources{
    readonly id: number
    readonly name: string
}

/**
 * path: /config/{brand}/currencies
 */
export interface Currency{
    readonly code: string
    readonly name: string
    readonly sign: string
    readonly format: string
}

/**
 * path: /config/{brand}/countries
 */
export interface Country{
    readonly code: string
    readonly name: string
    readonly currency: string
}

/**
 * path: /config/{brand}/languages
 */
export interface Language{
    readonly code: string
    readonly name: string
}

/**
 * path: /config/{brand}/oddsstyles
 */
export interface OddsStyle{
    readonly id: number
    readonly description: string
}

/**
 * path: /config/{brand}/departments
 */
export interface Department{
    readonly id: number
    readonly name: string
}

/**
 * path: /config/{brand}/closurereasons
 */
export interface ClosureReason{
    readonly id: number
    readonly name: string
}

