// UNDER DEVELOPMENT!

import { StringDictionary } from './base'

/**
 * Type for dictionaries numeric:string
 */
export interface NumericDictionary { [index: number] : string }

export interface Currency{
    readonly code: string
    readonly name: string
    readonly sign: string
    readonly format: string
}

export interface Country {
    readonly code: string
    readonly name: string
    readonly currency: string
}

/**
 * Provides static data like dictionaries
 * All names/descriptions in the list are default in EN 
 */
interface IPlayerStaticAPI{

    /** Returns Title list in format ID : Title */
    GetTitles() : StringDictionary

    /** Returns Currencies list list */
    GetCurrencies() : Currency[]

    /** Returns Countries list */
    GetCountries() : Country[]
    
    /** Returns Languages list in format LanguageCode : Language */
    GetLanguages() : StringDictionary

    /** Returns OddsStyles list in format ID : Description */
    GetOddsStyles() : NumericDictionary

    /** Returns Departments list in format ID : Name */
    GetDepartments() : NumericDictionary

    /** Returns ClosureReasons list in format ID : Name */
    GetClosureReason() : NumericDictionary

}

export type PlayerStaticAPI = IPlayerStaticAPI
