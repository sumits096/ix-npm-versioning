/**
 * Type for what object is instances of
 */
export type Type<T> = new (...args: any[]) => T;
