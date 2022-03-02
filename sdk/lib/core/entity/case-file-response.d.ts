import { BaseResponse, UploadFile } from '.';
export interface CaseFileResponse extends BaseResponse {
    results?: UploadFile[];
}
