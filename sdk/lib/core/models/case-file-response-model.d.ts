import { BaseResponseModel, UploadFileModel } from '.';
export interface CaseFileResponseModel extends BaseResponseModel {
    results: UploadFileModel[];
}
