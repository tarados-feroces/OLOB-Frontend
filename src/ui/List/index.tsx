import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';

interface ListProps {
    data?: string[];
}

const b = block('ui-list');

export default class List extends React.Component<ListProps> {
    public render() {
        const { data } = this.props;

        return (
            <ul className={b()}>
                {data.map((item, key) =>
                    <li key={key} className={b('item')}>{item}</li>
                )}
            </ul>
        );
    }
}
