import * as React from 'react';

import { block } from 'bem-cn';

import './index.scss';
import Section from '../../components/Section/index';
import TextBlock from '../../ui/TextBlock';
import Button from '../../ui/Button';
import Title from '../../ui/Title';

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
                <div className={b('section', { direction: 'row' })}>
                    <Button text={'Sign In'} onClick={() => { alert(1); }} />
                    <Button text={'Sign Up'} onClick={() => { alert(1); }} />
                </div>
                <div className={b('section')}>
                    <Section title={'Что это?'}>
                        <TextBlock text={textObject['Что это?']} />
                    </Section>
                </div>
                <div className={b('section')}>
                    <Section title={'Что мы даем?'}>
                        <TextBlock text={textObject['Что мы даем?'][0]} />
                    </Section>
                </div>
                <div className={b('section')}>
                    <Section title={'Для кого наш продукт?'}>
                        <TextBlock text={textObject['Для кого наш продукт?']} />
                    </Section>
                </div>
            </div>
        );
    }
}
