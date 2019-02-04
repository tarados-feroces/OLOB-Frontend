import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/index';

export default function configureStore(initialState: any): any {
    const store: any = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}