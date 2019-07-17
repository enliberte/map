getPlacemarks = require('../sql/placemarks').getPlacemarks;
insertPlacemark = require('../sql/placemarks').insertPlacemark;

const getAllPlacemarks = (pool, res) => {
    pool.query('SELECT * FROM placemarks')
        .then(result => res.send(result.rows))
        .catch(err => res.status(404).send(err));
};


const savePlacemark = (pool, params, res) => {
    pool.query(insertPlacemark(params))
        .then(result => {
            console.log(result);
            params.latitude = coords[0];
            params.longitude = coords[1];
            params.state = 'Новая';
            res.send(params);
        })
        .catch(err => res.status(401).send(err));

};


exports.getAllPlacemarks = getAllPlacemarks;
exports.savePlacemark = savePlacemark;