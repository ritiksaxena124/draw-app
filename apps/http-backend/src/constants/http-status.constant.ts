export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503
}

export enum  HttpStatusMsg {
    OK = "OK",
    CREATED = "Created",
    ACCEPTED = "Accepted",
    NO_CONTENT = "No Content",
    BAD_REQUEST = "Bad Request",
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    NOT_FOUND = "Resource Not Found",
    CONFLICT = "Conflict",
    INTERNAL_SERVER_ERROR = "Internal Server Error",
    SERVICE_UNAVAILABLE = "Service Unavailable"
}