import { jest } from '@jest/globals';
import axios from 'axios';
import { CaseLogModel } from '../../src/core/models';
import {
    caseLogDeleteResponse,
    caseLogErrorResponse,
    caseLogList,
    caseLogResponse , createCaseLogResponse
} from '../mock-data/case-log-data';

jest.mock('axios');
let mockedAxios = jest.mocked(axios, true);

export function caseLogGetByIdMock(caseID: string) {
    mockedAxios.request.mockReset();

    const data = caseLogResponse;
    data.results = data.results.filter((item: CaseLogModel) => item.issues_id === caseID );
    const res = {
        data: data,
    };

    if (data.results.length > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(Promise.resolve(caseLogErrorResponse));
    }
}

export function caseLogCreateMock() {

    mockedAxios.request.mockReset();

    const res = {
        data: createCaseLogResponse,
    };

    mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
}

export function caseLogDeleteMock(caseID: string, caseLogId: string) {
    mockedAxios.request.mockReset();

    const isExist = caseLogList.filter((item) => item.issues_id === caseID && item.id === caseLogId).length;

    const res = {
        data: caseLogDeleteResponse,
    };

    if (isExist > 0) {
        mockedAxios.request.mockResolvedValueOnce(Promise.resolve(res));
    } else {
        mockedAxios.request.mockRejectedValueOnce(Promise.resolve(caseLogErrorResponse));
    }
}
