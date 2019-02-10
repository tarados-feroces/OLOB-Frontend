import * as React from 'react';

import './MainPage.scss';
import List from '../../ui/List';

export default class MainPage extends React.Component {
    public render(): JSX.Element {
        return (
            <List data={[ 'first', 'second', 'cool' ]} />
        );
    }
}
