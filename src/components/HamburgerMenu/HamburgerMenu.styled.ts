import styled, { keyframes } from 'styled-components/macro';
const backdropOpacityOpen = '0.7';
const backdropOpacityClosed = '0';
const menuPositionRightOpen = '0';
const menuPositionRightClosed = '-100vw';

const fadeOpacityIn = keyframes`
    0%   {opacity: ${backdropOpacityClosed}}
    100% {opacity: ${backdropOpacityOpen}}
`;
const fadeOpacityOut = keyframes`
    0%   {opacity: ${backdropOpacityOpen}}
    100% {opacity: ${backdropOpacityClosed}}
`;
const slideLeftIn = keyframes`
    0% { right: ${menuPositionRightClosed} }
    100% { right: ${menuPositionRightOpen} }
`;
const slideRightOut = keyframes`
    0% { right: ${menuPositionRightOpen} }
    100% { right: ${menuPositionRightClosed} }
`;

export const OuterWrapper = styled.div``;
export const Trigger = styled.div`
    user-select: none;
    position: relative;
    top: -6px;
`;

export const MenuMainWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
`;

interface IBackdrop {
    closing: boolean;
}
export const Backdrop = styled.div<IBackdrop>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: ${backdropOpacityOpen};
    animation-duration: ${(props) => (props.closing ? '0.3s' : '0.4s')};
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: ${(props) => (props.closing ? fadeOpacityOut : fadeOpacityIn)};
`;

interface IMenuContent {
    closing: boolean;
}
export const MenuContent = styled.div<IMenuContent>`
    position: absolute;
    right: 0;
    width: 70vw;
    height: 100vh;
    background: #ffffff;
    opacity: 1;
    border-left: 4px solid #ffffff;
    box-sizing: border-box;
    box-sizing: border-box;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: ${(props) => (props.closing ? slideRightOut : slideLeftIn)};
`;
