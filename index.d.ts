import * as Memcached from "memcached";
import * as Bluebird from "bluebird";

declare class MemcachedPromise extends Memcached {

	get(key: string): Bluebird<string>;
	
	touch(key: string, lifetime: number): Bluebird;

	gets(key: string): Bluebird<{[key: string]: any, cas: string}>;

	getMulti(keys: string[]): Bluebird<{[key: string]: any}>;

    set(key: string, value: any, lifetime: number): Bluebird<boolean>;

    // /**
    //  * Replaces the value in memcached.
    //  * @param key The key
    //  * @param value Either a buffer, JSON, number or string that you want to store.
    //  */
    // replace(key: string, value: any, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    // /**
    //  * Add the value, only if it's not in memcached already.
    //  * @param key The key
    //  * @param value Either a buffer, JSON, number or string that you want to store.
    //  */
    // add(key: string, value: any, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    // /**
    //  * Add the value, only if it matches the given CAS value.
    //  * @param key The key
    //  * @param value Either a buffer, JSON, number or string that you want to store.
    //  */
    // cas(key: string, value: any, cas: string, lifetime: number, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    // /**
    //  * Add the given value string to the value of an existing item.
    //  * @param key The key
    //  * @param value Either a buffer, JSON, number or string that you want to store.
    //  */
    // append(key: string, value: any, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    // /**
    //  * Add the given value string to the value of an existing item.
    //  * @param key The key
    //  * @param value Either a buffer, JSON, number or string that you want to store.
    //  */
    // prepend(key: string, value: any, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    // /**
    //  * Increment a given key.
    //  * @param key The key
    //  * @param amount The increment
    //  */
    // incr(key: string, amount: number, cb: (this: Memcached.CommandData, err: any, result: boolean|number) => void): void;

    // /**
    //  * Decrement a given key.
    //  * @param key The key
    //  * @param amount The decrement
    //  */
    // decr(key: string, amount: number, cb: (this: Memcached.CommandData, err: any, result: boolean|number) => void): void;

    // /**
    //  * Remove the key from memcached.
    //  * @param key The key
    //  */
    // del(key: string, cb: (this: Memcached.CommandData, err: any, result: boolean) => void): void;

    // /**
    //  * Retrieves the version number of your server.
    //  */
    // version(cb: (err: any, version: Memcached.VersionData[]) => void): void;

    // /**
    //  * Retrieves your stats settings.
    //  */
    // settings(cb: (err: any, settings: Memcached.StatusData[]) => void): void;

    // /**
    //  * Retrieves stats from your memcached server.
    //  */
    // stats(cb: (err: any, stats: Memcached.StatusData[]) => void): void;

    // /**
    //  * Retrieves stats slabs information.
    //  */
    // slabs(cb: (err: any, stats: Memcached.StatusData[]) => void): void;

    // /**
    //  * Retrieves stats items information.
    //  */
    // items(cb: (err: any, stats: Memcached.StatusData[]) => void): void;

    // /**
    //  * Inspect cache, see examples for a detailed explanation.
    //  */
    // cachedump(server: string, slabid: number, number: number, cb: (err: any, cachedump: Memcached.CacheDumpData|Memcached.CacheDumpData[]) => void): void;

    // /**
    //  * Flushes the memcached server.
    //  */
    // flush(cb: (this: undefined, err: any, results: boolean[]) => void): void;
}

export = MemcachedPromise;
