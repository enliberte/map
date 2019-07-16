const initialState = {
    placemarks: [],
    auth: {
        isAuthorized: false,
        login: '',
        password: '',
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
    }
};

export default initialState;