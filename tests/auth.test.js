import {actions as a} from "../client/src/BLL/store/constants"
import {setLogoutData} from "../client/src/BLL/store/action_creators/auth";
import auth from "../client/src/BLL/store/reducers/auth";

const logoutAction = {type: a.LOGOUT};
const authAction = {
   type: a.SET_AUTH,
   payload: {
      authError: false,
      isAuthorized: false,
      login: 'alex',
      role: 'admin'
   }
};
const notAuthState = {
   authError: false,
   isAuthorized: false,
   login: '',
   role: ''
};
const authState = {
   authError: false,
   isAuthorized: true,
   login: 'alex',
   role: 'admin'
};

test('action creator: setLogoutData', () => {
   expect(setLogoutData()).toEqual(logoutAction);
});

test('reducer: auth', () => {
   expect(auth(notAuthState, authAction)).toEqual(authState);
});