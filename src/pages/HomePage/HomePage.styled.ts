import styled, { keyframes } from 'styled-components/macro'

const fadeIn = keyframes`
    0%   {opacity: 0}
    100% {opacity: 1}
`

export const OuterWrapper = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    overflow: hidden;
`

export const SearchBoxWrapper = styled.div`
    padding: 6px 12px;
    animation: 1s ${fadeIn};
`

export const ProductSectionsWrapper = styled.div`
    padding: 6px 12px;
    animation: 1s ${fadeIn};
`

export const SearchTitle = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #2b2b2b;
    font-size: 14px;
    box-sizing: border-box;
    white-space: break-spaces;
`

export const SiteFooterWrapper = styled.div``

export const SiteMottoWrapper = styled.div`
    padding: 6px 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    animation: 2s ${fadeIn};
`
