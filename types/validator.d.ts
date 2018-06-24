import ValidatorBase, { ValidatorBaseInterface } from './validatorbase';
export interface Item {
    value: string | number;
    callback?: (faults: string[]) => void;
    rule?: ValidChain;
    require?: boolean;
    english?: boolean;
    qq?: boolean;
    age?: boolean;
    zipcode?: boolean;
    ip?: boolean;
    port?: boolean;
    bizcode?: boolean;
    invoice?: boolean;
    bankcard?: boolean;
    currency?: boolean;
    float?: boolean;
    int?: boolean;
    decimal?: boolean;
    chinese?: boolean;
    mail?: boolean;
    url?: boolean;
    account?: boolean;
    password?: boolean;
    safe?: boolean;
    dbc?: boolean;
    hex?: boolean;
    color?: boolean;
    ascii?: boolean;
    base64?: boolean;
    md5?: boolean;
    uuid?: boolean;
    mobile?: boolean;
    telphone?: boolean;
    phone?: boolean;
    percent?: boolean;
    year?: boolean;
    month?: boolean;
    day?: boolean;
    hour?: boolean;
    minute?: boolean;
    second?: boolean;
    time?: boolean;
    date?: boolean;
    datetime?: boolean;
    file?: boolean;
    image?: boolean;
    word?: boolean;
    lon?: boolean;
    lat?: boolean;
    approval?: boolean;
    citycode?: boolean;
    address?: boolean;
    upper?: boolean;
    lower?: boolean;
    even?: boolean;
    odd?: boolean;
    ipv6?: boolean;
    bodycard?: boolean;
    autocard?: boolean;
    not?: string | number;
    eq?: string | number;
    gt?: string | number;
    gte?: string | number;
    lt?: string | number;
    lte?: string | number;
    between?: string | number;
    min?: (string | number)[];
    max?: (string | number)[];
    len?: number;
    in?: string | number;
    llt?: number;
    lgt?: number;
    [key: string]: any;
}
export interface ValidChain {
    readonly __caches: any;
    require?: ValidChain;
    english?: ValidChain;
    qq?: ValidChain;
    age?: ValidChain;
    zipcode?: ValidChain;
    ip?: ValidChain;
    port?: ValidChain;
    bizcode?: ValidChain;
    invoice?: ValidChain;
    bankcard?: ValidChain;
    currency?: ValidChain;
    float?: ValidChain;
    int?: ValidChain;
    decimal?: ValidChain;
    chinese?: ValidChain;
    mail?: ValidChain;
    url?: ValidChain;
    account?: ValidChain;
    password?: ValidChain;
    safe?: ValidChain;
    dbc?: ValidChain;
    hex?: ValidChain;
    color?: ValidChain;
    ascii?: ValidChain;
    base64?: ValidChain;
    md5?: ValidChain;
    uuid?: ValidChain;
    mobile?: ValidChain;
    telphone?: ValidChain;
    phone?: ValidChain;
    percent?: ValidChain;
    year?: ValidChain;
    month?: ValidChain;
    day?: ValidChain;
    hour?: ValidChain;
    minute?: ValidChain;
    second?: ValidChain;
    time?: ValidChain;
    date?: ValidChain;
    datetime?: ValidChain;
    file?: ValidChain;
    image?: ValidChain;
    word?: ValidChain;
    lon?: ValidChain;
    lat?: ValidChain;
    approval?: ValidChain;
    citycode?: ValidChain;
    address?: ValidChain;
    upper?: ValidChain;
    lower?: ValidChain;
    even?: ValidChain;
    odd?: ValidChain;
    ipv6?: ValidChain;
    bodycard?: ValidChain;
    autocard?: ValidChain;
    not?: (arg: string | number) => ValidChain;
    eq?: (arg: string | number) => ValidChain;
    gt?: (arg: string | number) => ValidChain;
    gte?: (arg: string | number) => ValidChain;
    lt?: (arg: string | number) => ValidChain;
    lte?: (arg: string | number) => ValidChain;
    between?: (arg: string | number) => ValidChain;
    min?: (args: (string | number)[]) => ValidChain;
    max?: (args: (string | number)[]) => ValidChain;
    len?: (arg: number) => ValidChain;
    in?: (arg: string | number) => ValidChain;
    llt?: (arg: number) => ValidChain;
    lgt?: (arg: number) => ValidChain;
}
export interface ValidatorInterface extends ValidatorBaseInterface {
    readonly type: ValidChain;
    check(value: string | number, rn?: string, ...args: (string | number)[]): boolean;
    checkItem(options: Item): boolean;
    checkItems(items: Item[]): boolean;
}
export default class Validator extends ValidatorBase implements ValidatorInterface {
    check(value: string | number, rn?: string, ...args: (string | number)[]): boolean;
    checkItem(options: Item): boolean;
    checkItems(items: Item[]): boolean;
    constructor();
}