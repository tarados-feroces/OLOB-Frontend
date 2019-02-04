import { SET_SIGNUP_FORM } from './signup.constants';

const initialState: any = {
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
};

export default function signupForm(state: any = initialState, action: any): any {
    switch (action.type) {
        case SET_SIGNUP_FORM:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}