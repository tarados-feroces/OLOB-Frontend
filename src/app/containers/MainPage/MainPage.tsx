import * as React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility
} from 'semantic-ui-react';

import './MainPage.scss';

import {Redirect, Route} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

interface IProps {
    user?: any;
    history?: any;
    userActions?: any;
}

class MainPage extends React.Component<IProps, any> {

    constructor(props: any) {
        super(props);
        this.goLogin = this.goLogin.bind(this);
        this.goSignup = this.goSignup.bind(this);
    }

    public render(): JSX.Element {

        const HomepageHeading = () => (
            <Container text>
                <Header
                    as='h1'
                    content='Imagine-a-Company'
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop:  '3em'
                    }}
                />
                <Header
                    as='h2'
                    content='Do whatever you want when you want to.'
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em'
                    }}
                />
                <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
            </Container>
        );

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={null}
                            inverted={true}
                            pointing={true}
                            secondary={true}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={true} onClick={this.goLogin}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={true} style={{ marginLeft: '0.5em' }} onClick={this.goSignup}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

            </Responsive>

        );
    }

    private goLogin() {
        const { history } = this.props;
        history.push('/login');
    }

    private goSignup() {
        const { history } = this.props;
        history.push('/signup');
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);