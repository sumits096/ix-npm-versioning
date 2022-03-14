import { jest } from '@jest/globals';
import axios from 'axios';
import { CasesCreateRequest } from '../../src/core/entity';
import { CasesModel } from '../../src/core/models';
import { CasesMap } from '../../src/gateway/mapper';
import { generateId } from '../helpers/common-helpers';
import {
    cancelScheduleErrorResponse,
    caseChatHistoryResponse,
    caseIdErrorResponse,
    casesCreateResponse,
    casesResponse,
    caseStatusHistoryResponse,
    chatErrorResponse,
    scheduleTimeErrorResponse,
    statusErrorResponse,
    successResponse,
} from '../mock-data/cases-data';

jest.mock('axios');
let mockedAxios = jest.mocked(axios, true);

export function getCasesMock(start: number = 0, limit: number = 0) {
    mockedAxios.request.mockReset();
    const res = casesResponse;

    if (limit > 0) res.results = res.results.splice(0, limit);
    if (start > 0) res.results = res.results.splice(start, limit);

    const response = {
        data: casesResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function getCasesByIdMock(id: string) {
    mockedAxios.request.mockReset();

    const data = casesResponse;
    data.results = data.results.filter((item: CasesModel) => item.id === id);
    const response = {
        data: data,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function casesCreateOrUpdateMock(model: CasesCreateRequest) {
    mockedAxios.request.mockReset();

    if (!model.cases.id || model.cases.id === '') {
        model.cases.id = generateId();
    }
    const payload = CasesMap.toBTRequestModel(model);
    const data = casesCreateResponse;
    data.results = payload.issues;

    const response = {
        data: data,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function casesSuccessResponseMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: successResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function scheduleInvalidCaseIdMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: caseIdErrorResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function scheduleTimeInvalidMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: scheduleTimeErrorResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function cancelScheduleInvalidCaseIdMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: cancelScheduleErrorResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function statusHistoryResponseMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: caseStatusHistoryResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function statusHistoryErrorResponseMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: statusErrorResponse,
    };

    mockedAxios.request.mockRejectedValueOnce(response);
}

export function chatHistoryResponseMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: caseChatHistoryResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(response));
}

export function chatHistoryErrorResponseMock() {
    mockedAxios.request.mockReset();

    const response = {
        data: chatErrorResponse,
    };

    mockedAxios.request.mockRejectedValueOnce(response);
}
