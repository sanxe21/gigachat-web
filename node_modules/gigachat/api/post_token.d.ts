import { AxiosInstance } from 'axios';
import { Token } from '../interfaces/token';
import { WithXHeaders } from 'gigachat/interfaces';
interface TokenArgs {
    user: string;
    password: string;
}
export declare function post_token(client: AxiosInstance, args: TokenArgs): Promise<Token & WithXHeaders>;
export {};
//# sourceMappingURL=post_token.d.ts.map