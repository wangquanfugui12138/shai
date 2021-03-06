import { RulesMap, RuleFunction } from './rules';
export { RuleFunction };
declare type ruleNames = keyof RulesMap;
declare type OptionType = {
    value?: any;
    label?: string | object;
    isdev?: boolean;
};
export interface CallbackFunction {
    (result: boolean): void;
}
export interface OnFaultsFunction {
    (faults: ruleNames[]): void;
}
export interface ChainInterface {
    $set?(arg: OptionType): this;
    on(str: keyof RulesMap | OnFaultsFunction, fnc?: CallbackFunction): this;
    readonly result: boolean;
    readonly string?: this;
    readonly number?: this;
    readonly boolean?: this;
    readonly object?: this;
    readonly array?: this;
    readonly null?: this;
    readonly required?: this;
    readonly english?: this;
    readonly nospace?: this;
    readonly nodbc?: this;
    readonly alphanum?: this;
    readonly qq?: this;
    readonly age?: this;
    readonly zipcode?: this;
    readonly ip?: this;
    readonly port?: this;
    readonly domain?: this;
    readonly maca?: this;
    readonly bizcode?: this;
    readonly invoice?: this;
    readonly bankcard?: this;
    readonly currency?: this;
    readonly float?: this;
    readonly int?: this;
    readonly decimal?: this;
    readonly chinese?: this;
    readonly mail?: this;
    readonly url?: this;
    readonly account?: this;
    readonly password?: this;
    readonly safe?: this;
    readonly hex?: this;
    readonly color?: this;
    readonly ascii?: this;
    readonly base64?: this;
    readonly md5?: this;
    readonly uuid?: this;
    readonly mobile?: this;
    readonly telphone?: this;
    readonly phone?: this;
    readonly percent?: this;
    readonly year?: this;
    readonly month?: this;
    readonly day?: this;
    readonly hour?: this;
    readonly minute?: this;
    readonly time?: this;
    readonly date?: this;
    readonly datetime?: this;
    readonly file?: this;
    readonly image?: this;
    readonly word?: this;
    readonly lon?: this;
    readonly lat?: this;
    readonly approval?: this;
    readonly citycode?: this;
    readonly address?: this;
    readonly upper?: this;
    readonly lower?: this;
    readonly even?: this;
    readonly odd?: this;
    readonly ipv6?: this;
    readonly bodycard?: this;
    readonly autocard?: this;
    readonly isbn?: this;
    readonly tag?: this;
    readonly jwt?: this;
    readonly objectid?: this;
    readonly empty?: this;
    not?(arg: any): this;
    eq?(arg: any): this;
    gt?(arg: string | number | Date): this;
    gte?(arg: string | number | Date): this;
    lt?(arg: string | number | Date): this;
    lte?(arg: string | number | Date): this;
    between?<T extends string | number | Date>(arg1: T, arg2: T): this;
    min?<T extends string | number | Date>(arg1: T, ...args: T[]): this;
    max?<T extends string | number | Date>(arg1: T, ...args: T[]): this;
    length?(arg: string | number): this;
    minlength?(arg: string | number): this;
    maxlength?(arg: string | number): this;
    bitmax?(arg: string | number): this;
    in?(arg: string | number | any[] | object): this;
    has?(arg: string | number | any[] | object): this;
    regexp?(arg: RegExp | string): this;
    custom?(arg: string | RuleFunction, ...args: Array<any>): this;
}
export declare class Chain implements ChainInterface {
    private __rls;
    private __lbs;
    private __val;
    private __cbs;
    private __allcb;
    private __dev;
    constructor(override?: {
        [key: string]: RuleFunction;
    });
    $set(opt: OptionType): this;
    on(key: keyof RulesMap | OnFaultsFunction, fnc?: CallbackFunction): this;
    private checkFunc;
    readonly result: boolean;
}
