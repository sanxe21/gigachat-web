import { AxiosResponse } from 'axios';
export declare class GigaChatException extends Error {
    response: AxiosResponse;
    constructor(response: AxiosResponse);
}
export declare class ResponseError extends GigaChatException {
    constructor(response: AxiosResponse);
}
export declare class AuthenticationError extends ResponseError {
    constructor(response: AxiosResponse);
}
//# sourceMappingURL=exceptions.d.ts.map