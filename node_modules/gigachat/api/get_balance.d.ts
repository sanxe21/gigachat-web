import { AxiosInstance } from 'axios';
import { Balance, WithXHeaders } from '../interfaces';
interface BalanceArgs {
    accessToken?: string;
}
export declare function get_balance(client: AxiosInstance, args: BalanceArgs): Promise<Balance & WithXHeaders>;
export {};
//# sourceMappingURL=get_balance.d.ts.map