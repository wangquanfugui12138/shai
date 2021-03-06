import { RuleFunction, RulesMap, RulesInterface } from './rules';
declare type rulesName = keyof RulesMap | keyof SpecificRulesMap;
export { RuleFunction, rulesName };
export interface SettingOption {
    'divisionCode'?: string | number;
    'beginTime'?: Date;
    'endTime'?: Date;
}
export interface SpecificRulesMap {
    [key: string]: RegExp | RuleFunction;
    increment(arg1?: boolean, arg2?: number): number;
    datetime(arg?: string): string;
    date(): string;
    time(): string;
    year(): string;
    citycode(): string;
    province(): string;
    prefecture(): string;
    county(): string;
    phone(): string;
    zipcode(): string;
    bodycard(): string;
    autocard(): string;
    address(): string;
    company(): string;
    lon(): string;
    lat(): string;
    custom(key: string | RuleFunction, ...args: Array<any>): string | number | boolean;
}
export default class SpecificRules {
    private config;
    private baseinc;
    private getRndTime;
    private division;
    protected __methods: {
        [key: string]: RuleFunction;
    };
    protected __rules: RulesInterface & SpecificRulesMap;
    add(key: string, makeFunc: RuleFunction): void;
    increment: number;
    private maps;
    constructor(option?: SettingOption);
}
