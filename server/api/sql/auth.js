const uuid4 = require('uuid4');


const insertUser = (login, password, role) => {
    return {
        text: 'INSERT INTO users (login, password, role) VALUES ($1, $2, $3)',
        values: [login, password, role]
    }
};

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

const deleteSession = (sid) => {
    return {
        text: 'DELETE FROM sessions WHERE sid=$1',
        values: [sid]
    }
};


exports.getUserFromUsers = getUserFromUsers;
exports.getUserFromSessions = getUserFromSessions;
exports.insertSession = insertSession;
exports.deleteSession = deleteSession;
exports.insertUser = insertUser;