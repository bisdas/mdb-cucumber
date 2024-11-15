import styled, { keyframes } from 'styled-components/macro'

const fadeIn = keyframes`
    0%   {opacity: 0}
    100% {opacity: 1}
`

export const OuterWrapper = styled.div``

export const Content = styled.div`
    width: 100%;
    overflow: hidden;
`
export const PageHeader = styled.div`
    display: flex;
    flex: direction: row;
    border-bottom: 2px solid #dedede;
`

export const PageContent = styled.div`
    padding: 20px 12px;
    margin-bottom: 60px;
    animation: 0.4s ${fadeIn};
`

export const Avatar = styled.section``

export const Link = styled.a``

export const ParagraphText = styled.div`
    color: #000000;
    font-family: Montserrat-Light, 'Helvetica Neue', Helvetica, 'sans-serif';
    font-size: 14px;
    margin-bottom: 6px;
    line-height: 1.3;
`
export const ParagraphTitle = styled.div`
    color: #000000;
    font-family: Montserrat-Regular, 'Helvetica Neue', Helvetica, 'sans-serif';
    font-size: 18px;
    margin-bottom: 6px;
    margin-top: 20px;
`
export const GoBackWrapper = styled.div`
    padding: 6px 12px;
    display: flex;
    align-items: center;
    padding-top: 14px;
    user-select: none;
    cursor: pointer;
`

export const ButtonWrapper = styled.div`
    margin-top: 10px;
`
