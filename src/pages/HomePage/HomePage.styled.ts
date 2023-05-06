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
    color: #0b9d58;
    font-size: 16px;
    box-sizing: border-box;
    white-space: break-spaces;
    text-align: center;
`

export const SiteFooterWrapper = styled.div``

export const SiteMottoWrapper = styled.div`
    padding: 6px 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    animation: 2s ${fadeIn};
    background: rgb(255, 240, 215);
    background: linear-gradient(
        90deg,
        rgba(255, 240, 215, 1) 0%,
        rgba(190, 237, 255, 1) 35%,
        rgba(243, 253, 255, 1) 100%
    );
    margin-bottom: 20px;
`
