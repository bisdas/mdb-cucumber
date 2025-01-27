/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react';
import { OuterWrapper, Content } from './MoreProductsCard.styled';
import { ReactComponent as MoreItems } from '../../assets/icons/more-items.svg';

const MoreProductsCard: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <Content>
                <MoreItems height={100} width={100} />
            </Content>
        </OuterWrapper>
    );
};

export default MoreProductsCard;
