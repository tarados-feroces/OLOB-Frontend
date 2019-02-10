import * as React from 'react';

import './MainPage.scss';
import Section from '../../components/Section/index';

export default class MainPage extends React.Component {
    public render(): JSX.Element {
        return (
            <Section
                title={'HEllo!'}
                content={'Это первый контент'}
            />
        );
    }
}
