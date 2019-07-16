const getAllPlacemarks = (pool, res) => {
    pool.query('SELECT * FROM placemarks')
        .then(result => res.send(result.rows))
        .catch(err => res.status(404).send(err));
};


exports.getAllPlacemarks = getAllPlacemarks;