import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';

interface ButtonProps {
    onClick(): void;
    text: string;
    size?: string;
}

const b = block('ui-button');

export default class Button extends React.Component<ButtonProps> {
    public render() {
        const { text, size, onClick } = this.props;

        return (
            <div className={b({ size })} onClick={onClick}>
                <p className={b('text')}>{text}</p>
            </div>
        );
    }
}
