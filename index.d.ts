import * as Mamcached from "memcached";
import * as Bluebird from "bluebird";

declare module "Mamcached" {

	declare function get(key: string): Promise<string>;

}

export = Mamcached;
