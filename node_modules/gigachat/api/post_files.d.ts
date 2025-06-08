import { AxiosInstance } from 'axios';
import { UploadedFile, WithXHeaders } from '../interfaces';
interface UploadFileArgs {
    file: File;
    purpose?: 'general' | 'assistant';
    accessToken?: string;
}
export declare function post_files(client: AxiosInstance, args: UploadFileArgs): Promise<UploadedFile & WithXHeaders>;
export {};
//# sourceMappingURL=post_files.d.ts.map