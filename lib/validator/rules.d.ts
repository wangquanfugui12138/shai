export interface RuleFunction {
    (...values: any[]): boolean;
}
export declare type rulesName = 'string' | 'number' | 'boolean' | 'object' | 'null' | 'array' | 'regexp' | 'custom' | 'require' | 'english' | 'qq' | 'age' | 'zipcode' | 'ip' | 'port' | 'bizcode' | 'invoice' | 'bankcard' | 'aeo' | 'currency' | 'float' | 'int' | 'decimal' | 'chinese' | 'mail' | 'url' | 'account' | 'password' | 'safe' | 'dbc' | 'hex' | 'color' | 'ascii' | 'base64' | 'md5' | 'uuid' | 'mobile' | 'telphone' | 'phone' | 'percent' | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'time' | 'date' | 'datetime' | 'file' | 'image' | 'word' | 'lon' | 'lat' | 'approval' | 'citycode' | 'address' | 'upper' | 'lower' | 'isbn:' | 'htmltag' | 'even' | 'odd' | 'ipv6' | 'bodycard' | 'autocard' | 'not' | 'eq' | 'gt' | 'gte' | 'lt' | 'lte' | 'between' | 'min' | 'max' | 'length' | 'minlength' | 'maxlength' | 'in';
export interface RulesInterface {
    [key: string]: RegExp | RuleFunction;
    string(arg: any): boolean;
    number(arg: any): boolean;
    boolean(arg: any): boolean;
    object(arg: any): boolean;
    array(arg: any): boolean;
    null(arg: any): boolean;
    require: RegExp;
    english: RegExp;
    qq: RegExp;
    age: RegExp;
    zipcode: RegExp;
    ip: RegExp;
    port: RegExp;
    bizcode: RegExp;
    invoice: RegExp;
    bankcard: RegExp;
    aeo: RegExp;
    currency: RegExp;
    float: RegExp;
    int: RegExp;
    decimal: RegExp;
    chinese: RegExp;
    mail: RegExp;
    url: RegExp;
    account: RegExp;
    password: RegExp;
    safe: RegExp;
    dbc: RegExp;
    hex: RegExp;
    color: RegExp;
    ascii: RegExp;
    base64: RegExp;
    md5: RegExp;
    uuid: RegExp;
    mobile: RegExp;
    telphone: RegExp;
    phone: RegExp;
    percent: RegExp;
    year: RegExp;
    month: RegExp;
    day: RegExp;
    hour: RegExp;
    minute: RegExp;
    time: RegExp;
    date: RegExp;
    datetime: RegExp;
    file: RegExp;
    image: RegExp;
    word: RegExp;
    lon: RegExp;
    lat: RegExp;
    approval: RegExp;
    citycode: RegExp;
    address: RegExp;
    upper: RegExp;
    lower: RegExp;
    isbn: RegExp;
    htmltag: RegExp;
    even(arg: string | number): boolean;
    odd(arg: string | number): boolean;
    ipv6(arg: string): boolean;
    bodycard(arg: string | number): boolean;
    autocard(arg: string): boolean;
    not<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    eq<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    gt<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    gte<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    lt<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    lte<T extends string | number | Date>(arg1: T, arg2: T): boolean;
    between<T extends string | number | Date>(arg1: T, arg2: T, arg3: T): boolean;
    min<T extends string | number | Date>(arg1: T, ...args: T[]): boolean;
    max<T extends string | number | Date>(arg1: T, ...args: T[]): boolean;
    length<T extends string | number>(arg1: T, arg2: T): boolean;
    minlength<T extends string | number>(arg1: T, arg2: T): boolean;
    maxlength<T extends string | number>(arg1: T, arg2: T): boolean;
    in<T extends string | number | any[] | {}>(arg1: T, arg2: T): boolean;
    regexp: (arg: any, arg2: RegExp | string) => boolean;
    custom: (arg: any, arg2: RuleFunction) => boolean;
}
export declare const rules: RulesInterface;