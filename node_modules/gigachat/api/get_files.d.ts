import { AxiosInstance } from 'axios';
import { UploadedFiles, WithXHeaders } from '../interfaces';
interface GetFilesArgs {
    accessToken?: string;
}
export declare function get_files(client: AxiosInstance, args: GetFilesArgs): Promise<UploadedFiles & WithXHeaders>;
export {};
//# sourceMappingURL=get_files.d.ts.map