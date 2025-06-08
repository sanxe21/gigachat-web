import { AxiosInstance } from 'axios';
import { WithXHeaders, AICheckResult } from '../interfaces';
interface AICheckArgs {
    input: string;
    model: string;
    accessToken?: string;
}
export declare function post_ai_check(client: AxiosInstance, args: AICheckArgs): Promise<AICheckResult & WithXHeaders>;
export {};
//# sourceMappingURL=post_ai_check.d.ts.map