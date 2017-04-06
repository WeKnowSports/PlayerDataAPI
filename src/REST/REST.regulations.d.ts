// UNDER DEVELOPMENT!

import { StringDictionary } from './REST.base';

export declare namespace regulations{

    /**
     * Configuration for Regulation requirment for the given OperationCountry, Brand and Currency
     * path:    /regulations/configs?operationCountry=;brand=;currency=
     *          /regulations/configs/[id]
     */
    export interface RegulationConfig{
        /** get URI for the given regulation configuration */
        readonly path: string

        readonly id: number
        readonly name: string
        readonly operationCountry: string
        readonly brand: string
        readonly description?: string
        readonly valueStyle: ValueStyle
        readonly isRequired: boolean
        /** Country codes if Config deviates from the main one for OperationCountry + Brand */
        readonly playerCountries?: string[]

        readonly settings: RegulationSetting[]
    }

    /**
     * Regulation setting. Represent data for the single aspect of Regulation requirement requested from Player.
     * For instance: StartDate, LimitValue, PeriodType etc.
     * path:    /regulations/configs/[id]/settings
     *          /regulations/configs/[id]/settings/[id]
     */
    export interface RegulationSetting{
        /** get URI for the given regulation setting */
        readonly path: string
        
        readonly id: number
        readonly name: string
        readonly datatype: RegulationSettingDataType
        readonly isRequired: boolean
        readonly defaultValue?: string
        readonly label?: string
        readonly validationRegExp?: string
        /** IDs of Settings that current Setting depends by value */
        readonly dependsOn?: number[]

        /**
         * Set of data to fill the selection/dropdown
         * If [dependsOn] is meaningful than each item has [dependsOnValue] property containing values for filtering by in the corresponding order
         */
        readonly selection: SelectionSet
    }

    export enum ValueStyle{
        Single = 1,
        Array = 2
    }

    export enum RegulationSettingDataType{
        String = 1,
        Number = 2,
        Date = 3,
        Boolean = 4,
        Selection = 5
        //File = 6 //this is tricky and requires analysis
    }

    export interface SelectionSet{
        readonly key: string
        readonly name: string
        readonly dependsOnValues?: string[]
    }

    /**
     * Regulation request - a request to apply some regulation action to a Player
     * path: /{player}/regulations/
     */
    export interface PlayerRegulation{
        /** Unique Players reference in Brand scope _TD: Brand or Operator? */
        //readonly playerReference?: string

        playerId?: number
        regulationConfigId: number

        /**
         * Dictionary list of values in format RegulationSettingId - Value
         * Value here can be array in case of multi-selection for instance
         */
        regulationSettingValues: StringDictionary
    }
    
}