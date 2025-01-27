import React, { type FunctionComponent, type ReactElement } from 'react';
import { OuterWrapper, Background, Text } from './Banner.styled';

interface IBannerProps {
    text: string;
}

const Banner: FunctionComponent<IBannerProps> = ({ text }): ReactElement => {
    return (
        <OuterWrapper>
            <Background>
                <Text>{text}</Text>
            </Background>
        </OuterWrapper>
    );
};

export default Banner;
