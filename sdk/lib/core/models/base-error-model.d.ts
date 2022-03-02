export interface BaseErrorModel {
    success: boolean;
    current_server_time: string;
    message?: string;
    errorType: string;
}
