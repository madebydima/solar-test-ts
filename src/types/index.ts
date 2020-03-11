interface Schema {
    element: string; // тип компонента -> input | select | textarea | checkbox | radio | button
    name: string;
    id: string;
    label: string; // label элемента
    placeholder: string; // placeholder элемента
    message: string; // сообщение под label
    hint: string; // подсказка под элементом
    value: string; // содержимое элемента
    readonly: boolean;
    disabled: boolean;
    required: boolean;
}

interface Items {
    label: string; // заголовок опции
    value: string; // значение опции
    selected: boolean; // флаг выбора по умолчанию
    disabled: boolean;
    id: string;
}

export interface Input extends Schema {
    type: string; // тип элемента -> text | password | email | tel | number | range | date
    maxLength: number; // максимальная длина ввода
}

export interface Textarea extends Schema {
    rows: number; // высота элемента
}

export interface Select extends Schema {
    maxItems: number; // количество отображаемых элементов списка - select's html attr "size"
    multiple: boolean; // разрешить множественный выбор
    items: Array<Items>;
}

export interface Radio extends Schema {
    maxItems: number; // количество отображаемых элементов списка - select's html attr "size"
    multiple: boolean; // разрешить множественный выбор
    items: Array<Items>;
}

export type Checkbox = Schema

export interface Button extends Schema {
    backgroundColor: string;
    borderColor: string;
    color: string;
    isFullWidth: boolean; // флаг ширины кнопки: если true, растянуть по ширине родителя; false - по содержимому кнопки
}

export interface CommonSchema extends Schema, Input, Items, Radio, Select, Textarea, Checkbox, Button {

}