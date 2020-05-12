export type IWebComponentKind = "main" | "styling" | "builder";

export interface IContribution {
    eula?: string;
    vendor?: string;
    license?: string;
    id: string;
    version: string;
    name: string;
    newInstancePrefix: string;
    description?: string;
    icon?: string;
    webcomponents: IWebComponent[];
    properties: IProperties;
    methods: IMethods;
    events: IEvents;
    imports?: string[];
}
export interface IWebComponent {
    kind: IWebComponentKind;
    tag: string;
    url: string;
    type?: string;
    integrity: string;
    ignoreIntegrity?: boolean;
}
export interface IProperties {
    [k: string]: IProperty;
}
export interface IProperty {
    default?: string | number | boolean | string[] | boolean[] | number[];
    type: string;
    description?: string;
}
export interface IMethods {
    [k: string]: IMethod;
}
export interface IMethod {
    parameters?: IParameter[];
    body?: string;
    returnType?: string;
    description?: string;
}
export interface IParameter {
    name: string;
    description?: string;
    type: string;
}
export interface IEvents {
    [k: string]: IEvent;
}
export interface IEvent {
    description?: string;
}
