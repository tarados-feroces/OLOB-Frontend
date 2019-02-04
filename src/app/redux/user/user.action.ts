import * as HttpConstants from '../../constants/HttpConstants';
import transport from '../../modules/Transport/Transport';

import {
    SET_USER, LOGIN_USER, SIGNUP_USER
} from './user.constants';

export function setUser(user): any {
    return {
        type: SET_USER,
        payload: user
    };
}

export function getUser() {
    return async (dispatch) => {
        dispatch(setUser({'isAuthorized': null}));
        const response = await transport.doGet(HttpConstants.GET_USER);

        const json = await response.json();

        dispatch(
            setUser(
                response.ok ? ({...json, 'isAuthorized': true }) : { 'isAuthorized': false }
            )
        );
    };
}

export function loginUser(data) {
    return async (dispatch) => {
        const response = await transport.doPost(HttpConstants.LOGIN, data);
        const json = await response.json();
        response.ok ?
            dispatch(login({...json, 'isAuthorized': true })) :
            console.log('error');
    };
}

function login(data): any {
    return {
        type: LOGIN_USER,
        payload: data
    };
}

export function signupUser(data) {
    return async (dispatch) => {
        // data['avatar'] = '../static/imgs/user-logo.jpg';
        const response = await transport.doPost(HttpConstants.SIGNUP, data);
        const json = await response.json();
        response.ok ?
            dispatch(signup({...json, 'isAuthorized': true })) :
            console.log('error');
    }
}

function signup(data): any {
    return {
        type: SIGNUP_USER,
        payload: data
    };
}
