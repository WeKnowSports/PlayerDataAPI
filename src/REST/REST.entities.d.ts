// UNDER DEVELOPMENT!
// No Balances included for now !!!
// No State included for now !!!

import { StringDictionary } from './REST.base';
import { regulations } from './REST.regulations';

export declare namespace entities {

    /**
     * Player data for registration
     * path:    POST /players
     */
    export interface PlayerRegistration {
        brand: string
        // strange field!
        source: RegistrationSource
        // skin?
        
        userName: string
        password: string

        details: PlayerPersonalInfo
        account: PlayerAccountSettings
        regulations?: regulations.PlayerRegulation[]

        reffererCode?: string
        securityCode: string
    }

    /**
     * Source of Registration
     */
    export enum RegistrationSource {
        Sportsbook = 1,
        Casino = 2,
        //Mobile = 3, // not used
        Games = 4,
        LiveDealer = 5,
        Tablet = 6,
        MobileCasino = 7,
        Poker = 8,
        Asianview = 9
    }

    /**
     * Player's Personal Details
     */
    export interface PlayerPersonalInfo {
        /** Title id from Title list */
        title: number
        firstName: string
        lastName: string
        dob: Date
        email: string
        /** Contry code from Country List */
        countryCode: string
        city: string
        address: string
        zipCode: string
        phone: string
        /** Language code from Language List */
        languageCode: string
    }

    /**
     * Player's System Account
    */
    export interface PlayerAccountSettings {
        /** Currency code from Currency List */
        currency: string
        /** OddsStyle id from OddsStyle List */
        oddsStyle: number
    }

    /**
     * Reset/Forgot password request
     */
    export interface PlayerIdentityReset{
        email: string
        /** Date of birth */
        dob: Date
    }

    /**
     * Change password request
     */
    export interface PlayerPasswordChange{
        currentPassword: string
        newPassword: string
    }

    /**
     * Player information
     * path:    GET /players/[id]
     *          PUT /players/[id]
     */
    export interface PlayerDetails{
        /** Unique Players reference in Brand scope _TD: Brand or Operator? */
        //readonly reference?: string

        readonly id?: number
        readonly registeredFrom: RegistrationSource
        readonly registeredDate: Date

        details: PlayerPersonalInfo
        account: PlayerAccountSettings
        regulations?: regulations.PlayerRegulation[]

        readonly state: PlayerState

/*
        isFirstLogin: boolean
        IsBonusRestricted: boolean
        IsCashOutAllowed: boolean
        IsPlacingBetsDisabled: boolean

        // Player has linked Accounts
        IsLinked: boolean
        * WebSite:
        * C:\Users\taras.k\git.repo\src\WHLClientTemplate\JSComponents\Pages\UserAccount\UserDetails.js
        *     showDepositLimitsInfoForLinkedCustomers: function ()
        *     shouldShowDepositLimitsConfirmation: function()
*/
        /** Array of different tag-like attributes */
        readonly tags?: StringDictionary
    }

    /**
     * Gender description
     */
    export type Gender = 'M' | 'F';

    /**
     * Cumulative state of Player
     * HARD DRAFT
     * ?? bit mask? - depends on answers
     */
    export interface PlayerState{
        isActive: boolean
        isSelfExcluded: boolean
        isTimeouted: boolean
        timeoutActivated: Date
        isFrozen: boolean
    }

    export interface ClosureRequest{
        /** Id from ClosureReasons list */
        closureReasonId: number,
        closureComment: string
    }

    /**
     * Message data with cropped body
     * path:    GET /players/[id]/messages
     *          GET /players/[id]/messages/[id]
     *          DELETE /players/[id]/messages/[id]
     * ?read    PATCH /players/[id]/messages/[id]
     */
    export interface InboxMessageData{
        readonly id: number
        readonly subject: string
        readonly created: Date
        readonly isEmergency: boolean
        /** Department id from Department list */
        readonly departmentId: number
        readonly isSent: boolean
        readonly isRead: boolean
        readonly body?: string
    }

    /**
     * Message to be sent
     * path:    POST /players/[id]/messages
     */
    export interface InboxMessage{
        name: string
        email: string
        subject: string
        body: string
        departmentId: number
        originalMessageId?: number
    }
}