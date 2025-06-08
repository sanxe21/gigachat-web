"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = exports.ResponseError = exports.GigaChatException = void 0;
class GigaChatException extends Error {
    constructor(response) {
        super(response.data);
        this.name = 'GigaChatException';
        this.response = response;
    }
}
exports.GigaChatException = GigaChatException;
class ResponseError extends GigaChatException {
    constructor(response) {
        super(response);
        this.name = 'ResponseError';
    }
}
exports.ResponseError = ResponseError;
class AuthenticationError extends ResponseError {
    constructor(response) {
        super(response);
        this.name = 'AuthenticationError';
    }
}
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=exceptions.js.map