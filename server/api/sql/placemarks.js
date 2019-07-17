const getPlacemarks = () => {
    return 'SELECT * FROM placemarks';
};


const insertPlacemark = (data) => {
    return {
        text: 'INSERT INTO placemarks (id, address, latitude, longitude, comment, construction, ' +
                                      'glass, household, metal, other, paper, plastic, violationType, state) ' +
              'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
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
            data.violationType,
            data.state
        ]
    };
};


exports.getPlacemarks = getPlacemarks;
exports.insertPlacemark = insertPlacemark;