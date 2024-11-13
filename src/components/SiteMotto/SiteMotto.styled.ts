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
    text-align: center;
    display: inline-block;
    width: 100%;
`
export const Second = styled(Text)`
    font-family: 'Montserrat-Black', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 24px;
    text-align: center;
    display: inline-block;
    width: 100%;
`
export const Third = styled(Text)`
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    position: relative;
    font-size: 21px;
    text-align: center;
    display: inline-block;
    width: 100%;
`
export const Fourth = styled(Text)`
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    position: relative;
    font-size: 21px;
    text-align: center;
    display: inline-block;
    width: 100%;
`

export const Stylish = styled(Text)`
    font-family: 'Lobster-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #0078ff;
    position: relative;
    font-size: 24px;
    display: inline;
`

export const HowItWorks = styled.div`
    margin-top: 10px;
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    position: relative;
    font-size: 14px;
    text-decoration: underline;
    text-align: center;
    display: inline-block;
    width: 100%;
    text-underline-offset: 4px;
`
