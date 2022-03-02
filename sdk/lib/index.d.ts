import 'reflect-metadata';
import { Customer } from './api/controllers/customer';
import { CustomerService } from './core/services/customer-service';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CustomerRepository } from './gateway/repositories';
export declare const BoomtownProviders: (token: string, secret: string) => ({
    provide: typeof Customer;
    deps: (typeof CustomerService)[];
} | {
    provide: typeof CustomerService;
    deps: (typeof CustomerRepository)[];
} | {
    provide: typeof CustomerRepository;
    deps: (typeof BoomtownClient)[];
})[];
export declare class Credential {
    static token: string;
    static secret: string;
    setTokenSecret(token: string, secret: string): void;
}
