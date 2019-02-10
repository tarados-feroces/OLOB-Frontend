import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';

interface TitleProps {
    text?: string;
    size?: 'small' | 'medium' | 'large';
}

const b = block('ui-title');

export default class Title extends React.Component<TitleProps> {
    public render() {
        const { text, size } = this.props;

        return (
            <h1 className={b({ size })}>{text}</h1>
        );
    }
}
