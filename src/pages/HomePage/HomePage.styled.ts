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
    padding: 28px 18px;
    animation: 0.4s ${fadeIn};
`

export const ProductSectionsWrapper = styled.div`
    padding: 6px 18px;
    animation: 0.4s ${fadeIn};
`

export const GoToTopWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 10px 0;
`

export const GoToTopButton = styled.div`
    text-align: center;
    padding: 6px 10px;
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 12px;
    box-sizing: border-box;
`
export const GoToTopIconWrapper = styled.div`
    text-align: center;
`

export const SearchTitle = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #0b9d58;
    font-size: 14px;
    box-sizing: border-box;
    white-space: break-spaces;
    text-align: center;
`

export const SiteFooterWrapper = styled.div``

export const SiteMottoWrapper = styled.div`
    padding: 28px 18px;
    animation: 0.4s ${fadeIn};
    background: #f9f9f9;
`
