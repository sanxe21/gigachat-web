import { AxiosInstance } from 'axios';
import { AccessToken } from '../interfaces';
interface AuthArgs {
    url: string;
    credentials: string;
    scope: string;
}
export declare function post_auth(client: AxiosInstance, args: AuthArgs): Promise<AccessToken>;
export {};
//# sourceMappingURL=post_auth.d.ts.map