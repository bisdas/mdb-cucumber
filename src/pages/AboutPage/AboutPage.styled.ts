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
