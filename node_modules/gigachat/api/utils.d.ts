import { USER_AGENT } from '../constants';
import { AxiosResponse } from 'axios';
import { WithXHeaders } from 'gigachat/interfaces';
export declare function buildHeaders(accessToken?: string): Record<string, string>;
export declare function parseChunk<T>(line: string): T | null;
export declare function buildXHeaders<T>(response: AxiosResponse, data: T): T & WithXHeaders;
export declare function isRunningInBrowser(): boolean;
export { USER_AGENT };
//# sourceMappingURL=utils.d.ts.map