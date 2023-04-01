import styled from 'styled-components/macro'

export const OuterWrapper = styled.div``

const Text = styled.span`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    display: block;
    width: fit-content;
    font-size: 11px;
`
export const First = styled(Text)`
    font-family: 'Montserrat-Black', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 24px;
`
export const Second = styled(Text)`
    font-family: 'Montserrat-Black', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 24px;
`
export const Third = styled(Text)`
    color: #000000;
    position: relative;
    font-size: 18px;
`
export const Fourth = styled(Text)`
    color: #000000;
    position: relative;
    font-size: 18px;
`
export const Stylish = styled(Text)`
    color: #bd00ff;
    position: relative;
    font-size: 28px;
    // font-style: italic;
    display: inline;
`
