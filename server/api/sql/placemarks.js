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


const updatePlacemark = (data) => {
    return {
        text: 'UPDATE placemarks SET address=$1, latitude=$2, longitude=$3, comment=$4, construction=$5, ' +
            'glass=$6, household=$7, metal=$8, other=$9, paper=$10, plastic=$11, violationtype=$12, ' +
            'state=$13, administration=$14, price=$15, level=$16 WHERE id=$17',
        values: [
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
            data.id
        ]
    };
};

const delPlacemark = (id) => {
    return {
        text: 'DELETE FROM placemarks WHERE sid=$1',
        values: [id]
    }
};

exports.getPlacemarks = getPlacemarks;
exports.insertPlacemark = insertPlacemark;
exports.updatePlacemark = updatePlacemark;
exports.delPlacemark = delPlacemark;