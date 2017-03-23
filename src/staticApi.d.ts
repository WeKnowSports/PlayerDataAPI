// UNDER DEVELOPMENT!

/**
 * Type for dictionaries string:string
 */
export interface StringDictionary { [index: string] : string }
/**
 * Type for dictionaries numeric:string
 */
export interface NumericDictionary { [index: number] : string }

export interface Country {
    readonly code: string
    readonly name: string
    readonly currency: string
}

/**
 * Provides static data like dictionaries
 * 
 * Remarks:
 * - all names/descriptions in the list are default in EN
 * - 
 */
interface IPlayerStaticAPI{

    /** Returns Languages list in format LanguageCode : Language */
    GetLanguages() : StringDictionary

    /** Returns Currencies list in format CurrencyCode : Currency */
    GetCurrencies() : StringDictionary

    /** Returns Countries list */
    GetCountries() : Country[]
    
    /** Returns OddsStyles list in format ID : Description */
    GetOddsStyles() : NumericDictionary

    /** Returns ResponsibleGamingPeriods list in format ID : Description */
    GetResponsibleGamingPeriods() : NumericDictionary

    /** Returns ResponsibleGamingAmounts list by Currency in format Amount : Description */
    GetResponsibleGamingAmounts( currency : string ) : NumericDictionary

    /** Returns Departments list in format ID : Name */
    GetDepartments() : NumericDictionary

    /** Returns ClosureReasons list in format ID : Name */
    GetClosureReason() : NumericDictionary

    /** Returns RealityCheckIntervals list in format ID : Name */
    GetRealityCheckIntervals() : NumericDictionary

}

export type PlayerStaticAPI = IPlayerStaticAPI;