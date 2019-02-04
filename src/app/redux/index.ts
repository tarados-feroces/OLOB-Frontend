import {combineReducers} from 'redux';
import user from './user/user.reducer';
import loginForm from './login/login.reducer';

export default combineReducers(
    {
        user,
        loginForm
    }
);
