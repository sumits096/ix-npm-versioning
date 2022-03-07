import 'reflect-metadata';
import { Customer } from './api/controllers';
import { CustomerService } from './core/services';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CustomerRepository } from './gateway/repositories';
import { AxiosHandler } from './gateway/request-handler';
export declare const BoomtownProviders: (token: string, secret: string) => ({
    provide: typeof Customer;
    deps: (typeof CustomerService)[];
} | {
    provide: typeof CustomerService;
    deps: (typeof CustomerRepository)[];
} | {
    provide: typeof CustomerRepository;
    deps: (typeof BoomtownClient)[];
} | {
    provide: typeof BoomtownClient;
    deps: (typeof AxiosHandler)[];
})[];
export declare class Credential {
    static token: string;
    static secret: string;
    setTokenSecret(token: string, secret: string): void;
}
