const uuid4 = require('uuid4');
getUserFromUsers = require('../sql/auth').getUserFromUsers;
insertSession = require('../sql/auth').insertSession;
insertUser = require('../sql/auth').insertUser;
getUserFromSessions = require('../sql/auth').getUserFromSessions;
deleteSession = require('../sql/auth').deleteSession;
initializeRegData = require('./helpers').initializeRegData;


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

const register = (pool, params, res) => {
    pool.query(getUserFromUsers(params.login, params.password))
        .then(result => {
            if (result.rows) {
                res.status(401).send({error: 'User exists'});
            } else {
                const data = initializeRegData(params);
                pool.query(insertUser(data.login, data.password, data.role))
                    .then(result => {
                        const sid = uuid4();
                        pool.query(insertSession(sid, data.login, data.role))
                            .then(result => {
                                console.log(result);
                                res.cookie('sid', sid);
                                res.send(data);
                            })
                            .catch(err => res.status(401).send(err));
                    })
                    .catch(err => res.status(401).send(err));
            }
        })
        .catch(err => res.status(404).send(err));
};

const logout = (pool, req, res) => {
    if (req.cookies) {
        if (req.cookies.sid) {
            pool.query(getUserFromSessions(req.cookies.sid))
                .then(result => {
                    if (result.rows) {
                        pool.query(deleteSession(req.cookies.sid))
                            .then(result => {
                                res.clearCookie('sid');
                                res.send({isAuthorised: false});
                            })
                            .catch(err => res.status(401).send(err));
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
exports.register = register;
exports.isAuthorized = isAuthorized;
exports.logout = logout;