const initialState = {
    placemarks: [],
    currentPlacemark: '',
    editedPlacemark: {},
    map: {
        latitude: 57.626578,
        longitude: 39.893858
    },
    auth: {
        isAuthorized: false,
        authError: false,
        login: '',
        role: ''
    },
    authPanel: {
        isDisplayed: false
    },
    regPanel: {
        isDisplayed: false,
        regError: false
    },
    createItemCard: {
        isDisplayed: false
    },
    readItemCard: {
        isDisplayed: false
    },
    editItemCard: {
        isDisplayed: false
    },
    inWorkItemCard: {
        isDisplayed: false
    },
    doneItemCard: {
        isDisplayed: false
    },
    violationTypes: [
        'Стихийная свалка',
        'Замусоренная территория',
        'Невывезенные контейнеры'
    ],
    levels: [
        1,
        2,
        3,
        4,
        5
    ],
    newPlacemark: {
        isDisplayed: false,
        coords: [],
        address: '',
        pictures: []
    },
    filters: {
        'Новая': true,
        'В работе': true,
        'Выполнена': true,
        'В архиве': true
    },
    roles: [
        'Гражданин',
        'Администрация',
        'Агент'
    ]
};

export default initialState;