export const actions = {
    SET_PLACEMARKS: 'SET_PLACEMARKS',
    ADD_PLACEMARK: 'ADD_PLACEMARK',
    CANCEL_PLACEMARK: 'CANCEL_PLACEMARK',
    SET_NEW_ADDRESS: 'SET_NEW_ADDRESS',
    SET_NEW_COORDINATES: 'SET_NEW_COORDINATES',
    SAVE_PLACEMARK: 'SAVE_PLACEMARK',
    SET_AUTH: 'SET_AUTH',
    SET_LOGIN: 'SET_LOGIN',
    SET_PASSWORD: 'SET_PASSWORD',
    OPEN_AUTH_PANEL: 'OPEN_AUTH_PANEL',
    CLOSE_AUTH_PANEL: 'CLOSE_AUTH_PANEL',
    OPEN_CREATE_ITEM_CARD: 'OPEN_CREATE_ITEM_CARD',
    CLOSE_CREATE_ITEM_CARD: 'CLOSE_CREATE_ITEM_CARD',
    SET_FILTERS_ARCHIVE: 'SET_FILTERS_ARCHIVE',
    SET_FILTERS_IN_WORK: 'SET_FILTERS_IN_WORK',
    SET_FILTERS_NEW: 'SET_FILTERS_NEW',
    SET_FILTERS_DONE: 'SET_FILTERS_DONE'
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