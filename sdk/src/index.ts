import { DynamicModule, Module } from '@nestjs/common';
import 'reflect-metadata';
import { CaseFile, CaseLog, CaseMeta, Cases, CustomerContact, CustomerLocation, CustomerLookup, CustomerMeta } from './api/controllers';
import { Customer } from './api/controllers/customer';
import { CaseFileService, CaseLogService, CaseMetaService, CasesService, CustomerContactService, CustomerLocationService, CustomerLookupService, CustomerMetaService } from './core/services';
import { CustomerService } from './core/services/customer-service';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CaseFileRepository, CaseLogRepository, CaseMetaRepository, CasesRepository, CustomerContactRepository, CustomerLocationRepository, CustomerLookupRepository, CustomerMetaRepository, CustomerRepository } from './gateway/repositories';
import { AxiosHandler } from './gateway/request-handler';

export const BoomtownProviders = (token: string, secret: string) => {
    new Credential().setTokenSecret(token, secret);
    return [
        { provide: Customer, deps: [CustomerService] },
        { provide: CustomerService, deps: [CustomerRepository] },
        { provide: CustomerRepository, deps: [BoomtownClient] },
    ];
};

export class Credential {
    static token: string = '';
    static secret: string = '';
    setTokenSecret(token: string, secret: string) {
        Credential.token = token;
        Credential.secret = secret;
    }
}

@Module({})
export class BoomtownModule {
    static register(token: string, secret: string): DynamicModule {
        new Credential().setTokenSecret(token, secret);
        return {
            module: BoomtownModule,
            providers: [
                Customer,
                CustomerMeta,
                CustomerLookup,
                CustomerLocation,
                CustomerContact,
                Cases,
                CaseMeta,
                CaseLog,
                CaseFile,
                AxiosHandler,
                {
                    provide: 'CustomerService',
                    useClass: CustomerService,
                },
                {
                    provide: 'CustomerRepository',
                    useClass: CustomerRepository,
                },
                {
                    provide: 'CustomerMetaService',
                    useClass: CustomerMetaService,
                },
                {
                    provide: 'CustomerMetaRepository',
                    useClass: CustomerMetaRepository,
                },
                {
                    provide: 'CustomerLookupService',
                    useClass: CustomerLookupService,
                },
                {
                    provide: 'CustomerLookupRepository',
                    useClass: CustomerLookupRepository,
                },
                {
                    provide: 'CustomerLocationService',
                    useClass: CustomerLocationService,
                },
                {
                    provide: 'CustomerLocationRepository',
                    useClass: CustomerLocationRepository,
                },
                {
                    provide: 'CustomerContactService',
                    useClass: CustomerContactService,
                },
                {
                    provide: 'CustomerContactRepository',
                    useClass: CustomerContactRepository,
                },
                {
                    provide: 'CasesService',
                    useClass: CasesService,
                },
                {
                    provide: 'CasesRepository',
                    useClass: CasesRepository,
                },
                {
                    provide: 'CaseMetaService',
                    useClass: CaseMetaService,
                },
                {
                    provide: 'CaseMetaRepository',
                    useClass: CaseMetaRepository,
                },
                {
                    provide: 'CaseLogService',
                    useClass: CaseLogService,
                },
                {
                    provide: 'CaseLogRepository',
                    useClass: CaseLogRepository,
                },
                {
                    provide: 'CaseFileService',
                    useClass: CaseFileService,
                },
                {
                    provide: 'CaseFileRepository',
                    useClass: CaseFileRepository,
                },
                {
                    provide: 'BoomtownClient',
                    useClass: BoomtownClient,
                },
                {
                    provide: 'AxiosHandler',
                    useClass: AxiosHandler,
                },
            ],
            exports: [Customer, CustomerMeta, CustomerLookup, CustomerLocation, CustomerContact, Cases, CaseMeta, CaseLog, CaseFile],
        };
    }
}
