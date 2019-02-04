import * as React from 'react';
import {connect, Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import {bindActionCreators} from 'redux';
import * as PathConstants from '../../constants/PathsConstants';

// import '../../../static/css/main.scss';
import MainPage from '../MainPage/MainPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const history = createBrowserHistory();

class App extends React.Component<any, any> {

    // public componentWillMount(): void {
    //     const { getUser } = this.props.userActions;
    //     getUser();
    // }

    public render(): JSX.Element {
        return (
            <Router history={ history }>
                <Switch>
                    <Route exact path={ PathConstants.MAINPAGE } component={ MainPage } />
                    <Route exact path={ PathConstants.LOGIN } component={ Login } />
                    <Route exact path={ PathConstants.SIGNUP } component={ Signup } />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
