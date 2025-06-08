export class GigaChatException extends Error {
    constructor(response) {
        super(response.data);
        this.name = 'GigaChatException';
        this.response = response;
    }
}
export class ResponseError extends GigaChatException {
    constructor(response) {
        super(response);
        this.name = 'ResponseError';
    }
}
export class AuthenticationError extends ResponseError {
    constructor(response) {
        super(response);
        this.name = 'AuthenticationError';
    }
}
//# sourceMappingURL=exceptions.mjs.map