// UNDER DEVELOPMENT!

import { entities } from './entities'

/** Base for result of any void action */
interface ActionResultBase { code: string; description: string; }

/** Result of any action with return */
interface ActionResult<T> extends ActionResultBase { result: T }

/**
 * Player API 
 */
interface IPlayerAPI{

    //?? maybe we do not need this since it might also be known with session/JWT
    new( brand: string, source: entities.RegistrationSource )

    /** Registers Player and returns Result */
    RegisterPlayer( player: entities.PlayerRegistration ) : ActionResult<entities.PlayerDetails>

    /** Returns Player */
    GetPlayer() : entities.PlayerDetails

    Login( playerIdentity: entities.PlayerIdentity ) : entities.PlayerDetails
    Logout(): ActionResultBase
    ResetPassword( identityReset: entities.PlayerIdentityReset ): ActionResultBase
    ChangePassword( passwordChangeRequest: entities.PlayerPasswordChange ): ActionResultBase
    RefreshSession(): ActionResultBase
}

/**
 * Regulations API
 */
interface IRegulationsAPI{
    SelfExcludePermanent(): ActionResultBase
    SelfExcludeOnce( selfExclusion: entities.SelfExclusionOnce ): ActionResultBase
    SelfExclude( selfExclusion: entities.SelfExclusion ): ActionResultBase
    CloseAccount( closureRequest: entities.ClosureRequest ): ActionResultBase
    SetRealityCheck( realityCheckRequest: entities.RealityCheckRequest ): ActionResultBase
}

/**
 * Messaging API
 */
interface IMessagingAPI{
    GetUnreadMessagesCount(): number
    GetInboxMessages() : entities.InboxMessageData
    GetSentMessages() : entities.InboxMessageData
    GetMessageBody( messageId: number ) : string
    DeleteMessage( messageId: number ) : ActionResultBase
    SentMessage( message: entities.InboxMessage ) : ActionResult<entities.InboxMessageData>
}

export type PlayerAPI = IPlayerAPI
export type RegulationsAPI = IRegulationsAPI
export type MessagingAPI = IMessagingAPI
