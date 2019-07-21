const auth = require("./methods/auth").auth;
const logout = require("./methods/auth").logout;
const register = require("./methods/auth").register;
const isAuthorized = require("./methods/auth").isAuthorized;
const getAllPlacemarks = require("./methods/placemarks").getAllPlacemarks;
const savePlacemark = require("./methods/placemarks").savePlacemark;
const updateEditedPlacemark = require("./methods/placemarks").updateEditedPlacemark;
const deletePlacemark = require("./methods/placemarks").deletePlacemark;
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
        case methods.SAVE_PLACEMARK:
            savePlacemark(pool, params, res);
            break;
        case methods.UPDATE_PLACEMARK:
            updateEditedPlacemark(pool, params, res);
            break;
        case methods.DELETE_PLACEMARK:
            deletePlacemark(pool, params, res);
            break;
        case methods.AUTH:
            auth(pool, params, res);
            break;
        case methods.LOGOUT:
            logout(pool, req, res);
            break;
        case methods.REGISTER:
            register(pool, params, res);
            break;
        case methods.IS_AUTHORIZED:
            isAuthorized(pool, req, res);
            break;
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;