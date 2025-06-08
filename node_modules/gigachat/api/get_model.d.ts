import { AxiosInstance } from 'axios';
import { Model, WithXHeaders } from '../interfaces';
interface GetModelArgs {
    model: string;
    accessToken?: string;
}
export declare function get_model(client: AxiosInstance, args: GetModelArgs): Promise<Model & WithXHeaders>;
export {};
//# sourceMappingURL=get_model.d.ts.map