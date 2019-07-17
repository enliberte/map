const uuid4 = require('uuid4');


const getPlacemarks = () => {
    return 'SELECT * FROM placemarks';
};


const insertPlacemark = (data) => {
    const {
        id=uuid4(),
        address,
        coords,
        comment='',
        construction=false,
        glass=false,
        household=false,
        metal=false,
        other=false,
        paper=false,
        plastic=false,
        violationType='Стихийная свалка',
        state='Новая'
    } = {...data};
    const [latitude, longitude] = [...coords];
    return {
        text: 'INSERT INTO placemarks (id, address, latitude, longitude, comment, construction, ' +
                                      'glass, household, metal, other, paper, plastic, violationType, state) ' +
              'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
        values: [id, address, latitude, longitude, comment, construction, glass, household, metal, other, paper, plastic, violationType, state]
    };
};


exports.getPlacemarks = getPlacemarks;
exports.insertPlacemark = insertPlacemark;