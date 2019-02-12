import * as React from 'react';

import { block } from 'bem-cn';

import './index.scss';
import Section from '../../ui/Section';
import TextBlock from '../../ui/TextBlock';
import Button from '../../ui/Button';
import Title from '../../ui/Title';
import List from '../../ui/List';
import SlideShow from '../../components/SlideShow';

const b = block('main-page');

const textObject = {
    'Что это?':
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    'Что мы даем?': [ 'Lol', 'Kek', 'Cheburek' ],
    'Для кого наш продукт?' :
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
};

export default class MainPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className={b()}>
                <div className={b('header')}>
                    <Title text={'On-Line-On-Board'} size={'large'} />
                </div>
                <div className={b('section')}>
                    <div className={b('slideshow-container')}>
                        <SlideShow />
                    </div>
                </div>
            </div>
        );
    }
}
