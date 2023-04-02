import styled, { keyframes } from 'styled-components/macro'

const fadeIn = keyframes`
    0%   {opacity: 0}
    100% {opacity: 1}
`

export const OuterWrapper = styled.div``
export const Trigger = styled.div`
    user-select: none;
    position: relative;
    top: -6px;
`
export const MenuContentWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    animation: 0.3s ${fadeIn};
`

export const Backdrop = styled.div`
    flex: 3;
    background: #000000;
    opacity: 0.5;
`

export const MenuContent = styled.div`
    flex: 7;
    background: #ffffff;
    opacity: 1;
`
