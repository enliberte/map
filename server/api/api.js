const methods = require('./constants').methods;
const {Pool} = require('pg');
const uuid4 = require('uuid4');

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
            pool.query('SELECT * FROM placemarks')
                .then(result => res.send(result.rows))
                .catch(err => res.status(404).send(err));
            break;
        // case methods.AUTH:
        //     const sql = {
        //         text: 'SELECT login, role FROM users WHERE login=$1 AND password=$2',
        //         values: [params.login, params.password]
        //     };
        //     pool.query(sql)
        //         .then(result => {
        //             if (result.rows) {
        //                 const sid = uuid4();
        //                 const data = {login: result.rows[0].login, role: result.rows[0].role};
        //                 const insertSidSQL = {
        //                     text: 'INSERT INTO sessions (sid, login, role) VALUES ($1, $2, $3)',
        //                     values: [sid, result.rows[0].login, result.rows[0].role]
        //                 };
        //                 pool.query(insertSidSQL)
        //                     .then(result => {
        //                         res.cookie('sid', sid);
        //                         res.send(data);
        //                     })
        //                     .catch(err => res.status(404).send(err));
        //
        //             } else {
        //                 throw new Error('incorrect login or password');
        //             }
        //         })
        //         .catch(err => res.status(404).send(err));
        case methods.IS_AUTHORIZED:
            const checkSidSQL = {
                text: 'SELECT login, role FROM sessions WHERE login=$1',
                values: [req.cookies.sid]
            };
            pool.query(checkSidSQL)
                .then(result => {
                    console.log('RESULT', result);
                    if (result.rows) {
                        const data = {login: result.rows[0].login, role: result.rows[0].role};
                        res.send(data);

                    } else {
                        res.send({isAuthorised: false});
                    }
                })
                .catch(err => res.status(404).send(err));
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;