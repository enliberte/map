const methods = require('./constants').methods;
const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 3000,
    ssl: true
});

const getPlacemarks = async () => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM placemarks');
        return {results: (result) ? result.rows : null};
    } catch(err) {
        console.log(err);
        return err;
    }

};

const apiRouter = (method, payload) => {
    switch (method) {
        case methods.GET_PLACEMARK_DATA:
            return getPlacemarks();
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;