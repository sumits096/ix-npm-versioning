import { BaseResponseModel, CasesModel } from '.';
export interface CasesResponseModel extends BaseResponseModel {
    results: CasesModel[];
}
