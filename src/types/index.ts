interface ISchema {
    element: string, // тип компонента -> input | select | textarea | checkbox | radio | button
    name: string,
    id: string,
    label: string, // label элемента
    placeholder: string, // placeholder элемента
    message: string, // сообщение под label
    hint: string, // подсказка под элементом
    value: string, // содержимое элемента
    readonly: boolean,
    disabled: boolean,
    required: boolean,
}

interface IItems {
    label: string, // заголовок опции
    value: string, // значение опции
    selected: boolean, // флаг выбора по умолчанию
    disabled: boolean,
    id: string
}

export interface IInput extends ISchema {
    type: string, // тип элемента -> text | password | email | tel | number | range | date
    maxLength: number, // максимальная длина ввода
}

export interface ITextarea extends ISchema {
    rows: number, // высота элемента
}

export interface ISelect extends ISchema {
    maxItems: number, // количество отображаемых элементов списка - select's html attr "size"
    multiple: boolean, // разрешить множественный выбор
    items: Array<IItems>
}

export interface IRadio extends ISchema {
    maxItems: number, // количество отображаемых элементов списка - select's html attr "size"
    multiple: boolean, // разрешить множественный выбор
    items: Array<IItems>
}

export interface ICheckbox extends ISchema {

}

export interface IButton extends ISchema {
    backgroundColor: string,
    borderColor: string,
    color: string,
    isFullWidth: boolean, // флаг ширины кнопки: если true, растянуть по ширине родителя; false - по содержимому кнопки
}