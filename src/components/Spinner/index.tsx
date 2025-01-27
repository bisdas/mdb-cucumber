import React, { type FunctionComponent, type ReactElement } from 'react';
import { OuterWrapper, SpinnerWrapper, LoadingTextWrapper } from './Spinner.styled';
import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg';

const Spinner: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <SpinnerWrapper>
                <SpinnerIcon height={23} width={23} />
            </SpinnerWrapper>
            <LoadingTextWrapper>Loading...</LoadingTextWrapper>
        </OuterWrapper>
    );
};

export default Spinner;
