import { jest } from '@jest/globals';
import axios from 'axios';
import { generateId } from '../helpers/common-helpers';
import { CustomerContactModel, CustomerLocationModel } from '../../src/core/models';
import { CustomerLocationCreateRequest } from '../../src/core/entity';
import { customerLocationList, createCustomerLocationErrorResponse, customerLocationContactCreateResponse, customerLocationCreateResponse, customerLocationDeleteResponse, customerLocationErrorResponse, getCustomerLocationByIDResponse, getCustomerMetaStatusResponse, getCustomerLocationLookupByExternalIdResponse } from '../mock-data/customer-location-data';

jest.mock('axios');
let mockedAxios = jest.mocked(axios, true);

export function getCustomerLocationByIdMock(customerId: string) {
    mockedAxios.request.mockReset();

    const data = getCustomerLocationByIDResponse;
    data.results = data.results.filter((item: CustomerLocationModel) => item.customer_id === customerId);
    const res = {
        data: data,
    };

    if (res.data.results.length > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLocationErrorResponse);
    }
}

export function getCustomerMetaStatusMock() {
    mockedAxios.request.mockReset();
    const res = {
        data: getCustomerMetaStatusResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
}

export function customerLocationCreateOrUpdateMock(model: CustomerLocationCreateRequest) {
    mockedAxios.request.mockReset();

    if (!model.customerLocation.id || model.customerLocation.id === '') {
        model.customerLocation.id = generateId();
    }

    const data = customerLocationCreateResponse;
    data.results.push(model.customerLocation);

    const res = {
        data: data,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
}

export function customerLocationDeleteMock(id: string) {
    mockedAxios.request.mockReset();

    const isExist = customerLocationList.filter((item) => item.id === id).length;

    const res = {
        data: customerLocationDeleteResponse,
    };

    if (isExist > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(createCustomerLocationErrorResponse);
    }
}

export function getCustomerLocationLookupByExternalId(externalId: string) {
    mockedAxios.request.mockReset();
    
    const data = getCustomerLocationLookupByExternalIdResponse;
    data.results = data.results.filter((item: CustomerLocationModel) => item.external_id === externalId);
    const res = {
        data: data,
    };

    if (data.results.length > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLocationErrorResponse);
    }
}

export function getContactByCustomerLocationIdMock(customerId: string, customerLocationId: string) {
    mockedAxios.request.mockReset();

    const data = customerLocationContactCreateResponse;
    data.results = data.results.filter((item: CustomerContactModel) => item.customer_id === customerId && item.customer_location_id === customerLocationId);
    const res = {
        data: data,
    };

    if (data.results.length > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLocationErrorResponse);
    }
}
