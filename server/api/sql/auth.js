const uuid4 = require('uuid4');


const getUserFromUsers = (login, password) => {
    return {
        text: 'SELECT login, role FROM users WHERE login=$1 AND password=$2',
        values: [login, password]
    };
};

const getUserFromSessions = (sid) => {
    return {
        text: 'SELECT login, role FROM sessions WHERE sid=$1',
        values: [sid]
    };
};

const insertSession = (sid, login, role) => {
    return {
        text: 'INSERT INTO sessions (sid, login, role) VALUES ($1, $2, $3)',
        values: [sid, login, role]
    }
};


exports.getUserFromUsers = getUserFromUsers;
exports.getUserFromSessions = getUserFromSessions;
exports.insertSession = insertSession;