import { CaseFileResponse, CaseFileUpload } from '../../core/entity';
import { CaseFileResponseModel, CaseFileUploadModel, CaseFileDataModel, CaseFileQueryModel } from '../../core/models';
export declare class CaseFileMap {
    static responseCaseFileMapper(responseModel: CaseFileResponseModel): CaseFileResponse;
    static toBTCaseFileUploadModel(model: CaseFileUpload): CaseFileUploadModel;
    static toCaseFileDataModel(fileId: string): CaseFileDataModel;
    static toCaseFileQueryModel(fileTag: string): CaseFileQueryModel;
}
