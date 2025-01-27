import React, { type FunctionComponent, type ReactElement } from 'react';
import { OuterWrapper, ImageWrapper } from './InvisibleCard.styled';

const InvisibleCard: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <ImageWrapper></ImageWrapper>
        </OuterWrapper>
    );
};

export default InvisibleCard;
