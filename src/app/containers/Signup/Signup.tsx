import * as React from 'react';

import transport from "../../modules/Transport/Transport";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userActions from "../../redux/user/user.action";
import * as signupActions from "../../redux/signup/signup.action";
import {Redirect} from 'react-router';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


interface IProps {
    user?: any;
    signupForm?: any;
    history?: any;
    userActions?: any;
    signupActions?: any;
}

class Signup extends React.Component<IProps, any> {

    constructor(props: any) {
        super(props);
        // this.goBack = this.goBack.bind(this);
        this.signupUser = this.signupUser.bind(this);
        this.changeSignupForm = this.changeSignupForm.bind(this);
    }

    public signupWithEnter(event: any): any {
        if (event.keyCode === 13 && event.type === 'keypress') {
            this.signupUser();
        }
    }
    
    public componentWillMount(): void {
        window.addEventListener('keypress', this.signupWithEnter);
    }
    
    public componentWillUnmount(): void {
        window.removeEventListener('keypress', this.signupWithEnter);
    }

    public async signupUser() {
        const { signupForm } = this.props;
        const { signupUser, getUser }: any = this.props.userActions;
        console.log('logining');

        await signupUser(signupForm);
        getUser();

    }

    public changeSignupForm(event): void {
        const input: any = event.target;
        const { setSignupForm }: any = this.props.signupActions;
        const updateSignup: any = {};
        updateSignup[input.dataset.dest] = input.value;
        setSignupForm(updateSignup);
    }

    public render(): JSX.Element {
        const { user } = this.props;


        // if (user.isAuthorized) {
        //     return (
        //         <Redirect to='/me/' />
        //     );
        // }
        return (
            <div>

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
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' onChange={this.changeSignupForm}/>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.changeSignupForm}/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.changeSignupForm}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Repeat Password'
                                    type='password'
                                    onChange={this.changeSignupForm}
                                />

                                <Button color='teal' fluid size='large' onClick={this.signupUser}>
                                    Sign Up
                                </Button>
                            </Segment>
                        </Form>
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
        signupForm: state.signupForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        loginActions: bindActionCreators(signupActions, dispatch)

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
