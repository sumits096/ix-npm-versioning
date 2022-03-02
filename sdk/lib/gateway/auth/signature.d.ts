declare class Signature {
    create(url: string, timestamp: Date, queryParam?: string): string;
}
export declare const signature: Signature;
export {};
