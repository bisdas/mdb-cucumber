/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components/macro'
const backdropOpacityClosed = 0
const backdropOpacityOpen = 0.4
const openPostionTop = '30px'
const closedPostionTop = '-50%'

const backdropFadeIn = keyframes`
    0%   {opacity: ${backdropOpacityClosed}}
    100% {opacity: ${backdropOpacityOpen}}
`
const backdropFadeOut = keyframes`
    0% {opacity: ${backdropOpacityOpen}}
    100%   {opacity: ${backdropOpacityClosed}}
`

const contentDriftIn = keyframes`
    0%   {top: ${closedPostionTop}}
    100% {top: ${openPostionTop}}
`
const contentDriftOut = keyframes`
    0%      {top: ${openPostionTop}}
    100%   {top: ${closedPostionTop}}
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
    animation: 0.3s ${(props) => (props.closing ? backdropFadeOut : backdropFadeIn)} linear;
`

interface IContentWrapper {
    closing: boolean
}
export const ContentWrapper = styled.div<IContentWrapper>`
    width: 100%;
    display: flex;
    justify-content: center;
    top: 30px;
    position: absolute;
    opacity: 1;
    animation: 0.3s ${(props) => (props.closing ? contentDriftOut : contentDriftIn)} ease;
`

export const Content = styled.div`
    background: #ffffff;
    width: 70vw;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: 16px;
`

export const ImageWrapper = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgb(238 249 255) 0%,
        rgba(255, 255, 255, 0.03687412464985995) 1%,
        rgb(255 255 255) 100%
    );

    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #f2f2f2;
`

interface ImageContentProps {
    imageUrl: string
}
export const ImageContent = styled.div<ImageContentProps>`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 30px;
    color: #ededed;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
`

export const TitleWrapper = styled.div`
    padding: 6px 4px;
    width: 100px;
    box-sizing: border-box;
    white-space: break-spaces;
`
export const TitleText = styled.span`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 12px;
    width: 100%;
    display: block;
}`
