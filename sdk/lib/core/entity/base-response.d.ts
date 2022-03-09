export interface BaseResponse {
    success?: boolean;
    currentServerTime?: string;
    totalCount?: number;
    returned?: number;
    pages?: number;
    message?: string;
}
