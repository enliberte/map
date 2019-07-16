const uuid4 = require('uuid4');


export const auth = (pool, params, res) => {
    const AUTH_DATA_SQL = {
        text: 'SELECT login, role FROM users WHERE login=$1 AND password=$2',
        values: [params.login, params.password]
    };
    pool.query(AUTH_DATA_SQL)
        .then(result => {
            if (result.rows) {
                const sid = uuid4();
                const data = {login: result.rows[0].login, role: result.rows[0].role};
                const insertSidSQL = {
                    text: 'INSERT INTO sessions (sid, login, role) VALUES ($1, $2, $3)',
                    values: [sid, result.rows[0].login, result.rows[0].role]
                };
                pool.query(insertSidSQL)
                    .then(result => {
                        console.log(result);
                        res.cookie('sid', sid);
                        res.send(data);
                    })
                    .catch(err => res.status(401).send(err));

            } else {
                res.status(401).send({isAuthorised: false});
            }
        })
        .catch(err => res.status(404).send(err));
};


export const isAuthorized = (pool, req, res) => {
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
};