import 'automapper-ts';
import { CustomerContactMap, CustomerLocationMap } from '.';
import {
    Customer,
    CustomerCreateRequest,
    CustomerCreateResponse,
    CustomerResponse,
    CustomerTuple,
    SmsInviteData,
    SmsInviteResponse,
} from '../../core/entity';
import {
    CustomerCreateRequestModel,
    CustomerCreateResponseModel,
    CustomerModel,
    CustomerResponseModel,
    SmsInviteDataModel,
    SmsInviteResponseModel,
} from '../../core/models';

export class CustomerMap {
    /**
     * Return entity customer model from boomtown model
     * @param model boomtown customer model.
     * @returns
     */
    static fromBTCustomer(model: CustomerModel): Customer {
        automapper
            .createMap('BTCustomer', 'Customer')
            .forMember('nameLegal', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('name_legal'))
            .forMember('street1', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street_1'))
            .forMember('street2', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street_2'))
            .forMember('externalId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('external_id'));

        return automapper.map('BTCustomer', 'Customer', model) as Customer;
    }

    /**
     * Return boomtown customer request model from entity customer model
     * @param model customer entity model.
     * @returns
     */
    static toBTRequestModel(model: CustomerCreateRequest): CustomerCreateRequestModel {
        automapper
            .createMap('CustomerCreateRequest', 'BTCustomerCreateRequest')
            .forMember('customer', this.toBTCustomer(model.customer))
            .forMember('customer_user', CustomerContactMap.toBTCustomerContact(model.customerContact))
            .forMember('customer_location', CustomerLocationMap.toBTCustomerLocation(model.customerLocation));

        return automapper.map('CustomerCreateRequest', 'BTCustomerCreateRequest', model) as CustomerCreateRequestModel;
    }

    /**
     * Return boomtown customer model from entity customer model
     * @param model entity customer model.
     * @returns
     */
    static toBTCustomer(model: Customer): CustomerModel {
        automapper
            .createMap('Customer', 'BTCustomer')
            .forMember('name_legal', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('nameLegal'))
            .forMember('street_1', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street1'))
            .forMember('street_2', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street2'))
            .forMember('external_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('externalId'));

        return automapper.map('Customer', 'BTCustomer', model) as CustomerModel;
    }

    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static mapper(responseModel: CustomerResponseModel): CustomerResponse {
        const list = responseModel.results;
        const customers = list.map(function transform(customer: CustomerModel) {
            return CustomerMap.fromBTCustomer(customer);
        });

        automapper
            .createMap('BTCustomerResponse', 'CustomerResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', customers);

        return automapper.map('BTCustomerResponse', 'CustomerResponse', responseModel) as CustomerResponse;
    }

    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static customerCreateResponse(responseModel: CustomerCreateResponseModel): CustomerCreateResponse {
        const tuple = responseModel.results;
        const model: CustomerTuple = {} as CustomerTuple;
        model.customer = this.fromBTCustomer(tuple.customer);
        model.customerContact = CustomerContactMap.fromBTCustomerContact(tuple.customer_user);
        model.customerLocation = CustomerLocationMap.fromBTCustomerLocation(tuple.customer_location);

        automapper
            .createMap('BTCustomerCreateResponse', 'CustomerCreateResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', model);

        return automapper.map(
            'BTCustomerCreateResponse',
            'CustomerCreateResponse',
            responseModel,
        ) as CustomerCreateResponse;
    }

    /**
     * Return boomtown sms invite model from sms invite entity
     * @param model customer sms invite request model
     * @returns
     */
    static toBTSmsInviteDataModel(model: SmsInviteData): SmsInviteDataModel {
        automapper.createMap('BTSmsInviteData', 'SmsInviteData')
            .forMember('sms_number', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('smsNumber'))
            .forMember('org_team_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('orgTeamId'));

        return automapper.map('BTSmsInviteData', 'SmsInviteData', model) as SmsInviteDataModel;
    }

    /**
     * Return sms invite api response model
     * @param model 
     * @returns 
     */
    static fromBTSmsInviteResponse(model: SmsInviteResponseModel): SmsInviteResponse {
        automapper
            .createMap('BTSmsInviteResponse', 'SmsInviteResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('current_server_time'));

        return automapper.map('BTSmsInviteResponse', 'SmsInviteResponse', model) as SmsInviteResponse;
    }

}
