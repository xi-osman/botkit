import { Activity, BotAdapter, TurnContext, MiddlewareSet, ConversationReference } from 'botbuilder';
import { WebClient, WebAPICallResult } from '@slack/client';
interface SlackAdapterOptions {
    verificationToken: string;
    botToken?: string;
    getTokenForTeam?: (teamId: string) => string;
    clientId?: string;
    clientSecret?: string;
    scopes?: string[];
    redirectUri: string;
}
export declare class SlackAdapter extends BotAdapter {
    private options;
    private slack;
    name: string;
    middlewares: any;
    web: any;
    menu: any;
    private botkit;
    constructor(options: SlackAdapterOptions);
    init(botkit: any): void;
    getAPI(activity: Activity): Promise<WebClient>;
    getInstallLink(): string;
    validateOauthCode(code: string): Promise<WebAPICallResult>;
    private activityToSlack;
    sendActivities(context: TurnContext, activities: Activity[]): Promise<any[]>;
    updateActivity(context: TurnContext, activity: Activity): Promise<void>;
    deleteActivity(context: TurnContext, reference: ConversationReference): Promise<void>;
    continueConversation(reference: ConversationReference, logic: (t: TurnContext) => Promise<any>): any;
    processActivity(req: any, res: any, logic: any): Promise<void>;
}
export declare class SlackEventMiddleware extends MiddlewareSet {
    onTurn(context: any, next: any): Promise<void>;
}
export declare class SlackMessageTypeMiddleware extends MiddlewareSet {
    onTurn(context: any, next: any): Promise<void>;
}
export declare class SlackIdentifyBotsMiddleware extends MiddlewareSet {
    onTurn(context: any, next: any): Promise<void>;
}
export {};