import { AxiosInstance } from 'axios';
import { UploadedFile, WithXHeaders } from '../interfaces';
interface GetFileArgs {
    file: string;
    accessToken?: string;
}
export declare function get_file(client: AxiosInstance, args: GetFileArgs): Promise<UploadedFile & WithXHeaders>;
export {};
//# sourceMappingURL=get_file.d.ts.map