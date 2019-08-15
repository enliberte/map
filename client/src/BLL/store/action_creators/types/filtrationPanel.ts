import * as a from "../../constants";


export type Filters = {
    'Новая': boolean,
    'В работе': boolean,
    'Выполнена': boolean,
    'В архиве': boolean
}

export type SetFiltersNewAction = {
    type: typeof a.SET_FILTERS_NEW,
    payload: boolean
}

export type SetFiltersInWorkAction = {
    type: typeof a.SET_FILTERS_IN_WORK,
    payload: boolean
}

export type SetFiltersDoneAction = {
    type: typeof a.SET_FILTERS_DONE,
    payload: boolean
}

export type SetFiltersArchiveAction = {
    type: typeof a.SET_FILTERS_ARCHIVE,
    payload: boolean
}

export type FilterActions = SetFiltersNewAction | SetFiltersInWorkAction | SetFiltersDoneAction | SetFiltersArchiveAction;
