import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/containers/App/App';
import {Provider} from 'react-redux';
import configureStore from './app/store/store';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore({});

ReactDOM.render(
    (
        <Provider store = { store }>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
