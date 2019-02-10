import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';

interface SectionProps {
    title?: string;
}

export default class Section extends React.Component<SectionProps> {
    public render() {
        const b = block('section');
        const { title, children } = this.props;

        return (
            <div className={b()}>
                <div className={b('title')}>
                    {title}
                </div>
                <div className={b('content')}>
                    {children}
                </div>
            </div>
        );
    }
}
