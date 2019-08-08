export const actions = {
    IS_AUTHORIZED_SAGA: 'IS_AUTHORIZED_SAGA',
    LOGOUT_SAGA: 'LOGOUT_SAGA',
    AUTH_SAGA: 'AUTH_SAGA',
    REGISTER_SAGA: 'REGISTER_SAGA',
    SET_PLACEMARKS_SAGA: 'SET_PLACEMARKS_SAGA',
    SAVE_PLACEMARK_SAGA: 'SAVE_PLACEMARK_SAGA',
    UPDATE_PLACEMARK_SAGA: 'UPDATE_PLACEMARK_SAGA',
    DELETE_PLACEMARK_SAGA: 'DELETE_PLACEMARK_SAGA',
    ADD_PLACEMARK_SAGA: 'ADD_PLACEMARK_SAGA',
    SET_NEW_ADDRESS_SAGA: 'SET_NEW_ADDRESS_SAGA',
    EDIT_COORDINATES_SAGA: 'EDIT_COORDINATES_SAGA',
    SET_PLACEMARKS: 'SET_PLACEMARKS',
    ADD_PLACEMARK: 'ADD_PLACEMARK',
    CANCEL_PLACEMARK: 'CANCEL_PLACEMARK',
    SET_CURRENT_PLACEMARK: 'SET_CURRENT_PLACEMARK',
    SET_NEW_ADDRESS: 'SET_NEW_ADDRESS',
    SET_NEW_COORDINATES: 'SET_NEW_COORDINATES',
    ADD_PICTURES_TO_NEW_PLACEMARK: 'ADD_PICTURES_TO_NEW_PLACEMARK',
    DEL_PICTURE_FROM_NEW_PLACEMARK: 'DEL_PICTURE_FROM_NEW_PLACEMARK',
    EDIT_PLACEMARK: 'EDIT_PLACEMARK',
    EDIT_COORDINATES: 'EDIT_COORDINATES',
    SET_IN_WORK_PLACEMARK: 'SET_IN_WORK_PLACEMARK',
    SET_DONE_PLACEMARK: 'SET_DONE_PLACEMARK',
    SAVE_PLACEMARK: 'SAVE_PLACEMARK',
    UPDATE_PLACEMARK: 'UPDATE_PLACEMARK',
    DELETE_PLACEMARK: 'DELETE_PLACEMARK',
    SET_AUTH: 'SET_AUTH',
    SET_LOGIN: 'SET_LOGIN',
    SET_PASSWORD: 'SET_PASSWORD',
    LOGOUT: 'LOGOUT',
    OPEN_AUTH_PANEL: 'OPEN_AUTH_PANEL',
    CLOSE_AUTH_PANEL: 'CLOSE_AUTH_PANEL',
    SHOW_AUTH_ERROR: 'SHOW_AUTH_ERROR',
    OPEN_REG_PANEL: 'OPEN_REG_PANEL',
    CLOSE_REG_PANEL: 'CLOSE_REG_PANEL',
    SHOW_REG_ERROR: 'SHOW_REG_ERROR',
    OPEN_CREATE_ITEM_CARD: 'OPEN_CREATE_ITEM_CARD',
    CLOSE_CREATE_ITEM_CARD: 'CLOSE_CREATE_ITEM_CARD',
    OPEN_READ_ITEM_CARD: 'OPEN_READ_ITEM_CARD',
    CLOSE_READ_ITEM_CARD: 'CLOSE_READ_ITEM_CARD',
    OPEN_EDIT_ITEM_CARD: 'OPEN_EDIT_ITEM_CARD',
    CLOSE_EDIT_ITEM_CARD: 'CLOSE_EDIT_ITEM_CARD',
    OPEN_IN_WORK_ITEM_CARD: 'OPEN_IN_WORK_ITEM_CARD',
    CLOSE_IN_WORK_ITEM_CARD: 'CLOSE_IN_WORK_ITEM_CARD',
    OPEN_DONE_ITEM_CARD: 'OPEN_DONE_ITEM_CARD',
    CLOSE_DONE_ITEM_CARD: 'CLOSE_DONE_ITEM_CARD',
    SET_FILTERS_ARCHIVE: 'SET_FILTERS_ARCHIVE',
    SET_FILTERS_IN_WORK: 'SET_FILTERS_IN_WORK',
    SET_FILTERS_NEW: 'SET_FILTERS_NEW',
    SET_FILTERS_DONE: 'SET_FILTERS_DONE',
    SET_POSITION: 'SET_POSITION'
};

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