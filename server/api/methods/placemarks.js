const uuid4 = require('uuid4');


const getAllPlacemarks = (pool, res) => {
    pool.query('SELECT * FROM placemarks')
        .then(result => res.send(result.rows))
        .catch(err => res.status(404).send(err));
};


const savePlacemark = (pool, params, res) => {
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
        violationType='Стихийная свалка'
    } = {...params};
    const [latitude, longitude] = [...coords];
    const data = {id, address, latitude, longitude, comment, construction, glass, household, metal, other, paper, plastic, violationType};
    const SAVE_PLACEMARK_SQL = {
        text: 'INSERT INTO placemarks (id, address, latitude, longitude, comment, construction, ' +
                                      'glass, household, metal, other, paper, plastic, violationType) ' +
              'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
        values: [id, address, coords, comment, construction, glass, household, metal, other, paper, plastic, violationType]
    };
    pool.query(SAVE_PLACEMARK_SQL)
        .then(result => {
            console.log(result);
            res.send(data);
        })
        .catch(err => res.status(401).send(err));

};


exports.getAllPlacemarks = getAllPlacemarks;
exports.savePlacemark = savePlacemark;