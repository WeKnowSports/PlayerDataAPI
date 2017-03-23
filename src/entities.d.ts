// UNDER DEVELOPMENT!

export declare namespace entities {

    export interface PlayerDetails{
        /** Unique Players reference in Brand scope _TD: Brand or Operator? */
        //readonly reference?: string

        readonly id?: number
        readonly registeredFrom: RegistrationSource
        readonly registeredDate: Date

        details: PlayerPersonalInfo
        account: PlayerAccountInfo
        state: PlayerState

        //??
        //CurrencyId
        
        //??
        //CurrencyFormat - might be in Currency dictionary

        //??
        /** Player has linked Accounts */
        IsLinked: boolean

        //?? state also?
        IsBonusRestricted: boolean
        IsCashOutAllowed: boolean
        IsPlacingBetsDisabled: boolean
    }

    /**
     * Cumulative state of Player
     * ?? bit mask? - depends on answers
     */
    export interface PlayerState{
        isActive: boolean

        isSelfExcluded: boolean
        //??
        selfExclusionData: SelfExclusion

        isTimeouted: boolean
        timeoutActivated: Date

        isFrozen: boolean

        //??
        isFirstLogin: boolean
    }

    /**
     * Player data for registration
     */
    export interface PlayerRegistration {
        identity: PlayerIdentity
        details: PlayerPersonalInfo
        account: PlayerAccountInfo
        regulationsInfo: PlayerRegulationsInfo
        securityCode: string
    }

    /**
     * Login - password
     */
    export interface PlayerIdentity{
        userName: string
        password: string    
    }

    /**
     * Player's Personal Details
     */
    export interface PlayerPersonalInfo {
        gender: Gender
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
    export interface PlayerAccountInfo {
        /** Currency code from Currency List */
        currency: string
        /** OddsStyle id from OddsStyle List */
        oddsStyle: number
        reffererCode: string
    }

    /**
     * Player's Regulations settings
     */
    export interface PlayerRegulationsInfo{
        /** ResponsibleGamingPeriod id from ResponsibleGamingPeriod list */
        responsibleGamingPeriod: number
        /** ResponsibleGamingAmount id from ResponsibleGamingAmount list */        
        responsibleGamingAmount: number
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
     * Gender description
     */
    export type Gender = 'M' | 'F';

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
     * Message data with cropped body
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

        /** ??? Cropped message body */
        //readonly bodyCropped: string
    }

    /**
     * Message to be sent
     */
    export interface InboxMessage{
        name: string
        email: string
        subject: string
        body: string
        departmentId: number
        originalMessageId?: number
    }

    /**
     * Data for one-time SelfExclusion
     */
    export interface SelfExclusionOnce{
        startDate: Date
        endDate: Date
    }

    /**
     * Data for periodical SelfExclusion
     */
    export interface SelfExclusion{
        /** Days to be excluded */
        period?: number
        /** Period for exclusion to repeat */
        interval?: SelfExclusionInterval
    }

    export enum SelfExclusionInterval{
        //week?
        Day = 1,
        Month = 2,
        Year = 3
    }

    export interface ClosureRequest{
        /** Id from ClosureReasons list */
        closureReasonId: number,
        closureComment: string
    }

    export interface RealityCheckRequest{
        /** Id from RealityCheckIntervals list */
        intervalId: number
    }
}