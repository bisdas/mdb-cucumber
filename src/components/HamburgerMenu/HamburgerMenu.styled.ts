import styled, { keyframes } from 'styled-components/macro'
const backdropOpacityOpen = '0.7'
const backdropOpacityClosed = '0'
const menuPositionLeftOpen = '0%'
const menuPositionLeftClosed = '100%'

const fadeOpacityIn = keyframes`
    0%   {opacity: ${backdropOpacityClosed}}
    100% {opacity: ${backdropOpacityOpen}}
`
const fadeOpacityOut = keyframes`
    0%   {opacity: ${backdropOpacityOpen}}
    100% {opacity: ${backdropOpacityClosed}}
`
const slideLeftIn = keyframes`
    0% { left: ${menuPositionLeftClosed} }
    100% { left: ${menuPositionLeftOpen} }
`
const slideRightOut = keyframes`
    0% { left: ${menuPositionLeftOpen} }
    100% { left: ${menuPositionLeftClosed} }
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
`

interface IBackdrop {
    closing: boolean
}
export const Backdrop = styled.div<IBackdrop>`
    flex: 3;
    background: #000000;
    opacity: ${backdropOpacityOpen};
    animation-duration: ${(props) => (props.closing ? '0.3s' : '1.2s')};
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: ${(props) => (props.closing ? fadeOpacityOut : fadeOpacityIn)};
`

interface IMenuContent {
    closing: boolean
}
export const MenuContent = styled.div<IMenuContent>`
    flex: 7;
    background: #ffffff;
    opacity: 1;
    box-sizing: border-box;
    position: relative;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: ${(props) => (props.closing ? slideRightOut : slideLeftIn)};
`
