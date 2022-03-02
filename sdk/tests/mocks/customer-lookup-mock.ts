import { jest } from '@jest/globals';
import axios from 'axios';
import { customerLookupErrorResponse, customerLookupResponse } from '../mock-data/customer-lookup-data';

jest.mock('axios');
let mockedAxios = jest.mocked(axios, true);

export function customerLookupGetByIdMock(id: string) {
    mockedAxios.request.mockReset();

    const res = {
        data: customerLookupResponse,
    };

    if (res.data.results.customers_users_id === id) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLookupErrorResponse);
    }
}

export function customerLookupGetByEmailMock(email: string) {
    mockedAxios.request.mockReset();

    const res = {
        data: customerLookupResponse,
    };

    if (res.data.results.customer.email === email) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLookupErrorResponse);
    }
}

export function customerLookupGetByExternalIdMock(externalId: string) {
    mockedAxios.request.mockReset();

    const res = {
        data: customerLookupResponse,
    };

    if (res.data.results.customer.external_id === externalId) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLookupErrorResponse);
    }
}

export function customerLookupGetByIssueIdMock() {
    mockedAxios.request.mockReset();

    const res = {
        data: customerLookupResponse,
    };

    if (res.data.results) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(customerLookupErrorResponse);
    }
}
