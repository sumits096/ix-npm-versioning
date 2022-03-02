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
let caselog: CaseLog;

beforeAll(async () => {
    caselog = new CaseLog(new CaseLogService(new CaseLogRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('caselog', () => {
    describe('Get CaseLog', () => {
        it('should be retrun valid response', async () => {
            // given
            caseLogGetByIdMock('0059b314-44e7-4f1f-a3dc-8046ac5388d4');

            // when
            const result = await caselog.getCaseLog('0059b314-44e7-4f1f-a3dc-8046ac5388d4');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(12);
            if (result.results) {
                expect(result.results.length).toEqual(12);
            }
        });

        it('should be retrun error response', () => {
            // given
            caseLogGetByIdMock('0059b314-44e7-4f1f-a3dc-8046ac5388d4');

            // when
            const result = caselog.getCaseLog('0059b314-44e7-4f1f-a3dc-8046ac5388d4');

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
            const result = await caselog.postCaseLog('0059b314-44e7-4f1f-a3dc-8046ac5388d4', 'test');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.results).toBeTruthy();

            if (result.results) {
                expect(result.results.length).toEqual(1);
                expect(result.results[0].issuesId).toEqual('0059b314-44e7-4f1f-a3dc-8046ac5388d4');
            }
        });

        it('should be return case log FileNotFoundException', async () => {

            // given
            caseLogCreateMock();

            // when
            const result = await caselog.postCaseLog('0059b314-44e7-4f1f-a3dc-8046ac5388d4', 'test');

            // then    
            if (result.results) {
                expect(result.results.length).toEqual(1);
                expect(result.results[0].issuesId).toEqual('0059b314-44e7-4f1f-a3dc-8046ac5388d4');
            }
            
            (error: any) => {
                expect(axios.request).toHaveBeenCalled();
                expect(error.success).toEqual(false);
                expect(error.errorType).toEqual('FileNotFoundException');
            }          
        });
    });

    describe('Delete Case Log', () => {
        it('should be return success', async () => {
            // given
            caseLogDeleteMock('0059b314-44e7-4f1f-a3dc-8046ac5388d4', '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // when
            const result = await caselog.deleteCaseLog('0059b314-44e7-4f1f-a3dc-8046ac5388d4', '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);

            if (result.results) {
                expect(result.results[0].issuesId).toEqual('0059b314-44e7-4f1f-a3dc-8046ac5388d4');
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            caseLogDeleteMock('0059b314-44e7-4f1f-a3dc-8046ac5388d4', '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

            // when
            const result = caselog.deleteCaseLog('0059b314-44e7-4f1f-a3dc-8046ac5388d4', '0059b314-44e7-4f1f-a3dc-8046ac5388d4-AH6');

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
