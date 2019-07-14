const initialState = {
    placemarks: [],
    auth: {
        isAuthorized: false,
        login: '',
        password: '',
        role: ''
    },
    authPanel: {
        isDisplayed: false
    }
};

export default initialState;