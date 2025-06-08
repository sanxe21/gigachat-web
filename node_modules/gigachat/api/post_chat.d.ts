import { AxiosInstance } from 'axios';
import { Chat } from '../interfaces/chat';
import { ChatCompletion } from 'gigachat/interfaces';
import { WithXHeaders } from 'gigachat/interfaces';
interface GetChatArgs {
    chat: Chat;
    accessToken?: string;
}
export declare function post_chat(client: AxiosInstance, args: GetChatArgs): Promise<ChatCompletion & WithXHeaders>;
export {};
//# sourceMappingURL=post_chat.d.ts.map