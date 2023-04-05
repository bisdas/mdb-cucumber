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
    animation: 1s ${fadeIn};
`

export const SearchBoxWrapper = styled.div`
    padding: 6px 12px;
    flex: 1;
    padding-left: 0;
`
export const GoBackWrapper = styled.div`
    padding: 6px 12px;
    display: flex;
    align-items: center;
    padding-top: 14px;
    user-select: none;
    cursor: pointer;
`
export const LoaderWrapper = styled.div`
    padding: 6px 12px;
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #2b2b2b;
    font-size: 14px;
`

export const Description = styled.div``

export const DescriptionFirstLine = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 26px;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
`

export const DescriptionSecondLine = styled.div`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 16px;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
`
export const ProductGridWrapper = styled.div`
    margin-top: 30px;
`
