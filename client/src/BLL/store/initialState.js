const initialState = {
    placemarks: [],
    auth: {
        isAuthorized: false,
        authError: false,
        role: ''
    },
    authPanel: {
        isDisplayed: false
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
    }
};

export default initialState;