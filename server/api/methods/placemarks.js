getPlacemarks = require('../sql/placemarks').getPlacemarks;
insertPlacemark = require('../sql/placemarks').insertPlacemark;
initializePlacemarkData = require('./helpers').initializePlacemarkData;


const getAllPlacemarks = (pool, res) => {
    pool.query('SELECT * FROM placemarks')
        .then(result => res.send(result.rows))
        .catch(err => res.status(404).send(err));
};


const savePlacemark = (pool, params, res) => {
    const data = initializePlacemarkData(params);
    pool.query(insertPlacemark(data))
        .then(result => {
            console.log(result);
            res.send(data);
        })
        .catch(err => res.status(401).send(err));

};


exports.getAllPlacemarks = getAllPlacemarks;
exports.savePlacemark = savePlacemark;