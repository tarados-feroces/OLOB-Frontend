import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';

interface SectionProps {
    title?: string;
    content?: string;
}

export default class Section extends React.Component<SectionProps> {
    public render() {
        const b = block('section');
        const { title, content } = this.props;

        return (
            <div className={b()}>
                <div className={b('title')}>
                    {title}
                </div>
                <div className={b('content')}>
                    {content}
                </div>
            </div>
        );
    }
}
