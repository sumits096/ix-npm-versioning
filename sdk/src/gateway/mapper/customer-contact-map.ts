import 'automapper-ts';
import {
    CustomerContact,
    CustomerContactResponse,
    CustomerContactRequest,
    ExistsResponse,
    SSOResponse,
} from '../../core/entity';
import {
    CustomerContactResponseModel,
    CustomerContactModel,
    CustomerContactRequestModel,
    ExistsResponseModel,
    SSOResponseModel,
} from '../../core/models';

export class CustomerContactMap {
    /**
     * Return entity customer contact from boomtown customer contact model
     * @param model for boomtown customer contact model.
     * @returns
     */
    static fromBTCustomerContact(model: CustomerContactModel): CustomerContact {
        automapper
            .createMap('BTCustomerContact', 'CustomerContact')
            .forMember('customerId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customer_id'))
            .forMember('customerLocationId', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_location_id'),
            )
            .forMember('firstName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('first_name'))
            .forMember('lastName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('last_name'))
            .forMember('fullName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('full_name'))
            .forMember('smsNumber', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('sms_number'))
            .forMember('externalId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('external_id'));

        return automapper.map('BTCustomerContact', 'CustomerContact', model) as CustomerContact;
    }

    /**
     * Return boomtown customer contact model from entity customer contact
     * @param model for entity customer contact.
     * @returns
     */
    static toBTCustomerContact(model: CustomerContact): CustomerContactModel {
        automapper
            .createMap('CustomerContact', 'BTCustomerContact')
            .forMember('customer_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customerId'))
            .forMember('customer_location_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerLocationId'),
            )
            .forMember('first_name', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('firstName'))
            .forMember('last_name', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('lastName'))
            .forMember('full_name', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('fullName'))
            .forMember('sms_number', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('smsNumber'))
            .forMember('external_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('externalId'));

        return automapper.map('CustomerContact', 'BTCustomerContact', model) as CustomerContactModel;
    }

    /**
     * Return entity Exists Response from boomtown Exists Response model
     * @param model for boomtown exists response model.
     * @returns
     */
    static fromBTExistsResponse(model: ExistsResponseModel): ExistsResponse {
        automapper
            .createMap('BTExistsResponse', 'ExistsResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            );

        return automapper.map('BTExistsResponse', 'ExistsResponse ', model) as ExistsResponse;
    }

    /**
     * Return entity customer contact response from boomtown customer contact response model
     * @param model for boomtown customer contact response model.
     * @returns
     */
    static fromBTCustomerContactResponse(model: CustomerContactResponseModel): CustomerContactResponse {
        const list = model.results;
        const customerContacts = list.map(function transform(customerContact: CustomerContactModel) {
            return CustomerContactMap.fromBTCustomerContact(customerContact);
        });

        automapper
            .createMap('BTCustomerContactResponse', 'CustomerContactResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', customerContacts);

        return automapper.map('BTCustomerContactResponse', 'CustomerContactResponse', model) as CustomerContactResponse;
    }

    /**
     * Return boomtown customer contact request model from entity
     * @param customerContactRequest for CustomerContactRequest object
     * @returns
     */
    static toBTCustomerContactRequest(customerContactRequest: CustomerContactRequest): CustomerContactRequestModel {
        automapper
            .createMap('CustomerContactRequest', 'BTCustomerContactRequest')
            .forMember('customer_user', CustomerContactMap.toBTCustomerContact(customerContactRequest.customerUser));

        return automapper.map(
            'CustomerContactRequest',
            'BTCustomerContactRequest',
            customerContactRequest,
        ) as CustomerContactRequestModel;
    }

    /**
     * Return customer contact sso response
     * @param responseModel for SSOResponseModel object
     * @returns
     */
    static fromBTCustomerContactSSOResponse(responseModel: SSOResponseModel): SSOResponse {
        automapper
            .createMap('BTSSOResponseModel', 'SSOResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            );

        return automapper.map('BTSSOResponseModel', 'SSOResponse', responseModel) as CustomerContactResponse;
    }
}
