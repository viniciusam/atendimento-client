export class DynamicForm {
    id: number;
    name: string;
    type: FormType;
    description: string;
    fields: DynamicField[];
}

export class DynamicField {
    type: string;
    key: string;
    required?: boolean;
    validators?: string[];
    label?: string;
    inputType?: string;
    options?: [{ key: string, value: string}];
}

export enum FormType {
    Default = 1,
    Sistema = 2,
    Website = 3
}
