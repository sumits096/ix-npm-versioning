import 'automapper-ts';
import { HashMapResponse } from '../../core/entity';
import { HashMapResponseModel } from '../../core/models';

export class CustomerMetaMap {
    /**
     * Return entity HashMapResponse from boomtown HashMapResponseModel
     * @param model HashMapResponseModel.
     * @returns
     */
    static mapper(model: HashMapResponseModel): HashMapResponse {
        automapper
            .createMap('btCustomerMeta', 'customerMeta')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            );

        return automapper.map('btCustomerMeta', 'customerMeta', model) as HashMapResponse;
    }
}
