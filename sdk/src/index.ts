import 'reflect-metadata';
import { Customer } from './api/controllers';
import { CustomerService } from './core/services';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CustomerRepository } from './gateway/repositories';
import { AxiosHandler } from './gateway/request-handler';

export const BoomtownProviders = (token: string, secret: string) => {
    new Credential().setTokenSecret(token, secret);
    return [
        AxiosHandler,
        { provide: Customer, deps: [CustomerService] },
        { provide: CustomerService, deps: [CustomerRepository] },
        { provide: CustomerRepository, deps: [BoomtownClient] },
        { provide: BoomtownClient, deps: [AxiosHandler] },
    ];
};

export class Credential {
    static token: string = 'F9DE22681B8419CB9BC3';
    static secret: string = '90691a8eed1851cc1ee20c1d4a8a39e81f91e1de';
    setTokenSecret(token: string, secret: string) {
        Credential.token = token;
        Credential.secret = secret;
    }
}

const result = new Customer(new CustomerService(new CustomerRepository(new BoomtownClient(new AxiosHandler()))));

result.get().then(res => {
    try {
        console.log('Customers    ' + JSON.stringify(res));
    }
    catch (error) {
        console.log((error as Error).message);
    }
}).catch((error) => {
    console.error(error);
});
