const getPlacemarks = () => {
    return 'SELECT * FROM placemarks';
};


const insertPlacemark = (data) => {
    return {
        text: 'INSERT INTO placemarks (id, address, latitude, longitude, comment, construction, ' +
                                      'glass, household, metal, other, paper, plastic, violationtype, ' +
                                      'state, administration, price, level, author) ' +
              'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)',
        values: [
            data.id,
            data.address,
            data.latitude,
            data.longitude,
            data.comment,
            data.construction,
            data.glass,
            data.household,
            data.metal,
            data.other,
            data.paper,
            data.plastic,
            data.violationtype,
            data.state,
            data.administration,
            data.price,
            data.level,
            data.author
        ]
    };
};


exports.getPlacemarks = getPlacemarks;
exports.insertPlacemark = insertPlacemark;