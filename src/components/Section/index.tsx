import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss.scss';

interface SectionProps {
    headerContent?: string;
}

export default class Section extends React.Component<SectionProps> {
    public render() {
        const b = block('section');
        const { headerContent } = this.props;

        return (
            <div className={'section'}>
                <div className={'section__title'}>
                    {{ headerContent }}
                </div>
                <div className={'section__content'}>
                    Это контент
                </div>
            </div>
        );
    }
}
