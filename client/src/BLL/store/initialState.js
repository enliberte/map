const initialState = {
    placemarks: [],
    map: {
        latitude: 57.626578,
        longitude: 39.893858
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
    roles: [
        'Гражданин',
        'Администрация',
        'Агент'
    ]
};

export default initialState;