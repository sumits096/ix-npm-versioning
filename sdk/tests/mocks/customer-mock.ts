import { jest } from '@jest/globals';
import axios from 'axios';
import { CustomerCreateRequest, SmsInviteData } from '../../src/core/entity';
import { CustomerModel } from '../../src/core/models';
import { CustomerMap } from '../../src/gateway/mapper';
import { digitsOnly, generateId } from '../helpers/common-helpers';
import { smsInviteErrorResponse, smsInviteResponse } from '../mock-data/customer-data';
import {
    createCustomerErrorResponse,
    customerCreateResponse,
    customerDeleteResponse,
    customerErrorResponse,
    customerList,
    customerResponse
} from '../mock-data/customer-data';

jest.mock('axios');
let mockedAxios = jest.mocked(axios, true);

export function customerGetAllMock(start: number = 0, limit: number = 0) {
    mockedAxios.request.mockReset();
    const res = customerResponse;

    if (limit > 0) res.results = res.results.splice(0, limit);
    if (start > 0) res.results = res.results.splice(start, limit);

    const response = {
        data: customerResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function customerGetByIdMock(id: string) {
    mockedAxios.request.mockReset();

    const data = customerResponse;
    data.results = data.results.filter((item: CustomerModel) => item.id === id);
    const res = {
        data: data,
    };

    if (data.results.length > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerErrorResponse);
    }
}

export function customerCreateOrUpdateMock(model: CustomerCreateRequest) {
    mockedAxios.request.mockReset();

    if (!model.customer.id || model.customer.id === '') {
        model.customer.id = generateId();
    }

    const payload = CustomerMap.toBTRequestModel(model);
    const data = customerCreateResponse;
    data.results.customer = payload.customer;
    data.results.customer_user = payload.customer_user;
    data.results.customer_location = payload.customer_location;

    const res = {
        data: data,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
}

export function customerInvalidCreateOrUpdateMock(model: CustomerCreateRequest) {
    mockedAxios.request.mockReset();

    if (!model.customer.id || model.customer.id === '') {
        model.customer.id = generateId();
    }

    const payload = CustomerMap.toBTRequestModel(model);
    const data = customerCreateResponse;
    data.results.customer = payload.customer;
    data.results.customer_user = payload.customer_user;
    data.results.customer_location = payload.customer_location;

    const res = {
        data: createCustomerErrorResponse,
    };

    mockedAxios.request.mockRejectedValueOnce(Promise.resolve(res));
}

export function customerDeleteMock(id: string) {
    mockedAxios.request.mockReset();

    const isExist = customerList.filter((item) => item.id === id).length;

    const res = {
        data: customerDeleteResponse,
    };

    if (isExist > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerErrorResponse);
    }
}

export function customerSmsInviteMock(model: SmsInviteData) {
    mockedAxios.request.mockReset();

    const res = {
        data: smsInviteResponse,
    };

    if (digitsOnly(model.smsNumber)) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(smsInviteErrorResponse);
    }
}
