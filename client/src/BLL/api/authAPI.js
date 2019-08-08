import * as axios from 'axios';


export const fetchIsAuthorized = () => axios.post('/', {method: 'IS_AUTHORIZED'});

export const fetchLogout = () => axios.post('/', {method: 'LOGOUT'});

export const fetchAuth = (login, password) => axios.post('/', {method: 'AUTH', params: {login, password}});

export const fetchRegister = (login, password, role) => axios.post('/', {method: 'REGISTER', params: {login, password, role}});