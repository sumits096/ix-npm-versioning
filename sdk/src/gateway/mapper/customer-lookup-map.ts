import 'automapper-ts';
import { CustomerContactMap, CustomerLookupLocationMap } from '.';
import { CustomerLookupResponse, CustomerLookupTuple } from '../../core/entity';
import { CustomerLookupResponseModel, CustomerLookupTupleModel } from '../../core/models'; 
import { CustomerMap } from './customer-map';

export class CustomerLookupMap {

    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static customerLookupResponse(responseModel: CustomerLookupResponseModel): CustomerLookupResponse {
        
        automapper
            .createMap('BTCustomerLookupResponse', 'CustomerLookupResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', this.fromBTCustomerLookupTuple(responseModel.results));

        return automapper.map(
            'BTCustomerLookupResponse',
            'CustomerLookupResponse',
            responseModel,
        ) as CustomerLookupResponse;
    }

    /**
     * Return entity customer tuple model from boomtown model
     * @param tuple 
     * @returns 
     */
    static fromBTCustomerLookupTuple(tuple: CustomerLookupTupleModel):CustomerLookupTuple {
        automapper
            .createMap('BTCustomerLookupTuple', 'CustomerLookupTuple')
            .forMember('customersId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customers_id'))
            .forMember('customersUsersId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customers_users_id'))
            .forMember('customersLocationsId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customers_locations_id'))
            .forMember('customer', CustomerMap.fromBTCustomer(tuple.customer))
            .forMember('customerContact', CustomerContactMap.fromBTCustomerContact(tuple.customer_user))
            .forMember('customer_user', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
            .forMember('customerLocation', CustomerLookupLocationMap.fromBTCustomerLookupLocation(tuple.customer_location))
            .forMember('customer_location', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
        
        return automapper.map(
            'BTCustomerLookupTuple',
            'CustomerLookupTuple',
            tuple,
        ) as CustomerLookupTuple;
    }
}
