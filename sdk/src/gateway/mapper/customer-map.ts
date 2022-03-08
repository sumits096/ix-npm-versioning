import AutoMapper from "ts-automapper";

AutoMapper.create<CustomerModel, Customer>("customerModel")
.map(src => src.id, dst => dst.id)
.map(src => src.name, dst => dst.name)
.map(src => src.name_legal, dst => dst.nameLegal)
.map(src => src.street_1, dst => dst.street1)
.map(src => src.street_2, dst => dst.street2)
.map(src => src.city, dst => dst.city)
.map(src => src.state, dst => dst.state)
.map(src => src.zipcode, dst => dst.zipcode)
.map(src => src.email, dst => dst.email)
.map(src => src.phone, dst => dst.phone)
.map(src => src.external_id, dst => dst.externalId)
.map(src => src.industry, dst => dst.industry)
.map(src => src.status, dst => dst.status)
.map(src => src.created, dst => dst.created)
.map(src => src.latitude, dst => dst.latitude)
.map(src => src.longitude, dst => dst.longitude)

AutoMapper.create<CustomerResponse, CustomerResponseModel>("customerResponse")
.map(src => src.success, dst => dst.success)
.map(src => src.currentServerTime, dst => dst.current_server_time)
.map(src => src.totalCount, dst => dst.totalCount)
.map(src => src.returned, dst => dst.returned)
.map(src => src.pages, dst => dst.pages)
.map(src => src.message, dst => dst.message)
.map(src => src.results, dst => dst.results)

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
    // static fromBTCustomer(model: CustomerModel): Customer {
    //     automapper
    //         .createMap('BTCustomer', 'Customer')
    //         .forMember('nameLegal', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('name_legal'))
    //         .forMember('street1', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street_1'))
    //         .forMember('street2', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street_2'))
    //         .forMember('externalId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('external_id'));

    //     return automapper.map('BTCustomer', 'Customer', model) as Customer;
    // }

    static fromBTCustomer(model: CustomerModel): Customer {
        const result: Customer = AutoMapper.exec("customerModel", model);
        return result;
    }

    /**
     * Return boomtown customer request model from entity customer model
     * @param model customer entity model.
     * @returns
     */
    // static toBTRequestModel(model: CustomerCreateRequest): CustomerCreateRequestModel {
    //     automapper
    //         .createMap('CustomerCreateRequest', 'BTCustomerCreateRequest')
    //         .forMember('customer', this.toBTCustomer(model.customer))
    //         .forMember('customer_user', CustomerContactMap.toBTCustomerContact(model.customerContact))
    //         .forMember('customer_location', CustomerLocationMap.toBTCustomerLocation(model.customerLocation));

    //     return automapper.map('CustomerCreateRequest', 'BTCustomerCreateRequest', model) as CustomerCreateRequestModel;
    // }

    static toBTRequestModel(model: CustomerCreateRequest): CustomerCreateRequestModel {
        const result: CustomerCreateRequestModel = AutoMapper.exec("customerCreateRequest", model);
        return result;
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
        // const list = responseModel.results;
        // const customers = list.map(function transform(customer: CustomerModel) {
        //     return CustomerMap.fromBTCustomer(customer);
        // });

        const result: CustomerResponse = AutoMapper.exec("customerResponse", responseModel);
        return result;

        // automapper
        //     .createMap('BTCustomerResponse', 'CustomerResponse')
        //     .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
        //         opts.mapFrom('current_server_time'),
        //     )
        //     .forMember('results', customers);

        // return automapper.map('BTCustomerResponse', 'CustomerResponse', responseModel) as CustomerResponse;
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
