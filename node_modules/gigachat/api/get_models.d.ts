import { AxiosInstance } from 'axios';
import { Models, WithXHeaders } from '../interfaces';
interface GetModelsArgs {
    accessToken?: string;
}
export declare function get_models(client: AxiosInstance, args: GetModelsArgs): Promise<Models & WithXHeaders>;
export {};
//# sourceMappingURL=get_models.d.ts.map