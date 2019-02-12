import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';
import { Button, Image, Jumbotron } from 'react-bootstrap';

interface SectionProps {
    onClick?(): void;
    buttonText?: string;
    text?: string;
    title: string;
    imageSrc?: string;
}

const b = block('section');

export default class Section extends React.Component<SectionProps> {
    public render() {
        const { title, text, imageSrc, buttonText, onClick } = this.props;

        return (
            <div className={b()}>
                <div className={b('item')}>
                    {imageSrc && <Image src={imageSrc} style={{ width: '300px', height: '300px' }} />}
                </div>
                <div className={b('item')}>
                    <Jumbotron style={{ width: '300px', height: '300px', borderRadius: '0px' }}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        {buttonText && <Button variant="primary" onClick={onClick}>{buttonText}</Button>}
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

{/*<Section*/}
{/*title={'Hello World!'}*/}
{/*imageSrc={'./images/forest.jpg'}*/}
{/*text={textObject['Для кого наш продукт?']}*/}
{/*buttonText={'Buy me'}*/}
{/*/>*/}
