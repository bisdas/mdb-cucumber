/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components/macro'
const backdropOpacityClosed = 0
const backdropOpacityOpen = 0.4
const openPostionBottom = '20%'
const closedPostionBottom = '-100%'
const animationTiming = '0.2s'
export const AnimationTimingMilliseconds = 200

const backdropFadeIn = keyframes`
    0%     {opacity: ${backdropOpacityClosed}}
    100%   {opacity: ${backdropOpacityOpen}}
`
const backdropFadeOut = keyframes`
    0%     {opacity: ${backdropOpacityOpen}}
    100%   {opacity: ${backdropOpacityClosed}}
`

const contentDriftIn = keyframes`
    0%     {bottom: ${closedPostionBottom}}
    100%   {bottom: ${openPostionBottom}}
`
const contentDriftOut = keyframes`
    0%     {bottom: ${openPostionBottom}}
    100%   {bottom: ${closedPostionBottom}}
`

export const OuterWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
`

interface IBackdrop {
    closing: boolean
}
export const Backdrop = styled.div<IBackdrop>`
    background: #000000;
    opacity: 0.4;
    height: 100%;
    position: relative;
    top: 0;
    animation: ${animationTiming} ${(props) => (props.closing ? backdropFadeOut : backdropFadeIn)} linear;
`

interface IContentWrapper {
    closing: boolean
}
export const ContentWrapper = styled.div<IContentWrapper>`
    justify-content: center;
    bottom: ${openPostionBottom};
    position: absolute;
    opacity: 1;
    animation: ${animationTiming} ${(props) => (props.closing ? contentDriftOut : contentDriftIn)} ease-out;

    background: transparent;
    padding: 30px;
`

export const Content = styled.div`
    background: #ffffff;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
`

export const ImageWrapper = styled.div`
    width: 100px;
    padding: 50%;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
`

export const Image = styled.img`
    border-radius: 6px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const Brand = styled.div`
    font-family: Montserrat-Bold, 'Helvetica Neue', Helvetica, 'sans-serif';
    color: rgb(0, 0, 0);
    font-size: 14px;
    margin-top: 10px;
    padding: 4px 10px;
    border-radius: 4px;
    display: inline-block;
    background: #f1f1f1;
`

export const TitleWrapper = styled.div`
    box-sizing: border-box;
    white-space: break-spaces;
    flex: 1;
    margin-top: 4px;
    margin-bottom: 16px;
    padding: 6px 10px;
    border-radius: 4px;
    display: inline-block;
    background: #f1f1f1;
`
export const TitleText = styled.span`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 12px;
    width: 100%;
    display: block;
}`

export const ActionContentLayout = styled.div`
    display: flex;
`

export const LeftAlignedContent = styled.div`
    flex: 1;
`

export const RightAlignedContent = styled.div`
    text-align: right;
`
