import 'reflect-metadata';
export declare const BoomtownProviders: (token: string, secret: string) => never[];
export declare class Credential {
    static token: string;
    static secret: string;
    setTokenSecret(token: string, secret: string): void;
}
