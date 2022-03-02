import { BaseResponseModel, CaseLogModel } from '.';
export interface CaseLogResponseModel extends BaseResponseModel {
    results: CaseLogModel[];
}
