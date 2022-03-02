import 'automapper-ts';
import { EnumerationItemResponse } from '../../core/entity';
import { EnumerationItemResponseModel } from '../../core/models';

export class CaseMetaMap {
    /**
     * Return entity EnumerationItemResponse from boomtown EnumerationItemResponseModel
     * @param model EnumerationItemResponseModel.
     * @returns
     */
    static mapper(model: EnumerationItemResponseModel): EnumerationItemResponse {
        automapper
            .createMap('btCaseMeta', 'caseMeta')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            );

        return automapper.map('btCaseMeta', 'caseMeta', model) as EnumerationItemResponse;
    }
}
