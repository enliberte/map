const uuid4 = require('uuid4');
getUserFromUsers = require('../sql/auth').getUserFromUsers;
insertSession = require('../sql/auth').insertSession;
getUserFromSessions = require('../sql/auth').getUserFromSessions;


const auth = (pool, params, res) => {
    pool.query(getUserFromUsers(params.login, params.password))
        .then(result => {
            if (result.rows) {
                const sid = uuid4();
                const data = {login: result.rows[0].login, role: result.rows[0].role};
                pool.query(insertSession(sid, result.rows[0].login, result.rows[0].role))
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
        .catch(err => res.status(401).send({isAuthorised: false}));
};


const isAuthorized = (pool, req, res) => {
    if (req.cookies) {
        if (req.cookies.sid) {
            pool.query(getUserFromSessions(req.cookies.sid))
                .then(result => {
                    if (result.rows) {
                        const isAuthorizedData = {login: result.rows[0].login, role: result.rows[0].role};
                        res.send(isAuthorizedData);

                    } else {
                        res.status(401).send({isAuthorised: false});
                    }
                })
                .catch(err => res.status(401).send(err));
        } else {
            res.status(401).send({isAuthorised: false});
        }
    } else {
        res.status(401).send({isAuthorised: false});
    }
};


exports.auth = auth;
exports.isAuthorized = isAuthorized;