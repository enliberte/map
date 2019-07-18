const initialState = {
    placemarks: [],
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
    violationTypes: [
        'Стихийная свалка',
        'Замусоренная территория',
        'Невывезенные контейнеры'
    ],
    newPlacemark: {
        isDisplayed: false,
        coords: [],
        address: ''
    },
    filters: {
        'Новая': true,
        'В работе': true,
        'Завершенная': true,
        'В архиве': true
    },
    roles: [
        'Гражданин',
        'Оператор',
        'Агент'
    ]
};

export default initialState;