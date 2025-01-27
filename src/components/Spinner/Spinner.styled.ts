import styled, { keyframes } from 'styled-components/macro';

export const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}`;

export const OuterWrapper = styled.div``;
export const SpinnerWrapper = styled.div`
    width: 23px;
    height: 23px;
    animation: ${rotation} 2s linear infinite;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    top: 7px;
`;
export const LoadingTextWrapper = styled.div`
    display: inline-block;
    font-size: 12px;
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    display: inline-block;
    margin-left: 4px;
`;
