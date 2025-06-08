import { AxiosInstance } from 'axios';
import { Image } from '../interfaces/image';
import { WithXHeaders } from 'gigachat/interfaces';
interface GetImageArgs {
    fileId: string;
    accessToken?: string;
}
export declare function get_image(client: AxiosInstance, args: GetImageArgs): Promise<Image & WithXHeaders>;
export {};
//# sourceMappingURL=get_image.d.ts.map