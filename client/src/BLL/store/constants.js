export const actions = {
    SET_PLACEMARKS: 'SET_PLACEMARKS',
    GET_PLACEMARKS_ERROR: 'GET_PLACEMARKS_ERROR',
    ADD_PLACEMARK: 'ADD_PLACEMARK',
    EDIT_PLACEMARK: 'EDIT_PLACEMARK',
    CLOSE_ITEM_CARD: 'CLOSE_ITEM_CARD',
    SET_ID: 'SET_ID',
    SET_NEW_ADDRESS: 'SET_NEW_ADDRESS',
    SET_NEW_COORDINATES: 'SET_NEW_COORDINATES',
    SET_VIOLATION_TYPE: 'SET_VIOLATION_TYPE',
    SET_PLASTIC_TRASH: 'SET_PLASTIC_TRASH',
    SET_METAL_TRASH: 'SET_METAL_TRASH',
    SET_GLASS_TRASH: 'SET_GLASS_TRASH',
    SET_PAPER_TRASH: 'SET_PAPER_TRASH',
    SET_HOUSEHOLD_TRASH: 'SET_HOUSEHOLD_TRASH',
    SET_CONSTRUCTION_TRASH: 'SET_CONSTRUCTION_TRASH',
    SET_OTHER_TRASH: 'SET_OTHER_TRASH',
    SET_CURRENT_ITEM: 'SET_CURRENT_ITEM',
    SET_PICTURE: 'SET_PICTURE',
    SET_COMMENT: 'SET_COMMENT',
    DEL_PICTURE: 'DEL_PICTURE',
    SAVE_ITEM: 'SAVE_ITEM',
    SET_FILTERS_NEW: 'SET_FILTERS_NEW',
    SET_FILTERS_IN_WORK: 'SET_FILTERS_IN_WORK',
    SET_FILTERS_DONE: 'SET_FILTERS_DONE',
    SET_FILTERS_ARCHIVE: 'SET_FILTERS_ARCHIVE',
    SET_AUTH: 'SET_AUTH'
};

export const urls = {
    GET_PLACEMARKS_URL: 'http://3wi.sytes.net/map',
    SAVE_PLACEMARK_URL: 'http://3wi.sytes.net/save'
};

export const MAP_COORDINATES = [57.626578, 39.893858];
export const API_KEY = '10b6dcd2-f872-4994-99fe-598c020ae4dd';

export const colors = {
    'Новая': '#F44336',
    'В работе': '#FFB300',
    'Выполнена': '#07B060',
    'В архиве': '#8C98A6'
};

export const classes = {
    'Новая': 'list__item--new',
    'В работе': 'list__item--in-process',
    'Выполнена': 'list__item--welldone',
    'В Архиве': 'list__item--archive'
};

export const violationTypes = [
    'Стихийная свалка',
    'Замусоренная территория',
    'Невывезенные контейнеры'
];

export const filters = [
    'Все',
    'Новые',
    'В работе',
    'Выполненные',
    'Архив'
];