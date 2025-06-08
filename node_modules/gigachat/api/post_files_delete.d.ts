import { AxiosInstance } from 'axios';
import { DeletedFile, WithXHeaders } from '../interfaces';
interface DeleteFileArgs {
    file: string;
    accessToken?: string;
}
export declare function post_files_delete(client: AxiosInstance, args: DeleteFileArgs): Promise<DeletedFile & WithXHeaders>;
export {};
//# sourceMappingURL=post_files_delete.d.ts.map