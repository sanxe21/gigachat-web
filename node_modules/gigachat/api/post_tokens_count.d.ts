import { AxiosInstance } from 'axios';
import { Tokens, WithXHeaders } from '../interfaces';
interface GetTokensCountArgs {
    input: string[];
    model: string;
    accessToken?: string;
}
export declare function post_tokens_count(client: AxiosInstance, args: GetTokensCountArgs): Promise<Tokens & WithXHeaders>;
export {};
//# sourceMappingURL=post_tokens_count.d.ts.map