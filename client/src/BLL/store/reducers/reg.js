import {actions as a} from "../constants";

const reg = (state={}, action) => {
    switch (action.type) {
        case a.SHOW_REG_ERROR:
            return {
                ...state,
                regError: true
            };
        default:
            return state;
    }
};

export default reg;