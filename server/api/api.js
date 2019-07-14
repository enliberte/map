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
        case methods.AUTH:
            const authData = {
                text: 'SELECT login, role FROM users WHERE login=$1 AND password=$2',
                values: [params.login, params.password]
            };
            pool.query(authData)
                .then(result => {
                    console.log('RESULT', result);
                    console.log('ROWS', result.rows);
                    if (result.rows) {
                        const sid = uuid4();
                        const data = {login: result.rows[0].login, role: result.rows[0].role};
                        const insertSidSQL = {
                            text: 'INSERT INTO sessions (sid, login, role) VALUES ($1, $2, $3)',
                            values: [sid, result.rows[0].login, result.rows[0].role]
                        };
                        pool.query(insertSidSQL)
                            .then(result => {
                                res.cookie('sid', sid);
                                res.send(data);
                            })
                            .catch(err => res.status(401).send(err));

                    } else {
                        res.status(401).send({isAuthorised: false});
                    }
                })
                .catch(err => res.status(404).send(err));
            break;
        case methods.IS_AUTHORIZED:
            if (req.cookies) {
                if (req.cookies.sid) {
                    const CHECK_SID_SQL = {
                        text: 'SELECT login, role FROM sessions WHERE sid=$1',
                        values: [req.cookies.sid]
                    };
                    pool.query(CHECK_SID_SQL)
                        .then(result => {
                            if (result.rows) {
                                const isAuthorizedData = {login: result.rows[0].login, role: result.rows[0].role};
                                res.send(isAuthorizedData);

                            } else {
                                res.status(404).send({isAuthorised: false});
                            }
                        })
                        .catch(err => res.status(404).send(err));
                } else {
                    res.status(401).send({isAuthorised: false});
                }
            } else {
                res.status(401).send({isAuthorised: false});
            }
            break;
        default:
            throw new Error('No such method');
    }
};

exports.apiRouter = apiRouter;