import { jest } from '@jest/globals';
import axios from 'axios';
import { customerMetaIndustriesResponse, customerMetaStatusResponse, metaCustomFormResponse } from '../mock-data/customer-meta-data';
jest.mock('axios');
let mockedAxios = jest.mocked(axios, true);

export function customerMetaStatusMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: customerMetaStatusResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function customerMetaIndustriesMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: customerMetaIndustriesResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function customerMetaCustomFormsMock(orgTeamId: string) {
    mockedAxios.request.mockReset();

    const data = metaCustomFormResponse;
    data.results = data.results.filter((item: any) => item.org_team_ids.includes(orgTeamId));
    const res = {
        data: data,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
}
