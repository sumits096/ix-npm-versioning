import { describe, it, expect, beforeAll } from '@jest/globals';
import { CaseLog } from '../../src/api/controllers';
import { CaseLogService } from '../../src/core/services';
import { jest } from '@jest/globals';
import { AxiosHandler } from '../../src/gateway/request-handler';
import { BoomtownClient } from '../../src/gateway/client/boomtown-client';
import { CaseLogRepository } from '../../src/gateway/repositories';
import axios from 'axios';
import { caseLogCreateMock, caseLogDeleteMock, caseLogGetByIdMock } from '../mocks/case-log-mock';

jest.mock('axios');
let caseLog: CaseLog;
const caseLogId = '0059b314-44e7-4f1f-a3dc-8046ac5388d4';

beforeAll(async () => {
    caseLog = new CaseLog(new CaseLogService(new CaseLogRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('caseLog', () => {
    describe('Get CaseLog', () => {
        it('should be return valid response', async () => {
            // given
            caseLogGetByIdMock(caseLogId);

            // when
            const result = await caseLog.getCaseLog(caseLogId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(12);
            if (result.results) {
                expect(result.results.length).toEqual(12);
            }
        });

        it('should be return error response', () => {
            // given
            caseLogGetByIdMock('0059b314-44e7-4f1f-a3dc-8046ac5388d4a');

            // when
            const result = caseLog.getCaseLog(caseLogId);

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });

    describe('Create Case Log', () => {

        it('should be return created case log object', async () => {

            // given
            caseLogCreateMock();

            // when
            const result = await caseLog.postCaseLog(caseLogId, 'test');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.results).toBeTruthy();

            if (result.results) {
                expect(result.results.length).toEqual(1);
                expect(result.results[0].issuesId).toEqual(caseLogId);
            }
        });

        it('should be return case log FileNotFoundException', async () => {

            // given
            caseLogCreateMock();

            // when
            const result = await caseLog.postCaseLog(caseLogId, 'test');

            // then    
            if (result.results) {
                expect(result.results.length).toEqual(1);
                expect(result.results[0].issuesId).toEqual(caseLogId);
            }

            // (error: any) => {
            //     expect(axios.request).toHaveBeenCalled();
            //     expect(error.success).toEqual(false);
            //     expect(error.errorType).toEqual('FileNotFoundException');
            // }
        });
    });

    describe('Delete Case Log', () => {
        it('should be return success', async () => {
            // given
            caseLogDeleteMock(caseLogId, '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // when
            const result = await caseLog.deleteCaseLog(caseLogId, '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);

            if (result.results) {
                expect(result.results[0].issuesId).toEqual(caseLogId);
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            caseLogDeleteMock(caseLogId, '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // when
            const result = caseLog.deleteCaseLog(caseLogId, '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });
});
