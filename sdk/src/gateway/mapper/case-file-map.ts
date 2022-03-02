import { UploadFilesMap } from '.';
import { CaseFileResponse, CaseFileUpload } from '../../core/entity';
import {
    UploadFileModel,
    CaseFileResponseModel,
    CaseFileUploadModel,
    CaseFileDataModel,
    CaseFileQueryModel,
} from '../../core/models';

export class CaseFileMap {
    /**
     * Return api response model
     * @param responseModel case/issues file response model
     * @returns
     */
    static responseCaseFileMapper(responseModel: CaseFileResponseModel): CaseFileResponse {
        const list = responseModel.results;
        const files = list.map(function transform(caseFile: UploadFileModel) {
            return UploadFilesMap.fromBTUploadFiles(caseFile);
        });

        automapper
            .createMap('BTCaseFileResponse', 'CaseFileResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', files);

        return automapper.map('BTCaseFileResponse', 'CaseFileResponse', responseModel) as CaseFileResponse;
    }

    /**
     * Return case file upload model from entity case file upload
     * @param model case file upload request model
     * @returns
     */
    static toBTCaseFileUploadModel(model: CaseFileUpload): CaseFileUploadModel {
        automapper.createMap('BTCaseFileUpload', 'CaseFileUpload').forMember('file', model.file);

        return automapper.map('BTCaseFileUpload', 'CaseFileUpload', model) as CaseFileUploadModel;
    }

    /**
     * Return upload file id model from entity upload file id
     * @param fileId for upload file id
     * @returns
     */
    static toCaseFileDataModel(fileId: string): CaseFileDataModel {
        automapper.createMap('BTCaseFileData', 'CaseFileData').forMember('file_id', fileId);

        return automapper.map('BTCaseFileData', 'CaseFileData', {}) as CaseFileDataModel;
    }

    /**
     * Return upload file tag model from entity upload file tag
     * @param fileTag for upload file tag
     * @returns
     */
    static toCaseFileQueryModel(fileTag: string): CaseFileQueryModel {
        automapper.createMap('BTCaseFileTag', 'CaseFileTag').forMember('file_tag', fileTag);

        return automapper.map('BTCaseFileTag', 'CaseFileTag', {}) as CaseFileQueryModel;
    }
}
