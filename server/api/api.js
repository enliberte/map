const methods = require('./constants').methods;
const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 5433,
    ssl: true
});

const getPlacemarks = async () => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT id, coordinates, state FROM placemarks');
        return {results: (result) ? result.rows : null};
    } catch(err) {
        console.log(err);
        return err;
    }
};

const getPlacemark = async (id) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM placemarks WHERE id = $1', [id]);
        return {results: (result) ? result.rows : null};
    } catch(err) {
        console.log(err);
        return err;
    }
};

const apiRouter = (method, payload) => {
    switch (method) {
        case methods.GET_PLACEMARKS_DATA:
            return getPlacemarks();
        case methods.GET_PLACEMARK_DATA:
            return getPlacemark(payload);
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;