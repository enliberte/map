getPlacemarks = require('../sql/placemarks').getPlacemarks;
insertPlacemark = require('../sql/placemarks').insertPlacemark;
updatePlacemark = require('../sql/placemarks').updatePlacemark;
delPlacemark = require('../sql/placemarks').delPlacemark;
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


const updateEditedPlacemark = (pool, params, res) => {
    pool.query(updatePlacemark(params))
        .then(result => {
            console.log(result);
            res.send(params);
        })
        .catch(err => res.status(401).send(err));

};


const deletePlacemark = (pool, params, res) => {
    pool.query(delPlacemark(params.id))
        .then(result => {
            console.log(result);
            res.send({id: params.id});
        })
        .catch(err => res.status(401).send(err));

};


exports.getAllPlacemarks = getAllPlacemarks;
exports.savePlacemark = savePlacemark;
exports.updateEditedPlacemark = updateEditedPlacemark;
exports.deletePlacemark = deletePlacemark;