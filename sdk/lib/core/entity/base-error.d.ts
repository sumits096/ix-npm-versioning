export interface BaseError {
    success: boolean;
    currentServerTime: string;
    message?: string;
    errorType: string;
}
