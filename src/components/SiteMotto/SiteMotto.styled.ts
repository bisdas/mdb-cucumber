import styled from 'styled-components/macro'

export const OuterWrapper = styled.div``

const Text = styled.span`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    box-shadow: 2px 2px 2px 0px rgb(0 0 0 / 50%);
    padding: 3px 16px;
    display: block;
    width: fit-content;
    font-size: 11px;
    border-radius: 2px;
`
export const First = styled(Text)`
    color: #ffffff;
    background: #000000;
    padding-bottom: 6px;
    border-top-right-radius: 15px;
`
export const Second = styled(Text)`
    color: #000000;
    background: #ffba48;
    position: relative;
    top: -2px;
    left: 6px;
    border-bottom-right-radius: 15px;
`
