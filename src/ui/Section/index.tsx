import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';
import Title from '../../ui/Title';

interface SectionProps {
    title?: string;
    titleSize?: 'small' | 'medium' | 'large';
}

const b = block('section');

export default class Section extends React.Component<SectionProps> {
    public render() {
        const { title, titleSize, children } = this.props;

        return (
            <div className={b()}>
                <div className={b('title')}>
                    <Title text={title || ''} size={titleSize} />
                </div>
                <div className={b('content')}>
                    {children}
                </div>
            </div>
        );
    }
}
