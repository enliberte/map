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
        violationType: 'Стихийная свалка',
        state: 'Новая',
        ...rawData
    };
};

exports.initializePlacemarkData = initializePlacemarkData;