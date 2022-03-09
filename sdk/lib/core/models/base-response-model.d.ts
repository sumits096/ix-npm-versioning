export interface BaseResponseModel {
    success?: boolean;
    current_server_time?: string;
    totalCount?: number;
    returned?: number;
    pages?: number;
    message?: string;
}
