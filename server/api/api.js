import {auth, isAuthorized} from "./methods/auth";
import {getAllPlacemarks} from "./methods/placemarks";
const methods = require('./constants').methods;
const {Pool} = require('pg');

const pool = new Pool({
    // host: 'localhost',
    // port: '5432',
    // database: 'app',
    // user: 'postgres',
    // password: 'postgres',
    connectionString: process.env.DATABASE_URL || 5432,
    ssl: true
});

const apiRouter = (req, res) => {
    const method = req.body.method;
    const params = req.body.params;
    switch (method) {
        case methods.GET_PLACEMARKS_DATA:
            getAllPlacemarks(pool, res);
            break;
        case methods.AUTH:
            auth(pool, params, res);
            break;
        case methods.IS_AUTHORIZED:
            isAuthorized(pool, req, res);
            break;
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;