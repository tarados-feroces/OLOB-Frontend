import * as React from 'react';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userActions from "../../redux/user/user.action";
import * as loginActions from "../../redux/login/login.action";
import {Redirect} from 'react-router';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


interface IProps {
    user?: any;
    loginForm?: any;
    history?: any;
    userActions?: any;
    loginActions?: any;
}

class Login extends React.Component<IProps, any> {

    constructor(props: any) {
        super(props);
        // this.goBack = this.goBack.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.changeLoginForm = this.changeLoginForm.bind(this);
    }

    public loginWithEnter(event: any): any {
        if (event.keyCode === 13 && event.type === 'keypress') {
            this.loginUser();
        }
    }
    
    public componentWillMount(): void {
        window.addEventListener('keypress', this.loginWithEnter);
    }
    
    public componentWillUnmount(): void {
        window.removeEventListener('keypress', this.loginWithEnter);
    }

    public async loginUser() {
        const { loginForm } = this.props;
        const { loginUser, getUser }: any = this.props.userActions;
        console.log('logining');

        await loginUser(loginForm);
        getUser();

    }

    public changeLoginForm(event): void {
        const input: any = event.target;
        const { setLoginForm }: any = this.props.loginActions;
        const updateLogin: any = {};
        updateLogin[input.dataset.dest] = input.value;
        setLoginForm(updateLogin);
    }

    public render(): JSX.Element {
        const { user } = this.props;


        // if (user.isAuthorized) {
        //     return (
        //         <Redirect to='/me/' />
        //     );
        // }
        return (
            <div className='login-form'>

                <style>{`
                      body > div,
                      body > div > div,
                      body > div > div > div.login-form {
                        height: 100%;
                      }
                    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png' /> Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.changeLoginForm}/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.changeLoginForm}
                                />

                                <Button color='teal' fluid size='large' onClick={this.loginUser}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

//     private goBack(): void {
//         const { history } = this.props;
//         history.push('/');
//     }
// }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loginForm: state.loginForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
