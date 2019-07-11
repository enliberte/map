const methods = require('./constants').methods;
const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'app',
    user: 'postgres',
    password: 'postgres',
    // connectionString: process.env.DATABASE_URL || 5433,
    // ssl: true
});

const apiRouter = (method, payload) => {
    switch (method) {
        case methods.GET_PLACEMARKS_DATA:
            return pool.query('SELECT * FROM placemarks');
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;