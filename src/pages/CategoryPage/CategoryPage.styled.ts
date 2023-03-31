import styled from 'styled-components/macro'

export const OuterWrapper = styled.div``

export const Content = styled.div`
    width: 100%;
    overflow: hidden;
`
export const PageHeader = styled.div`
    display: flex;
    flex: direction: row;
    border-bottom: 2px solid #dedede;
    padding-top: 10px;
    padding-bottom: 6px;
`

export const PageContent = styled.div`
    padding: 20px 12px;
    margin-bottom: 60px;
`

export const LoaderWrapper = styled.div`
    padding: 6px 12px;
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #2b2b2b;
    font-size: 14px;
    padding-left: 15px;
    margin-top: 10px;
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

export const SearchBoxWrapper = styled.div`
    padding: 6px 12px;
    flex: 1;
    padding-left: 0;
`
export const GoBackWrapper = styled.div`
    padding: 6px 12px;
    display: flex;
    align-items: center;
    padding-top: 8px;
    user-select: none;
    cursor: pointer;
`

export const CategoryTitle = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 16px;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
    display: flex;
    align-items: center;
`

export const ProductGridWrapper = styled.div``

export const Grid = styled.div``

export const Column = styled.div``

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductCardWrapper = styled.div`
    display: inline-block;
`
