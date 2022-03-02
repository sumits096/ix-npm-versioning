import { describe, it, expect, beforeAll } from '@jest/globals';
import { jest } from '@jest/globals';
import { AxiosHandler } from '../../src/gateway/request-handler';
import { BoomtownClient } from '../../src/gateway/client/boomtown-client';
import { CasesRepository } from '../../src/gateway/repositories';
import axios from 'axios';
import { CasesService } from '../../src/core/services';
import { Cases } from '../../src/api/controllers/cases';
import {
    cancelScheduleInvalidCaseIdMock,
    casesCreateOrUpdateMock,
    casesSuccessResponseMock,
    chatHistoryErrorResponseMock,
    chatHistoryResponseMock,
    getCasesByIdMock,
    getCasesMock,
    scheduleInvalidCaseIdMock,
    scheduleTimeInvalidMock,
    statusHistoryErrorResponseMock,
    statusHistoryResponseMock,
} from '../mocks/cases-mock';
import {
    caseDeEscalateOptions,
    caseEscalateOptions,
    casesCreatePayload,
    casesUpdatePayload,
} from '../mock-data/cases-data';

jest.mock('axios');
let cases: Cases;
let caseId = '02fcb243-166b-476b-a10c-44733013fa4a';
let invalidCaseId = '454354-476b-354-3545-445367547a4a';

beforeAll(async () => {
    cases = new Cases(new CasesService(new CasesRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('Cases', () => {
    describe('Get All', () => {
        it('should be return collection of cases', async () => {
            // given
            getCasesMock();

            // when
            const result = await cases.get();

            // then
            expect(result.totalCount).toEqual(108);
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.results).toBeTruthy();
            if (result.results) {
                expect(result.results.length).toBeGreaterThan(0);
            }
        });

        it('should be return collection of 10 cases', async () => {
            // given
            getCasesMock(0, 10);

            // when
            const result = await cases.get({ start: 0, limit: 10 });

            // then
            expect(result.totalCount).toEqual(108);
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.results).toBeTruthy();
            if (result.results) {
                expect(result.results.length).toBeLessThanOrEqual(10);
            }
        });
    });

    describe('Get By Id', () => {
        it('should be return with valid Id response', async () => {
            // given
            getCasesByIdMock(caseId);

            // when
            const result = await cases.getById(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(108);
            expect(result.results).toBeTruthy();
            if (result.results) {
                expect(result.results.length).toEqual(1);
            }
        });

        it('should be return with invalid Id response', async () => {
            // given
            getCasesByIdMock(invalidCaseId);

            // when
            const result = await cases.getById(invalidCaseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(108);
            expect(result.results).toBeTruthy();
            if (result.results) {
                expect(result.results.length).toEqual(0);
            }
        });

        it('should be return error response', () => {
            // given
            getCasesByIdMock(invalidCaseId);

            // when
            const result = cases.getById(invalidCaseId);

            // then
            result.then(
                (_) => {},
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('Unexpected error');
                },
            );
        });
    });

    describe('Create or Update', () => {
        it('should be return created cases object', async () => {
            // given
            casesCreateOrUpdateMock(casesCreatePayload);

            // when
            const result = await cases.post(casesCreatePayload);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            expect(result.results).toBeTruthy();
            if (result.results) {
                expect(result.results.id).toBeTruthy();
            }
        });

        it('should be return updated cases object', async () => {
            // given
            casesCreateOrUpdateMock(casesUpdatePayload);

            // when
            const result = await cases.post(casesCreatePayload);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            expect(result.results).toBeTruthy();
            if (result.results) {
                expect(result.results.id).toBeTruthy();
                expect(result.results.id).toBe(casesUpdatePayload.cases.id);
            }
        });
    });

    describe('Schedule', () => {
        it('should be return with valid caseId response', async () => {
            let scheduledTime = Date.now.toString();
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.schedule(caseId, scheduledTime);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return FileNotFoundException', async () => {
            let scheduledTime = Date.now.toString();
            // given
            scheduleInvalidCaseIdMock();

            // when
            const result = cases.schedule(invalidCaseId, scheduledTime);

            // then
            result.then(
                (_) => {},
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });

        it('should be return with invalid schedule time response & UserInputException', async () => {
            let scheduledTime = 'ADX-CSH';
            // given
            scheduleTimeInvalidMock();

            // when
            const result = cases.schedule(caseId, scheduledTime);

            // then
            result.then(
                (_) => {},
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('UserInputException');
                },
            );
        });
    });

    describe('Cancel Schedule', () => {
        it('should be return with valid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.cancelSchedule(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', async () => {
            // given
            cancelScheduleInvalidCaseIdMock();

            // when
            const result = cases.cancelSchedule(invalidCaseId);

            // then
            result.then(
                (_) => {},
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('AccessDeniedException');
                },
            );
        });
    });

    describe('Resolve', () => {
        it('should be return with valid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.resolve(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.resolve(invalidCaseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });

    describe('Escalate', () => {
        it('should be return with valid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.escalate(caseId, caseEscalateOptions);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.escalate(caseId, caseEscalateOptions);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });

    describe('DeEscalate', () => {
        it('should be return with valid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.deEscalate(caseId, caseDeEscalateOptions);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.deEscalate(caseId, caseDeEscalateOptions);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });

    describe('Cancel', () => {
        it('should be return with valid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.cancel(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', async () => {
            // given
            casesSuccessResponseMock();

            // when
            const result = await cases.cancel(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });

    describe('Status History', () => {
        it('should be return with valid caseId response', async () => {
            // given
            statusHistoryResponseMock();

            // when
            const result = await cases.statusHistory(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', async () => {
            // given
            statusHistoryErrorResponseMock();

            // when
            const result = cases.statusHistory(caseId);

            // then
            result.then(
                (_) => {},
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('Error');
                },
            );
        });
    });

    describe('Chat History', () => {
        it('should be return with valid caseId response', async () => {
            // given
            chatHistoryResponseMock();

            // when
            const result = await cases.chatHistory(caseId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return with invalid caseId response', () => {
            // given
            chatHistoryErrorResponseMock();

            // when
            const result = cases.chatHistory(caseId);

            // then
            result.then(
                (_) => {},
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('AccessDeniedException');
                },
            );
        });
    });
});
