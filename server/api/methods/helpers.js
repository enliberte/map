const uuid4 = require('uuid4');


const initializePlacemarkData = (rawData) => {
    return {
        id: uuid4(),
        latitude: rawData.coords[0],
        longitude: rawData.coords[1],
        comment: '',
        construction: false,
        glass: false,
        household: false,
        metal: false,
        other: false,
        paper: false,
        plastic: false,
        violationtype: 'Стихийная свалка',
        state: 'Новая',
        administration: '',
        price: 0,
        level: 5,
        volume: 0,
        square: 0,
        ...rawData
    };
};


const initializeRegData = (rawData) => {
    return {
        role: 'Гражданин',
        ...rawData
    };
};


exports.initializePlacemarkData = initializePlacemarkData;
exports.initializeRegData = initializeRegData;