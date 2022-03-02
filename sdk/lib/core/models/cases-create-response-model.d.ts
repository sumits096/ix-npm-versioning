import { BaseResponseModel, CasesModel } from '.';
export interface CasesCreateResponseModel extends BaseResponseModel {
    results: CasesModel;
}
