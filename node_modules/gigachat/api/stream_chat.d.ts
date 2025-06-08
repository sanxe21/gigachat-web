import { AxiosInstance } from 'axios';
import { Chat } from '../interfaces';
import { EventEmitter } from 'events';
interface GetChatStreamArgs {
    chat: Chat;
    accessToken?: string;
}
export declare function stream_chat(client: AxiosInstance, args: GetChatStreamArgs, isBrowser?: boolean, abortSignal?: AbortSignal): Promise<any>;
export declare function stream_chat_readable(client: AxiosInstance, args: GetChatStreamArgs, isBrowser?: boolean, abortSignal?: AbortSignal): Promise<EventEmitter>;
export {};
//# sourceMappingURL=stream_chat.d.ts.map